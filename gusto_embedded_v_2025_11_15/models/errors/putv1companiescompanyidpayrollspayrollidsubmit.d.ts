import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PayrollBlockersError, PayrollBlockersError$Outbound } from "./payrollblockerserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1, UnprocessableEntityErrorObject1$Outbound } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody = UnprocessableEntityErrorObject1 | PayrollBlockersError;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$Outbound = UnprocessableEntityErrorObject1$Outbound | PayrollBlockersError$Outbound;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBodyToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseBody, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidsubmit.d.ts.map