import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * The amount to be deducted, per pay period, from the employee's pay.
 */
export type EmployeeDeduction = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: DefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * An object representing the type and value of the company contribution.
 */
export type BenefitTypeRequirementsContribution = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsDeductAsPercentageDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.
 */
export type DeductAsPercentage = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsDeductAsPercentageDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsCatchUpDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * Whether the employee should use a benefit’s 'catch up' rate. Only Roth 401k and 401k benefits use this value for employees over 50.
 */
export type CatchUp = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsCatchUpDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsLimitOptionDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either 'Family' or 'Individual'. For a Dependent Care FSA benefit, the limit option should be either 'Joint Filing or Single' or 'Married and Filing Separately'.
 */
export type LimitOption = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsLimitOptionDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * The maximum company contribution amount per year. A null value signifies no limit.
 */
export type CompanyContributionAnnualMaximum = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * The coverage amount as a multiple of the employee's salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
 */
export type CoverageSalaryMultiplier = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
export type BenefitTypeRequirementsCoverageAmountDefaultValue = {
    value?: string | undefined;
    type?: string | undefined;
};
/**
 * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
 */
export type CoverageAmount = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    defaultValue?: BenefitTypeRequirementsCoverageAmountDefaultValue | undefined;
    choices?: Array<string> | undefined;
};
/**
 * Benefit type requirements response
 */
export type BenefitTypeRequirements = {
    /**
     * The amount to be deducted, per pay period, from the employee's pay.
     */
    employeeDeduction?: EmployeeDeduction | undefined;
    /**
     * An object representing the type and value of the company contribution.
     */
    contribution?: BenefitTypeRequirementsContribution | undefined;
    /**
     * Whether the employee deduction amount should be treated as a percentage to be deducted from each payroll.
     */
    deductAsPercentage?: DeductAsPercentage | undefined;
    /**
     * Whether the employee should use a benefit’s 'catch up' rate. Only Roth 401k and 401k benefits use this value for employees over 50.
     */
    catchUp?: CatchUp | undefined;
    /**
     * Some benefits require additional information to determine their limit. For example, for an HSA benefit, the limit option should be either 'Family' or 'Individual'. For a Dependent Care FSA benefit, the limit option should be either 'Joint Filing or Single' or 'Married and Filing Separately'.
     */
    limitOption?: LimitOption | undefined;
    /**
     * The maximum company contribution amount per year. A null value signifies no limit.
     */
    companyContributionAnnualMaximum?: CompanyContributionAnnualMaximum | undefined;
    /**
     * The coverage amount as a multiple of the employee's salary. Only applicable for Group Term Life benefits. Note: cannot be set if coverage amount is also set.
     */
    coverageSalaryMultiplier?: CoverageSalaryMultiplier | undefined;
    /**
     * The amount that the employee is insured for. Note: company contribution cannot be present if coverage amount is set.
     */
    coverageAmount?: CoverageAmount | undefined;
};
/** @internal */
export declare const DefaultValue$inboundSchema: z.ZodType<DefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type DefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const DefaultValue$outboundSchema: z.ZodType<DefaultValue$Outbound, z.ZodTypeDef, DefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DefaultValue$ {
    /** @deprecated use `DefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `DefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DefaultValue$Outbound, z.ZodTypeDef, DefaultValue>;
    /** @deprecated use `DefaultValue$Outbound` instead. */
    type Outbound = DefaultValue$Outbound;
}
export declare function defaultValueToJSON(defaultValue: DefaultValue): string;
export declare function defaultValueFromJSON(jsonString: string): SafeParseResult<DefaultValue, SDKValidationError>;
/** @internal */
export declare const EmployeeDeduction$inboundSchema: z.ZodType<EmployeeDeduction, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeDeduction$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: DefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const EmployeeDeduction$outboundSchema: z.ZodType<EmployeeDeduction$Outbound, z.ZodTypeDef, EmployeeDeduction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeDeduction$ {
    /** @deprecated use `EmployeeDeduction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeDeduction, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeDeduction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeDeduction$Outbound, z.ZodTypeDef, EmployeeDeduction>;
    /** @deprecated use `EmployeeDeduction$Outbound` instead. */
    type Outbound = EmployeeDeduction$Outbound;
}
export declare function employeeDeductionToJSON(employeeDeduction: EmployeeDeduction): string;
export declare function employeeDeductionFromJSON(jsonString: string): SafeParseResult<EmployeeDeduction, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsDefaultValueToJSON(benefitTypeRequirementsDefaultValue: BenefitTypeRequirementsDefaultValue): string;
export declare function benefitTypeRequirementsDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsDefaultValue, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsContribution$inboundSchema: z.ZodType<BenefitTypeRequirementsContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsContribution$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsContribution$outboundSchema: z.ZodType<BenefitTypeRequirementsContribution$Outbound, z.ZodTypeDef, BenefitTypeRequirementsContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsContribution$ {
    /** @deprecated use `BenefitTypeRequirementsContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsContribution$Outbound, z.ZodTypeDef, BenefitTypeRequirementsContribution>;
    /** @deprecated use `BenefitTypeRequirementsContribution$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsContribution$Outbound;
}
export declare function benefitTypeRequirementsContributionToJSON(benefitTypeRequirementsContribution: BenefitTypeRequirementsContribution): string;
export declare function benefitTypeRequirementsContributionFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsContribution, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsDeductAsPercentageDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsDeductAsPercentageDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsDeductAsPercentageDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsDeductAsPercentageDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsDeductAsPercentageDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsDeductAsPercentageDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsDeductAsPercentageDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsDeductAsPercentageDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsDeductAsPercentageDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsDeductAsPercentageDefaultValueToJSON(benefitTypeRequirementsDeductAsPercentageDefaultValue: BenefitTypeRequirementsDeductAsPercentageDefaultValue): string;
export declare function benefitTypeRequirementsDeductAsPercentageDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsDeductAsPercentageDefaultValue, SDKValidationError>;
/** @internal */
export declare const DeductAsPercentage$inboundSchema: z.ZodType<DeductAsPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type DeductAsPercentage$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsDeductAsPercentageDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const DeductAsPercentage$outboundSchema: z.ZodType<DeductAsPercentage$Outbound, z.ZodTypeDef, DeductAsPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeductAsPercentage$ {
    /** @deprecated use `DeductAsPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeductAsPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeductAsPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeductAsPercentage$Outbound, z.ZodTypeDef, DeductAsPercentage>;
    /** @deprecated use `DeductAsPercentage$Outbound` instead. */
    type Outbound = DeductAsPercentage$Outbound;
}
export declare function deductAsPercentageToJSON(deductAsPercentage: DeductAsPercentage): string;
export declare function deductAsPercentageFromJSON(jsonString: string): SafeParseResult<DeductAsPercentage, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsCatchUpDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsCatchUpDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsCatchUpDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsCatchUpDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsCatchUpDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCatchUpDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsCatchUpDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsCatchUpDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsCatchUpDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsCatchUpDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsCatchUpDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCatchUpDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsCatchUpDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsCatchUpDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsCatchUpDefaultValueToJSON(benefitTypeRequirementsCatchUpDefaultValue: BenefitTypeRequirementsCatchUpDefaultValue): string;
export declare function benefitTypeRequirementsCatchUpDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsCatchUpDefaultValue, SDKValidationError>;
/** @internal */
export declare const CatchUp$inboundSchema: z.ZodType<CatchUp, z.ZodTypeDef, unknown>;
/** @internal */
export type CatchUp$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsCatchUpDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const CatchUp$outboundSchema: z.ZodType<CatchUp$Outbound, z.ZodTypeDef, CatchUp>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CatchUp$ {
    /** @deprecated use `CatchUp$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CatchUp, z.ZodTypeDef, unknown>;
    /** @deprecated use `CatchUp$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CatchUp$Outbound, z.ZodTypeDef, CatchUp>;
    /** @deprecated use `CatchUp$Outbound` instead. */
    type Outbound = CatchUp$Outbound;
}
export declare function catchUpToJSON(catchUp: CatchUp): string;
export declare function catchUpFromJSON(jsonString: string): SafeParseResult<CatchUp, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsLimitOptionDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsLimitOptionDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsLimitOptionDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsLimitOptionDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsLimitOptionDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsLimitOptionDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsLimitOptionDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsLimitOptionDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsLimitOptionDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsLimitOptionDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsLimitOptionDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsLimitOptionDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsLimitOptionDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsLimitOptionDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsLimitOptionDefaultValueToJSON(benefitTypeRequirementsLimitOptionDefaultValue: BenefitTypeRequirementsLimitOptionDefaultValue): string;
export declare function benefitTypeRequirementsLimitOptionDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsLimitOptionDefaultValue, SDKValidationError>;
/** @internal */
export declare const LimitOption$inboundSchema: z.ZodType<LimitOption, z.ZodTypeDef, unknown>;
/** @internal */
export type LimitOption$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsLimitOptionDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const LimitOption$outboundSchema: z.ZodType<LimitOption$Outbound, z.ZodTypeDef, LimitOption>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LimitOption$ {
    /** @deprecated use `LimitOption$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LimitOption, z.ZodTypeDef, unknown>;
    /** @deprecated use `LimitOption$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LimitOption$Outbound, z.ZodTypeDef, LimitOption>;
    /** @deprecated use `LimitOption$Outbound` instead. */
    type Outbound = LimitOption$Outbound;
}
export declare function limitOptionToJSON(limitOption: LimitOption): string;
export declare function limitOptionFromJSON(jsonString: string): SafeParseResult<LimitOption, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValueToJSON(benefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue: BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue): string;
export declare function benefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue, SDKValidationError>;
/** @internal */
export declare const CompanyContributionAnnualMaximum$inboundSchema: z.ZodType<CompanyContributionAnnualMaximum, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyContributionAnnualMaximum$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsCompanyContributionAnnualMaximumDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const CompanyContributionAnnualMaximum$outboundSchema: z.ZodType<CompanyContributionAnnualMaximum$Outbound, z.ZodTypeDef, CompanyContributionAnnualMaximum>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyContributionAnnualMaximum$ {
    /** @deprecated use `CompanyContributionAnnualMaximum$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyContributionAnnualMaximum, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyContributionAnnualMaximum$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyContributionAnnualMaximum$Outbound, z.ZodTypeDef, CompanyContributionAnnualMaximum>;
    /** @deprecated use `CompanyContributionAnnualMaximum$Outbound` instead. */
    type Outbound = CompanyContributionAnnualMaximum$Outbound;
}
export declare function companyContributionAnnualMaximumToJSON(companyContributionAnnualMaximum: CompanyContributionAnnualMaximum): string;
export declare function companyContributionAnnualMaximumFromJSON(jsonString: string): SafeParseResult<CompanyContributionAnnualMaximum, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsCoverageSalaryMultiplierDefaultValueToJSON(benefitTypeRequirementsCoverageSalaryMultiplierDefaultValue: BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue): string;
export declare function benefitTypeRequirementsCoverageSalaryMultiplierDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue, SDKValidationError>;
/** @internal */
export declare const CoverageSalaryMultiplier$inboundSchema: z.ZodType<CoverageSalaryMultiplier, z.ZodTypeDef, unknown>;
/** @internal */
export type CoverageSalaryMultiplier$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsCoverageSalaryMultiplierDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const CoverageSalaryMultiplier$outboundSchema: z.ZodType<CoverageSalaryMultiplier$Outbound, z.ZodTypeDef, CoverageSalaryMultiplier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CoverageSalaryMultiplier$ {
    /** @deprecated use `CoverageSalaryMultiplier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CoverageSalaryMultiplier, z.ZodTypeDef, unknown>;
    /** @deprecated use `CoverageSalaryMultiplier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CoverageSalaryMultiplier$Outbound, z.ZodTypeDef, CoverageSalaryMultiplier>;
    /** @deprecated use `CoverageSalaryMultiplier$Outbound` instead. */
    type Outbound = CoverageSalaryMultiplier$Outbound;
}
export declare function coverageSalaryMultiplierToJSON(coverageSalaryMultiplier: CoverageSalaryMultiplier): string;
export declare function coverageSalaryMultiplierFromJSON(jsonString: string): SafeParseResult<CoverageSalaryMultiplier, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirementsCoverageAmountDefaultValue$inboundSchema: z.ZodType<BenefitTypeRequirementsCoverageAmountDefaultValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound = {
    value?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BenefitTypeRequirementsCoverageAmountDefaultValue$outboundSchema: z.ZodType<BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCoverageAmountDefaultValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirementsCoverageAmountDefaultValue$ {
    /** @deprecated use `BenefitTypeRequirementsCoverageAmountDefaultValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirementsCoverageAmountDefaultValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirementsCoverageAmountDefaultValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound, z.ZodTypeDef, BenefitTypeRequirementsCoverageAmountDefaultValue>;
    /** @deprecated use `BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound` instead. */
    type Outbound = BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound;
}
export declare function benefitTypeRequirementsCoverageAmountDefaultValueToJSON(benefitTypeRequirementsCoverageAmountDefaultValue: BenefitTypeRequirementsCoverageAmountDefaultValue): string;
export declare function benefitTypeRequirementsCoverageAmountDefaultValueFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirementsCoverageAmountDefaultValue, SDKValidationError>;
/** @internal */
export declare const CoverageAmount$inboundSchema: z.ZodType<CoverageAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CoverageAmount$Outbound = {
    required?: boolean | undefined;
    editable?: boolean | undefined;
    default_value?: BenefitTypeRequirementsCoverageAmountDefaultValue$Outbound | undefined;
    choices?: Array<string> | undefined;
};
/** @internal */
export declare const CoverageAmount$outboundSchema: z.ZodType<CoverageAmount$Outbound, z.ZodTypeDef, CoverageAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CoverageAmount$ {
    /** @deprecated use `CoverageAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CoverageAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CoverageAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CoverageAmount$Outbound, z.ZodTypeDef, CoverageAmount>;
    /** @deprecated use `CoverageAmount$Outbound` instead. */
    type Outbound = CoverageAmount$Outbound;
}
export declare function coverageAmountToJSON(coverageAmount: CoverageAmount): string;
export declare function coverageAmountFromJSON(jsonString: string): SafeParseResult<CoverageAmount, SDKValidationError>;
/** @internal */
export declare const BenefitTypeRequirements$inboundSchema: z.ZodType<BenefitTypeRequirements, z.ZodTypeDef, unknown>;
/** @internal */
export type BenefitTypeRequirements$Outbound = {
    employee_deduction?: EmployeeDeduction$Outbound | undefined;
    contribution?: BenefitTypeRequirementsContribution$Outbound | undefined;
    deduct_as_percentage?: DeductAsPercentage$Outbound | undefined;
    catch_up?: CatchUp$Outbound | undefined;
    limit_option?: LimitOption$Outbound | undefined;
    company_contribution_annual_maximum?: CompanyContributionAnnualMaximum$Outbound | undefined;
    coverage_salary_multiplier?: CoverageSalaryMultiplier$Outbound | undefined;
    coverage_amount?: CoverageAmount$Outbound | undefined;
};
/** @internal */
export declare const BenefitTypeRequirements$outboundSchema: z.ZodType<BenefitTypeRequirements$Outbound, z.ZodTypeDef, BenefitTypeRequirements>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BenefitTypeRequirements$ {
    /** @deprecated use `BenefitTypeRequirements$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BenefitTypeRequirements, z.ZodTypeDef, unknown>;
    /** @deprecated use `BenefitTypeRequirements$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BenefitTypeRequirements$Outbound, z.ZodTypeDef, BenefitTypeRequirements>;
    /** @deprecated use `BenefitTypeRequirements$Outbound` instead. */
    type Outbound = BenefitTypeRequirements$Outbound;
}
export declare function benefitTypeRequirementsToJSON(benefitTypeRequirements: BenefitTypeRequirements): string;
export declare function benefitTypeRequirementsFromJSON(jsonString: string): SafeParseResult<BenefitTypeRequirements, SDKValidationError>;
//# sourceMappingURL=benefittyperequirements.d.ts.map