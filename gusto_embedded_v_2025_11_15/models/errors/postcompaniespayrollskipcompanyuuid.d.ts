import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PayrollBlockersError, PayrollBlockersError$Outbound } from "./payrollblockerserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1, UnprocessableEntityErrorObject1$Outbound } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PostCompaniesPayrollSkipCompanyUuidResponseBody = UnprocessableEntityErrorObject1 | PayrollBlockersError;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponseBody$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostCompaniesPayrollSkipCompanyUuidResponseBody$Outbound = UnprocessableEntityErrorObject1$Outbound | PayrollBlockersError$Outbound;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponseBody$outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponseBody$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostCompaniesPayrollSkipCompanyUuidResponseBody$ {
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponseBody$Outbound, z.ZodTypeDef, PostCompaniesPayrollSkipCompanyUuidResponseBody>;
    /** @deprecated use `PostCompaniesPayrollSkipCompanyUuidResponseBody$Outbound` instead. */
    type Outbound = PostCompaniesPayrollSkipCompanyUuidResponseBody$Outbound;
}
export declare function postCompaniesPayrollSkipCompanyUuidResponseBodyToJSON(postCompaniesPayrollSkipCompanyUuidResponseBody: PostCompaniesPayrollSkipCompanyUuidResponseBody): string;
export declare function postCompaniesPayrollSkipCompanyUuidResponseBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidResponseBody, SDKValidationError>;
//# sourceMappingURL=postcompaniespayrollskipcompanyuuid.d.ts.map