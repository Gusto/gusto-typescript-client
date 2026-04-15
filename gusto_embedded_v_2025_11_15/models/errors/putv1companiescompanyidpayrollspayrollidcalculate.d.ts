import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PayrollBlockersError, PayrollBlockersError$Outbound } from "./payrollblockerserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1, UnprocessableEntityErrorObject1$Outbound } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody = UnprocessableEntityErrorObject1 | PayrollBlockersError;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$Outbound = UnprocessableEntityErrorObject1$Outbound | PayrollBlockersError$Outbound;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBodyToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseBody, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidcalculate.d.ts.map