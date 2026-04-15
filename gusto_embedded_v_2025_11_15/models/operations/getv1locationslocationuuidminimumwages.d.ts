import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1LocationsLocationUuidMinimumWagesRequest = {
    /**
     * The UUID of the location
     */
    locationUuid: string;
    effectiveDate?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1LocationsLocationUuidMinimumWagesResponse = {
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
    minimumWageList?: Array<components.MinimumWage> | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1LocationsLocationUuidMinimumWagesRequest$Outbound = {
    location_uuid: string;
    effective_date?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesRequest$Outbound, z.ZodTypeDef, GetV1LocationsLocationUuidMinimumWagesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1LocationsLocationUuidMinimumWagesRequest$ {
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesRequest$Outbound, z.ZodTypeDef, GetV1LocationsLocationUuidMinimumWagesRequest>;
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesRequest$Outbound` instead. */
    type Outbound = GetV1LocationsLocationUuidMinimumWagesRequest$Outbound;
}
export declare function getV1LocationsLocationUuidMinimumWagesRequestToJSON(getV1LocationsLocationUuidMinimumWagesRequest: GetV1LocationsLocationUuidMinimumWagesRequest): string;
export declare function getV1LocationsLocationUuidMinimumWagesRequestFromJSON(jsonString: string): SafeParseResult<GetV1LocationsLocationUuidMinimumWagesRequest, SDKValidationError>;
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesResponse$inboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1LocationsLocationUuidMinimumWagesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Minimum-Wage-List"?: Array<components.MinimumWage$Outbound> | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesResponse$outboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesResponse$Outbound, z.ZodTypeDef, GetV1LocationsLocationUuidMinimumWagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1LocationsLocationUuidMinimumWagesResponse$ {
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesResponse$Outbound, z.ZodTypeDef, GetV1LocationsLocationUuidMinimumWagesResponse>;
    /** @deprecated use `GetV1LocationsLocationUuidMinimumWagesResponse$Outbound` instead. */
    type Outbound = GetV1LocationsLocationUuidMinimumWagesResponse$Outbound;
}
export declare function getV1LocationsLocationUuidMinimumWagesResponseToJSON(getV1LocationsLocationUuidMinimumWagesResponse: GetV1LocationsLocationUuidMinimumWagesResponse): string;
export declare function getV1LocationsLocationUuidMinimumWagesResponseFromJSON(jsonString: string): SafeParseResult<GetV1LocationsLocationUuidMinimumWagesResponse, SDKValidationError>;
//# sourceMappingURL=getv1locationslocationuuidminimumwages.d.ts.map