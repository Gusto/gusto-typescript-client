import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type WireInRequestsSubmitRequestMutationVariables = {
    request: operations.PutWireInRequestsWireInRequestUuidRequest;
    options?: RequestOptions;
};
export type WireInRequestsSubmitRequestMutationData = components.WireInRequest;
/**
 * Submit a wire in request
 *
 * @remarks
 * Submit a wire in request for a payment
 *
 * scope: `payrolls:run`
 */
export declare function useWireInRequestsSubmitRequestMutation(options?: MutationHookOptions<WireInRequestsSubmitRequestMutationData, Error, WireInRequestsSubmitRequestMutationVariables>): UseMutationResult<WireInRequestsSubmitRequestMutationData, Error, WireInRequestsSubmitRequestMutationVariables>;
export declare function mutationKeyWireInRequestsSubmitRequest(): MutationKey;
export declare function buildWireInRequestsSubmitRequestMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: WireInRequestsSubmitRequestMutationVariables) => Promise<WireInRequestsSubmitRequestMutationData>;
};
//# sourceMappingURL=wireInRequestsSubmitRequest.d.ts.map