import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
export declare const VersionHeader: {
    readonly TwoThousandAndTwentyFour0401: "2024-04-01";
};
export type VersionHeader = ClosedEnum<typeof VersionHeader>;
/** @internal */
export declare const VersionHeader$inboundSchema: z.ZodNativeEnum<typeof VersionHeader>;
/** @internal */
export declare const VersionHeader$outboundSchema: z.ZodNativeEnum<typeof VersionHeader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VersionHeader$ {
    /** @deprecated use `VersionHeader$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly TwoThousandAndTwentyFour0401: "2024-04-01";
    }>;
    /** @deprecated use `VersionHeader$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly TwoThousandAndTwentyFour0401: "2024-04-01";
    }>;
}
//# sourceMappingURL=versionheader.d.ts.map