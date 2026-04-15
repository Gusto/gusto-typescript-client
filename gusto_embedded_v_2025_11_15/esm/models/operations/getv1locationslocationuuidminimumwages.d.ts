import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { MinimumWage } from "../components/minimumwage.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion>;
export type GetV1LocationsLocationUuidMinimumWagesRequest = {
    /**
     * The UUID of the location
     */
    locationUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion | undefined;
    effectiveDate?: string | undefined;
};
export type GetV1LocationsLocationUuidMinimumWagesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    minimumWageList?: Array<MinimumWage> | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1LocationsLocationUuidMinimumWagesHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1LocationsLocationUuidMinimumWagesRequest$Outbound = {
    location_uuid: string;
    "X-Gusto-API-Version": string;
    effective_date?: string | undefined;
};
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesRequest$outboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesRequest$Outbound, z.ZodTypeDef, GetV1LocationsLocationUuidMinimumWagesRequest>;
export declare function getV1LocationsLocationUuidMinimumWagesRequestToJSON(getV1LocationsLocationUuidMinimumWagesRequest: GetV1LocationsLocationUuidMinimumWagesRequest): string;
/** @internal */
export declare const GetV1LocationsLocationUuidMinimumWagesResponse$inboundSchema: z.ZodType<GetV1LocationsLocationUuidMinimumWagesResponse, z.ZodTypeDef, unknown>;
export declare function getV1LocationsLocationUuidMinimumWagesResponseFromJSON(jsonString: string): SafeParseResult<GetV1LocationsLocationUuidMinimumWagesResponse, SDKValidationError>;
//# sourceMappingURL=getv1locationslocationuuidminimumwages.d.ts.map