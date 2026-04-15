import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1EmployeesEmployeeIdEmployeeBenefitsQueryParamInclude, GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, GetV1EmployeesEmployeeIdEmployeeBenefitsResponse } from "../models/operations/getv1employeesemployeeidemployeebenefits.js";
export type EmployeeBenefitsGetQueryData = GetV1EmployeesEmployeeIdEmployeeBenefitsResponse;
export declare function prefetchEmployeeBenefitsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeeBenefitsGetQuery(client$: GustoEmbeddedCore, request: GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsGetQueryData>;
};
export declare function queryKeyEmployeeBenefitsGet(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    include?: GetV1EmployeesEmployeeIdEmployeeBenefitsQueryParamInclude | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsGet.core.d.ts.map