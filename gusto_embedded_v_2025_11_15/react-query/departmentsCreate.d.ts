import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsCreateMutationVariables = {
    request: operations.PostDepartmentsRequest;
    options?: RequestOptions;
};
export type DepartmentsCreateMutationData = operations.PostDepartmentsResponse;
/**
 * Create a department
 *
 * @remarks
 * Create a department
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsCreateMutation(options?: MutationHookOptions<DepartmentsCreateMutationData, Error, DepartmentsCreateMutationVariables>): UseMutationResult<DepartmentsCreateMutationData, Error, DepartmentsCreateMutationVariables>;
export declare function mutationKeyDepartmentsCreate(): MutationKey;
export declare function buildDepartmentsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsCreateMutationVariables) => Promise<DepartmentsCreateMutationData>;
};
//# sourceMappingURL=departmentsCreate.d.ts.map