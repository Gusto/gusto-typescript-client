import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorOnboardingStatus } from "../components/contractoronboardingstatus.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The updated onboarding status for the contractor
 */
export declare const PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus: {
    readonly AdminOnboardingIncomplete: "admin_onboarding_incomplete";
    readonly AdminOnboardingReview: "admin_onboarding_review";
    readonly SelfOnboardingNotInvited: "self_onboarding_not_invited";
    readonly SelfOnboardingInvited: "self_onboarding_invited";
    readonly SelfOnboardingStarted: "self_onboarding_started";
    readonly SelfOnboardingReview: "self_onboarding_review";
    readonly OnboardingCompleted: "onboarding_completed";
};
/**
 * The updated onboarding status for the contractor
 */
export type PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus = ClosedEnum<typeof PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus>;
export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody = {
    /**
     * The updated onboarding status for the contractor
     */
    onboardingStatus?: PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus | undefined;
};
export type PutV1ContractorsContractorUuidOnboardingStatusRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody;
};
export type PutV1ContractorsContractorUuidOnboardingStatusResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response.
     */
    contractorOnboardingStatus?: ContractorOnboardingStatus | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorUuidOnboardingStatusOnboardingStatus>;
/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound = {
    onboarding_status: string;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequestBody>;
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestBodyToJSON(putV1ContractorsContractorUuidOnboardingStatusRequestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody): string;
/** @internal */
export type PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorUuidOnboardingStatusRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorUuidOnboardingStatusRequest>;
export declare function putV1ContractorsContractorUuidOnboardingStatusRequestToJSON(putV1ContractorsContractorUuidOnboardingStatusRequest: PutV1ContractorsContractorUuidOnboardingStatusRequest): string;
/** @internal */
export declare const PutV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
export declare function putV1ContractorsContractorUuidOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorUuidOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoruuidonboardingstatus.d.ts.map