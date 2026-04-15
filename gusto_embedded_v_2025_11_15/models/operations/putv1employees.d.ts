import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Update an employee.
 */
export type PutV1EmployeesRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    firstName?: string | undefined;
    middleInitial?: string | undefined;
    lastName?: string | undefined;
    preferredFirstName?: string | undefined;
    dateOfBirth?: string | undefined;
    /**
     * The employee's personal email address.
     */
    email?: string | undefined;
    ssn?: string | undefined;
    /**
     * Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type.
     */
    twoPercentShareholder?: boolean | undefined;
};
export type PutV1EmployeesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Update an employee.
     */
    requestBody: PutV1EmployeesRequestBody;
};
export type PutV1EmployeesResponse = {
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
export declare const PutV1EmployeesRequestBody$inboundSchema: z.ZodType<PutV1EmployeesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesRequestBody$Outbound = {
    version: string;
    first_name?: string | undefined;
    middle_initial?: string | undefined;
    last_name?: string | undefined;
    preferred_first_name?: string | undefined;
    date_of_birth?: string | undefined;
    email?: string | undefined;
    ssn?: string | undefined;
    two_percent_shareholder?: boolean | undefined;
};
/** @internal */
export declare const PutV1EmployeesRequestBody$outboundSchema: z.ZodType<PutV1EmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesRequestBody$ {
    /** @deprecated use `PutV1EmployeesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesRequestBody>;
    /** @deprecated use `PutV1EmployeesRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesRequestBody$Outbound;
}
export declare function putV1EmployeesRequestBodyToJSON(putV1EmployeesRequestBody: PutV1EmployeesRequestBody): string;
export declare function putV1EmployeesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesRequest$inboundSchema: z.ZodType<PutV1EmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesRequest$outboundSchema: z.ZodType<PutV1EmployeesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesRequest$ {
    /** @deprecated use `PutV1EmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesRequest>;
    /** @deprecated use `PutV1EmployeesRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesRequest$Outbound;
}
export declare function putV1EmployeesRequestToJSON(putV1EmployeesRequest: PutV1EmployeesRequest): string;
export declare function putV1EmployeesRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesResponse$inboundSchema: z.ZodType<PutV1EmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Employee?: components.Employee$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesResponse$outboundSchema: z.ZodType<PutV1EmployeesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesResponse$ {
    /** @deprecated use `PutV1EmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesResponse>;
    /** @deprecated use `PutV1EmployeesResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesResponse$Outbound;
}
export declare function putV1EmployeesResponseToJSON(putV1EmployeesResponse: PutV1EmployeesResponse): string;
export declare function putV1EmployeesResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesResponse, SDKValidationError>;
//# sourceMappingURL=putv1employees.d.ts.map