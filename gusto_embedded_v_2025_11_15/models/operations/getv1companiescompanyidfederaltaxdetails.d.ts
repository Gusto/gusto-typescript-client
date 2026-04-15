import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdFederalTaxDetailsResponse = {
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
    federalTaxDetails?: components.FederalTaxDetails | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdFederalTaxDetailsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdFederalTaxDetailsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdFederalTaxDetailsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdFederalTaxDetailsRequestToJSON(getV1CompaniesCompanyIdFederalTaxDetailsRequest: GetV1CompaniesCompanyIdFederalTaxDetailsRequest): string;
export declare function getV1CompaniesCompanyIdFederalTaxDetailsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdFederalTaxDetailsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Federal-Tax-Details"?: components.FederalTaxDetails$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdFederalTaxDetailsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdFederalTaxDetailsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdFederalTaxDetailsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdFederalTaxDetailsResponseToJSON(getV1CompaniesCompanyIdFederalTaxDetailsResponse: GetV1CompaniesCompanyIdFederalTaxDetailsResponse): string;
export declare function getV1CompaniesCompanyIdFederalTaxDetailsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidfederaltaxdetails.d.ts.map