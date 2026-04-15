import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody = {
    /**
     * regular hours worked in this pay period
     */
    regularHoursWorked?: number | undefined;
    /**
     * overtime hours worked in this pay period
     */
    overtimeHoursWorked?: number | undefined;
    /**
     * double overtime hours worked in this pay period
     */
    doubleOvertimeHoursWorked?: number | undefined;
    /**
     * paid time off hours used in this pay period
     */
    ptoHoursUsed?: number | undefined;
    /**
     * sick hours used in this pay period
     */
    sickHoursUsed?: number | undefined;
};
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest = {
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody;
};
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse = {
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
    accruingTimeOffHourObject?: Array<components.AccruingTimeOffHour> | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound = {
    regular_hours_worked?: number | undefined;
    overtime_hours_worked?: number | undefined;
    double_overtime_hours_worked?: number | undefined;
    pto_hours_used?: number | undefined;
    sick_hours_used?: number | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$ {
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound;
}
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBodyToJSON(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody): string;
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound = {
    payroll_id: string;
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestBody$Outbound;
};
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$ {
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest$Outbound;
}
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestToJSON(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest): string;
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequestFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest, SDKValidationError>;
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Accruing-Time-Off-Hour-Object"?: Array<components.AccruingTimeOffHour$Outbound> | undefined;
};
/** @internal */
export declare const PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$ {
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound, z.ZodTypeDef, PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse>;
    /** @deprecated use `PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound` instead. */
    type Outbound = PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse$Outbound;
}
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponseToJSON(postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse: PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse): string;
export declare function postV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponseFromJSON(jsonString: string): SafeParseResult<PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursResponse, SDKValidationError>;
//# sourceMappingURL=postv1payrollspayrollidcalculateaccruingtimeoffhours.d.ts.map