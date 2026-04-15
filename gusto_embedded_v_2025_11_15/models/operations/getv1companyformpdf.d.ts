import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormPdfRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyFormPdfResponse = {
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
    formPdf?: components.FormPdf | undefined;
};
/** @internal */
export declare const GetV1CompanyFormPdfRequest$inboundSchema: z.ZodType<GetV1CompanyFormPdfRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormPdfRequest$Outbound = {
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormPdfRequest$outboundSchema: z.ZodType<GetV1CompanyFormPdfRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormPdfRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormPdfRequest$ {
    /** @deprecated use `GetV1CompanyFormPdfRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormPdfRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormPdfRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormPdfRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormPdfRequest>;
    /** @deprecated use `GetV1CompanyFormPdfRequest$Outbound` instead. */
    type Outbound = GetV1CompanyFormPdfRequest$Outbound;
}
export declare function getV1CompanyFormPdfRequestToJSON(getV1CompanyFormPdfRequest: GetV1CompanyFormPdfRequest): string;
export declare function getV1CompanyFormPdfRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormPdfRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyFormPdfResponse$inboundSchema: z.ZodType<GetV1CompanyFormPdfResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormPdfResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Form-Pdf"?: components.FormPdf$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyFormPdfResponse$outboundSchema: z.ZodType<GetV1CompanyFormPdfResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormPdfResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormPdfResponse$ {
    /** @deprecated use `GetV1CompanyFormPdfResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormPdfResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormPdfResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormPdfResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormPdfResponse>;
    /** @deprecated use `GetV1CompanyFormPdfResponse$Outbound` instead. */
    type Outbound = GetV1CompanyFormPdfResponse$Outbound;
}
export declare function getV1CompanyFormPdfResponseToJSON(getV1CompanyFormPdfResponse: GetV1CompanyFormPdfResponse): string;
export declare function getV1CompanyFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyformpdf.d.ts.map