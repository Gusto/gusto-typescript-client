import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentPdfRequest = {
    /**
     * The ID or UUID of the document
     */
    documentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorDocumentPdfResponse = {
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
    documentPdf?: components.DocumentPdf | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentPdfRequest$inboundSchema: z.ZodType<GetV1ContractorDocumentPdfRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentPdfRequest$Outbound = {
    document_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentPdfRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentPdfRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentPdfRequest$ {
    /** @deprecated use `GetV1ContractorDocumentPdfRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentPdfRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentPdfRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentPdfRequest>;
    /** @deprecated use `GetV1ContractorDocumentPdfRequest$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentPdfRequest$Outbound;
}
export declare function getV1ContractorDocumentPdfRequestToJSON(getV1ContractorDocumentPdfRequest: GetV1ContractorDocumentPdfRequest): string;
export declare function getV1ContractorDocumentPdfRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentPdfRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorDocumentPdfResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentPdfResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentPdfResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Document-Pdf"?: components.DocumentPdf$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentPdfResponse$outboundSchema: z.ZodType<GetV1ContractorDocumentPdfResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentPdfResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentPdfResponse$ {
    /** @deprecated use `GetV1ContractorDocumentPdfResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentPdfResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentPdfResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentPdfResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentPdfResponse>;
    /** @deprecated use `GetV1ContractorDocumentPdfResponse$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentPdfResponse$Outbound;
}
export declare function getV1ContractorDocumentPdfResponseToJSON(getV1ContractorDocumentPdfResponse: GetV1ContractorDocumentPdfResponse): string;
export declare function getV1ContractorDocumentPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocumentpdf.d.ts.map