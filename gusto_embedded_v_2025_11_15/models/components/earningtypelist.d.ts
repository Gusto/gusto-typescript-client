import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EarningType, EarningType$Outbound } from "./earningtype.js";
/**
 * Example response
 */
export type EarningTypeList = {
    /**
     * The default earning types for the company.
     */
    default?: Array<EarningType> | undefined;
    /**
     * The custom earning types for the company.
     */
    custom?: Array<EarningType> | undefined;
};
/** @internal */
export declare const EarningTypeList$inboundSchema: z.ZodType<EarningTypeList, z.ZodTypeDef, unknown>;
/** @internal */
export type EarningTypeList$Outbound = {
    default?: Array<EarningType$Outbound> | undefined;
    custom?: Array<EarningType$Outbound> | undefined;
};
/** @internal */
export declare const EarningTypeList$outboundSchema: z.ZodType<EarningTypeList$Outbound, z.ZodTypeDef, EarningTypeList>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EarningTypeList$ {
    /** @deprecated use `EarningTypeList$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EarningTypeList, z.ZodTypeDef, unknown>;
    /** @deprecated use `EarningTypeList$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EarningTypeList$Outbound, z.ZodTypeDef, EarningTypeList>;
    /** @deprecated use `EarningTypeList$Outbound` instead. */
    type Outbound = EarningTypeList$Outbound;
}
export declare function earningTypeListToJSON(earningTypeList: EarningTypeList): string;
export declare function earningTypeListFromJSON(jsonString: string): SafeParseResult<EarningTypeList, SDKValidationError>;
//# sourceMappingURL=earningtypelist.d.ts.map