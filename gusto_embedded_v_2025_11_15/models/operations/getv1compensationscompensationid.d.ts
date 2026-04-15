import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompensationsCompensationIdRequest = {
    /**
     * The UUID of the compensation
     */
    compensationId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompensationsCompensationIdResponse = {
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
    compensation?: components.Compensation | undefined;
};
/** @internal */
export declare const GetV1CompensationsCompensationIdRequest$inboundSchema: z.ZodType<GetV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompensationsCompensationIdRequest$Outbound = {
    compensation_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompensationsCompensationIdRequest$outboundSchema: z.ZodType<GetV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, GetV1CompensationsCompensationIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompensationsCompensationIdRequest$ {
    /** @deprecated use `GetV1CompensationsCompensationIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompensationsCompensationIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompensationsCompensationIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompensationsCompensationIdRequest$Outbound, z.ZodTypeDef, GetV1CompensationsCompensationIdRequest>;
    /** @deprecated use `GetV1CompensationsCompensationIdRequest$Outbound` instead. */
    type Outbound = GetV1CompensationsCompensationIdRequest$Outbound;
}
export declare function getV1CompensationsCompensationIdRequestToJSON(getV1CompensationsCompensationIdRequest: GetV1CompensationsCompensationIdRequest): string;
export declare function getV1CompensationsCompensationIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompensationsCompensationIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompensationsCompensationIdResponse$inboundSchema: z.ZodType<GetV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompensationsCompensationIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Compensation?: components.Compensation$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompensationsCompensationIdResponse$outboundSchema: z.ZodType<GetV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, GetV1CompensationsCompensationIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompensationsCompensationIdResponse$ {
    /** @deprecated use `GetV1CompensationsCompensationIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompensationsCompensationIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompensationsCompensationIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompensationsCompensationIdResponse$Outbound, z.ZodTypeDef, GetV1CompensationsCompensationIdResponse>;
    /** @deprecated use `GetV1CompensationsCompensationIdResponse$Outbound` instead. */
    type Outbound = GetV1CompensationsCompensationIdResponse$Outbound;
}
export declare function getV1CompensationsCompensationIdResponseToJSON(getV1CompensationsCompensationIdResponse: GetV1CompensationsCompensationIdResponse): string;
export declare function getV1CompensationsCompensationIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompensationsCompensationIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1compensationscompensationid.d.ts.map