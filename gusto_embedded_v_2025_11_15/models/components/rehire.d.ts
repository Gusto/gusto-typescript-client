import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export declare const RehireEmploymentStatus: {
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
export type RehireEmploymentStatus = ClosedEnum<typeof RehireEmploymentStatus>;
/**
 * Example response
 */
export type Rehire = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * The day when the employee returns to work.
     */
    effectiveDate?: string | undefined;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the employee.
     */
    fileNewHireReport?: boolean | undefined;
    /**
     * The uuid of the employee's work location.
     */
    workLocationUuid?: string | undefined;
    /**
     * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
     */
    employmentStatus?: RehireEmploymentStatus | undefined;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     */
    twoPercentShareholder?: boolean | undefined;
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * Whether the employee's rehire has gone into effect.
     */
    active?: boolean | undefined;
};
/** @internal */
export declare const RehireEmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof RehireEmploymentStatus>;
/** @internal */
export declare const RehireEmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof RehireEmploymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RehireEmploymentStatus$ {
    /** @deprecated use `RehireEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly PartTime: "part_time";
        readonly FullTime: "full_time";
        readonly PartTimeEligible: "part_time_eligible";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
        readonly NotSet: "not_set";
    }>;
    /** @deprecated use `RehireEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly PartTime: "part_time";
        readonly FullTime: "full_time";
        readonly PartTimeEligible: "part_time_eligible";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
        readonly NotSet: "not_set";
    }>;
}
/** @internal */
export declare const Rehire$inboundSchema: z.ZodType<Rehire, z.ZodTypeDef, unknown>;
/** @internal */
export type Rehire$Outbound = {
    version?: string | undefined;
    effective_date?: string | undefined;
    file_new_hire_report?: boolean | undefined;
    work_location_uuid?: string | undefined;
    employment_status?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
    employee_uuid?: string | undefined;
    active?: boolean | undefined;
};
/** @internal */
export declare const Rehire$outboundSchema: z.ZodType<Rehire$Outbound, z.ZodTypeDef, Rehire>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Rehire$ {
    /** @deprecated use `Rehire$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Rehire, z.ZodTypeDef, unknown>;
    /** @deprecated use `Rehire$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Rehire$Outbound, z.ZodTypeDef, Rehire>;
    /** @deprecated use `Rehire$Outbound` instead. */
    type Outbound = Rehire$Outbound;
}
export declare function rehireToJSON(rehire: Rehire): string;
export declare function rehireFromJSON(jsonString: string): SafeParseResult<Rehire, SDKValidationError>;
//# sourceMappingURL=rehire.d.ts.map