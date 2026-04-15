import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest = {
    /**
     * The UUID of the company time off policy
     */
    timeOffPolicyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse = {
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
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound = {
    time_off_policy_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequestToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequestFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest, SDKValidationError>;
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Time-Off-Policy"?: components.TimeOffPolicy$Outbound | undefined;
};
/** @internal */
export declare const PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$ {
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$Outbound, z.ZodTypeDef, PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse>;
    /** @deprecated use `PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$Outbound` instead. */
    type Outbound = PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse$Outbound;
}
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponseToJSON(putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse: PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse): string;
export declare function putV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponseFromJSON(jsonString: string): SafeParseResult<PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateResponse, SDKValidationError>;
//# sourceMappingURL=putv1timeoffpoliciestimeoffpolicyuuiddeactivate.d.ts.map