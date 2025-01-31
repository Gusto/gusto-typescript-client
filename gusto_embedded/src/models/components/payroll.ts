/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OffCycleReasonType,
  OffCycleReasonType$inboundSchema,
  OffCycleReasonType$outboundSchema,
} from "./offcyclereasontype.js";
import {
  PayrollCompanyTaxesType,
  PayrollCompanyTaxesType$inboundSchema,
  PayrollCompanyTaxesType$Outbound,
  PayrollCompanyTaxesType$outboundSchema,
} from "./payrollcompanytaxestype.js";
import {
  PayrollCreditBlockersType,
  PayrollCreditBlockersType$inboundSchema,
  PayrollCreditBlockersType$Outbound,
  PayrollCreditBlockersType$outboundSchema,
} from "./payrollcreditblockerstype.js";
import {
  PayrollEmployeeCompensationsType,
  PayrollEmployeeCompensationsType$inboundSchema,
  PayrollEmployeeCompensationsType$Outbound,
  PayrollEmployeeCompensationsType$outboundSchema,
} from "./payrollemployeecompensationstype.js";
import {
  PayrollPaymentSpeedChangedType,
  PayrollPaymentSpeedChangedType$inboundSchema,
  PayrollPaymentSpeedChangedType$Outbound,
  PayrollPaymentSpeedChangedType$outboundSchema,
} from "./payrollpaymentspeedchangedtype.js";
import {
  PayrollPayPeriodType,
  PayrollPayPeriodType$inboundSchema,
  PayrollPayPeriodType$Outbound,
  PayrollPayPeriodType$outboundSchema,
} from "./payrollpayperiodtype.js";
import {
  PayrollPayrollStatusMetaType,
  PayrollPayrollStatusMetaType$inboundSchema,
  PayrollPayrollStatusMetaType$Outbound,
  PayrollPayrollStatusMetaType$outboundSchema,
} from "./payrollpayrollstatusmetatype.js";
import {
  PayrollProcessingRequest,
  PayrollProcessingRequest$inboundSchema,
  PayrollProcessingRequest$Outbound,
  PayrollProcessingRequest$outboundSchema,
} from "./payrollprocessingrequest.js";
import {
  PayrollSubmissionBlockersType,
  PayrollSubmissionBlockersType$inboundSchema,
  PayrollSubmissionBlockersType$Outbound,
  PayrollSubmissionBlockersType$outboundSchema,
} from "./payrollsubmissionblockerstype.js";
import {
  PayrollTotalsType,
  PayrollTotalsType$inboundSchema,
  PayrollTotalsType$Outbound,
  PayrollTotalsType$outboundSchema,
} from "./payrolltotalstype.js";
import {
  PayrollWithholdingPayPeriodType,
  PayrollWithholdingPayPeriodType$inboundSchema,
  PayrollWithholdingPayPeriodType$outboundSchema,
} from "./payrollwithholdingpayperiodtype.js";

/**
 * Example response
 */
export type Payroll = {
  /**
   * A timestamp that is the deadline for the payroll to be run in order for employees to be paid on time.  If payroll has not been run by the deadline, a prepare request will update both the check date and deadline to reflect the soonest employees can be paid and the deadline by which the payroll must be run in order for said check date to be met.
   */
  payrollDeadline?: Date | undefined;
  /**
   * The date on which employees will be paid for the payroll.
   */
  checkDate?: string | undefined;
  /**
   * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated. Additionally, a payroll is not guaranteed to be processed just because the payroll deadline has passed. Late payrolls are not uncommon. Conversely, users may choose to run payroll before the payroll deadline.
   */
  processed?: boolean | undefined;
  /**
   * The date at which the payroll was processed. Null if the payroll isn't processed yet.
   */
  processedDate?: string | undefined;
  /**
   * A timestamp of the last valid payroll calculation. Null if there isn't a valid calculation.
   */
  calculatedAt?: string | undefined;
  /**
   * The UUID of the payroll.
   */
  uuid?: string | undefined;
  /**
   * The UUID of the payroll.
   */
  payrollUuid?: string | undefined;
  /**
   * The UUID of the company for the payroll.
   */
  companyUuid?: string | undefined;
  /**
   * Indicates whether the payroll is an off-cycle payroll
   */
  offCycle?: boolean | undefined;
  /**
   * The off-cycle reason. Only included for off-cycle payrolls.
   */
  offCycleReason?: OffCycleReasonType | null | undefined;
  /**
   * Indicates whether the payroll is an auto pilot payroll
   */
  autoPilot?: boolean | undefined;
  /**
   * Indicates whether the payroll is an external payroll
   */
  external?: boolean | undefined;
  /**
   * Indicates whether the payroll is the final payroll for a terminated employee. Only included for off-cycle payrolls.
   */
  finalTerminationPayroll?: boolean | undefined;
  /**
   * The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.
   */
  withholdingPayPeriod?: PayrollWithholdingPayPeriodType | undefined;
  /**
   * Block regular deductions and contributions for this payroll.  Only included for off-cycle payrolls.
   */
  skipRegularDeductions?: boolean | undefined;
  /**
   * Enable taxes to be withheld at the IRS's required rate of 22% for federal income taxes. State income taxes will be taxed at the state's supplemental tax rate. Otherwise, we'll sum the entirety of the employee's wages and withhold taxes on the entire amount at the rate for regular wages. Only included for off-cycle payrolls.
   */
  fixedWithholdingRate?: boolean | undefined;
  payPeriod?: PayrollPayPeriodType | undefined;
  /**
   * Information about the payroll's status and expected dates
   */
  payrollStatusMeta?: PayrollPayrollStatusMetaType | undefined;
  /**
   * The subtotals for the payroll.
   */
  totals?: PayrollTotalsType | undefined;
  employeeCompensations?: Array<PayrollEmployeeCompensationsType> | undefined;
  /**
   * An array of taxes applicable to this payroll in addition to taxes included in `employee_compensations`. Only included for processed or calculated payrolls when `taxes` is present in the `include` parameter.
   */
  companyTaxes?: Array<PayrollCompanyTaxesType> | undefined;
  /**
   * Only applicable when a payroll is moved to four day processing instead of fast ach.
   */
  paymentSpeedChanged?: PayrollPaymentSpeedChangedType | undefined;
  /**
   * Datetime for when the resource was created.
   */
  createdAt?: Date | undefined;
  /**
   * Only included for processed or calculated payrolls
   */
  submissionBlockers?: Array<PayrollSubmissionBlockersType> | undefined;
  /**
   * Only included for processed payrolls
   */
  creditBlockers?: Array<PayrollCreditBlockersType> | undefined;
  processingRequest?: PayrollProcessingRequest | null | undefined;
};

/** @internal */
export const Payroll$inboundSchema: z.ZodType<Payroll, z.ZodTypeDef, unknown> =
  z.object({
    payroll_deadline: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    check_date: z.string().optional(),
    processed: z.boolean().optional(),
    processed_date: z.string().optional(),
    calculated_at: z.string().optional(),
    uuid: z.string().optional(),
    payroll_uuid: z.string().optional(),
    company_uuid: z.string().optional(),
    off_cycle: z.boolean().optional(),
    off_cycle_reason: z.nullable(OffCycleReasonType$inboundSchema).optional(),
    auto_pilot: z.boolean().optional(),
    external: z.boolean().optional(),
    final_termination_payroll: z.boolean().optional(),
    withholding_pay_period: PayrollWithholdingPayPeriodType$inboundSchema
      .optional(),
    skip_regular_deductions: z.boolean().optional(),
    fixed_withholding_rate: z.boolean().optional(),
    pay_period: PayrollPayPeriodType$inboundSchema.optional(),
    payroll_status_meta: PayrollPayrollStatusMetaType$inboundSchema.optional(),
    totals: PayrollTotalsType$inboundSchema.optional(),
    employee_compensations: z.array(
      PayrollEmployeeCompensationsType$inboundSchema,
    ).optional(),
    company_taxes: z.array(PayrollCompanyTaxesType$inboundSchema).optional(),
    payment_speed_changed: PayrollPaymentSpeedChangedType$inboundSchema
      .optional(),
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    submission_blockers: z.array(PayrollSubmissionBlockersType$inboundSchema)
      .optional(),
    credit_blockers: z.array(PayrollCreditBlockersType$inboundSchema)
      .optional(),
    processing_request: z.nullable(PayrollProcessingRequest$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "payroll_deadline": "payrollDeadline",
      "check_date": "checkDate",
      "processed_date": "processedDate",
      "calculated_at": "calculatedAt",
      "payroll_uuid": "payrollUuid",
      "company_uuid": "companyUuid",
      "off_cycle": "offCycle",
      "off_cycle_reason": "offCycleReason",
      "auto_pilot": "autoPilot",
      "final_termination_payroll": "finalTerminationPayroll",
      "withholding_pay_period": "withholdingPayPeriod",
      "skip_regular_deductions": "skipRegularDeductions",
      "fixed_withholding_rate": "fixedWithholdingRate",
      "pay_period": "payPeriod",
      "payroll_status_meta": "payrollStatusMeta",
      "employee_compensations": "employeeCompensations",
      "company_taxes": "companyTaxes",
      "payment_speed_changed": "paymentSpeedChanged",
      "created_at": "createdAt",
      "submission_blockers": "submissionBlockers",
      "credit_blockers": "creditBlockers",
      "processing_request": "processingRequest",
    });
  });

/** @internal */
export type Payroll$Outbound = {
  payroll_deadline?: string | undefined;
  check_date?: string | undefined;
  processed?: boolean | undefined;
  processed_date?: string | undefined;
  calculated_at?: string | undefined;
  uuid?: string | undefined;
  payroll_uuid?: string | undefined;
  company_uuid?: string | undefined;
  off_cycle?: boolean | undefined;
  off_cycle_reason?: string | null | undefined;
  auto_pilot?: boolean | undefined;
  external?: boolean | undefined;
  final_termination_payroll?: boolean | undefined;
  withholding_pay_period?: string | undefined;
  skip_regular_deductions?: boolean | undefined;
  fixed_withholding_rate?: boolean | undefined;
  pay_period?: PayrollPayPeriodType$Outbound | undefined;
  payroll_status_meta?: PayrollPayrollStatusMetaType$Outbound | undefined;
  totals?: PayrollTotalsType$Outbound | undefined;
  employee_compensations?:
    | Array<PayrollEmployeeCompensationsType$Outbound>
    | undefined;
  company_taxes?: Array<PayrollCompanyTaxesType$Outbound> | undefined;
  payment_speed_changed?: PayrollPaymentSpeedChangedType$Outbound | undefined;
  created_at?: string | undefined;
  submission_blockers?:
    | Array<PayrollSubmissionBlockersType$Outbound>
    | undefined;
  credit_blockers?: Array<PayrollCreditBlockersType$Outbound> | undefined;
  processing_request?: PayrollProcessingRequest$Outbound | null | undefined;
};

/** @internal */
export const Payroll$outboundSchema: z.ZodType<
  Payroll$Outbound,
  z.ZodTypeDef,
  Payroll
> = z.object({
  payrollDeadline: z.date().transform(v => v.toISOString()).optional(),
  checkDate: z.string().optional(),
  processed: z.boolean().optional(),
  processedDate: z.string().optional(),
  calculatedAt: z.string().optional(),
  uuid: z.string().optional(),
  payrollUuid: z.string().optional(),
  companyUuid: z.string().optional(),
  offCycle: z.boolean().optional(),
  offCycleReason: z.nullable(OffCycleReasonType$outboundSchema).optional(),
  autoPilot: z.boolean().optional(),
  external: z.boolean().optional(),
  finalTerminationPayroll: z.boolean().optional(),
  withholdingPayPeriod: PayrollWithholdingPayPeriodType$outboundSchema
    .optional(),
  skipRegularDeductions: z.boolean().optional(),
  fixedWithholdingRate: z.boolean().optional(),
  payPeriod: PayrollPayPeriodType$outboundSchema.optional(),
  payrollStatusMeta: PayrollPayrollStatusMetaType$outboundSchema.optional(),
  totals: PayrollTotalsType$outboundSchema.optional(),
  employeeCompensations: z.array(
    PayrollEmployeeCompensationsType$outboundSchema,
  ).optional(),
  companyTaxes: z.array(PayrollCompanyTaxesType$outboundSchema).optional(),
  paymentSpeedChanged: PayrollPaymentSpeedChangedType$outboundSchema.optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  submissionBlockers: z.array(PayrollSubmissionBlockersType$outboundSchema)
    .optional(),
  creditBlockers: z.array(PayrollCreditBlockersType$outboundSchema).optional(),
  processingRequest: z.nullable(PayrollProcessingRequest$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    payrollDeadline: "payroll_deadline",
    checkDate: "check_date",
    processedDate: "processed_date",
    calculatedAt: "calculated_at",
    payrollUuid: "payroll_uuid",
    companyUuid: "company_uuid",
    offCycle: "off_cycle",
    offCycleReason: "off_cycle_reason",
    autoPilot: "auto_pilot",
    finalTerminationPayroll: "final_termination_payroll",
    withholdingPayPeriod: "withholding_pay_period",
    skipRegularDeductions: "skip_regular_deductions",
    fixedWithholdingRate: "fixed_withholding_rate",
    payPeriod: "pay_period",
    payrollStatusMeta: "payroll_status_meta",
    employeeCompensations: "employee_compensations",
    companyTaxes: "company_taxes",
    paymentSpeedChanged: "payment_speed_changed",
    createdAt: "created_at",
    submissionBlockers: "submission_blockers",
    creditBlockers: "credit_blockers",
    processingRequest: "processing_request",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Payroll$ {
  /** @deprecated use `Payroll$inboundSchema` instead. */
  export const inboundSchema = Payroll$inboundSchema;
  /** @deprecated use `Payroll$outboundSchema` instead. */
  export const outboundSchema = Payroll$outboundSchema;
  /** @deprecated use `Payroll$Outbound` instead. */
  export type Outbound = Payroll$Outbound;
}

export function payrollToJSON(payroll: Payroll): string {
  return JSON.stringify(Payroll$outboundSchema.parse(payroll));
}

export function payrollFromJSON(
  jsonString: string,
): SafeParseResult<Payroll, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Payroll$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Payroll' from JSON`,
  );
}
