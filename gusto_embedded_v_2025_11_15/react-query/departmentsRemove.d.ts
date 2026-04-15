import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsRemoveMutationVariables = {
    request: operations.PutRemovePeopleFromDepartmentRequest;
    options?: RequestOptions;
};
export type DepartmentsRemoveMutationData = components.Department;
/**
 * Remove people from a department
 *
 * @remarks
 * Remove employees and contractors from a department
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsRemoveMutation(options?: MutationHookOptions<DepartmentsRemoveMutationData, Error, DepartmentsRemoveMutationVariables>): UseMutationResult<DepartmentsRemoveMutationData, Error, DepartmentsRemoveMutationVariables>;
export declare function mutationKeyDepartmentsRemove(): MutationKey;
export declare function buildDepartmentsRemoveMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsRemoveMutationVariables) => Promise<DepartmentsRemoveMutationData>;
};
//# sourceMappingURL=departmentsRemove.d.ts.map