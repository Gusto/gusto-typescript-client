import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Termination } from "../components/termination.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1EmployeesEmployeeIdTerminationsRequestBody = {
    /**
     * The employee's last day of work.
     */
    effectiveDate: string;
    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     */
    runTerminationPayroll?: boolean | undefined;
};
export type PostV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody;
};
export type PostV1EmployeesEmployeeIdTerminationsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example Response
     */
    termination?: Termination | undefined;
};
/** @internal */
export type PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound = {
    effective_date: string;
    run_termination_payroll?: boolean | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequestBody>;
export declare function postV1EmployeesEmployeeIdTerminationsRequestBodyToJSON(postV1EmployeesEmployeeIdTerminationsRequestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody): string;
/** @internal */
export type PostV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequest>;
export declare function postV1EmployeesEmployeeIdTerminationsRequestToJSON(postV1EmployeesEmployeeIdTerminationsRequest: PostV1EmployeesEmployeeIdTerminationsRequest): string;
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
export declare function postV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidterminations.d.ts.map