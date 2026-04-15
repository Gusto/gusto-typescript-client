import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees = {
    uuid?: string | undefined;
};
/**
 * A list of employee objects containing the employee uuid
 */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody = {
    employees?: Array<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees> | undefined;
};
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest = {
    /**
     * The UUID of the company time off policy
     */
    timeOffPolicyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * A list of employee objects containing the employee uuid
     */
    requestBody: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody;
};
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse = {
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
     * OK
     */
    timeOffPolicy?: components.TimeOffPolicy | undefined;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployeesToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployeesFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees, SDKValidationError>;
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound = {
    employees?: Array<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesEmployees$Outbound> | undefined;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequestFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponseToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse: PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=putv1timeoffpoliciestimeoffpolicyuuidremoveemployees.d.ts.map