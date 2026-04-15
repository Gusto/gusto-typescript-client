import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PayrollCompanyTaxesType = {
    /**
     * The tax name
     */
    name?: string | undefined;
    /**
     * Whether this tax is an employer or employee tax
     */
    employer?: boolean | undefined;
    /**
     * The amount of this tax for the payroll
     */
    amount?: string | undefined;
};
/** @internal */
export declare const PayrollCompanyTaxesType$inboundSchema: z.ZodType<PayrollCompanyTaxesType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollCompanyTaxesType$Outbound = {
    name?: string | undefined;
    employer?: boolean | undefined;
    amount?: string | undefined;
};
/** @internal */
export declare const PayrollCompanyTaxesType$outboundSchema: z.ZodType<PayrollCompanyTaxesType$Outbound, z.ZodTypeDef, PayrollCompanyTaxesType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollCompanyTaxesType$ {
    /** @deprecated use `PayrollCompanyTaxesType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollCompanyTaxesType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollCompanyTaxesType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollCompanyTaxesType$Outbound, z.ZodTypeDef, PayrollCompanyTaxesType>;
    /** @deprecated use `PayrollCompanyTaxesType$Outbound` instead. */
    type Outbound = PayrollCompanyTaxesType$Outbound;
}
export declare function payrollCompanyTaxesTypeToJSON(payrollCompanyTaxesType: PayrollCompanyTaxesType): string;
export declare function payrollCompanyTaxesTypeFromJSON(jsonString: string): SafeParseResult<PayrollCompanyTaxesType, SDKValidationError>;
//# sourceMappingURL=payrollcompanytaxestype.d.ts.map