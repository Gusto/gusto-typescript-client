import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The updated onboarding status for the contractor
 */
export declare const OnboardingStatus: {
    readonly OnboardingCompleted: "onboarding_completed";
};
/**
 * The updated onboarding status for the contractor
 */
export type OnboardingStatus = ClosedEnum<typeof OnboardingStatus>;
export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody = {
    /**
     * The updated onboarding status for the contractor
     */
    onboardingStatus?: OnboardingStatus | undefined;
};
export type PutV1ContractorsContractorUuidOnboardingStatusRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody;
};
export type PutV1ContractorsContractorUuidOnboardingStatusResponse = {
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
    contractorOnboardingStatus?: components.ContractorOnboardingStatus | undefined;
};
/** @internal */
export declare const OnboardingStatus$inboundSchema: z.ZodNativeEnum<typeof OnboardingStatus>;
/** @internal */
export declare const OnboardingStatus$outboundSchema: z.ZodNativeEnum<typeof OnboardingStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OnboardingStatus$ {
    /** @deprecated use `OnboardingStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
    }>;
    /** @deprecated use `OnboardingStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OnboardingCompleted: "onboarding_completed";
    }>;
}
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound = {
    onboarding_status: string;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidOnboardingStatusRequestBody$ {
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequestBody>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound;
}
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestBodyToJSON(putV1ContractorsContractorUuidOnboardingStatusRequestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody): string;
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidOnboardingStatusRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidOnboardingStatusRequest$ {
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequest>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound;
}
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestToJSON(putV1ContractorsContractorUuidOnboardingStatusRequest: PutV1ContractorsContractorUuidOnboardingStatusRequest): string;
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidOnboardingStatusRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Onboarding-Status"?: components.ContractorOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusResponse$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorUuidOnboardingStatusResponse$ {
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusResponse>;
    /** @deprecated use `PutV1ContractorsContractorUuidOnboardingStatusResponse$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorUuidOnboardingStatusResponse$Outbound;
}
export declare function putV1ContractorsContractorUuidOnboardingStatusResponseToJSON(putV1ContractorsContractorUuidOnboardingStatusResponse: PutV1ContractorsContractorUuidOnboardingStatusResponse): string;
export declare function putV1ContractorsContractorUuidOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoruuidonboardingstatus.d.ts.map