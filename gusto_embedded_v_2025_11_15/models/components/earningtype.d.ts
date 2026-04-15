import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type EarningType = {
    /**
     * The name of the earning type.
     */
    name?: string | undefined;
    /**
     * The ID of the earning type.
     */
    uuid: string;
};
/** @internal */
export declare const EarningType$inboundSchema: z.ZodType<EarningType, z.ZodTypeDef, unknown>;
/** @internal */
export type EarningType$Outbound = {
    name?: string | undefined;
    uuid: string;
};
/** @internal */
export declare const EarningType$outboundSchema: z.ZodType<EarningType$Outbound, z.ZodTypeDef, EarningType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EarningType$ {
    /** @deprecated use `EarningType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EarningType, z.ZodTypeDef, unknown>;
    /** @deprecated use `EarningType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EarningType$Outbound, z.ZodTypeDef, EarningType>;
    /** @deprecated use `EarningType$Outbound` instead. */
    type Outbound = EarningType$Outbound;
}
export declare function earningTypeToJSON(earningType: EarningType): string;
export declare function earningTypeFromJSON(jsonString: string): SafeParseResult<EarningType, SDKValidationError>;
//# sourceMappingURL=earningtype.d.ts.map