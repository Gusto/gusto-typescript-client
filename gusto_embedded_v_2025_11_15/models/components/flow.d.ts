import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of a flow in Gusto white-label UI.
 */
export type Flow = {
    url?: string | undefined;
};
/** @internal */
export declare const Flow$inboundSchema: z.ZodType<Flow, z.ZodTypeDef, unknown>;
/** @internal */
export type Flow$Outbound = {
    url?: string | undefined;
};
/** @internal */
export declare const Flow$outboundSchema: z.ZodType<Flow$Outbound, z.ZodTypeDef, Flow>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Flow$ {
    /** @deprecated use `Flow$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Flow, z.ZodTypeDef, unknown>;
    /** @deprecated use `Flow$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Flow$Outbound, z.ZodTypeDef, Flow>;
    /** @deprecated use `Flow$Outbound` instead. */
    type Outbound = Flow$Outbound;
}
export declare function flowToJSON(flow: Flow): string;
export declare function flowFromJSON(jsonString: string): SafeParseResult<Flow, SDKValidationError>;
//# sourceMappingURL=flow.d.ts.map