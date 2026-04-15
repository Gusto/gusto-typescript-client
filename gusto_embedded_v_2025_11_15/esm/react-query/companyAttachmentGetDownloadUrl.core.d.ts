import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesAttachmentUrlRequest, GetV1CompaniesAttachmentUrlResponse } from "../models/operations/getv1companiesattachmenturl.js";
export type CompanyAttachmentGetDownloadUrlQueryData = GetV1CompaniesAttachmentUrlResponse;
export declare function prefetchCompanyAttachmentGetDownloadUrl(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompanyAttachmentGetDownloadUrlQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyAttachmentGetDownloadUrlQueryData>;
};
export declare function queryKeyCompanyAttachmentGetDownloadUrl(companyId: string, companyAttachmentUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyAttachmentGetDownloadUrl.core.d.ts.map