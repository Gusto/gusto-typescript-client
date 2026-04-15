import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetWireInRequestsWireInRequestUuidRequest = {
    /**
     * The UUID of the Wire In Request
     */
    wireInRequestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetWireInRequestsWireInRequestUuidResponse = {
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
export declare const GetWireInRequestsWireInRequestUuidRequest$inboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetWireInRequestsWireInRequestUuidRequest$Outbound = {
    wire_in_request_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetWireInRequestsWireInRequestUuidRequest$outboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetWireInRequestsWireInRequestUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetWireInRequestsWireInRequestUuidRequest$ {
    /** @deprecated use `GetWireInRequestsWireInRequestUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetWireInRequestsWireInRequestUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetWireInRequestsWireInRequestUuidRequest>;
    /** @deprecated use `GetWireInRequestsWireInRequestUuidRequest$Outbound` instead. */
    type Outbound = GetWireInRequestsWireInRequestUuidRequest$Outbound;
}
export declare function getWireInRequestsWireInRequestUuidRequestToJSON(getWireInRequestsWireInRequestUuidRequest: GetWireInRequestsWireInRequestUuidRequest): string;
export declare function getWireInRequestsWireInRequestUuidRequestFromJSON(jsonString: string): SafeParseResult<GetWireInRequestsWireInRequestUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetWireInRequestsWireInRequestUuidResponse$inboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetWireInRequestsWireInRequestUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Wire-In-Request"?: components.WireInRequest$Outbound | undefined;
};
/** @internal */
export declare const GetWireInRequestsWireInRequestUuidResponse$outboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidResponse$Outbound, z.ZodTypeDef, GetWireInRequestsWireInRequestUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetWireInRequestsWireInRequestUuidResponse$ {
    /** @deprecated use `GetWireInRequestsWireInRequestUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetWireInRequestsWireInRequestUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetWireInRequestsWireInRequestUuidResponse$Outbound, z.ZodTypeDef, GetWireInRequestsWireInRequestUuidResponse>;
    /** @deprecated use `GetWireInRequestsWireInRequestUuidResponse$Outbound` instead. */
    type Outbound = GetWireInRequestsWireInRequestUuidResponse$Outbound;
}
export declare function getWireInRequestsWireInRequestUuidResponseToJSON(getWireInRequestsWireInRequestUuidResponse: GetWireInRequestsWireInRequestUuidResponse): string;
export declare function getWireInRequestsWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetWireInRequestsWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getwireinrequestswireinrequestuuid.d.ts.map