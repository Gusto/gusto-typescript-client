import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormPdfRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorFormPdfResponse = {
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
export declare const GetV1ContractorFormPdfRequest$inboundSchema: z.ZodType<GetV1ContractorFormPdfRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormPdfRequest$Outbound = {
    contractor_uuid: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormPdfRequest$outboundSchema: z.ZodType<GetV1ContractorFormPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormPdfRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormPdfRequest$ {
    /** @deprecated use `GetV1ContractorFormPdfRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormPdfRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormPdfRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormPdfRequest>;
    /** @deprecated use `GetV1ContractorFormPdfRequest$Outbound` instead. */
    type Outbound = GetV1ContractorFormPdfRequest$Outbound;
}
export declare function getV1ContractorFormPdfRequestToJSON(getV1ContractorFormPdfRequest: GetV1ContractorFormPdfRequest): string;
export declare function getV1ContractorFormPdfRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormPdfRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorFormPdfResponse$inboundSchema: z.ZodType<GetV1ContractorFormPdfResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorFormPdfResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Form-Pdf"?: components.FormPdf$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorFormPdfResponse$outboundSchema: z.ZodType<GetV1ContractorFormPdfResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormPdfResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorFormPdfResponse$ {
    /** @deprecated use `GetV1ContractorFormPdfResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorFormPdfResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorFormPdfResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorFormPdfResponse$Outbound, z.ZodTypeDef, GetV1ContractorFormPdfResponse>;
    /** @deprecated use `GetV1ContractorFormPdfResponse$Outbound` instead. */
    type Outbound = GetV1ContractorFormPdfResponse$Outbound;
}
export declare function getV1ContractorFormPdfResponseToJSON(getV1ContractorFormPdfResponse: GetV1ContractorFormPdfResponse): string;
export declare function getV1ContractorFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorformpdf.d.ts.map