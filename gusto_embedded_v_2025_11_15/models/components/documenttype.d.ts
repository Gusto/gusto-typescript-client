import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const DocumentType: {
    readonly PrintablePayrollChecks: "printable_payroll_checks";
};
export type DocumentType = ClosedEnum<typeof DocumentType>;
/** @internal */
export declare const DocumentType$inboundSchema: z.ZodNativeEnum<typeof DocumentType>;
/** @internal */
export declare const DocumentType$outboundSchema: z.ZodNativeEnum<typeof DocumentType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentType$ {
    /** @deprecated use `DocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly PrintablePayrollChecks: "printable_payroll_checks";
    }>;
    /** @deprecated use `DocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly PrintablePayrollChecks: "printable_payroll_checks";
    }>;
}
//# sourceMappingURL=documenttype.d.ts.map