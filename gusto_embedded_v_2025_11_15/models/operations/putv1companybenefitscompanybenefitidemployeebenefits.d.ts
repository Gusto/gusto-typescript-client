import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody = {
    /**
     * The list of employee benefits to create or update
     */
    employeeBenefits: Array<components.EmployeeBenefitForCompanyBenefit>;
};
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody;
};
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
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
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound = {
    employee_benefits: Array<components.EmployeeBenefitForCompanyBenefit$Outbound>;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBodyToJSON(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit-List"?: Array<components.EmployeeBenefit$Outbound> | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$ {
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse>;
    /** @deprecated use `PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound` instead. */
    type Outbound = PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$Outbound;
}
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseToJSON(putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse): string;
export declare function putV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companybenefitscompanybenefitidemployeebenefits.d.ts.map