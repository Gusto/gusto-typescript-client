import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type GrossUpPay = {
    /**
     * Gross up earnings.
     */
    grossUp?: string | undefined;
};
/** @internal */
export declare const GrossUpPay$inboundSchema: z.ZodType<GrossUpPay, z.ZodTypeDef, unknown>;
/** @internal */
export type GrossUpPay$Outbound = {
    gross_up?: string | undefined;
};
/** @internal */
export declare const GrossUpPay$outboundSchema: z.ZodType<GrossUpPay$Outbound, z.ZodTypeDef, GrossUpPay>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrossUpPay$ {
    /** @deprecated use `GrossUpPay$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrossUpPay, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrossUpPay$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrossUpPay$Outbound, z.ZodTypeDef, GrossUpPay>;
    /** @deprecated use `GrossUpPay$Outbound` instead. */
    type Outbound = GrossUpPay$Outbound;
}
export declare function grossUpPayToJSON(grossUpPay: GrossUpPay): string;
export declare function grossUpPayFromJSON(jsonString: string): SafeParseResult<GrossUpPay, SDKValidationError>;
//# sourceMappingURL=grossuppay.d.ts.map