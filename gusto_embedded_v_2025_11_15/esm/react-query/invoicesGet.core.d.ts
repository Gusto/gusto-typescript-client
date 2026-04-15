import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetInvoicesInvoicePeriodRequest, GetInvoicesInvoicePeriodResponse, GetInvoicesInvoicePeriodSecurity } from "../models/operations/getinvoicesinvoiceperiod.js";
export type InvoicesGetQueryData = GetInvoicesInvoicePeriodResponse;
export declare function prefetchInvoicesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, security: GetInvoicesInvoicePeriodSecurity, request: GetInvoicesInvoicePeriodRequest, options?: RequestOptions): Promise<void>;
export declare function buildInvoicesGetQuery(client$: GustoEmbeddedCore, security: GetInvoicesInvoicePeriodSecurity, request: GetInvoicesInvoicePeriodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<InvoicesGetQueryData>;
};
export declare function queryKeyInvoicesGet(invoicePeriod: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    companyUuids?: string | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=invoicesGet.core.d.ts.map