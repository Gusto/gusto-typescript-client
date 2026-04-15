import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of a company benefit.
 */
export type CompanyBenefit = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The number of employees enrolled in the benefit, only returned when enrollment_count query param is set to true.
     */
    enrollmentCount?: number | undefined;
    /**
     * The UUID of the company.
     */
    companyUuid?: string | undefined;
    /**
     * The UUID of the company benefit.
     */
    uuid: string;
    /**
     * The type of the benefit to which the company benefit belongs.
     */
    benefitType?: number | undefined;
    /**
     * Whether this benefit is active for employee participation. Company benefits may only be deactivated if no employees are actively participating.
     */
    active?: boolean | undefined;
    /**
     * The description of the company benefit. For example, a company may offer multiple benefits with an ID of 1 (for Medical Insurance). The description would show something more specific like “Kaiser Permanente” or “Blue Cross/ Blue Shield”.
     */
    description?: string | undefined;
    /**
     * Whether this company benefit can be deleted. Deletable will be set to true if the benefit has not been used in payroll, has no employee benefits associated, and the benefit is not owned by Gusto or a Partner
     */
    deletable?: boolean | undefined;
    /**
     * Whether employee deductions and company contributions can be set as percentages of payroll for an individual employee. This is determined by the type of benefit and is not configurable by the company.
     */
    supportsPercentageAmounts?: boolean | undefined;
    /**
     * Whether the employer is subject to pay employer taxes when an employee is on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployerTaxes?: boolean | undefined;
    /**
     * Whether the employer is subject to file W-2 forms for an employee on leave. Only applicable to third party sick pay benefits.
     */
    responsibleForEmployeeW2?: boolean | undefined;
};
/** @internal */
export declare const CompanyBenefit$inboundSchema: z.ZodType<CompanyBenefit, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyBenefit$Outbound = {
    version?: string | undefined;
    enrollment_count?: number | undefined;
    company_uuid?: string | undefined;
    uuid: string;
    benefit_type?: number | undefined;
    active: boolean;
    description?: string | undefined;
    deletable?: boolean | undefined;
    supports_percentage_amounts?: boolean | undefined;
    responsible_for_employer_taxes?: boolean | undefined;
    responsible_for_employee_w2?: boolean | undefined;
};
/** @internal */
export declare const CompanyBenefit$outboundSchema: z.ZodType<CompanyBenefit$Outbound, z.ZodTypeDef, CompanyBenefit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyBenefit$ {
    /** @deprecated use `CompanyBenefit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyBenefit, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyBenefit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyBenefit$Outbound, z.ZodTypeDef, CompanyBenefit>;
    /** @deprecated use `CompanyBenefit$Outbound` instead. */
    type Outbound = CompanyBenefit$Outbound;
}
export declare function companyBenefitToJSON(companyBenefit: CompanyBenefit): string;
export declare function companyBenefitFromJSON(jsonString: string): SafeParseResult<CompanyBenefit, SDKValidationError>;
//# sourceMappingURL=companybenefit.d.ts.map