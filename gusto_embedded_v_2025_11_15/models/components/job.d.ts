import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Compensation, Compensation$Outbound } from "./compensation.js";
/**
 * The representation of a job in Gusto.
 */
export type Job = {
    /**
     * The UUID of the job.
     */
    uuid: string;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The UUID of the employee to which the job belongs.
     */
    employeeUuid?: string | undefined;
    /**
     * The date when the employee was hired or rehired for the job.
     */
    hireDate?: string | undefined;
    /**
     * The title for the job.
     */
    title?: string | null | undefined;
    /**
     * Whether this is the employee's primary job. The value will be set to true unless an existing job exists for the employee.
     */
    primary?: boolean | undefined;
    /**
     * The current compensation rate of the job.
     */
    rate?: string | undefined;
    /**
     * The payment unit of the current compensation for the job.
     */
    paymentUnit?: string | undefined;
    /**
     * The UUID of the current compensation of the job.
     */
    currentCompensationUuid?: string | undefined;
    /**
     * Whether the employee owns at least 2% of the company.
     */
    twoPercentShareholder?: boolean | undefined;
    /**
     * Whether this job is eligible for workers' compensation coverage in the state of Washington (WA).
     */
    stateWcCovered?: boolean | null | undefined;
    /**
     * The risk class code for workers' compensation in Washington state. Please visit [Washington state's Risk Class page](https://www.lni.wa.gov/insurance/rates-risk-classes/risk-classes-for-workers-compensation/risk-class-lookup#/) to learn more.
     */
    stateWcClassCode?: string | null | undefined;
    compensations?: Array<Compensation> | undefined;
};
/** @internal */
export declare const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown>;
/** @internal */
export type Job$Outbound = {
    uuid: string;
    version?: string | undefined;
    employee_uuid?: string | undefined;
    hire_date?: string | undefined;
    title: string | null;
    primary?: boolean | undefined;
    rate?: string | undefined;
    payment_unit?: string | undefined;
    current_compensation_uuid?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
    state_wc_covered?: boolean | null | undefined;
    state_wc_class_code?: string | null | undefined;
    compensations?: Array<Compensation$Outbound> | undefined;
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
//# sourceMappingURL=job.d.ts.map