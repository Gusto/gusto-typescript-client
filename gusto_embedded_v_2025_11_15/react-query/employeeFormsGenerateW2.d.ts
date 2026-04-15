import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeFormsGenerateW2MutationVariables = {
    request: operations.PostV1SandboxGenerateW2Request;
    options?: RequestOptions;
};
export type EmployeeFormsGenerateW2MutationData = operations.PostV1SandboxGenerateW2Response;
/**
 * Generate a W2 form [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Generates a W2 document for testing purposes.
 *
 * scope: `employees:write`
 */
export declare function useEmployeeFormsGenerateW2Mutation(options?: MutationHookOptions<EmployeeFormsGenerateW2MutationData, Error, EmployeeFormsGenerateW2MutationVariables>): UseMutationResult<EmployeeFormsGenerateW2MutationData, Error, EmployeeFormsGenerateW2MutationVariables>;
export declare function mutationKeyEmployeeFormsGenerateW2(): MutationKey;
export declare function buildEmployeeFormsGenerateW2Mutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeFormsGenerateW2MutationVariables) => Promise<EmployeeFormsGenerateW2MutationData>;
};
//# sourceMappingURL=employeeFormsGenerateW2.d.ts.map