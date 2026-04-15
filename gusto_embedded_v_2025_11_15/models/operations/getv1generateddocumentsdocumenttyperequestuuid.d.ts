import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest = {
    /**
     * The type of document being generated
     */
    documentType: components.DocumentType;
    /**
     * The UUID of the request to generate a document. Generate document endpoints return request_uuids to be used with the GET generated document endpoint.
     */
    requestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse = {
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
    generatedDocument?: components.GeneratedDocument | undefined;
};
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$inboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound = {
    document_type: string;
    request_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$outboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound, z.ZodTypeDef, GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$ {
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound, z.ZodTypeDef, GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest>;
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound` instead. */
    type Outbound = GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound;
}
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidRequestToJSON(getV1GeneratedDocumentsDocumentTypeRequestUuidRequest: GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest): string;
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$inboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Generated-Document"?: components.GeneratedDocument$Outbound | undefined;
};
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$outboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$Outbound, z.ZodTypeDef, GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$ {
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$Outbound, z.ZodTypeDef, GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse>;
    /** @deprecated use `GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$Outbound` instead. */
    type Outbound = GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$Outbound;
}
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidResponseToJSON(getV1GeneratedDocumentsDocumentTypeRequestUuidResponse: GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse): string;
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1generateddocumentsdocumenttyperequestuuid.d.ts.map