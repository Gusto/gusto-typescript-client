import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type IntrospectionRefreshTokenMutationVariables = {
    request: operations.RefreshAccessTokenRequest;
    options?: RequestOptions;
};
export type IntrospectionRefreshTokenMutationData = operations.RefreshAccessTokenResponse;
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
export declare function useIntrospectionRefreshTokenMutation(options?: MutationHookOptions<IntrospectionRefreshTokenMutationData, Error, IntrospectionRefreshTokenMutationVariables>): UseMutationResult<IntrospectionRefreshTokenMutationData, Error, IntrospectionRefreshTokenMutationVariables>;
export declare function mutationKeyIntrospectionRefreshToken(): MutationKey;
export declare function buildIntrospectionRefreshTokenMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: IntrospectionRefreshTokenMutationVariables) => Promise<IntrospectionRefreshTokenMutationData>;
};
//# sourceMappingURL=introspectionRefreshToken.d.ts.map