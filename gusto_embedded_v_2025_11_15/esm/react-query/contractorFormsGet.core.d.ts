import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ContractorFormRequest, GetV1ContractorFormResponse } from "../models/operations/getv1contractorform.js";
export type ContractorFormsGetQueryData = GetV1ContractorFormResponse;
export declare function prefetchContractorFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ContractorFormRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorFormsGetQuery(client$: GustoEmbeddedCore, request: GetV1ContractorFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorFormsGetQueryData>;
};
export declare function queryKeyContractorFormsGet(contractorUuid: string, formId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorFormsGet.core.d.ts.map