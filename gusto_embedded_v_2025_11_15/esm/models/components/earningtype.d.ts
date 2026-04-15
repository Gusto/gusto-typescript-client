import * as z from "zod/v3";
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
export declare function earningTypeFromJSON(jsonString: string): SafeParseResult<EarningType, SDKValidationError>;
//# sourceMappingURL=earningtype.d.ts.map