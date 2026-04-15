import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SchemeSystemAccessAuth = {
    clientId: string;
    clientSecret: string;
};
/** @internal */
export declare const SchemeSystemAccessAuth$inboundSchema: z.ZodType<SchemeSystemAccessAuth, z.ZodTypeDef, unknown>;
/** @internal */
export type SchemeSystemAccessAuth$Outbound = {
    clientId: string;
    clientSecret: string;
};
/** @internal */
export declare const SchemeSystemAccessAuth$outboundSchema: z.ZodType<SchemeSystemAccessAuth$Outbound, z.ZodTypeDef, SchemeSystemAccessAuth>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SchemeSystemAccessAuth$ {
    /** @deprecated use `SchemeSystemAccessAuth$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SchemeSystemAccessAuth, z.ZodTypeDef, unknown>;
    /** @deprecated use `SchemeSystemAccessAuth$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SchemeSystemAccessAuth$Outbound, z.ZodTypeDef, SchemeSystemAccessAuth>;
    /** @deprecated use `SchemeSystemAccessAuth$Outbound` instead. */
    type Outbound = SchemeSystemAccessAuth$Outbound;
}
export declare function schemeSystemAccessAuthToJSON(schemeSystemAccessAuth: SchemeSystemAccessAuth): string;
export declare function schemeSystemAccessAuthFromJSON(jsonString: string): SafeParseResult<SchemeSystemAccessAuth, SDKValidationError>;
//# sourceMappingURL=schemesystemaccessauth.d.ts.map