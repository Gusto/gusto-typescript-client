import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorFormsGenerate1099MutationVariables = {
    request: operations.PostV1SandboxGenerate1099Request;
    options?: RequestOptions;
};
export type ContractorFormsGenerate1099MutationData = operations.PostV1SandboxGenerate1099Response;
/**
 * Generate a 1099 form [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Generates a 1099 document for testing purposes.
 *
 * scope: `contractors:write`
 */
export declare function useContractorFormsGenerate1099Mutation(options?: MutationHookOptions<ContractorFormsGenerate1099MutationData, Error, ContractorFormsGenerate1099MutationVariables>): UseMutationResult<ContractorFormsGenerate1099MutationData, Error, ContractorFormsGenerate1099MutationVariables>;
export declare function mutationKeyContractorFormsGenerate1099(): MutationKey;
export declare function buildContractorFormsGenerate1099Mutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorFormsGenerate1099MutationVariables) => Promise<ContractorFormsGenerate1099MutationData>;
};
//# sourceMappingURL=contractorFormsGenerate1099.d.ts.map