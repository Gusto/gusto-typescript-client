import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The subtotals for the payroll.
 */
export type PayrollTotalsType = {
    /**
     * The total company debit for the payroll.
     */
    companyDebit?: string | undefined;
    /**
     * The total company net pay for the payroll.
     */
    netPayDebit?: string | undefined;
    /**
     * The total tax debit for the payroll.
     */
    taxDebit?: string | undefined;
    /**
     * The total reimbursement debit for the payroll.
     */
    reimbursementDebit?: string | undefined;
    /**
     * The total child support debit for the payroll.
     */
    childSupportDebit?: string | undefined;
    /**
     * The total reimbursements for the payroll.
     */
    reimbursements?: string | undefined;
    /**
     * The net pay amount for the payroll.
     */
    netPay?: string | undefined;
    /**
     * The gross pay amount for the payroll.
     */
    grossPay?: string | undefined;
    /**
     * The total employee bonuses amount for the payroll.
     */
    employeeBonuses?: string | undefined;
    /**
     * The total employee commissions amount for the payroll.
     */
    employeeCommissions?: string | undefined;
    /**
     * The total employee cash tips amount for the payroll.
     */
    employeeCashTips?: string | undefined;
    /**
     * The total employee paycheck tips amount for the payroll.
     */
    employeePaycheckTips?: string | undefined;
    /**
     * The total additional earnings amount for the payroll.
     */
    additionalEarnings?: string | undefined;
    /**
     * The total owner's draw for the payroll.
     */
    ownersDraw?: string | undefined;
    /**
     * The total check amount for the payroll.
     */
    checkAmount?: string | undefined;
    /**
     * The total amount of employer paid taxes for the payroll.
     */
    employerTaxes?: string | undefined;
    /**
     * The total amount of employee paid taxes for the payroll.
     */
    employeeTaxes?: string | undefined;
    /**
     * The total amount of company contributed benefits for the payroll.
     */
    benefits?: string | undefined;
    /**
     * The total amount of employee deducted benefits for the payroll.
     */
    employeeBenefitsDeductions?: string | undefined;
    /**
     * The total amount of imputed pay for the payroll.
     */
    imputedPay?: string | undefined;
    /**
     * The total amount of payroll taxes deferred for the payroll, such as allowed by the CARES act.
     */
    deferredPayrollTaxes?: string | undefined;
    /**
     * The total amount of deductions for the payroll.
     */
    otherDeductions?: string | undefined;
};
/** @internal */
export declare const PayrollTotalsType$inboundSchema: z.ZodType<PayrollTotalsType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollTotalsType$Outbound = {
    company_debit?: string | undefined;
    net_pay_debit?: string | undefined;
    tax_debit?: string | undefined;
    reimbursement_debit?: string | undefined;
    child_support_debit?: string | undefined;
    reimbursements?: string | undefined;
    net_pay?: string | undefined;
    gross_pay?: string | undefined;
    employee_bonuses?: string | undefined;
    employee_commissions?: string | undefined;
    employee_cash_tips?: string | undefined;
    employee_paycheck_tips?: string | undefined;
    additional_earnings?: string | undefined;
    owners_draw?: string | undefined;
    check_amount?: string | undefined;
    employer_taxes?: string | undefined;
    employee_taxes?: string | undefined;
    benefits?: string | undefined;
    employee_benefits_deductions?: string | undefined;
    imputed_pay?: string | undefined;
    deferred_payroll_taxes?: string | undefined;
    other_deductions?: string | undefined;
};
/** @internal */
export declare const PayrollTotalsType$outboundSchema: z.ZodType<PayrollTotalsType$Outbound, z.ZodTypeDef, PayrollTotalsType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollTotalsType$ {
    /** @deprecated use `PayrollTotalsType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollTotalsType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollTotalsType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollTotalsType$Outbound, z.ZodTypeDef, PayrollTotalsType>;
    /** @deprecated use `PayrollTotalsType$Outbound` instead. */
    type Outbound = PayrollTotalsType$Outbound;
}
export declare function payrollTotalsTypeToJSON(payrollTotalsType: PayrollTotalsType): string;
export declare function payrollTotalsTypeFromJSON(jsonString: string): SafeParseResult<PayrollTotalsType, SDKValidationError>;
//# sourceMappingURL=payrolltotalstype.d.ts.map