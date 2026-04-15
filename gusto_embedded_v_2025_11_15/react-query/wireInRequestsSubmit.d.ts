import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WireInRequestsSubmitMutationVariables = {
    request: operations.PutWireInRequestsWireInRequestUuidRequest;
    options?: RequestOptions;
};
export type WireInRequestsSubmitMutationData = operations.PutWireInRequestsWireInRequestUuidResponse;
/**
 * Submit a wire in request
 *
 * @remarks
 * Submit a wire in request for a payment
 *
 * scope: `payrolls:run`
 */
export declare function useWireInRequestsSubmitMutation(options?: MutationHookOptions<WireInRequestsSubmitMutationData, Error, WireInRequestsSubmitMutationVariables>): UseMutationResult<WireInRequestsSubmitMutationData, Error, WireInRequestsSubmitMutationVariables>;
export declare function mutationKeyWireInRequestsSubmit(): MutationKey;
export declare function buildWireInRequestsSubmitMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WireInRequestsSubmitMutationVariables) => Promise<WireInRequestsSubmitMutationData>;
};
//# sourceMappingURL=wireInRequestsSubmit.d.ts.map