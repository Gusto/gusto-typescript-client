import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Create an employee.
 */
export type PostV1EmployeesRequestBody = {
    firstName: string;
    middleInitial?: string | undefined;
    lastName: string;
    preferredFirstName?: string | undefined;
    dateOfBirth?: string | undefined;
    /**
     * The employee's personal email address.
     */
    email?: string | undefined;
    ssn?: string | undefined;
    /**
     * If true, employee is expected to self-onboard. If false, payroll admin is expected to enter in the employee's onboarding information
     */
    selfOnboarding?: boolean | undefined;
};
export type PostV1EmployeesRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Create an employee.
     */
    requestBody: PostV1EmployeesRequestBody;
};
export type PostV1EmployeesResponse = {
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
export declare const PostV1EmployeesRequestBody$inboundSchema: z.ZodType<PostV1EmployeesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesRequestBody$Outbound = {
    first_name: string;
    middle_initial?: string | undefined;
    last_name: string;
    preferred_first_name?: string | undefined;
    date_of_birth?: string | undefined;
    email?: string | undefined;
    ssn?: string | undefined;
    self_onboarding?: boolean | undefined;
};
/** @internal */
export declare const PostV1EmployeesRequestBody$outboundSchema: z.ZodType<PostV1EmployeesRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesRequestBody$ {
    /** @deprecated use `PostV1EmployeesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesRequestBody>;
    /** @deprecated use `PostV1EmployeesRequestBody$Outbound` instead. */
    type Outbound = PostV1EmployeesRequestBody$Outbound;
}
export declare function postV1EmployeesRequestBodyToJSON(postV1EmployeesRequestBody: PostV1EmployeesRequestBody): string;
export declare function postV1EmployeesRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesRequest$inboundSchema: z.ZodType<PostV1EmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesRequest$outboundSchema: z.ZodType<PostV1EmployeesRequest$Outbound, z.ZodTypeDef, PostV1EmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesRequest$ {
    /** @deprecated use `PostV1EmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesRequest$Outbound, z.ZodTypeDef, PostV1EmployeesRequest>;
    /** @deprecated use `PostV1EmployeesRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesRequest$Outbound;
}
export declare function postV1EmployeesRequestToJSON(postV1EmployeesRequest: PostV1EmployeesRequest): string;
export declare function postV1EmployeesRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesResponse$inboundSchema: z.ZodType<PostV1EmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Employee?: components.Employee$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesResponse$outboundSchema: z.ZodType<PostV1EmployeesResponse$Outbound, z.ZodTypeDef, PostV1EmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesResponse$ {
    /** @deprecated use `PostV1EmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesResponse$Outbound, z.ZodTypeDef, PostV1EmployeesResponse>;
    /** @deprecated use `PostV1EmployeesResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesResponse$Outbound;
}
export declare function postV1EmployeesResponseToJSON(postV1EmployeesResponse: PostV1EmployeesResponse): string;
export declare function postV1EmployeesResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesResponse, SDKValidationError>;
//# sourceMappingURL=postv1employees.d.ts.map