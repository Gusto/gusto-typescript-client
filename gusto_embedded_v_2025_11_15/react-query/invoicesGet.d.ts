import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type InvoicesGetQueryData = operations.GetInvoicesInvoicePeriodResponse;
/**
 * Retrieve invoicing data for companies
 *
 * @remarks
 * Retrieve data for active companies used to calculate invoices for Gusto Embedded Payroll. A company is considered active for an invoice period if they are an active partner managed company, have run payroll or created contractor payments since becoming a partner managed company, and are not suspended at any point during the invoice period.  This endpoint forces pagination, with 100 results returned at a time. You can learn more about our pagination here: [pagination guide](https://docs.gusto.com/embedded-payroll/docs/pagination)
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)
 *
 * scope: `invoices:read`
 */
export declare function useInvoicesGet(security: operations.GetInvoicesInvoicePeriodSecurity, request: operations.GetInvoicesInvoicePeriodRequest, options?: QueryHookOptions<InvoicesGetQueryData>): UseQueryResult<InvoicesGetQueryData, Error>;
/**
 * Retrieve invoicing data for companies
 *
 * @remarks
 * Retrieve data for active companies used to calculate invoices for Gusto Embedded Payroll. A company is considered active for an invoice period if they are an active partner managed company, have run payroll or created contractor payments since becoming a partner managed company, and are not suspended at any point during the invoice period.  This endpoint forces pagination, with 100 results returned at a time. You can learn more about our pagination here: [pagination guide](https://docs.gusto.com/embedded-payroll/docs/pagination)
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)
 *
 * scope: `invoices:read`
 */
export declare function useInvoicesGetSuspense(security: operations.GetInvoicesInvoicePeriodSecurity, request: operations.GetInvoicesInvoicePeriodRequest, options?: SuspenseQueryHookOptions<InvoicesGetQueryData>): UseSuspenseQueryResult<InvoicesGetQueryData, Error>;
export declare function prefetchInvoicesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, security: operations.GetInvoicesInvoicePeriodSecurity, request: operations.GetInvoicesInvoicePeriodRequest): Promise<void>;
export declare function setInvoicesGetData(client: QueryClient, queryKeyBase: [
    invoicePeriod: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        companyUuids?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: InvoicesGetQueryData): InvoicesGetQueryData | undefined;
export declare function invalidateInvoicesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    invoicePeriod: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        companyUuids?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllInvoicesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildInvoicesGetQuery(client$: GustoEmbeddedCore, security: operations.GetInvoicesInvoicePeriodSecurity, request: operations.GetInvoicesInvoicePeriodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<InvoicesGetQueryData>;
};
export declare function queryKeyInvoicesGet(invoicePeriod: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    companyUuids?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=invoicesGet.d.ts.map