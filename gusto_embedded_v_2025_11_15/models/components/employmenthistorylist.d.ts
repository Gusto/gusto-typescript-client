import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
 */
export declare const EmploymentHistoryListEmploymentStatus: {
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
export type EmploymentHistoryListEmploymentStatus = ClosedEnum<typeof EmploymentHistoryListEmploymentStatus>;
/**
 * Example response
 */
export type EmploymentHistoryList = {
    /**
     * The employee's start day of work for an employment.
     */
    hireDate?: string | undefined;
    /**
     * The employee's last day of work for an employment.
     */
    terminationDate?: string | undefined;
    /**
     * The boolean flag indicating whether Gusto will file a new hire report for the employee.
     */
    fileNewHireReport?: boolean | undefined;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     */
    twoPercentShareholder?: boolean | undefined;
    /**
     * The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.
     */
    employmentStatus?: EmploymentHistoryListEmploymentStatus | undefined;
};
/** @internal */
export declare const EmploymentHistoryListEmploymentStatus$inboundSchema: z.ZodNativeEnum<typeof EmploymentHistoryListEmploymentStatus>;
/** @internal */
export declare const EmploymentHistoryListEmploymentStatus$outboundSchema: z.ZodNativeEnum<typeof EmploymentHistoryListEmploymentStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentHistoryListEmploymentStatus$ {
    /** @deprecated use `EmploymentHistoryListEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly PartTime: "part_time";
        readonly FullTime: "full_time";
        readonly PartTimeEligible: "part_time_eligible";
        readonly Variable: "variable";
        readonly Seasonal: "seasonal";
        readonly NotSet: "not_set";
    }>;
    /** @deprecated use `EmploymentHistoryListEmploymentStatus$outboundSchema` instead. */
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
export declare const EmploymentHistoryList$inboundSchema: z.ZodType<EmploymentHistoryList, z.ZodTypeDef, unknown>;
/** @internal */
export type EmploymentHistoryList$Outbound = {
    hire_date?: string | undefined;
    termination_date?: string | undefined;
    file_new_hire_report?: boolean | undefined;
    two_percent_shareholder?: boolean | undefined;
    employment_status?: string | undefined;
};
/** @internal */
export declare const EmploymentHistoryList$outboundSchema: z.ZodType<EmploymentHistoryList$Outbound, z.ZodTypeDef, EmploymentHistoryList>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentHistoryList$ {
    /** @deprecated use `EmploymentHistoryList$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmploymentHistoryList, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmploymentHistoryList$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmploymentHistoryList$Outbound, z.ZodTypeDef, EmploymentHistoryList>;
    /** @deprecated use `EmploymentHistoryList$Outbound` instead. */
    type Outbound = EmploymentHistoryList$Outbound;
}
export declare function employmentHistoryListToJSON(employmentHistoryList: EmploymentHistoryList): string;
export declare function employmentHistoryListFromJSON(jsonString: string): SafeParseResult<EmploymentHistoryList, SDKValidationError>;
//# sourceMappingURL=employmenthistorylist.d.ts.map