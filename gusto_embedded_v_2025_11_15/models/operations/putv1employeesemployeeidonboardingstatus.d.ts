import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1EmployeesEmployeeIdOnboardingStatusRequestBody = {
    /**
     * The updated onboarding status for the employee
     */
    onboardingStatus: string;
};
export type PutV1EmployeesEmployeeIdOnboardingStatusRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody;
};
export type PutV1EmployeesEmployeeIdOnboardingStatusResponse = {
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
export declare const PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound = {
    onboarding_status: string;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingStatusRequestBodyToJSON(putV1EmployeesEmployeeIdOnboardingStatusRequestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody): string;
export declare function putV1EmployeesEmployeeIdOnboardingStatusRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingStatusRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdOnboardingStatusRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingStatusRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingStatusRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingStatusRequestToJSON(putV1EmployeesEmployeeIdOnboardingStatusRequest: PutV1EmployeesEmployeeIdOnboardingStatusRequest): string;
export declare function putV1EmployeesEmployeeIdOnboardingStatusRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingStatusRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Onboarding-Status"?: components.EmployeeOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingStatusResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingStatusResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingStatusResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingStatusResponseToJSON(putV1EmployeesEmployeeIdOnboardingStatusResponse: PutV1EmployeesEmployeeIdOnboardingStatusResponse): string;
export declare function putV1EmployeesEmployeeIdOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidonboardingstatus.d.ts.map