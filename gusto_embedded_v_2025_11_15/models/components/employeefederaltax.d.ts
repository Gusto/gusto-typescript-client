import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The version of w4 form.
 */
export declare const W4DataType: {
    readonly Pre2020W4: "pre_2020_w4";
    readonly Rev2020W4: "rev_2020_w4";
};
/**
 * The version of w4 form.
 */
export type W4DataType = ClosedEnum<typeof W4DataType>;
/**
 * Example response
 */
export type EmployeeFederalTax = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * It determines which tax return form an individual will use and is an important factor in computing taxable income. One of:
     *
     * @remarks
     * - Single
     * - Married
     * - Head of Household
     * - Exempt from withholding
     * - Married, but withhold as Single (does not apply to rev_2020_w4 form)
     */
    filingStatus: string;
    /**
     * An employee can request an additional amount to be withheld from each paycheck.
     */
    extraWithholding: string | null;
    /**
     * If there are only two jobs (i.e., you and your spouse each have a job, or you have two), you can set it to true.
     */
    twoJobs: boolean | null;
    /**
     * A dependent is a person other than the taxpayer or spouse who entitles the taxpayer to claim a dependency exemption.
     */
    dependentsAmount: string | null;
    /**
     * Other income amount.
     */
    otherIncome: string | null;
    /**
     * Deductions other than the standard deduction to reduce withholding.
     */
    deductions: string | null;
    /**
     * The version of w4 form.
     */
    w4DataType: W4DataType;
    /**
     * *does not apply to rev_2020_w4 form*
     *
     * @remarks
     *
     * An exemption from paying a certain amount of income tax.
     */
    federalWithholdingAllowance?: number | undefined;
    /**
     * *does not apply to rev_2020_w4 form*
     */
    additionalWithholding?: boolean | undefined;
};
/** @internal */
export declare const W4DataType$inboundSchema: z.ZodNativeEnum<typeof W4DataType>;
/** @internal */
export declare const W4DataType$outboundSchema: z.ZodNativeEnum<typeof W4DataType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace W4DataType$ {
    /** @deprecated use `W4DataType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pre2020W4: "pre_2020_w4";
        readonly Rev2020W4: "rev_2020_w4";
    }>;
    /** @deprecated use `W4DataType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pre2020W4: "pre_2020_w4";
        readonly Rev2020W4: "rev_2020_w4";
    }>;
}
/** @internal */
export declare const EmployeeFederalTax$inboundSchema: z.ZodType<EmployeeFederalTax, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeFederalTax$Outbound = {
    version: string;
    filing_status: string;
    extra_withholding: string | null;
    two_jobs: boolean | null;
    dependents_amount: string | null;
    other_income: string | null;
    deductions: string | null;
    w4_data_type: string;
    federal_withholding_allowance?: number | undefined;
    additional_withholding?: boolean | undefined;
};
/** @internal */
export declare const EmployeeFederalTax$outboundSchema: z.ZodType<EmployeeFederalTax$Outbound, z.ZodTypeDef, EmployeeFederalTax>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeFederalTax$ {
    /** @deprecated use `EmployeeFederalTax$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeFederalTax, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeFederalTax$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeFederalTax$Outbound, z.ZodTypeDef, EmployeeFederalTax>;
    /** @deprecated use `EmployeeFederalTax$Outbound` instead. */
    type Outbound = EmployeeFederalTax$Outbound;
}
export declare function employeeFederalTaxToJSON(employeeFederalTax: EmployeeFederalTax): string;
export declare function employeeFederalTaxFromJSON(jsonString: string): SafeParseResult<EmployeeFederalTax, SDKValidationError>;
//# sourceMappingURL=employeefederaltax.d.ts.map