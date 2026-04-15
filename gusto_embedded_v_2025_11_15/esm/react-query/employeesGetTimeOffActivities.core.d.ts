import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetVersionEmployeesTimeOffActivitiesRequest, GetVersionEmployeesTimeOffActivitiesResponse } from "../models/operations/getversionemployeestimeoffactivities.js";
export type EmployeesGetTimeOffActivitiesQueryData = GetVersionEmployeesTimeOffActivitiesResponse;
export declare function prefetchEmployeesGetTimeOffActivities(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeesGetTimeOffActivitiesQuery(client$: GustoEmbeddedCore, request: GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetTimeOffActivitiesQueryData>;
};
export declare function queryKeyEmployeesGetTimeOffActivities(employeeUuid: string, parameters: {
    timeOffType: string;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesGetTimeOffActivities.core.d.ts.map