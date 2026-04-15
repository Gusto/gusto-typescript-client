import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyBenefit } from "../components/companybenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.
 */
export declare const CatchUpType: {
    readonly Elective: "elective";
    readonly Deemed: "deemed";
};
/**
 * The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.
 */
export type CatchUpType = ClosedEnum<typeof CatchUpType>;
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
    /**
     * The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.
     */
    catchUpType?: CatchUpType | null | undefined;
};
export type PostV1CompaniesCompanyIdCompanyBenefitsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody;
};
export type PostV1CompaniesCompanyIdCompanyBenefitsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyBenefit?: CompanyBenefit | undefined;
};
/** @internal */
export declare const CatchUpType$outboundSchema: z.ZodNativeEnum<typeof CatchUpType>;
/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound = {
    benefit_type?: number | undefined;
    active: boolean;
    description: string;
    responsible_for_employer_taxes?: boolean | undefined;
    responsible_for_employee_w2?: boolean | undefined;
    catch_up_type?: string | null | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequestBody>;
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestBodyToJSON(postV1CompaniesCompanyIdCompanyBenefitsRequestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdCompanyBenefitsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdCompanyBenefitsRequest>;
export declare function postV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(postV1CompaniesCompanyIdCompanyBenefitsRequest: PostV1CompaniesCompanyIdCompanyBenefitsRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdCompanyBenefitsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdCompanyBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcompanybenefits.d.ts.map