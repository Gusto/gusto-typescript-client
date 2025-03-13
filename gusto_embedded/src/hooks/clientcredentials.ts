// Code originally generated by Speakeasy (https://www.speakeasyapi.dev).

import * as z from "zod";
import { stringToBase64 } from "../lib/base64.js";
import { HTTPClient } from "../lib/http.js";
import { parse } from "../lib/schemas.js";
import { PostV1PartnerManagedCompaniesSecurity$outboundSchema } from "../models/operations/postv1partnermanagedcompanies.js";
import {
  AfterErrorContext,
  AfterErrorHook,
  BeforeRequestContext,
  BeforeRequestHook,
  SDKInitHook,
  SDKInitOptions,
} from "./types.js";

type Credentials = {
  clientID: string;
  clientSecret: string;
};

type Session = {
  credentials: Credentials;
  token: string;
  expiresAt?: number;
  scopes: string[];
};

export class ClientCredentialsHook
  implements SDKInitHook, BeforeRequestHook, AfterErrorHook
{
  private baseURL?: URL | null;
  private client?: HTTPClient;
  private sessions: Record<string, Session> = {};

  sdkInit(opts: SDKInitOptions): SDKInitOptions {
    this.baseURL = opts.baseURL;
    this.client = opts.client;

    return opts;
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request
  ): Promise<Request> {
    const credentials = await this.getCredentials(hookCtx.securitySource);
    if (!credentials) {
      return request;
    }

    const sessionKey = this.getSessionKey(credentials);

    let session = this.sessions[sessionKey];
    if (
      !session ||
      !this.hasRequiredScopes(session.scopes, hookCtx.oAuth2Scopes || []) ||
      this.hasTokenExpired(session.expiresAt)
    ) {
      session = await this.doTokenRequest(
        credentials,
        this.getScopes(hookCtx.oAuth2Scopes || [], session)
      );

      this.sessions[sessionKey] = session;
    }

    request.headers.set("Authorization", `Bearer ${session.token}`);

    return request;
  }

  async afterError(
    hookCtx: AfterErrorContext,
    response: Response | null,
    error: unknown
  ): Promise<{ response: Response | null; error: unknown }> {
    // TODO I wonder if this only works if we don't define a 401 error on each
    // request
    if (error) {
      return { response, error };
    }

    const credentials = await this.getCredentials(hookCtx.securitySource);
    if (!credentials) {
      return { response, error };
    }

    if (response && response?.status === 401) {
      const sessionKey = this.getSessionKey(credentials);
      delete this.sessions[sessionKey];
    }

    return { response, error };
  }

  private async doTokenRequest(
    credentials: Credentials,
    scopes: string[]
  ): Promise<Session> {
    const formData = new URLSearchParams();
    formData.append("grant_type", "system_access");
    formData.append("client_id", credentials.clientID);
    formData.append("client_secret", credentials.clientSecret);

    if (scopes.length > 0) {
      formData.append("scope", scopes.join(" "));
    }

    const tokenURL = `${this.baseURL}/oauth/token`;

    const request = new Request(tokenURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const res = await this.client?.request(request);
    if (!res) {
      throw new Error("Failed to fetch token");
    }

    if (res.status < 200 || res.status >= 300) {
      throw new Error("Unexpected status code");
    }

    const data = await res.json();
    if (!data || typeof data !== "object") {
      throw new Error("Unexpected response format");
    }

    if (data.token_type !== "Bearer") {
      throw new Error("Unexpected token type");
    }

    let expiresAt: number | undefined;
    if (data.expires_in) {
      expiresAt = Date.now() + data.expires_in * 1000;
    }

    const sess: Session = {
      credentials,
      token: data.access_token,
      scopes,
    };

    if (expiresAt !== undefined) {
      sess.expiresAt = expiresAt;
    }

    return sess;
  }

  private async getCredentials(
    source?: unknown | (() => Promise<unknown>)
  ): Promise<Credentials | null> {
    if (!source) {
      return null;
    }

    let security = source;
    if (typeof source === "function") {
      security = await source();
    }

    // The client was passed a raw access token, no need to fetch one.
    if (typeof security === "string") {
      return null;
    }

    const out = parse(
      security,
      (val) =>
        z
          .lazy(() => PostV1PartnerManagedCompaniesSecurity$outboundSchema)
          .parse(val),
      "unexpected security type"
    );

    return {
      clientID: out.clientId ?? "",
      clientSecret: out.clientSecret ?? "",
    };
  }

  private getSessionKey(credentials: Credentials): string {
    const key = `${credentials.clientID}:${credentials.clientSecret}`;
    return stringToBase64(key);
  }

  private hasRequiredScopes(
    scopes: string[],
    requiredScopes: string[]
  ): boolean {
    return requiredScopes.every((scope) => scopes.includes(scope));
  }

  private getScopes(requiredScopes: string[], sess?: Session): string[] {
    return [...new Set((sess?.scopes ?? []).concat(requiredScopes))];
  }

  private hasTokenExpired(expiresAt?: number): boolean {
    return !expiresAt || Date.now() + 60000 > expiresAt;
  }
}
