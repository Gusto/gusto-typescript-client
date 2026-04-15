import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DetailedPaymentAccountSplit } from "./detailedpaymentaccountsplit.js";
/**
 * The type of payment method.
 */
export declare const EmployeePaymentDetailPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The type of payment method.
 */
export type EmployeePaymentDetailPaymentMethod = ClosedEnum<typeof EmployeePaymentDetailPaymentMethod>;
export declare const SplitBy: {
    readonly Percentage: "Percentage";
    readonly Amount: "Amount";
};
export type SplitBy = ClosedEnum<typeof SplitBy>;
/**
 * Represents an employee's payment method details.
 */
export type EmployeePaymentDetail = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * The type of payment method.
     */
    paymentMethod?: EmployeePaymentDetailPaymentMethod | undefined;
    /**
     * How the payment is split. This field is applicable when `payment_method` is "Direct Deposit".
     */
    splitBy?: SplitBy | null | undefined;
    /**
     * An array of payment splits. This field is applicable when `payment_method` is "Direct Deposit".
     */
    splits?: Array<DetailedPaymentAccountSplit> | null | undefined;
};
/** @internal */
export declare const EmployeePaymentDetailPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof EmployeePaymentDetailPaymentMethod>;
/** @internal */
export declare const SplitBy$inboundSchema: z.ZodNativeEnum<typeof SplitBy>;
/** @internal */
export declare const EmployeePaymentDetail$inboundSchema: z.ZodType<EmployeePaymentDetail, z.ZodTypeDef, unknown>;
export declare function employeePaymentDetailFromJSON(jsonString: string): SafeParseResult<EmployeePaymentDetail, SDKValidationError>;
//# sourceMappingURL=employeepaymentdetail.d.ts.map