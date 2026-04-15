import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WorkAddress = {
    /**
     * Reference to a company location
     */
    locationUuid?: string | undefined;
};
export type PutV1HistoricalEmployeesHomeAddress = {
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
    homeAddress: PutV1HistoricalEmployeesHomeAddress;
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Update a historical employee.
     */
    requestBody: PutV1HistoricalEmployeesRequestBody;
};
export type PutV1HistoricalEmployeesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    employee?: components.Employee | undefined;
};
/** @internal */
export declare const WorkAddress$inboundSchema: z.ZodType<WorkAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WorkAddress$Outbound = {
    location_uuid?: string | undefined;
};
/** @internal */
export declare const WorkAddress$outboundSchema: z.ZodType<WorkAddress$Outbound, z.ZodTypeDef, WorkAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WorkAddress$ {
    /** @deprecated use `WorkAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WorkAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WorkAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WorkAddress$Outbound, z.ZodTypeDef, WorkAddress>;
    /** @deprecated use `WorkAddress$Outbound` instead. */
    type Outbound = WorkAddress$Outbound;
}
export declare function workAddressToJSON(workAddress: WorkAddress): string;
export declare function workAddressFromJSON(jsonString: string): SafeParseResult<WorkAddress, SDKValidationError>;
/** @internal */
export declare const PutV1HistoricalEmployeesHomeAddress$inboundSchema: z.ZodType<PutV1HistoricalEmployeesHomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HistoricalEmployeesHomeAddress$Outbound = {
    street_1: string;
    street_2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
};
/** @internal */
export declare const PutV1HistoricalEmployeesHomeAddress$outboundSchema: z.ZodType<PutV1HistoricalEmployeesHomeAddress$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesHomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HistoricalEmployeesHomeAddress$ {
    /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HistoricalEmployeesHomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HistoricalEmployeesHomeAddress$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesHomeAddress>;
    /** @deprecated use `PutV1HistoricalEmployeesHomeAddress$Outbound` instead. */
    type Outbound = PutV1HistoricalEmployeesHomeAddress$Outbound;
}
export declare function putV1HistoricalEmployeesHomeAddressToJSON(putV1HistoricalEmployeesHomeAddress: PutV1HistoricalEmployeesHomeAddress): string;
export declare function putV1HistoricalEmployeesHomeAddressFromJSON(jsonString: string): SafeParseResult<PutV1HistoricalEmployeesHomeAddress, SDKValidationError>;
/** @internal */
export declare const Termination$inboundSchema: z.ZodType<Termination, z.ZodTypeDef, unknown>;
/** @internal */
export type Termination$Outbound = {
    effective_date?: string | undefined;
};
/** @internal */
export declare const Termination$outboundSchema: z.ZodType<Termination$Outbound, z.ZodTypeDef, Termination>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Termination$ {
    /** @deprecated use `Termination$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Termination, z.ZodTypeDef, unknown>;
    /** @deprecated use `Termination$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Termination$Outbound, z.ZodTypeDef, Termination>;
    /** @deprecated use `Termination$Outbound` instead. */
    type Outbound = Termination$Outbound;
}
export declare function terminationToJSON(termination: Termination): string;
export declare function terminationFromJSON(jsonString: string): SafeParseResult<Termination, SDKValidationError>;
/** @internal */
export declare const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown>;
/** @internal */
export type Job$Outbound = {
    hire_date?: string | undefined;
};
/** @internal */
export declare const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Job$ {
    /** @deprecated use `Job$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown>;
    /** @deprecated use `Job$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job>;
    /** @deprecated use `Job$Outbound` instead. */
    type Outbound = Job$Outbound;
}
export declare function jobToJSON(job: Job): string;
export declare function jobFromJSON(jsonString: string): SafeParseResult<Job, SDKValidationError>;
/** @internal */
export declare const EmployeeStateTaxes$inboundSchema: z.ZodType<EmployeeStateTaxes, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployeeStateTaxes$Outbound = {
    wc_covered?: boolean | undefined;
    wc_class_code?: string | undefined;
};
/** @internal */
export declare const EmployeeStateTaxes$outboundSchema: z.ZodType<EmployeeStateTaxes$Outbound, z.ZodTypeDef, EmployeeStateTaxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployeeStateTaxes$ {
    /** @deprecated use `EmployeeStateTaxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployeeStateTaxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployeeStateTaxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployeeStateTaxes$Outbound, z.ZodTypeDef, EmployeeStateTaxes>;
    /** @deprecated use `EmployeeStateTaxes$Outbound` instead. */
    type Outbound = EmployeeStateTaxes$Outbound;
}
export declare function employeeStateTaxesToJSON(employeeStateTaxes: EmployeeStateTaxes): string;
export declare function employeeStateTaxesFromJSON(jsonString: string): SafeParseResult<EmployeeStateTaxes, SDKValidationError>;
/** @internal */
export declare const PutV1HistoricalEmployeesRequestBody$inboundSchema: z.ZodType<PutV1HistoricalEmployeesRequestBody, z.ZodTypeDef, unknown>;
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
    home_address: PutV1HistoricalEmployeesHomeAddress$Outbound;
    termination: Termination$Outbound;
    email?: string | undefined;
    job: Job$Outbound;
    employee_state_taxes?: EmployeeStateTaxes$Outbound | undefined;
};
/** @internal */
export declare const PutV1HistoricalEmployeesRequestBody$outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HistoricalEmployeesRequestBody$ {
    /** @deprecated use `PutV1HistoricalEmployeesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HistoricalEmployeesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HistoricalEmployeesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequestBody>;
    /** @deprecated use `PutV1HistoricalEmployeesRequestBody$Outbound` instead. */
    type Outbound = PutV1HistoricalEmployeesRequestBody$Outbound;
}
export declare function putV1HistoricalEmployeesRequestBodyToJSON(putV1HistoricalEmployeesRequestBody: PutV1HistoricalEmployeesRequestBody): string;
export declare function putV1HistoricalEmployeesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1HistoricalEmployeesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1HistoricalEmployeesRequest$inboundSchema: z.ZodType<PutV1HistoricalEmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HistoricalEmployeesRequest$Outbound = {
    company_uuid: string;
    historical_employee_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1HistoricalEmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1HistoricalEmployeesRequest$outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HistoricalEmployeesRequest$ {
    /** @deprecated use `PutV1HistoricalEmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HistoricalEmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HistoricalEmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HistoricalEmployeesRequest$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesRequest>;
    /** @deprecated use `PutV1HistoricalEmployeesRequest$Outbound` instead. */
    type Outbound = PutV1HistoricalEmployeesRequest$Outbound;
}
export declare function putV1HistoricalEmployeesRequestToJSON(putV1HistoricalEmployeesRequest: PutV1HistoricalEmployeesRequest): string;
export declare function putV1HistoricalEmployeesRequestFromJSON(jsonString: string): SafeParseResult<PutV1HistoricalEmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1HistoricalEmployeesResponse$inboundSchema: z.ZodType<PutV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HistoricalEmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Employee?: components.Employee$Outbound | undefined;
};
/** @internal */
export declare const PutV1HistoricalEmployeesResponse$outboundSchema: z.ZodType<PutV1HistoricalEmployeesResponse$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HistoricalEmployeesResponse$ {
    /** @deprecated use `PutV1HistoricalEmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HistoricalEmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HistoricalEmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HistoricalEmployeesResponse$Outbound, z.ZodTypeDef, PutV1HistoricalEmployeesResponse>;
    /** @deprecated use `PutV1HistoricalEmployeesResponse$Outbound` instead. */
    type Outbound = PutV1HistoricalEmployeesResponse$Outbound;
}
export declare function putV1HistoricalEmployeesResponseToJSON(putV1HistoricalEmployeesResponse: PutV1HistoricalEmployeesResponse): string;
export declare function putV1HistoricalEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PutV1HistoricalEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=putv1historicalemployees.d.ts.map