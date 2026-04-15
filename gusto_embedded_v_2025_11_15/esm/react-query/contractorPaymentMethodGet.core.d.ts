import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ContractorsContractorUuidPaymentMethodRequest, GetV1ContractorsContractorUuidPaymentMethodResponse } from "../models/operations/getv1contractorscontractoruuidpaymentmethod.js";
export type ContractorPaymentMethodGetQueryData = GetV1ContractorsContractorUuidPaymentMethodResponse;
export declare function prefetchContractorPaymentMethodGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorPaymentMethodGetQuery(client$: GustoEmbeddedCore, request: GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentMethodGetQueryData>;
};
export declare function queryKeyContractorPaymentMethodGet(contractorUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentMethodGet.core.d.ts.map