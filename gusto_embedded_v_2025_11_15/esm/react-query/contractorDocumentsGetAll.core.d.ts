import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ContractorDocumentsRequest, GetV1ContractorDocumentsResponse } from "../models/operations/getv1contractordocuments.js";
export type ContractorDocumentsGetAllQueryData = GetV1ContractorDocumentsResponse;
export declare function prefetchContractorDocumentsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ContractorDocumentsRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorDocumentsGetAllQuery(client$: GustoEmbeddedCore, request: GetV1ContractorDocumentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorDocumentsGetAllQueryData>;
};
export declare function queryKeyContractorDocumentsGetAll(contractorUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorDocumentsGetAll.core.d.ts.map