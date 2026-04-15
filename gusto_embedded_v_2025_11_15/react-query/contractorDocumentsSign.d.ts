import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorDocumentsSignMutationVariables = {
    request: operations.PutV1ContractorDocumentSignRequest;
    options?: RequestOptions;
};
export type ContractorDocumentsSignMutationData = operations.PutV1ContractorDocumentSignResponse;
/**
 * Sign a contractor document
 *
 * @remarks
 * Sign a contractor document.
 *
 * scope: `contractor_documents:write`
 */
export declare function useContractorDocumentsSignMutation(options?: MutationHookOptions<ContractorDocumentsSignMutationData, Error, ContractorDocumentsSignMutationVariables>): UseMutationResult<ContractorDocumentsSignMutationData, Error, ContractorDocumentsSignMutationVariables>;
export declare function mutationKeyContractorDocumentsSign(): MutationKey;
export declare function buildContractorDocumentsSignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorDocumentsSignMutationVariables) => Promise<ContractorDocumentsSignMutationData>;
};
//# sourceMappingURL=contractorDocumentsSign.d.ts.map