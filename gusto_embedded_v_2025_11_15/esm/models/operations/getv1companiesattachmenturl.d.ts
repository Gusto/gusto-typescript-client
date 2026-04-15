import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentUrlRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the company attachment
     */
    companyAttachmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
/**
 * The temporary url to download a Company Attachment File
 */
export type GetV1CompaniesAttachmentUrlResponseBody = {
    /**
     * A full Url to download a Company Attachment File
     */
    url: string;
};
export type GetV1CompaniesAttachmentUrlResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?: GetV1CompaniesAttachmentUrlResponseBody | undefined;
};
/** @internal */
export type GetV1CompaniesAttachmentUrlRequest$Outbound = {
    company_id: string;
    company_attachment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentUrlRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentUrlRequest>;
export declare function getV1CompaniesAttachmentUrlRequestToJSON(getV1CompaniesAttachmentUrlRequest: GetV1CompaniesAttachmentUrlRequest): string;
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponseBody$inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponseBody, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesAttachmentUrlResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentUrlResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesAttachmentUrlResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentUrlResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesAttachmentUrlResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentUrlResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachmenturl.d.ts.map