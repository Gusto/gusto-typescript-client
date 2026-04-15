import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesAttachmentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesAttachmentsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    companyAttachmentList?: Array<components.CompanyAttachment> | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentsRequest$inboundSchema: z.ZodType<GetV1CompaniesAttachmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesAttachmentsRequest$outboundSchema: z.ZodType<GetV1CompaniesAttachmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentsRequest$ {
    /** @deprecated use `GetV1CompaniesAttachmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentsRequest>;
    /** @deprecated use `GetV1CompaniesAttachmentsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentsRequest$Outbound;
}
export declare function getV1CompaniesAttachmentsRequestToJSON(getV1CompaniesAttachmentsRequest: GetV1CompaniesAttachmentsRequest): string;
export declare function getV1CompaniesAttachmentsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesAttachmentsResponse$inboundSchema: z.ZodType<GetV1CompaniesAttachmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesAttachmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Attachment-List"?: Array<components.CompanyAttachment$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesAttachmentsResponse$outboundSchema: z.ZodType<GetV1CompaniesAttachmentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesAttachmentsResponse$ {
    /** @deprecated use `GetV1CompaniesAttachmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesAttachmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesAttachmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesAttachmentsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesAttachmentsResponse>;
    /** @deprecated use `GetV1CompaniesAttachmentsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesAttachmentsResponse$Outbound;
}
export declare function getV1CompaniesAttachmentsResponseToJSON(getV1CompaniesAttachmentsResponse: GetV1CompaniesAttachmentsResponse): string;
export declare function getV1CompaniesAttachmentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesAttachmentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiesattachments.d.ts.map