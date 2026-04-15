import * as z from "zod/v3";
import { RFCDate } from "../../types/rfcdate.js";
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
export type WorkAddress$Outbound = {
    location_uuid?: string | undefined;
};
/** @internal */
export declare const WorkAddress$outboundSchema: z.ZodType<WorkAddress$Outbound, z.ZodTypeDef, WorkAddress>;
export declare function workAddressToJSON(workAddress: WorkAddress): string;
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
export declare function historicalEmployeeBodyHomeAddressToJSON(historicalEmployeeBodyHomeAddress: HistoricalEmployeeBodyHomeAddress): string;
/** @internal */
export type HistoricalEmployeeBodyTermination$Outbound = {
    effective_date?: string | undefined;
};
/** @internal */
export declare const HistoricalEmployeeBodyTermination$outboundSchema: z.ZodType<HistoricalEmployeeBodyTermination$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyTermination>;
export declare function historicalEmployeeBodyTerminationToJSON(historicalEmployeeBodyTermination: HistoricalEmployeeBodyTermination): string;
/** @internal */
export type HistoricalEmployeeBodyJob$Outbound = {
    hire_date?: string | undefined;
};
/** @internal */
export declare const HistoricalEmployeeBodyJob$outboundSchema: z.ZodType<HistoricalEmployeeBodyJob$Outbound, z.ZodTypeDef, HistoricalEmployeeBodyJob>;
export declare function historicalEmployeeBodyJobToJSON(historicalEmployeeBodyJob: HistoricalEmployeeBodyJob): string;
/** @internal */
export type EmployeeStateTaxes$Outbound = {
    wc_covered?: boolean | undefined;
    wc_class_code?: string | undefined;
};
/** @internal */
export declare const EmployeeStateTaxes$outboundSchema: z.ZodType<EmployeeStateTaxes$Outbound, z.ZodTypeDef, EmployeeStateTaxes>;
export declare function employeeStateTaxesToJSON(employeeStateTaxes: EmployeeStateTaxes): string;
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
export declare function historicalEmployeeBodyToJSON(historicalEmployeeBody: HistoricalEmployeeBody): string;
//# sourceMappingURL=historicalemployeebody.d.ts.map