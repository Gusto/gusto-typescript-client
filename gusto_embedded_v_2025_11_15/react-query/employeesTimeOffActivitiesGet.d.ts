import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesTimeOffActivitiesGetQueryData = components.TimeOffActivity;
/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export declare function useEmployeesTimeOffActivitiesGet(request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: QueryHookOptions<EmployeesTimeOffActivitiesGetQueryData>): UseQueryResult<EmployeesTimeOffActivitiesGetQueryData, Error>;
/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export declare function useEmployeesTimeOffActivitiesGetSuspense(request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: SuspenseQueryHookOptions<EmployeesTimeOffActivitiesGetQueryData>): UseSuspenseQueryResult<EmployeesTimeOffActivitiesGetQueryData, Error>;
export declare function prefetchEmployeesTimeOffActivitiesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetVersionEmployeesTimeOffActivitiesRequest): Promise<void>;
export declare function setEmployeesTimeOffActivitiesGetData(client: QueryClient, queryKeyBase: [
    employeeUuid: string,
    parameters: {
        timeOffType: string;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesTimeOffActivitiesGetQueryData): EmployeesTimeOffActivitiesGetQueryData | undefined;
export declare function invalidateEmployeesTimeOffActivitiesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeUuid: string,
    parameters: {
        timeOffType: string;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesTimeOffActivitiesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesTimeOffActivitiesGetQuery(client$: GustoEmbeddedCore, request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesTimeOffActivitiesGetQueryData>;
};
export declare function queryKeyEmployeesTimeOffActivitiesGet(employeeUuid: string, parameters: {
    timeOffType: string;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesTimeOffActivitiesGet.d.ts.map