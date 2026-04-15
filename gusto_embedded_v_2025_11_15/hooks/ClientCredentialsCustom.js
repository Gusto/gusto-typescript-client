"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCredentialsHook = void 0;
const z = __importStar(require("zod"));
const base64_js_1 = require("../lib/base64.js");
const env_js_1 = require("../lib/env.js");
const schemas_js_1 = require("../lib/schemas.js");
const components = __importStar(require("../models/components/index.js"));
class ClientCredentialsHook {
    constructor() {
        this.sessions = {};
    }
    sdkInit(opts) {
        this.baseURL = opts.baseURL;
        this.client = opts.client;
        return opts;
    }
    async beforeRequest(hookCtx, request) {
        if (!hookCtx.oAuth2Scopes) {
            // OAuth2 not in use
            return request;
        }
        const credentials = await this.getCredentials(hookCtx.securitySource);
        if (!credentials) {
            return request;
        }
        const sessionKey = this.getSessionKey(credentials);
        let session = this.sessions[sessionKey];
        if (!session ||
            !this.hasRequiredScopes(session.scopes, hookCtx.oAuth2Scopes) ||
            this.hasTokenExpired(session.expiresAt)) {
            session = await this.doTokenRequest(credentials, this.getScopes(hookCtx.oAuth2Scopes, session));
            this.sessions[sessionKey] = session;
        }
        request.headers.set("Authorization", `Bearer ${session.token}`);
        return request;
    }
    async afterError(hookCtx, response, error) {
        if (!hookCtx.oAuth2Scopes) {
            // OAuth2 not in use
            return { response, error };
        }
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
    async doTokenRequest(credentials, scopes) {
        const formData = new URLSearchParams();
        formData.append("grant_type", "system_access");
        formData.append("client_id", credentials.clientID);
        formData.append("client_secret", credentials.clientSecret);
        if (scopes.length > 0) {
            formData.append("scope", scopes.join(" "));
        }
        const tokenURL = new URL(credentials.tokenURL ?? "", this.baseURL ?? "");
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
        let expiresAt;
        if (data.expires_in) {
            expiresAt = Date.now() + data.expires_in * 1000;
        }
        const sess = {
            credentials,
            token: data.access_token,
            scopes,
        };
        if (expiresAt !== undefined) {
            sess.expiresAt = expiresAt;
        }
        return sess;
    }
    async getCredentials(source) {
        if (!source) {
            return null;
        }
        let security = source;
        if (typeof source === "function") {
            security = await source();
        }
        const out = (0, schemas_js_1.parse)(security, (val) => z.lazy(() => components.Security$outboundSchema).parse(val), "unexpected security type");
        return {
            clientID: out?.clientID ?? (0, env_js_1.env)().GUSTOEMBEDDED_CLIENT_ID ?? "",
            clientSecret: out?.clientSecret ?? (0, env_js_1.env)().GUSTOEMBEDDED_CLIENT_SECRET ?? "",
            tokenURL: out?.tokenURL ?? (0, env_js_1.env)().GUSTOEMBEDDED_TOKEN_URL ?? "",
        };
    }
    getSessionKey(credentials) {
        const key = `${credentials.clientID}:${credentials.clientSecret}`;
        return (0, base64_js_1.stringToBase64)(key);
    }
    hasRequiredScopes(scopes, requiredScopes) {
        return requiredScopes.every((scope) => scopes.includes(scope));
    }
    getScopes(requiredScopes, sess) {
        return [...new Set((sess?.scopes ?? []).concat(requiredScopes))];
    }
    hasTokenExpired(expiresAt) {
        return !expiresAt || Date.now() + 60000 > expiresAt;
    }
}
exports.ClientCredentialsHook = ClientCredentialsHook;
//# sourceMappingURL=ClientCredentialsCustom.js.map