import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type IntrospectionRefreshAccessTokenMutationVariables = {
    request: operations.RefreshAccessTokenRequest;
    options?: RequestOptions;
};
export type IntrospectionRefreshAccessTokenMutationData = components.Authentication;
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
export declare function useIntrospectionRefreshAccessTokenMutation(options?: MutationHookOptions<IntrospectionRefreshAccessTokenMutationData, Error, IntrospectionRefreshAccessTokenMutationVariables>): UseMutationResult<IntrospectionRefreshAccessTokenMutationData, Error, IntrospectionRefreshAccessTokenMutationVariables>;
export declare function mutationKeyIntrospectionRefreshAccessToken(): MutationKey;
export declare function buildIntrospectionRefreshAccessTokenMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: IntrospectionRefreshAccessTokenMutationVariables) => Promise<IntrospectionRefreshAccessTokenMutationData>;
};
//# sourceMappingURL=introspectionRefreshAccessToken.d.ts.map