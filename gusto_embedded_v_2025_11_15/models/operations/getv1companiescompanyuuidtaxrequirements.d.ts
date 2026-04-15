import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyUuidTaxRequirementsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type ResponseBody = {
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     */
    state: string;
    /**
     * If all requirements for the state have been satisfied such that the company can complete
     *
     * @remarks
     * onboarding, the company is `setup_complete` in the state. A company must be `setup_complete` in
     * all relevant states to complete the `state_setup` company onboarding step.
     */
    setupComplete: boolean;
};
export type GetV1CompaniesCompanyUuidTaxRequirementsResponse = {
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
    responseBodies?: Array<ResponseBody> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidTaxRequirementsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidTaxRequirementsRequest$Outbound;
}
export declare function getV1CompaniesCompanyUuidTaxRequirementsRequestToJSON(getV1CompaniesCompanyUuidTaxRequirementsRequest: GetV1CompaniesCompanyUuidTaxRequirementsRequest): string;
export declare function getV1CompaniesCompanyUuidTaxRequirementsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsRequest, SDKValidationError>;
/** @internal */
export declare const ResponseBody$inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseBody$Outbound = {
    state: string;
    setup_complete: boolean;
};
/** @internal */
export declare const ResponseBody$outboundSchema: z.ZodType<ResponseBody$Outbound, z.ZodTypeDef, ResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseBody$ {
    /** @deprecated use `ResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseBody$Outbound, z.ZodTypeDef, ResponseBody>;
    /** @deprecated use `ResponseBody$Outbound` instead. */
    type Outbound = ResponseBody$Outbound;
}
export declare function responseBodyToJSON(responseBody: ResponseBody): string;
export declare function responseBodyFromJSON(jsonString: string): SafeParseResult<ResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    responseBodies?: Array<ResponseBody$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyUuidTaxRequirementsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyUuidTaxRequirementsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyUuidTaxRequirementsResponse$Outbound;
}
export declare function getV1CompaniesCompanyUuidTaxRequirementsResponseToJSON(getV1CompaniesCompanyUuidTaxRequirementsResponse: GetV1CompaniesCompanyUuidTaxRequirementsResponse): string;
export declare function getV1CompaniesCompanyUuidTaxRequirementsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyUuidTaxRequirementsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyuuidtaxrequirements.d.ts.map