import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { RFCDate } from "../../types/rfcdate.js";
export declare const ContractorPaymentBodyPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
};
export type ContractorPaymentBodyPaymentMethod = ClosedEnum<typeof ContractorPaymentBodyPaymentMethod>;
/**
 * Request body for creating a contractor payment.
 */
export type ContractorPaymentBody = {
    /**
     * The contractor receiving the payment.
     */
    contractorUuid: string;
    /**
     * Date of contractor payment.
     */
    date: RFCDate;
    paymentMethod?: ContractorPaymentBodyPaymentMethod | undefined;
    /**
     * If the contractor is on a fixed wage, this is the fixed wage payment for the contractor, regardless of hours worked.
     */
    wage?: string | undefined;
    /**
     * If the contractor is on an hourly wage, this is the number of hours that the contractor worked for the payment.
     */
    hours?: string | undefined;
    /**
     * If the contractor is on an hourly wage, this is the bonus the contractor earned.
     */
    bonus?: string | undefined;
    /**
     * Reimbursed wages for the contractor.
     */
    reimbursement?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentBodyPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof ContractorPaymentBodyPaymentMethod>;
/** @internal */
export type ContractorPaymentBody$Outbound = {
    contractor_uuid: string;
    date: string;
    payment_method: string;
    wage?: string | undefined;
    hours?: string | undefined;
    bonus?: string | undefined;
    reimbursement?: string | undefined;
};
/** @internal */
export declare const ContractorPaymentBody$outboundSchema: z.ZodType<ContractorPaymentBody$Outbound, z.ZodTypeDef, ContractorPaymentBody>;
export declare function contractorPaymentBodyToJSON(contractorPaymentBody: ContractorPaymentBody): string;
//# sourceMappingURL=contractorpaymentbody.d.ts.map