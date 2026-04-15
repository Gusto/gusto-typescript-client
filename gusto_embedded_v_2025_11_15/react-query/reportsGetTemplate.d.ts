import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ReportsGetTemplateQueryData = operations.GetCompaniesCompanyUuidReportTemplatesReportTypeResponse;
/**
 * Get a report template
 *
 * @remarks
 * Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function useReportsGetTemplate(request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: QueryHookOptions<ReportsGetTemplateQueryData>): UseQueryResult<ReportsGetTemplateQueryData, Error>;
/**
 * Get a report template
 *
 * @remarks
 * Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function useReportsGetTemplateSuspense(request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: SuspenseQueryHookOptions<ReportsGetTemplateQueryData>): UseSuspenseQueryResult<ReportsGetTemplateQueryData, Error>;
export declare function prefetchReportsGetTemplate(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest): Promise<void>;
export declare function setReportsGetTemplateData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    reportType: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ReportsGetTemplateQueryData): ReportsGetTemplateQueryData | undefined;
export declare function invalidateReportsGetTemplate(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    reportType: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllReportsGetTemplate(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildReportsGetTemplateQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ReportsGetTemplateQueryData>;
};
export declare function queryKeyReportsGetTemplate(companyUuid: string, reportType: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=reportsGetTemplate.d.ts.map