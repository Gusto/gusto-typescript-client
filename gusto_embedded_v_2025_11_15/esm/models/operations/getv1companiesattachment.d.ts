import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyAttachment } from "../components/companyattachment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentRequest = {
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
export type GetV1CompaniesAttachmentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyAttachment?: CompanyAttachment | undefined;
};
/** @internal */
export type GetV1CompaniesAttachmentRequest$Outbound = {
    company_id: string;
    company_attachment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentRequest>;
export declare function getV1CompaniesAttachmentRequestToJSON(getV1CompaniesAttachmentRequest: GetV1CompaniesAttachmentRequest): string;
/** @internal */
export declare const GetV1CompaniesAttachmentResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesAttachmentResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachment.d.ts.map