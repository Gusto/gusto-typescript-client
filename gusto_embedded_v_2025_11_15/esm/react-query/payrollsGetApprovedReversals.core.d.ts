import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesCompanyIdPayrollReversalsRequest, GetV1CompaniesCompanyIdPayrollReversalsResponse } from "../models/operations/getv1companiescompanyidpayrollreversals.js";
export type PayrollsGetApprovedReversalsQueryData = GetV1CompaniesCompanyIdPayrollReversalsResponse;
export declare function prefetchPayrollsGetApprovedReversals(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): Promise<void>;
export declare function buildPayrollsGetApprovedReversalsQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetApprovedReversalsQueryData>;
};
export declare function queryKeyPayrollsGetApprovedReversals(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetApprovedReversals.core.d.ts.map