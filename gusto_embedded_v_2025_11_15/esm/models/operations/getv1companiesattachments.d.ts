import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyAttachment } from "../components/companyattachment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesAttachmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyAttachmentList?: Array<CompanyAttachment> | undefined;
};
/** @internal */
export type GetV1CompaniesAttachmentsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentsRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentsRequest>;
export declare function getV1CompaniesAttachmentsRequestToJSON(getV1CompaniesAttachmentsRequest: GetV1CompaniesAttachmentsRequest): string;
/** @internal */
export declare const GetV1CompaniesAttachmentsResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachments.d.ts.map