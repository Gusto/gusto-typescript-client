import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
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
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
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
    employeeBenefitList?: Array<components.EmployeeBenefit> | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound = {
    company_benefit_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$ {
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound` instead. */
    type Outbound = GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound;
}
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest): string;
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit-List"?: Array<components.EmployeeBenefit$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$ {
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
    /** @deprecated use `GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound` instead. */
    type Outbound = GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound;
}
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseToJSON(getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse): string;
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companybenefitscompanybenefitidemployeebenefits.d.ts.map