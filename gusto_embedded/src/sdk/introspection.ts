/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { introspectionGetInfo } from "../funcs/introspectionGetInfo.js";
import { introspectionRefreshToken } from "../funcs/introspectionRefreshToken.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetV1TokenInfoRequest,
  GetV1TokenInfoResponse,
} from "../models/operations/getv1tokeninfo.js";
import {
  RefreshAccessTokenRequest,
  RefreshAccessTokenResponse,
} from "../models/operations/refreshaccesstoken.js";
import { unwrapAsync } from "../types/fp.js";

export class Introspection extends ClientSDK {
  /**
   * Get info about the current access token
   *
   * @remarks
   * Returns scope and resource information associated with the current access token.
   */
  async getInfo(
    request: GetV1TokenInfoRequest,
    options?: RequestOptions,
  ): Promise<GetV1TokenInfoResponse> {
    return unwrapAsync(introspectionGetInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Refresh access token
   *
   * @remarks
   * Exchange a refresh token for a new access token.
   *
   * The previous `refresh_token` will be revoked on the first usage of the new `access_token`.
   *
   * The `expires_in` value is provided in seconds from when the `access_token` was generated.
   */
  async refreshToken(
    request: RefreshAccessTokenRequest,
    options?: RequestOptions,
  ): Promise<RefreshAccessTokenResponse> {
    return unwrapAsync(introspectionRefreshToken(
      this,
      request,
      options,
    ));
  }
}
