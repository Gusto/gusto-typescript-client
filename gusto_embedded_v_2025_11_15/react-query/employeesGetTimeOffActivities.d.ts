import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesGetTimeOffActivitiesQueryData = operations.GetVersionEmployeesTimeOffActivitiesResponse;
/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export declare function useEmployeesGetTimeOffActivities(request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: QueryHookOptions<EmployeesGetTimeOffActivitiesQueryData>): UseQueryResult<EmployeesGetTimeOffActivitiesQueryData, Error>;
/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export declare function useEmployeesGetTimeOffActivitiesSuspense(request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: SuspenseQueryHookOptions<EmployeesGetTimeOffActivitiesQueryData>): UseSuspenseQueryResult<EmployeesGetTimeOffActivitiesQueryData, Error>;
export declare function prefetchEmployeesGetTimeOffActivities(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetVersionEmployeesTimeOffActivitiesRequest): Promise<void>;
export declare function setEmployeesGetTimeOffActivitiesData(client: QueryClient, queryKeyBase: [
    employeeUuid: string,
    parameters: {
        timeOffType: string;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesGetTimeOffActivitiesQueryData): EmployeesGetTimeOffActivitiesQueryData | undefined;
export declare function invalidateEmployeesGetTimeOffActivities(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeUuid: string,
    parameters: {
        timeOffType: string;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesGetTimeOffActivities(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesGetTimeOffActivitiesQuery(client$: GustoEmbeddedCore, request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetTimeOffActivitiesQueryData>;
};
export declare function queryKeyEmployeesGetTimeOffActivities(employeeUuid: string, parameters: {
    timeOffType: string;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesGetTimeOffActivities.d.ts.map