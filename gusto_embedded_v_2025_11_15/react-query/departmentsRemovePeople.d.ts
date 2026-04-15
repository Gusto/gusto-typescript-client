import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsRemovePeopleMutationVariables = {
    request: operations.PutRemovePeopleFromDepartmentRequest;
    options?: RequestOptions;
};
export type DepartmentsRemovePeopleMutationData = operations.PutRemovePeopleFromDepartmentResponse;
/**
 * Remove people from a department
 *
 * @remarks
 * Remove employees and contractors from a department
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsRemovePeopleMutation(options?: MutationHookOptions<DepartmentsRemovePeopleMutationData, Error, DepartmentsRemovePeopleMutationVariables>): UseMutationResult<DepartmentsRemovePeopleMutationData, Error, DepartmentsRemovePeopleMutationVariables>;
export declare function mutationKeyDepartmentsRemovePeople(): MutationKey;
export declare function buildDepartmentsRemovePeopleMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsRemovePeopleMutationVariables) => Promise<DepartmentsRemovePeopleMutationData>;
};
//# sourceMappingURL=departmentsRemovePeople.d.ts.map