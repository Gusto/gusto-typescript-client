import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type SignatoriesDeleteMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest;
    options?: RequestOptions;
};
export type SignatoriesDeleteMutationData = operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse;
/**
 * Delete a signatory
 *
 * @remarks
 * Delete a company signatory.
 *
 * scope: `signatories:manage`
 */
export declare function useSignatoriesDeleteMutation(options?: MutationHookOptions<SignatoriesDeleteMutationData, Error, SignatoriesDeleteMutationVariables>): UseMutationResult<SignatoriesDeleteMutationData, Error, SignatoriesDeleteMutationVariables>;
export declare function mutationKeySignatoriesDelete(): MutationKey;
export declare function buildSignatoriesDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: SignatoriesDeleteMutationVariables) => Promise<SignatoriesDeleteMutationData>;
};
//# sourceMappingURL=signatoriesDelete.d.ts.map