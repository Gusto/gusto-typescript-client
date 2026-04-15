import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { Employee } from "../components/employee.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WorkAddress = {
    /**
     * Reference to a company location
     */
    locationUuid?: string | undefined;
};
export type HomeAddress = {
    street1: string;
    street2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
};
export type Termination = {
    /**
     * Date the employee was terminated from the company
     */
    effectiveDate?: RFCDate | undefined;
};
export type Job = {
    /**
     * The date when the employee was hired to the company
     */
    hireDate?: RFCDate | undefined;
};
export type EmployeeStateTaxes = {
    /**
     * Whether this job is eligible for workers' compensation coverage in the states of Washington (WA) or Wyoming (WY).
     */
    wcCovered?: boolean | undefined;
    /**
     * The risk class code for workers' compensation in Washington or Wyoming state. For Washington, visit [Washington state's Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more. For Wyoming you can search for the code online using [WY Workforce Services website](https://dws.wyo.gov/dws-division/workers-compensation/) or call the agency at (307) 235-3217.
     */
    wcClassCode?: string | undefined;
};
/**
 * Update a historical employee.
 */
export type PutV1HistoricalEmployeesRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    firstName: string;
    middleInitial?: string | undefined;
    lastName: string;
    preferredFirstName?: string | undefined;
    dateOfBirth: string;
    ssn: string;
    workAddress: WorkAddress;
    homeAddress: HomeAddress;
    termination: Termination;
    /**
     * Optional. If provided, the email address will be saved to the employee.
     */
    email?: string | undefined;
    job: Job;
    employeeStateTaxes?: EmployeeStateTaxes | undefined;
};
export type PutV1HistoricalEmployeesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the historical employee
     */
    historicalEmployeeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    /**
     * Update a historical employee.
     */
    requestBody: PutV1HistoricalEmployeesRequestBody;
};
export type PutV1HistoricalEmployeesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employee?: Employee | undefined;
};
/** @internal */
export type WorkAddress$Outbound = {
    location_uuid?: string | undefined;
};
/** @internal */
export declare const WorkAddress$outboundSchema: z.ZodType<WorkAddress$Outbound, z.ZodTypeDef, WorkAddress>;
export declare function workAddressToJSON(workAddress: WorkAddress): string;
/** @internal */
export type HomeAddress$Outbound = {
    street_1: string;
    street_2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
};
/** @internal */
export declare const HomeAddress$outboundSchema: z.ZodType<HomeAddress$Outbound, z.ZodTypeDef, HomeAddress>;
export declare function homeAddressToJSON(homeAddress: HomeAddress): string;
/** @internal */
export type Termination$Outbound = {
    effective_date?: string | undefined;
};
/** @internal */
export declare const Termination$outboundSchema: z.ZodType<Termination$Outbound, z.ZodTypeDef, Termination>;
export declare function terminationToJSON(termination: Termination): string;
/** @internal */
export type Job$Outbound = {
    hire_date?: string | undefined;
};
/** @internal */
export declare const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job>;
export declare function jobToJSON(job: Job): string;
/** @internal */
export type EmployeeStateTaxes$Outbound = {
    wc_covered?: boolean | undefined;
    wc_class_code?: string | undefined;
};
/** @internal */
export declare const EmployeeStateTaxes$outboundSchema: z.ZodType<EmployeeStateTaxes$Outbound, z.ZodTypeDef, EmployeeStateTaxes>;
export declare function employeeStateTaxesToJSON(employeeStateTaxes: EmployeeStateTaxes): string;
/** @internal */
export type PutV1HistoricalEmployeesRequestBody$Outbound = {
    version: string;
    first_name: string;
    middle_initial?: string | undefined;
    last_name: string;
    preferred_first_name?: string | undefined;
    date_of_birth: string;
    ssn: string;
    work_address: WorkAddress$Outbound;
    home_address: HomeAddress$Outbound;
    termination: Termination$Outbound;
    email?: string | undefined;
    job: Job$Outbound;
    employee_state_taxes?: EmployeeStateTaxes$Outbound | undefined;
};
/** @internal */
export declare const PutV1HistoricalEmployeesRequestBody$outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequestBody>;
export declare function putV1HistoricalEmployeesRequestBodyToJSON(putV1HistoricalEmployeesRequestBody: PutV1HistoricalEmployeesRequestBody): string;
/** @internal */
export type PutV1HistoricalEmployeesRequest$Outbound = {
    company_uuid: string;
    historical_employee_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1HistoricalEmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequest>;
export declare function putV1HistoricalEmployeesRequestToJSON(putV1HistoricalEmployeesRequest: PutV1HistoricalEmployeesRequest): string;
/** @internal */
export declare const PutV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<PutV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
export declare function putV1HistoricalEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PutV1HistoricalEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=putv1historicalemployees.d.ts.map