import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.
 */
export declare const Status: {
    readonly Unprocessed: "unprocessed";
    readonly Processed: "processed";
};
/**
 * The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.
 */
export type Status = ClosedEnum<typeof Status>;
export type Earnings = {
    amount?: string | undefined;
    hours?: string | undefined;
    earningType?: string | undefined;
    earningId?: number | undefined;
};
export type ExternalPayrollBenefits = {
    benefitId?: number | undefined;
    companyContributionAmount?: string | undefined;
    employeeDeductionAmount?: string | undefined;
};
export type ExternalPayrollTaxes = {
    taxId?: number | undefined;
    amount?: string | undefined;
};
export type ExternalPayrollItems = {
    employeeUuid?: string | undefined;
    earnings?: Array<Earnings> | undefined;
    benefits?: Array<ExternalPayrollBenefits> | undefined;
    taxes?: Array<ExternalPayrollTaxes> | undefined;
};
export type ApplicableEarnings = {
    earningType?: string | undefined;
    earningId?: number | undefined;
    name?: string | undefined;
    inputType?: string | undefined;
    category?: string | undefined;
};
export type ApplicableBenefits = {
    id?: number | undefined;
    description?: string | undefined;
    active?: boolean | undefined;
};
export type ApplicableTaxes = {
    id?: number | undefined;
    name?: string | undefined;
    /**
     * Some taxes may have an amount withheld from the employee and an amount withheld from the employer, e.g. Social Security. A `true` value indicates this is the employer's amount.
     */
    employerTax?: boolean | undefined;
    /**
     * Some taxes may have different rates or reporting requirements depending on if the employee is a resident or non-resident of the tax jurisdiction.
     */
    residentTax?: boolean | undefined;
};
/**
 * Stores metadata of the external payroll.
 */
export type ExternalPayrollMetadata = {
    /**
     * Determines if the external payroll can be deleted.
     */
    deletable?: boolean | undefined;
};
/**
 * The representation of an external payroll.
 */
export type ExternalPayroll = {
    /**
     * The UUID of the external payroll.
     */
    uuid: string;
    /**
     * The UUID of the company.
     */
    companyUuid?: string | undefined;
    /**
     * External payroll's check date.
     */
    checkDate?: string | undefined;
    /**
     * External payroll's pay period start date.
     */
    paymentPeriodStartDate?: string | undefined;
    /**
     * External payroll's pay period end date.
     */
    paymentPeriodEndDate?: string | undefined;
    /**
     * The status of the external payroll. The status will be `unprocessed` when the external payroll is created and transition to `processed` once tax liabilities are entered and finalized.  Once in the `processed` status all actions that can edit an external payroll will be disabled.
     */
    status?: Status | undefined;
    /**
     * External payroll items for employees
     */
    externalPayrollItems?: Array<ExternalPayrollItems> | undefined;
    /**
     * Applicable earnings based on company provisioning.
     */
    applicableEarnings?: Array<ApplicableEarnings> | undefined;
    /**
     * Applicable benefits based on company provisioning.
     */
    applicableBenefits?: Array<ApplicableBenefits> | undefined;
    /**
     * Applicable taxes based on company provisioning.
     */
    applicableTaxes?: Array<ApplicableTaxes> | undefined;
    /**
     * Stores metadata of the external payroll.
     */
    metadata?: ExternalPayrollMetadata | undefined;
};
/** @internal */
export declare const Status$inboundSchema: z.ZodNativeEnum<typeof Status>;
/** @internal */
export declare const Status$outboundSchema: z.ZodNativeEnum<typeof Status>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Unprocessed: "unprocessed";
        readonly Processed: "processed";
    }>;
    /** @deprecated use `Status$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Unprocessed: "unprocessed";
        readonly Processed: "processed";
    }>;
}
/** @internal */
export declare const Earnings$inboundSchema: z.ZodType<Earnings, z.ZodTypeDef, unknown>;
/** @internal */
export type Earnings$Outbound = {
    amount?: string | undefined;
    hours?: string | undefined;
    earning_type?: string | undefined;
    earning_id?: number | undefined;
};
/** @internal */
export declare const Earnings$outboundSchema: z.ZodType<Earnings$Outbound, z.ZodTypeDef, Earnings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Earnings$ {
    /** @deprecated use `Earnings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Earnings, z.ZodTypeDef, unknown>;
    /** @deprecated use `Earnings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Earnings$Outbound, z.ZodTypeDef, Earnings>;
    /** @deprecated use `Earnings$Outbound` instead. */
    type Outbound = Earnings$Outbound;
}
export declare function earningsToJSON(earnings: Earnings): string;
export declare function earningsFromJSON(jsonString: string): SafeParseResult<Earnings, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollBenefits$inboundSchema: z.ZodType<ExternalPayrollBenefits, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollBenefits$Outbound = {
    benefit_id?: number | undefined;
    company_contribution_amount?: string | undefined;
    employee_deduction_amount?: string | undefined;
};
/** @internal */
export declare const ExternalPayrollBenefits$outboundSchema: z.ZodType<ExternalPayrollBenefits$Outbound, z.ZodTypeDef, ExternalPayrollBenefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollBenefits$ {
    /** @deprecated use `ExternalPayrollBenefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollBenefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollBenefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollBenefits$Outbound, z.ZodTypeDef, ExternalPayrollBenefits>;
    /** @deprecated use `ExternalPayrollBenefits$Outbound` instead. */
    type Outbound = ExternalPayrollBenefits$Outbound;
}
export declare function externalPayrollBenefitsToJSON(externalPayrollBenefits: ExternalPayrollBenefits): string;
export declare function externalPayrollBenefitsFromJSON(jsonString: string): SafeParseResult<ExternalPayrollBenefits, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollTaxes$inboundSchema: z.ZodType<ExternalPayrollTaxes, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollTaxes$Outbound = {
    tax_id?: number | undefined;
    amount?: string | undefined;
};
/** @internal */
export declare const ExternalPayrollTaxes$outboundSchema: z.ZodType<ExternalPayrollTaxes$Outbound, z.ZodTypeDef, ExternalPayrollTaxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollTaxes$ {
    /** @deprecated use `ExternalPayrollTaxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollTaxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollTaxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollTaxes$Outbound, z.ZodTypeDef, ExternalPayrollTaxes>;
    /** @deprecated use `ExternalPayrollTaxes$Outbound` instead. */
    type Outbound = ExternalPayrollTaxes$Outbound;
}
export declare function externalPayrollTaxesToJSON(externalPayrollTaxes: ExternalPayrollTaxes): string;
export declare function externalPayrollTaxesFromJSON(jsonString: string): SafeParseResult<ExternalPayrollTaxes, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollItems$inboundSchema: z.ZodType<ExternalPayrollItems, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollItems$Outbound = {
    employee_uuid?: string | undefined;
    earnings?: Array<Earnings$Outbound> | undefined;
    benefits?: Array<ExternalPayrollBenefits$Outbound> | undefined;
    taxes?: Array<ExternalPayrollTaxes$Outbound> | undefined;
};
/** @internal */
export declare const ExternalPayrollItems$outboundSchema: z.ZodType<ExternalPayrollItems$Outbound, z.ZodTypeDef, ExternalPayrollItems>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollItems$ {
    /** @deprecated use `ExternalPayrollItems$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollItems, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollItems$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollItems$Outbound, z.ZodTypeDef, ExternalPayrollItems>;
    /** @deprecated use `ExternalPayrollItems$Outbound` instead. */
    type Outbound = ExternalPayrollItems$Outbound;
}
export declare function externalPayrollItemsToJSON(externalPayrollItems: ExternalPayrollItems): string;
export declare function externalPayrollItemsFromJSON(jsonString: string): SafeParseResult<ExternalPayrollItems, SDKValidationError>;
/** @internal */
export declare const ApplicableEarnings$inboundSchema: z.ZodType<ApplicableEarnings, z.ZodTypeDef, unknown>;
/** @internal */
export type ApplicableEarnings$Outbound = {
    earning_type?: string | undefined;
    earning_id?: number | undefined;
    name?: string | undefined;
    input_type?: string | undefined;
    category?: string | undefined;
};
/** @internal */
export declare const ApplicableEarnings$outboundSchema: z.ZodType<ApplicableEarnings$Outbound, z.ZodTypeDef, ApplicableEarnings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApplicableEarnings$ {
    /** @deprecated use `ApplicableEarnings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApplicableEarnings, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApplicableEarnings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApplicableEarnings$Outbound, z.ZodTypeDef, ApplicableEarnings>;
    /** @deprecated use `ApplicableEarnings$Outbound` instead. */
    type Outbound = ApplicableEarnings$Outbound;
}
export declare function applicableEarningsToJSON(applicableEarnings: ApplicableEarnings): string;
export declare function applicableEarningsFromJSON(jsonString: string): SafeParseResult<ApplicableEarnings, SDKValidationError>;
/** @internal */
export declare const ApplicableBenefits$inboundSchema: z.ZodType<ApplicableBenefits, z.ZodTypeDef, unknown>;
/** @internal */
export type ApplicableBenefits$Outbound = {
    id?: number | undefined;
    description?: string | undefined;
    active?: boolean | undefined;
};
/** @internal */
export declare const ApplicableBenefits$outboundSchema: z.ZodType<ApplicableBenefits$Outbound, z.ZodTypeDef, ApplicableBenefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApplicableBenefits$ {
    /** @deprecated use `ApplicableBenefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApplicableBenefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApplicableBenefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApplicableBenefits$Outbound, z.ZodTypeDef, ApplicableBenefits>;
    /** @deprecated use `ApplicableBenefits$Outbound` instead. */
    type Outbound = ApplicableBenefits$Outbound;
}
export declare function applicableBenefitsToJSON(applicableBenefits: ApplicableBenefits): string;
export declare function applicableBenefitsFromJSON(jsonString: string): SafeParseResult<ApplicableBenefits, SDKValidationError>;
/** @internal */
export declare const ApplicableTaxes$inboundSchema: z.ZodType<ApplicableTaxes, z.ZodTypeDef, unknown>;
/** @internal */
export type ApplicableTaxes$Outbound = {
    id?: number | undefined;
    name?: string | undefined;
    employer_tax?: boolean | undefined;
    resident_tax?: boolean | undefined;
};
/** @internal */
export declare const ApplicableTaxes$outboundSchema: z.ZodType<ApplicableTaxes$Outbound, z.ZodTypeDef, ApplicableTaxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApplicableTaxes$ {
    /** @deprecated use `ApplicableTaxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApplicableTaxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApplicableTaxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApplicableTaxes$Outbound, z.ZodTypeDef, ApplicableTaxes>;
    /** @deprecated use `ApplicableTaxes$Outbound` instead. */
    type Outbound = ApplicableTaxes$Outbound;
}
export declare function applicableTaxesToJSON(applicableTaxes: ApplicableTaxes): string;
export declare function applicableTaxesFromJSON(jsonString: string): SafeParseResult<ApplicableTaxes, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollMetadata$inboundSchema: z.ZodType<ExternalPayrollMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollMetadata$Outbound = {
    deletable?: boolean | undefined;
};
/** @internal */
export declare const ExternalPayrollMetadata$outboundSchema: z.ZodType<ExternalPayrollMetadata$Outbound, z.ZodTypeDef, ExternalPayrollMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollMetadata$ {
    /** @deprecated use `ExternalPayrollMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollMetadata$Outbound, z.ZodTypeDef, ExternalPayrollMetadata>;
    /** @deprecated use `ExternalPayrollMetadata$Outbound` instead. */
    type Outbound = ExternalPayrollMetadata$Outbound;
}
export declare function externalPayrollMetadataToJSON(externalPayrollMetadata: ExternalPayrollMetadata): string;
export declare function externalPayrollMetadataFromJSON(jsonString: string): SafeParseResult<ExternalPayrollMetadata, SDKValidationError>;
/** @internal */
export declare const ExternalPayroll$inboundSchema: z.ZodType<ExternalPayroll, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayroll$Outbound = {
    uuid: string;
    company_uuid?: string | undefined;
    check_date?: string | undefined;
    payment_period_start_date?: string | undefined;
    payment_period_end_date?: string | undefined;
    status?: string | undefined;
    external_payroll_items?: Array<ExternalPayrollItems$Outbound> | undefined;
    applicable_earnings?: Array<ApplicableEarnings$Outbound> | undefined;
    applicable_benefits?: Array<ApplicableBenefits$Outbound> | undefined;
    applicable_taxes?: Array<ApplicableTaxes$Outbound> | undefined;
    metadata?: ExternalPayrollMetadata$Outbound | undefined;
};
/** @internal */
export declare const ExternalPayroll$outboundSchema: z.ZodType<ExternalPayroll$Outbound, z.ZodTypeDef, ExternalPayroll>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayroll$ {
    /** @deprecated use `ExternalPayroll$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayroll, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayroll$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayroll$Outbound, z.ZodTypeDef, ExternalPayroll>;
    /** @deprecated use `ExternalPayroll$Outbound` instead. */
    type Outbound = ExternalPayroll$Outbound;
}
export declare function externalPayrollToJSON(externalPayroll: ExternalPayroll): string;
export declare function externalPayrollFromJSON(jsonString: string): SafeParseResult<ExternalPayroll, SDKValidationError>;
//# sourceMappingURL=externalpayroll.d.ts.map