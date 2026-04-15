import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse } from "../models/operations/getv1contractorpaymentscontractorpaymentuuidreceipt.js";
export type ContractorPaymentsGetReceiptQueryData = GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse;
export declare function prefetchContractorPaymentsGetReceipt(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorPaymentsGetReceiptQuery(client$: GustoEmbeddedCore, request: GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsGetReceiptQueryData>;
};
export declare function queryKeyContractorPaymentsGetReceipt(contractorPaymentUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsGetReceipt.core.d.ts.map