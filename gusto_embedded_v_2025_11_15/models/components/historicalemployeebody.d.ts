import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WorkAddress = {
    /**
     * Reference to a company location
     */
    locationUuid?: string | undefined;
};
export type HistoricalEmployeeBodyHomeAddress = {
    street1: string;
    street2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
};
export type HistoricalEmployeeBodyTermination = {
    /**
     * Date the employee was terminated from the company
     */
    effectiveDate?: RFCDate | undefined;
};
export type HistoricalEmployeeBodyJob = {
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
export type HistoricalEmployeeBody = {
    firstName: string;
    middleInitial?: string | undefined;
    lastName: string;
    preferredFirstName?: string | undefined;
    dateOfBirth: string;
    ssn: string;
    workAddress: WorkAddress;
    homeAddress: HistoricalEmployeeBodyHomeAddress;
    termination: HistoricalEmployeeBodyTermination;
    /**
     * Optional. If provided, the email address will be saved to the employee.
     */
    email?: string | undefined;
    job: HistoricalEmployeeBodyJob;
    employeeStateTaxes?: EmployeeStateTaxes | undefined;
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
export declare const HistoricalEmployeeBodyHomeAddress$inboundSchema: z.ZodType<HistoricalEmployeeBodyHomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type HistoricalEmployeeBodyHomeAddress$Outbound = {
    street_1: string;
    street_2?: string | null | undefined;
    city: string;
    state: string;
    zip: string;
};
/** @internal */
export declare const HistoricalEmployeeBodyHomeAddress$outboundSchema: z.ZodType<HistoricalEmployeeBodyHomeAddress$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyHomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HistoricalEmployeeBodyHomeAddress$ {
    /** @deprecated use `HistoricalEmployeeBodyHomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HistoricalEmployeeBodyHomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `HistoricalEmployeeBodyHomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HistoricalEmployeeBodyHomeAddress$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyHomeAddress>;
    /** @deprecated use `HistoricalEmployeeBodyHomeAddress$Outbound` instead. */
    type Outbound = HistoricalEmployeeBodyHomeAddress$Outbound;
}
export declare function historicalEmployeeBodyHomeAddressToJSON(historicalEmployeeBodyHomeAddress: HistoricalEmployeeBodyHomeAddress): string;
export declare function historicalEmployeeBodyHomeAddressFromJSON(jsonString: string): SafeParseResult<HistoricalEmployeeBodyHomeAddress, SDKValidationError>;
/** @internal */
export declare const HistoricalEmployeeBodyTermination$inboundSchema: z.ZodType<HistoricalEmployeeBodyTermination, z.ZodTypeDef, unknown>;
/** @internal */
export type HistoricalEmployeeBodyTermination$Outbound = {
    effective_date?: string | undefined;
};
/** @internal */
export declare const HistoricalEmployeeBodyTermination$outboundSchema: z.ZodType<HistoricalEmployeeBodyTermination$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyTermination>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HistoricalEmployeeBodyTermination$ {
    /** @deprecated use `HistoricalEmployeeBodyTermination$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HistoricalEmployeeBodyTermination, z.ZodTypeDef, unknown>;
    /** @deprecated use `HistoricalEmployeeBodyTermination$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HistoricalEmployeeBodyTermination$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyTermination>;
    /** @deprecated use `HistoricalEmployeeBodyTermination$Outbound` instead. */
    type Outbound = HistoricalEmployeeBodyTermination$Outbound;
}
export declare function historicalEmployeeBodyTerminationToJSON(historicalEmployeeBodyTermination: HistoricalEmployeeBodyTermination): string;
export declare function historicalEmployeeBodyTerminationFromJSON(jsonString: string): SafeParseResult<HistoricalEmployeeBodyTermination, SDKValidationError>;
/** @internal */
export declare const HistoricalEmployeeBodyJob$inboundSchema: z.ZodType<HistoricalEmployeeBodyJob, z.ZodTypeDef, unknown>;
/** @internal */
export type HistoricalEmployeeBodyJob$Outbound = {
    hire_date?: string | undefined;
};
/** @internal */
export declare const HistoricalEmployeeBodyJob$outboundSchema: z.ZodType<HistoricalEmployeeBodyJob$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyJob>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HistoricalEmployeeBodyJob$ {
    /** @deprecated use `HistoricalEmployeeBodyJob$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HistoricalEmployeeBodyJob, z.ZodTypeDef, unknown>;
    /** @deprecated use `HistoricalEmployeeBodyJob$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HistoricalEmployeeBodyJob$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyJob>;
    /** @deprecated use `HistoricalEmployeeBodyJob$Outbound` instead. */
    type Outbound = HistoricalEmployeeBodyJob$Outbound;
}
export declare function historicalEmployeeBodyJobToJSON(historicalEmployeeBodyJob: HistoricalEmployeeBodyJob): string;
export declare function historicalEmployeeBodyJobFromJSON(jsonString: string): SafeParseResult<HistoricalEmployeeBodyJob, SDKValidationError>;
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
export declare const HistoricalEmployeeBody$inboundSchema: z.ZodType<HistoricalEmployeeBody, z.ZodTypeDef, unknown>;
/** @internal */
export type HistoricalEmployeeBody$Outbound = {
    first_name: string;
    middle_initial?: string | undefined;
    last_name: string;
    preferred_first_name?: string | undefined;
    date_of_birth: string;
    ssn: string;
    work_address: WorkAddress$Outbound;
    home_address: HistoricalEmployeeBodyHomeAddress$Outbound;
    termination: HistoricalEmployeeBodyTermination$Outbound;
    email?: string | undefined;
    job: HistoricalEmployeeBodyJob$Outbound;
    employee_state_taxes?: EmployeeStateTaxes$Outbound | undefined;
};
/** @internal */
export declare const HistoricalEmployeeBody$outboundSchema: z.ZodType<HistoricalEmployeeBody$Outbound, z.ZodTypeDef, HistoricalEmployeeBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HistoricalEmployeeBody$ {
    /** @deprecated use `HistoricalEmployeeBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HistoricalEmployeeBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `HistoricalEmployeeBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HistoricalEmployeeBody$Outbound, z.ZodTypeDef, HistoricalEmployeeBody>;
    /** @deprecated use `HistoricalEmployeeBody$Outbound` instead. */
    type Outbound = HistoricalEmployeeBody$Outbound;
}
export declare function historicalEmployeeBodyToJSON(historicalEmployeeBody: HistoricalEmployeeBody): string;
export declare function historicalEmployeeBodyFromJSON(jsonString: string): SafeParseResult<HistoricalEmployeeBody, SDKValidationError>;
//# sourceMappingURL=historicalemployeebody.d.ts.map