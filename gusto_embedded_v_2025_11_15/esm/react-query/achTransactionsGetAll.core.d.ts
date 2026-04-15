import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetAchTransactionsRequest, GetAchTransactionsResponse } from "../models/operations/getachtransactions.js";
export type AchTransactionsGetAllQueryData = GetAchTransactionsResponse;
export declare function prefetchAchTransactionsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetAchTransactionsRequest, options?: RequestOptions): Promise<void>;
export declare function buildAchTransactionsGetAllQuery(client$: GustoEmbeddedCore, request: GetAchTransactionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<AchTransactionsGetAllQueryData>;
};
export declare function queryKeyAchTransactionsGetAll(companyUuid: string, parameters: {
    contractorPaymentUuid?: string | undefined;
    payrollUuid?: string | undefined;
    transactionType?: string | undefined;
    paymentDirection?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=achTransactionsGetAll.core.d.ts.map