import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { GarnishmentChildSupport, GarnishmentChildSupport$Outbound } from "./garnishmentchildsupport.js";
/**
 * The specific type of garnishment for court ordered garnishments.
 */
export declare const GarnishmentType: {
    readonly ChildSupport: "child_support";
    readonly FederalTaxLien: "federal_tax_lien";
    readonly StateTaxLien: "state_tax_lien";
    readonly StudentLoan: "student_loan";
    readonly CreditorGarnishment: "creditor_garnishment";
    readonly FederalLoan: "federal_loan";
    readonly OtherGarnishment: "other_garnishment";
};
/**
 * The specific type of garnishment for court ordered garnishments.
 */
export type GarnishmentType = ClosedEnum<typeof GarnishmentType>;
/**
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 */
export type Garnishment = {
    /**
     * The UUID of the garnishment in Gusto.
     */
    uuid: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID of the employee to which this garnishment belongs.
     */
    employeeUuid?: string | undefined;
    /**
     * Whether or not this garnishment is currently active.
     */
    active?: boolean | undefined;
    /**
     * The amount of the garnishment. Either a percentage or a fixed dollar amount. Represented as a float, e.g. "8.00".
     */
    amount?: string | undefined;
    /**
     * The description of the garnishment.
     */
    description?: string | undefined;
    /**
     * Whether the garnishment is court ordered.
     */
    courtOrdered?: boolean | undefined;
    /**
     * The number of times to apply the garnishment. Ignored if recurring is true.
     */
    times?: number | null | undefined;
    /**
     * Whether the garnishment should recur indefinitely.
     */
    recurring?: boolean | undefined;
    /**
     * The maximum deduction per annum. A null value indicates no maximum. Represented as a float, e.g. "200.00".
     */
    annualMaximum?: string | null | undefined;
    /**
     * A maximum total deduction for the lifetime of this garnishment. A null value indicates no maximum.
     */
    totalAmount?: string | null | undefined;
    /**
     * The maximum deduction per pay period. A null value indicates no maximum. Represented as a float, e.g. "16.00".
     */
    payPeriodMaximum?: string | null | undefined;
    /**
     * Whether the amount should be treated as a percentage to be deducted per pay period.
     */
    deductAsPercentage?: boolean | undefined;
    /**
     * The specific type of garnishment for court ordered garnishments.
     */
    garnishmentType?: GarnishmentType | null | undefined;
    /**
     * Additional child support order details
     */
    childSupport?: GarnishmentChildSupport | null | undefined;
};
/** @internal */
export declare const GarnishmentType$inboundSchema: z.ZodNativeEnum<typeof GarnishmentType>;
/** @internal */
export declare const GarnishmentType$outboundSchema: z.ZodNativeEnum<typeof GarnishmentType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GarnishmentType$ {
    /** @deprecated use `GarnishmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly ChildSupport: "child_support";
        readonly FederalTaxLien: "federal_tax_lien";
        readonly StateTaxLien: "state_tax_lien";
        readonly StudentLoan: "student_loan";
        readonly CreditorGarnishment: "creditor_garnishment";
        readonly FederalLoan: "federal_loan";
        readonly OtherGarnishment: "other_garnishment";
    }>;
    /** @deprecated use `GarnishmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly ChildSupport: "child_support";
        readonly FederalTaxLien: "federal_tax_lien";
        readonly StateTaxLien: "state_tax_lien";
        readonly StudentLoan: "student_loan";
        readonly CreditorGarnishment: "creditor_garnishment";
        readonly FederalLoan: "federal_loan";
        readonly OtherGarnishment: "other_garnishment";
    }>;
}
/** @internal */
export declare const Garnishment$inboundSchema: z.ZodType<Garnishment, z.ZodTypeDef, unknown>;
/** @internal */
export type Garnishment$Outbound = {
    uuid: string;
    version?: string | undefined;
    employee_uuid?: string | undefined;
    active: boolean;
    amount?: string | undefined;
    description?: string | undefined;
    court_ordered?: boolean | undefined;
    times: number | null;
    recurring: boolean;
    annual_maximum: string | null;
    total_amount: string | null;
    pay_period_maximum: string | null;
    deduct_as_percentage: boolean;
    garnishment_type?: string | null | undefined;
    child_support?: GarnishmentChildSupport$Outbound | null | undefined;
};
/** @internal */
export declare const Garnishment$outboundSchema: z.ZodType<Garnishment$Outbound, z.ZodTypeDef, Garnishment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Garnishment$ {
    /** @deprecated use `Garnishment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Garnishment, z.ZodTypeDef, unknown>;
    /** @deprecated use `Garnishment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Garnishment$Outbound, z.ZodTypeDef, Garnishment>;
    /** @deprecated use `Garnishment$Outbound` instead. */
    type Outbound = Garnishment$Outbound;
}
export declare function garnishmentToJSON(garnishment: Garnishment): string;
export declare function garnishmentFromJSON(jsonString: string): SafeParseResult<Garnishment, SDKValidationError>;
//# sourceMappingURL=garnishment.d.ts.map