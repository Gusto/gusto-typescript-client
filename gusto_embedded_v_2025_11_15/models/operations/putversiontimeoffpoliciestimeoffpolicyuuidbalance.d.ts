import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees = {
    uuid?: string | undefined;
    balance?: string | undefined;
};
/**
 * A list of employee objects containing the employee uuid and time off hours balance
 */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody = {
    employees?: Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees> | undefined;
};
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest = {
    /**
     * The UUID of the company time off policy
     */
    timeOffPolicyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * A list of employee objects containing the employee uuid and time off hours balance
     */
    requestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody;
};
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse = {
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
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound = {
    uuid?: string | undefined;
    balance?: string | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployeesToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployeesFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound = {
    employees?: Array<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceEmployees$Outbound> | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBodyFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestBody$Outbound;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequestFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest, SDKValidationError>;
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$ {
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$Outbound, z.ZodTypeDef, PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse>;
    /** @deprecated use `PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$Outbound` instead. */
    type Outbound = PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse$Outbound;
}
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponseToJSON(putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse: PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse): string;
export declare function putVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponseFromJSON(jsonString: string): SafeParseResult<PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceResponse, SDKValidationError>;
//# sourceMappingURL=putversiontimeoffpoliciestimeoffpolicyuuidbalance.d.ts.map