import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1LocationsLocationIdRequest = {
    /**
     * The UUID of the location
     */
    locationId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1LocationsLocationIdResponse = {
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
    location?: components.Location | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationIdRequest$inboundSchema: z.ZodType<GetV1LocationsLocationIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1LocationsLocationIdRequest$Outbound = {
    location_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1LocationsLocationIdRequest$outboundSchema: z.ZodType<GetV1LocationsLocationIdRequest$Outbound, z.ZodTypeDef, GetV1LocationsLocationIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1LocationsLocationIdRequest$ {
    /** @deprecated use `GetV1LocationsLocationIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1LocationsLocationIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1LocationsLocationIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1LocationsLocationIdRequest$Outbound, z.ZodTypeDef, GetV1LocationsLocationIdRequest>;
    /** @deprecated use `GetV1LocationsLocationIdRequest$Outbound` instead. */
    type Outbound = GetV1LocationsLocationIdRequest$Outbound;
}
export declare function getV1LocationsLocationIdRequestToJSON(getV1LocationsLocationIdRequest: GetV1LocationsLocationIdRequest): string;
export declare function getV1LocationsLocationIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1LocationsLocationIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1LocationsLocationIdResponse$inboundSchema: z.ZodType<GetV1LocationsLocationIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1LocationsLocationIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Location?: components.Location$Outbound | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationIdResponse$outboundSchema: z.ZodType<GetV1LocationsLocationIdResponse$Outbound, z.ZodTypeDef, GetV1LocationsLocationIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1LocationsLocationIdResponse$ {
    /** @deprecated use `GetV1LocationsLocationIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1LocationsLocationIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1LocationsLocationIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1LocationsLocationIdResponse$Outbound, z.ZodTypeDef, GetV1LocationsLocationIdResponse>;
    /** @deprecated use `GetV1LocationsLocationIdResponse$Outbound` instead. */
    type Outbound = GetV1LocationsLocationIdResponse$Outbound;
}
export declare function getV1LocationsLocationIdResponseToJSON(getV1LocationsLocationIdResponse: GetV1LocationsLocationIdResponse): string;
export declare function getV1LocationsLocationIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1LocationsLocationIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1locationslocationid.d.ts.map