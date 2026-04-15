import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdOnboardingStatusRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdOnboardingStatusResponse = {
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
     * Example response.
     */
    employeeOnboardingStatus?: components.EmployeeOnboardingStatus | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdOnboardingStatusRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdOnboardingStatusRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdOnboardingStatusRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdOnboardingStatusRequestToJSON(getV1EmployeesEmployeeIdOnboardingStatusRequest: GetV1EmployeesEmployeeIdOnboardingStatusRequest): string;
export declare function getV1EmployeesEmployeeIdOnboardingStatusRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdOnboardingStatusRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Onboarding-Status"?: components.EmployeeOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdOnboardingStatusResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdOnboardingStatusResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdOnboardingStatusResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdOnboardingStatusResponseToJSON(getV1EmployeesEmployeeIdOnboardingStatusResponse: GetV1EmployeesEmployeeIdOnboardingStatusResponse): string;
export declare function getV1EmployeesEmployeeIdOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidonboardingstatus.d.ts.map