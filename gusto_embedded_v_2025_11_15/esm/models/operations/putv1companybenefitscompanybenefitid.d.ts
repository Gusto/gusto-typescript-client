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
export declare const PutV1CompanyBenefitsCompanyBenefitIdCatchUpType: {
    readonly Elective: "elective";
    readonly Deemed: "deemed";
};
/**
 * The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.
 */
export type PutV1CompanyBenefitsCompanyBenefitIdCatchUpType = ClosedEnum<typeof PutV1CompanyBenefitsCompanyBenefitIdCatchUpType>;
export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
     */
    active?: boolean | undefined;
    /**
     * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    description?: string | undefined;
    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to short-term and long-term disability benefits (different from voluntary disability).
     */
    responsibleForEmployerTaxes?: boolean | undefined;
    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to short-term and long-term disability benefits (different from voluntary disability).
     */
    responsibleForEmployeeW2?: boolean | undefined;
    /**
     * The type of catch-up contribution for this benefit, as required by Section 603 of the SECURE 2.0 Act. Only applicable to pre-tax 401(k) and 403(b) benefits.
     */
    catchUpType?: PutV1CompanyBenefitsCompanyBenefitIdCatchUpType | null | undefined;
};
export type PutV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody;
};
export type PutV1CompanyBenefitsCompanyBenefitIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyBenefit?: CompanyBenefit | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdCatchUpType$outboundSchema: z.ZodNativeEnum<typeof PutV1CompanyBenefitsCompanyBenefitIdCatchUpType>;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound = {
    version: string;
    active?: boolean | undefined;
    description?: string | undefined;
    responsible_for_employer_taxes?: boolean | undefined;
    responsible_for_employee_w2?: boolean | undefined;
    catch_up_type?: string | null | undefined;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequestBody$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequestBody>;
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestBodyToJSON(putV1CompanyBenefitsCompanyBenefitIdRequestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody): string;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyBenefitsCompanyBenefitIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdRequest>;
export declare function putV1CompanyBenefitsCompanyBenefitIdRequestToJSON(putV1CompanyBenefitsCompanyBenefitIdRequest: PutV1CompanyBenefitsCompanyBenefitIdRequest): string;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1companybenefitscompanybenefitid.d.ts.map