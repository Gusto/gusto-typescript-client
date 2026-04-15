import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdI9AuthorizationRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdI9AuthorizationResponse = {
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
    i9Authorization?: components.I9Authorization | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdI9AuthorizationRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdI9AuthorizationRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdI9AuthorizationRequestToJSON(getV1EmployeesEmployeeIdI9AuthorizationRequest: GetV1EmployeesEmployeeIdI9AuthorizationRequest): string;
export declare function getV1EmployeesEmployeeIdI9AuthorizationRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdI9AuthorizationRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization"?: components.I9Authorization$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdI9AuthorizationResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdI9AuthorizationResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdI9AuthorizationResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdI9AuthorizationResponseToJSON(getV1EmployeesEmployeeIdI9AuthorizationResponse: GetV1EmployeesEmployeeIdI9AuthorizationResponse): string;
export declare function getV1EmployeesEmployeeIdI9AuthorizationResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdI9AuthorizationResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidi9authorization.d.ts.map