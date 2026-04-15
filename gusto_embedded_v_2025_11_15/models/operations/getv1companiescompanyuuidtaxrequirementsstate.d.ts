import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * 2-letter US state abbreviation
     */
    state: string;
    /**
     * When true, return "new" requirement sets with valid `effective_from` dates that are available to save new effective dated values.
     */
    scheduling?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
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
     * OK
     */
    taxRequirementsState?: components.TaxRequirementsState | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound = {
    company_uuid: string;
    state: string;
    scheduling?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound;
}
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateRequestToJSON(getV1CompaniesCompanyUuidTaxRequirementsStateRequest: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest): string;
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Tax-Requirements-State"?: components.TaxRequirementsState$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound;
}
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateResponseToJSON(getV1CompaniesCompanyUuidTaxRequirementsStateResponse: GetV1CompaniesCompanyUuidTaxRequirementsStateResponse): string;
export declare function getV1CompaniesCompanyUuidTaxRequirementsStateResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidtaxrequirementsstate.d.ts.map