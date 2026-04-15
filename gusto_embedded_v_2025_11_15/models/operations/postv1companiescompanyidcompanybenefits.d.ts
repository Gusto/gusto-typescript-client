import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdCompanyBenefitsRequestBody = {
    /**
     * The ID of the benefit to which the company benefit belongs.
     */
    benefitType?: number | undefined;
    /**
     * Whether this benefit is active for employee participation.
     */
    active?: boolean | undefined;
    /**
     * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    description: string;
    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployerTaxes?: boolean | undefined;
    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployeeW2?: boolean | undefined;
};
export type PostV1CompaniesCompanyIdCompanyBenefitsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody;
};
export type PostV1CompaniesCompanyIdCompanyBenefitsResponse = {
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
    companyBenefit?: components.CompanyBenefit | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound = {
    benefit_type?: number | undefined;
    active: boolean;
    description: string;
    responsible_for_employer_taxes?: boolean | undefined;
    responsible_for_employee_w2?: boolean | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestBodyToJSON(postV1CompaniesCompanyIdCompanyBenefitsRequestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody): string;
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdCompanyBenefitsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(postV1CompaniesCompanyIdCompanyBenefitsRequest: PostV1CompaniesCompanyIdCompanyBenefitsRequest): string;
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdCompanyBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Benefit"?: components.CompanyBenefit$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdCompanyBenefitsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdCompanyBenefitsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdCompanyBenefitsResponseToJSON(postV1CompaniesCompanyIdCompanyBenefitsResponse: PostV1CompaniesCompanyIdCompanyBenefitsResponse): string;
export declare function postV1CompaniesCompanyIdCompanyBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdCompanyBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcompanybenefits.d.ts.map