import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetV1EmployeesHeaderXGustoAPIVersion, GetV1EmployeesRequest, GetV1EmployeesResponse, QueryParamInclude } from "../models/operations/getv1employees.js";
export type EmployeesGetQueryData = GetV1EmployeesResponse;
export declare function prefetchEmployeesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeesRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeesGetQuery(client$: GustoEmbeddedCore, request: GetV1EmployeesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetQueryData>;
};
export declare function queryKeyEmployeesGet(employeeId: string, parameters: {
    xGustoAPIVersion?: GetV1EmployeesHeaderXGustoAPIVersion | undefined;
    include?: Array<QueryParamInclude> | undefined;
}): QueryKey;
//# sourceMappingURL=employeesGet.core.d.ts.map