import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdCompanyBenefitsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Whether the benefit is currently active
     */
    active?: boolean | undefined;
    /**
     * Whether to return employee enrollment count
     */
    enrollmentCount?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdCompanyBenefitsResponse = {
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
    companyBenefitList?: Array<components.CompanyBenefit> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
    company_id: string;
    active?: boolean | undefined;
    enrollment_count?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCompanyBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdCompanyBenefitsRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCompanyBenefitsRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(getV1CompaniesCompanyIdCompanyBenefitsRequest: GetV1CompaniesCompanyIdCompanyBenefitsRequest): string;
export declare function getV1CompaniesCompanyIdCompanyBenefitsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCompanyBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Benefit-List"?: Array<components.CompanyBenefit$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCompanyBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdCompanyBenefitsResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCompanyBenefitsResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdCompanyBenefitsResponseToJSON(getV1CompaniesCompanyIdCompanyBenefitsResponse: GetV1CompaniesCompanyIdCompanyBenefitsResponse): string;
export declare function getV1CompaniesCompanyIdCompanyBenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCompanyBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcompanybenefits.d.ts.map