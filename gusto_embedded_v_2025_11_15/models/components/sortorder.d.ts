import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const SortOrder: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type SortOrder = ClosedEnum<typeof SortOrder>;
/** @internal */
export declare const SortOrder$inboundSchema: z.ZodNativeEnum<typeof SortOrder>;
/** @internal */
export declare const SortOrder$outboundSchema: z.ZodNativeEnum<typeof SortOrder>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SortOrder$ {
    /** @deprecated use `SortOrder$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Asc: "asc";
        readonly Desc: "desc";
    }>;
    /** @deprecated use `SortOrder$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Asc: "asc";
        readonly Desc: "desc";
    }>;
}
//# sourceMappingURL=sortorder.d.ts.map