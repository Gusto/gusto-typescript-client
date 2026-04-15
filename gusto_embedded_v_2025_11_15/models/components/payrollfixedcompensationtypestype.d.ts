import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PayrollFixedCompensationTypesType = {
    /**
     * The name of an available type of fixed compensation.
     */
    name?: string | undefined;
};
/** @internal */
export declare const PayrollFixedCompensationTypesType$inboundSchema: z.ZodType<PayrollFixedCompensationTypesType, z.ZodTypeDef, unknown>;
/** @internal */
export type PayrollFixedCompensationTypesType$Outbound = {
    name?: string | undefined;
};
/** @internal */
export declare const PayrollFixedCompensationTypesType$outboundSchema: z.ZodType<PayrollFixedCompensationTypesType$Outbound, z.ZodTypeDef, PayrollFixedCompensationTypesType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayrollFixedCompensationTypesType$ {
    /** @deprecated use `PayrollFixedCompensationTypesType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayrollFixedCompensationTypesType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayrollFixedCompensationTypesType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayrollFixedCompensationTypesType$Outbound, z.ZodTypeDef, PayrollFixedCompensationTypesType>;
    /** @deprecated use `PayrollFixedCompensationTypesType$Outbound` instead. */
    type Outbound = PayrollFixedCompensationTypesType$Outbound;
}
export declare function payrollFixedCompensationTypesTypeToJSON(payrollFixedCompensationTypesType: PayrollFixedCompensationTypesType): string;
export declare function payrollFixedCompensationTypesTypeFromJSON(jsonString: string): SafeParseResult<PayrollFixedCompensationTypesType, SDKValidationError>;
//# sourceMappingURL=payrollfixedcompensationtypestype.d.ts.map