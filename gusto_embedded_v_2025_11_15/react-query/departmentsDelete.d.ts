import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsDeleteMutationVariables = {
    request: operations.DeleteDepartmentRequest;
    options?: RequestOptions;
};
export type DepartmentsDeleteMutationData = operations.DeleteDepartmentResponse;
/**
 * Delete a department
 *
 * @remarks
 * Delete a department. You cannot delete a department until all employees and contractors have been removed.
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsDeleteMutation(options?: MutationHookOptions<DepartmentsDeleteMutationData, Error, DepartmentsDeleteMutationVariables>): UseMutationResult<DepartmentsDeleteMutationData, Error, DepartmentsDeleteMutationVariables>;
export declare function mutationKeyDepartmentsDelete(): MutationKey;
export declare function buildDepartmentsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsDeleteMutationVariables) => Promise<DepartmentsDeleteMutationData>;
};
//# sourceMappingURL=departmentsDelete.d.ts.map