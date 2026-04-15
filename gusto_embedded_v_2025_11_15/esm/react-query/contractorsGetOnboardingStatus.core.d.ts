import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ContractorsContractorUuidOnboardingStatusRequest, GetV1ContractorsContractorUuidOnboardingStatusResponse } from "../models/operations/getv1contractorscontractoruuidonboardingstatus.js";
export type ContractorsGetOnboardingStatusQueryData = GetV1ContractorsContractorUuidOnboardingStatusResponse;
export declare function prefetchContractorsGetOnboardingStatus(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorsGetOnboardingStatusQuery(client$: GustoEmbeddedCore, request: GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsGetOnboardingStatusQueryData>;
};
export declare function queryKeyContractorsGetOnboardingStatus(contractorUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsGetOnboardingStatus.core.d.ts.map