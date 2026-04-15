import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees = {
    uuid?: string | undefined;
    balance?: string | undefined;
};
/**
 * A list of employee objects containing the employee uuid
 */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody = {
    employees?: Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees> | undefined;
};
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest = {
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
    requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody;
};
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse = {
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
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound = {
    uuid?: string | undefined;
    balance?: string | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployeesToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployeesFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound = {
    employees?: Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesEmployees$Outbound> | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestBody$Outbound;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequestFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponseToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse: PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponseFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesResponse, SDKValidationError>;
//# sourceMappingURL=putversiontimeoffpoliciestimeoffpolicyuuidaddemployees.d.ts.map