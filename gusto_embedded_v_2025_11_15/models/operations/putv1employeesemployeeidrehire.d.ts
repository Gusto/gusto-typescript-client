import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdRehireRequestBody;
};
export type PutV1EmployeesEmployeeIdRehireResponse = {
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
    rehire?: components.Rehire | undefined;
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
export declare const PutV1EmployeesEmployeeIdRehireRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequestBody, z.ZodTypeDef, unknown>;
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
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdRehireRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdRehireRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdRehireRequestBodyToJSON(putV1EmployeesEmployeeIdRehireRequestBody: PutV1EmployeesEmployeeIdRehireRequestBody): string;
export declare function putV1EmployeesEmployeeIdRehireRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdRehireRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdRehireRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdRehireRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdRehireRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdRehireRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdRehireRequestToJSON(putV1EmployeesEmployeeIdRehireRequest: PutV1EmployeesEmployeeIdRehireRequest): string;
export declare function putV1EmployeesEmployeeIdRehireRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdRehireRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdRehireResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Rehire?: components.Rehire$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdRehireResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdRehireResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdRehireResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdRehireResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdRehireResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdRehireResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdRehireResponseToJSON(putV1EmployeesEmployeeIdRehireResponse: PutV1EmployeesEmployeeIdRehireResponse): string;
export declare function putV1EmployeesEmployeeIdRehireResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdRehireResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidrehire.d.ts.map