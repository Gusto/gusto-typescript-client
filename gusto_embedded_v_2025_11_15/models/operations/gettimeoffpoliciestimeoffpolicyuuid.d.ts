import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetTimeOffPoliciesTimeOffPolicyUuidRequest = {
    /**
     * The UUID of the company time off policy
     */
    timeOffPolicyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetTimeOffPoliciesTimeOffPolicyUuidResponse = {
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
    timeOffPolicy?: components.TimeOffPolicy | undefined;
};
/** @internal */
export declare const GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound, z.ZodTypeDef, GetTimeOffPoliciesTimeOffPolicyUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTimeOffPoliciesTimeOffPolicyUuidRequest$ {
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound, z.ZodTypeDef, GetTimeOffPoliciesTimeOffPolicyUuidRequest>;
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound` instead. */
    type Outbound = GetTimeOffPoliciesTimeOffPolicyUuidRequest$Outbound;
}
export declare function getTimeOffPoliciesTimeOffPolicyUuidRequestToJSON(getTimeOffPoliciesTimeOffPolicyUuidRequest: GetTimeOffPoliciesTimeOffPolicyUuidRequest): string;
export declare function getTimeOffPoliciesTimeOffPolicyUuidRequestFromJSON(jsonString: string): SafeParseResult<GetTimeOffPoliciesTimeOffPolicyUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const GetTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound, z.ZodTypeDef, GetTimeOffPoliciesTimeOffPolicyUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetTimeOffPoliciesTimeOffPolicyUuidResponse$ {
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound, z.ZodTypeDef, GetTimeOffPoliciesTimeOffPolicyUuidResponse>;
    /** @deprecated use `GetTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound` instead. */
    type Outbound = GetTimeOffPoliciesTimeOffPolicyUuidResponse$Outbound;
}
export declare function getTimeOffPoliciesTimeOffPolicyUuidResponseToJSON(getTimeOffPoliciesTimeOffPolicyUuidResponse: GetTimeOffPoliciesTimeOffPolicyUuidResponse): string;
export declare function getTimeOffPoliciesTimeOffPolicyUuidResponseFromJSON(jsonString: string): SafeParseResult<GetTimeOffPoliciesTimeOffPolicyUuidResponse, SDKValidationError>;
//# sourceMappingURL=gettimeoffpoliciestimeoffpolicyuuid.d.ts.map