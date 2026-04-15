import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse } from "../models/operations/getemployeeytdbenefitamountsfromdifferentcompany.js";
export type EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData = GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse;
export declare function prefetchEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQuery(client$: GustoEmbeddedCore, request: GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData>;
};
export declare function queryKeyEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(employeeId: string, parameters: {
    taxYear?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany.core.d.ts.map