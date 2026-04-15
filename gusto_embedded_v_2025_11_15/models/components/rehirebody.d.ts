import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
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
export type RehireBody = {
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
/** @internal */
export declare const EmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof EmploymentStatus>;
/** @internal */
export declare const EmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof EmploymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentStatus$ {
    /** @deprecated use `EmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly PartTime: "part_time";
        readonly FullTime: "full_time";
        readonly PartTimeEligible: "part_time_eligible";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
        readonly NotSet: "not_set";
    }>;
    /** @deprecated use `EmploymentStatus$outboundSchema` instead. */
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
export declare const RehireBody$inboundSchema: z.ZodType<RehireBody, z.ZodTypeDef, unknown>;
/** @internal */
export type RehireBody$Outbound = {
    effective_date: string;
    file_new_hire_report: boolean;
    work_location_uuid: string;
    employment_status?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
};
/** @internal */
export declare const RehireBody$outboundSchema: z.ZodType<RehireBody$Outbound, z.ZodTypeDef, RehireBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RehireBody$ {
    /** @deprecated use `RehireBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RehireBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `RehireBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RehireBody$Outbound, z.ZodTypeDef, RehireBody>;
    /** @deprecated use `RehireBody$Outbound` instead. */
    type Outbound = RehireBody$Outbound;
}
export declare function rehireBodyToJSON(rehireBody: RehireBody): string;
export declare function rehireBodyFromJSON(jsonString: string): SafeParseResult<RehireBody, SDKValidationError>;
//# sourceMappingURL=rehirebody.d.ts.map