import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1EmployeesEmployeeIdTerminationsRequestBody = {
    /**
     * The employee's last day of work.
     */
    effectiveDate: string;
    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     */
    runTerminationPayroll?: boolean | undefined;
};
export type PostV1EmployeesEmployeeIdTerminationsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody;
};
export type PostV1EmployeesEmployeeIdTerminationsResponse = {
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
     * Example Response
     */
    termination?: components.Termination | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequestBody$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound = {
    effective_date: string;
    run_termination_payroll?: boolean | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdTerminationsRequestBody$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequestBody>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound;
}
export declare function postV1EmployeesEmployeeIdTerminationsRequestBodyToJSON(postV1EmployeesEmployeeIdTerminationsRequestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody): string;
export declare function postV1EmployeesEmployeeIdTerminationsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdTerminationsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequest$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdTerminationsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdTerminationsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdTerminationsRequest$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsRequest>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdTerminationsRequest$Outbound;
}
export declare function postV1EmployeesEmployeeIdTerminationsRequestToJSON(postV1EmployeesEmployeeIdTerminationsRequest: PostV1EmployeesEmployeeIdTerminationsRequest): string;
export declare function postV1EmployeesEmployeeIdTerminationsRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdTerminationsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdTerminationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Termination?: components.Termination$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdTerminationsResponse$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdTerminationsResponse$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdTerminationsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdTerminationsResponse>;
    /** @deprecated use `PostV1EmployeesEmployeeIdTerminationsResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdTerminationsResponse$Outbound;
}
export declare function postV1EmployeesEmployeeIdTerminationsResponseToJSON(postV1EmployeesEmployeeIdTerminationsResponse: PostV1EmployeesEmployeeIdTerminationsResponse): string;
export declare function postV1EmployeesEmployeeIdTerminationsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdTerminationsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidterminations.d.ts.map