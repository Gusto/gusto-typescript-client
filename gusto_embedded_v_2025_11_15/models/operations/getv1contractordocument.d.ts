import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentRequest = {
    /**
     * The ID or UUID of the document
     */
    documentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorDocumentResponse = {
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
    document?: components.Document | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentRequest$inboundSchema: z.ZodType<GetV1ContractorDocumentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentRequest$Outbound = {
    document_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentRequest$ {
    /** @deprecated use `GetV1ContractorDocumentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentRequest>;
    /** @deprecated use `GetV1ContractorDocumentRequest$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentRequest$Outbound;
}
export declare function getV1ContractorDocumentRequestToJSON(getV1ContractorDocumentRequest: GetV1ContractorDocumentRequest): string;
export declare function getV1ContractorDocumentRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorDocumentResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorDocumentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Document?: components.Document$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorDocumentResponse$outboundSchema: z.ZodType<GetV1ContractorDocumentResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorDocumentResponse$ {
    /** @deprecated use `GetV1ContractorDocumentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorDocumentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorDocumentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorDocumentResponse$Outbound, z.ZodTypeDef, GetV1ContractorDocumentResponse>;
    /** @deprecated use `GetV1ContractorDocumentResponse$Outbound` instead. */
    type Outbound = GetV1ContractorDocumentResponse$Outbound;
}
export declare function getV1ContractorDocumentResponseToJSON(getV1ContractorDocumentResponse: GetV1ContractorDocumentResponse): string;
export declare function getV1ContractorDocumentResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocument.d.ts.map