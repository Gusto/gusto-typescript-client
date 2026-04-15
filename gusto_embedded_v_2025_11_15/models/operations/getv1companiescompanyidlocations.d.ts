import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdLocationsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdLocationsResponse = {
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
    locationList?: Array<components.Location> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdLocationsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdLocationsRequest$Outbound = {
    company_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdLocationsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdLocationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdLocationsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdLocationsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdLocationsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdLocationsRequestToJSON(getV1CompaniesCompanyIdLocationsRequest: GetV1CompaniesCompanyIdLocationsRequest): string;
export declare function getV1CompaniesCompanyIdLocationsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdLocationsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdLocationsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdLocationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Location-List"?: Array<components.Location$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdLocationsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdLocationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdLocationsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdLocationsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdLocationsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdLocationsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdLocationsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdLocationsResponseToJSON(getV1CompaniesCompanyIdLocationsResponse: GetV1CompaniesCompanyIdLocationsResponse): string;
export declare function getV1CompaniesCompanyIdLocationsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdLocationsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidlocations.d.ts.map