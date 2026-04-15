import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutWireInRequestsWireInRequestUuidRequestBody = {
    /**
     * The date the wire was sent
     */
    dateSent: string;
    /**
     * Name of the bank sending the wire
     */
    bankName: string;
    /**
     * Amount of money sent
     */
    amountSent: string;
    /**
     * Additional notes
     */
    additionalNotes?: string | undefined;
};
export type PutWireInRequestsWireInRequestUuidRequest = {
    /**
     * The UUID of the Wire In Request
     */
    wireInRequestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutWireInRequestsWireInRequestUuidRequestBody;
};
export type PutWireInRequestsWireInRequestUuidResponse = {
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
    wireInRequest?: components.WireInRequest | undefined;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequestBody$inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutWireInRequestsWireInRequestUuidRequestBody$Outbound = {
    date_sent: string;
    bank_name: string;
    amount_sent: string;
    additional_notes?: string | undefined;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequestBody$outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequestBody$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutWireInRequestsWireInRequestUuidRequestBody$ {
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequestBody$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequestBody>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequestBody$Outbound` instead. */
    type Outbound = PutWireInRequestsWireInRequestUuidRequestBody$Outbound;
}
export declare function putWireInRequestsWireInRequestUuidRequestBodyToJSON(putWireInRequestsWireInRequestUuidRequestBody: PutWireInRequestsWireInRequestUuidRequestBody): string;
export declare function putWireInRequestsWireInRequestUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutWireInRequestsWireInRequestUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequest$inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutWireInRequestsWireInRequestUuidRequest$Outbound = {
    wire_in_request_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutWireInRequestsWireInRequestUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidRequest$outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutWireInRequestsWireInRequestUuidRequest$ {
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidRequest>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidRequest$Outbound` instead. */
    type Outbound = PutWireInRequestsWireInRequestUuidRequest$Outbound;
}
export declare function putWireInRequestsWireInRequestUuidRequestToJSON(putWireInRequestsWireInRequestUuidRequest: PutWireInRequestsWireInRequestUuidRequest): string;
export declare function putWireInRequestsWireInRequestUuidRequestFromJSON(jsonString: string): SafeParseResult<PutWireInRequestsWireInRequestUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidResponse$inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutWireInRequestsWireInRequestUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Wire-In-Request"?: components.WireInRequest$Outbound | undefined;
};
/** @internal */
export declare const PutWireInRequestsWireInRequestUuidResponse$outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidResponse$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutWireInRequestsWireInRequestUuidResponse$ {
    /** @deprecated use `PutWireInRequestsWireInRequestUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutWireInRequestsWireInRequestUuidResponse$Outbound, z.ZodTypeDef, PutWireInRequestsWireInRequestUuidResponse>;
    /** @deprecated use `PutWireInRequestsWireInRequestUuidResponse$Outbound` instead. */
    type Outbound = PutWireInRequestsWireInRequestUuidResponse$Outbound;
}
export declare function putWireInRequestsWireInRequestUuidResponseToJSON(putWireInRequestsWireInRequestUuidResponse: PutWireInRequestsWireInRequestUuidResponse): string;
export declare function putWireInRequestsWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<PutWireInRequestsWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=putwireinrequestswireinrequestuuid.d.ts.map