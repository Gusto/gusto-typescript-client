import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { Rehire } from "../components/rehire.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export declare const EmploymentStatus: {
    readonly PartTime: "part_time";
    readonly FullTime: "full_time";
    readonly PartTimeEligible: "part_time_eligible";
    readonly Variable: "variable";
    readonly Seasonal: "seasonal";
    readonly NotSet: "not_set";
};
/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export type EmploymentStatus = ClosedEnum<typeof EmploymentStatus>;
export type PutV1EmployeesEmployeeIdRehireRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The day when the employee returns to work.
     */
    effectiveDate: string;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the employee.
     */
    fileNewHireReport: boolean;
    /**
     * The uuid of the employee's work location.
     */
    workLocationUuid: string;
    /**
     * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
     */
    employmentStatus?: EmploymentStatus | undefined;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     */
    twoPercentShareholder?: boolean | undefined;
};
export type PutV1EmployeesEmployeeIdRehireRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdRehireRequestBody;
};
export type PutV1EmployeesEmployeeIdRehireResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    rehire?: Rehire | undefined;
};
/** @internal */
export declare const EmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof EmploymentStatus>;
/** @internal */
export type PutV1EmployeesEmployeeIdRehireRequestBody$Outbound = {
    version: string;
    effective_date: string;
    file_new_hire_report: boolean;
    work_location_uuid: string;
    employment_status?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireRequestBody>;
export declare function putV1EmployeesEmployeeIdRehireRequestBodyToJSON(putV1EmployeesEmployeeIdRehireRequestBody: PutV1EmployeesEmployeeIdRehireRequestBody): string;
/** @internal */
export type PutV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdRehireRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireRequest>;
export declare function putV1EmployeesEmployeeIdRehireRequestToJSON(putV1EmployeesEmployeeIdRehireRequest: PutV1EmployeesEmployeeIdRehireRequest): string;
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
export declare function putV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidrehire.d.ts.map