import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Termination } from "../components/termination.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TerminationsEmployeeIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The employee's last day of work.
     */
    effectiveDate: string;
    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     */
    runTerminationPayroll?: boolean | undefined;
};
export type PutV1TerminationsEmployeeIdRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1TerminationsEmployeeIdRequestBody;
};
export type PutV1TerminationsEmployeeIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example Response
     */
    termination?: Termination | undefined;
};
/** @internal */
export type PutV1TerminationsEmployeeIdRequestBody$Outbound = {
    version: string;
    effective_date: string;
    run_termination_payroll?: boolean | undefined;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequestBody$outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequestBody$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequestBody>;
export declare function putV1TerminationsEmployeeIdRequestBodyToJSON(putV1TerminationsEmployeeIdRequestBody: PutV1TerminationsEmployeeIdRequestBody): string;
/** @internal */
export type PutV1TerminationsEmployeeIdRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1TerminationsEmployeeIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequest$outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequest$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequest>;
export declare function putV1TerminationsEmployeeIdRequestToJSON(putV1TerminationsEmployeeIdRequest: PutV1TerminationsEmployeeIdRequest): string;
/** @internal */
export declare const PutV1TerminationsEmployeeIdResponse$inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdResponse, z.ZodTypeDef, unknown>;
export declare function putV1TerminationsEmployeeIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1TerminationsEmployeeIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1terminationsemployeeid.d.ts.map