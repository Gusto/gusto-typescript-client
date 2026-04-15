import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsAddPeopleMutationVariables = {
    request: operations.PutAddPeopleToDepartmentRequest;
    options?: RequestOptions;
};
export type DepartmentsAddPeopleMutationData = operations.PutAddPeopleToDepartmentResponse;
/**
 * Add people to a department
 *
 * @remarks
 * Add employees and contractors to a department
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsAddPeopleMutation(options?: MutationHookOptions<DepartmentsAddPeopleMutationData, Error, DepartmentsAddPeopleMutationVariables>): UseMutationResult<DepartmentsAddPeopleMutationData, Error, DepartmentsAddPeopleMutationVariables>;
export declare function mutationKeyDepartmentsAddPeople(): MutationKey;
export declare function buildDepartmentsAddPeopleMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsAddPeopleMutationVariables) => Promise<DepartmentsAddPeopleMutationData>;
};
//# sourceMappingURL=departmentsAddPeople.d.ts.map