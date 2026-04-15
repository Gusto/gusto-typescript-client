import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody = {
    /**
     * Whether to include Form I-9 for an employee during onboarding
     */
    i9Document?: boolean | undefined;
};
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody;
};
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse = {
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
    employeeOnboardingDocument?: components.EmployeeOnboardingDocument | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound = {
    i9_document?: boolean | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBodyToJSON(putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody): string;
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestToJSON(putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest): string;
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Onboarding-Document"?: components.EmployeeOnboardingDocument$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigResponseToJSON(putV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse: PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse): string;
export declare function putV1EmployeesEmployeeIdOnboardingDocumentsConfigResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidonboardingdocumentsconfig.d.ts.map