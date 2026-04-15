import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type DepartmentsUpdateMutationVariables = {
    request: operations.PutDepartmentsRequest;
    options?: RequestOptions;
};
export type DepartmentsUpdateMutationData = operations.PutDepartmentsResponse;
/**
 * Update a department
 *
 * @remarks
 * Update a department
 *
 * scope: `departments:write`
 */
export declare function useDepartmentsUpdateMutation(options?: MutationHookOptions<DepartmentsUpdateMutationData, Error, DepartmentsUpdateMutationVariables>): UseMutationResult<DepartmentsUpdateMutationData, Error, DepartmentsUpdateMutationVariables>;
export declare function mutationKeyDepartmentsUpdate(): MutationKey;
export declare function buildDepartmentsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: DepartmentsUpdateMutationVariables) => Promise<DepartmentsUpdateMutationData>;
};
//# sourceMappingURL=departmentsUpdate.d.ts.map