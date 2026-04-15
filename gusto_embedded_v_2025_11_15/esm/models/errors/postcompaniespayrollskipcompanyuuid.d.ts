import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { PayrollBlockersError } from "./payrollblockerserror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1 } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PostCompaniesPayrollSkipCompanyUuidResponseBody = UnprocessableEntityErrorObject1 | PayrollBlockersError;
/** @internal */
export declare const PostCompaniesPayrollSkipCompanyUuidResponseBody$inboundSchema: z.ZodType<PostCompaniesPayrollSkipCompanyUuidResponseBody, z.ZodTypeDef, unknown>;
export declare function postCompaniesPayrollSkipCompanyUuidResponseBodyFromJSON(jsonString: string): SafeParseResult<PostCompaniesPayrollSkipCompanyUuidResponseBody, SDKValidationError>;
//# sourceMappingURL=postcompaniespayrollskipcompanyuuid.d.ts.map