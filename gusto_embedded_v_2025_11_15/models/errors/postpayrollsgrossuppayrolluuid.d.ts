import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PayrollBlockersError, PayrollBlockersError$Outbound } from "./payrollblockerserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1, UnprocessableEntityErrorObject1$Outbound } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PostPayrollsGrossUpPayrollUuidResponseBody = UnprocessableEntityErrorObject1 | PayrollBlockersError;
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidResponseBody$inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPayrollsGrossUpPayrollUuidResponseBody$Outbound = UnprocessableEntityErrorObject1$Outbound | PayrollBlockersError$Outbound;
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidResponseBody$outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponseBody$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPayrollsGrossUpPayrollUuidResponseBody$ {
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponseBody$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidResponseBody>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponseBody$Outbound` instead. */
    type Outbound = PostPayrollsGrossUpPayrollUuidResponseBody$Outbound;
}
export declare function postPayrollsGrossUpPayrollUuidResponseBodyToJSON(postPayrollsGrossUpPayrollUuidResponseBody: PostPayrollsGrossUpPayrollUuidResponseBody): string;
export declare function postPayrollsGrossUpPayrollUuidResponseBodyFromJSON(jsonString: string): SafeParseResult<PostPayrollsGrossUpPayrollUuidResponseBody, SDKValidationError>;
//# sourceMappingURL=postpayrollsgrossuppayrolluuid.d.ts.map