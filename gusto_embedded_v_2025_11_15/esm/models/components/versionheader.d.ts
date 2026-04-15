import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const VersionHeader: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
export type VersionHeader = ClosedEnum<typeof VersionHeader>;
/** @internal */
export declare const VersionHeader$outboundSchema: z.ZodNativeEnum<typeof VersionHeader>;
//# sourceMappingURL=versionheader.d.ts.map