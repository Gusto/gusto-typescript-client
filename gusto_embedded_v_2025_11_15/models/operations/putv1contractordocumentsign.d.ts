import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Fields = {
    /**
     * Unique identifier of the field
     */
    key?: string | undefined;
    /**
     * Value for the field
     */
    value?: string | undefined;
};
export type PutV1ContractorDocumentSignRequestBody = {
    /**
     * List of fields and the values they will be set to.
     */
    fields: Array<Fields>;
    /**
     * Whether you agree to sign electronically
     */
    agree: boolean;
    /**
     * The IP address of the signatory who signed the form.
     */
    signedByIpAddress: string;
};
export type PutV1ContractorDocumentSignRequest = {
    /**
     * The ID or UUID of the document
     */
    documentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ContractorDocumentSignRequestBody;
};
export type PutV1ContractorDocumentSignResponse = {
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
    documentSigned?: components.DocumentSigned | undefined;
};
/** @internal */
export declare const Fields$inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown>;
/** @internal */
export type Fields$Outbound = {
    key?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const Fields$outboundSchema: z.ZodType<Fields$Outbound, z.ZodTypeDef, Fields>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fields$ {
    /** @deprecated use `Fields$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fields, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fields$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fields$Outbound, z.ZodTypeDef, Fields>;
    /** @deprecated use `Fields$Outbound` instead. */
    type Outbound = Fields$Outbound;
}
export declare function fieldsToJSON(fields: Fields): string;
export declare function fieldsFromJSON(jsonString: string): SafeParseResult<Fields, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorDocumentSignRequestBody$inboundSchema: z.ZodType<PutV1ContractorDocumentSignRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorDocumentSignRequestBody$Outbound = {
    fields: Array<Fields$Outbound>;
    agree: boolean;
    signed_by_ip_address: string;
};
/** @internal */
export declare const PutV1ContractorDocumentSignRequestBody$outboundSchema: z.ZodType<PutV1ContractorDocumentSignRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorDocumentSignRequestBody$ {
    /** @deprecated use `PutV1ContractorDocumentSignRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorDocumentSignRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorDocumentSignRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorDocumentSignRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignRequestBody>;
    /** @deprecated use `PutV1ContractorDocumentSignRequestBody$Outbound` instead. */
    type Outbound = PutV1ContractorDocumentSignRequestBody$Outbound;
}
export declare function putV1ContractorDocumentSignRequestBodyToJSON(putV1ContractorDocumentSignRequestBody: PutV1ContractorDocumentSignRequestBody): string;
export declare function putV1ContractorDocumentSignRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ContractorDocumentSignRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorDocumentSignRequest$inboundSchema: z.ZodType<PutV1ContractorDocumentSignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorDocumentSignRequest$Outbound = {
    document_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorDocumentSignRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorDocumentSignRequest$outboundSchema: z.ZodType<PutV1ContractorDocumentSignRequest$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorDocumentSignRequest$ {
    /** @deprecated use `PutV1ContractorDocumentSignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorDocumentSignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorDocumentSignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorDocumentSignRequest$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignRequest>;
    /** @deprecated use `PutV1ContractorDocumentSignRequest$Outbound` instead. */
    type Outbound = PutV1ContractorDocumentSignRequest$Outbound;
}
export declare function putV1ContractorDocumentSignRequestToJSON(putV1ContractorDocumentSignRequest: PutV1ContractorDocumentSignRequest): string;
export declare function putV1ContractorDocumentSignRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorDocumentSignRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorDocumentSignResponse$inboundSchema: z.ZodType<PutV1ContractorDocumentSignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorDocumentSignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Document-Signed"?: components.DocumentSigned$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorDocumentSignResponse$outboundSchema: z.ZodType<PutV1ContractorDocumentSignResponse$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorDocumentSignResponse$ {
    /** @deprecated use `PutV1ContractorDocumentSignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorDocumentSignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorDocumentSignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorDocumentSignResponse$Outbound, z.ZodTypeDef, PutV1ContractorDocumentSignResponse>;
    /** @deprecated use `PutV1ContractorDocumentSignResponse$Outbound` instead. */
    type Outbound = PutV1ContractorDocumentSignResponse$Outbound;
}
export declare function putV1ContractorDocumentSignResponseToJSON(putV1ContractorDocumentSignResponse: PutV1ContractorDocumentSignResponse): string;
export declare function putV1ContractorDocumentSignResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorDocumentSignResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractordocumentsign.d.ts.map