import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1EmployeeBenefitsEmployeeBenefitIdRequest, GetV1EmployeeBenefitsEmployeeBenefitIdResponse } from "../models/operations/getv1employeebenefitsemployeebenefitid.js";
export type EmployeeBenefitsRetrieveQueryData = GetV1EmployeeBenefitsEmployeeBenefitIdResponse;
export declare function prefetchEmployeeBenefitsRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeeBenefitsRetrieveQuery(client$: GustoEmbeddedCore, request: GetV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsRetrieveQueryData>;
};
export declare function queryKeyEmployeeBenefitsRetrieve(employeeBenefitId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsRetrieve.core.d.ts.map