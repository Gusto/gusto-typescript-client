import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1GarnishmentsChildSupportRequest, GetV1GarnishmentsChildSupportResponse } from "../models/operations/getv1garnishmentschildsupport.js";
export type GarnishmentsGetChildSupportDataQueryData = GetV1GarnishmentsChildSupportResponse;
export declare function prefetchGarnishmentsGetChildSupportData(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): Promise<void>;
export declare function buildGarnishmentsGetChildSupportDataQuery(client$: GustoEmbeddedCore, request: GetV1GarnishmentsChildSupportRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<GarnishmentsGetChildSupportDataQueryData>;
};
export declare function queryKeyGarnishmentsGetChildSupportData(parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=garnishmentsGetChildSupportData.core.d.ts.map