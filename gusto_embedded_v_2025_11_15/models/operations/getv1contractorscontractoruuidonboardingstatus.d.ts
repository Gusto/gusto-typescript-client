import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidOnboardingStatusRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidOnboardingStatusResponse = {
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
export declare const GetV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidOnboardingStatusRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidOnboardingStatusRequest$ {
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidOnboardingStatusRequest>;
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidOnboardingStatusRequest$Outbound;
}
export declare function getV1ContractorsContractorUuidOnboardingStatusRequestToJSON(getV1ContractorsContractorUuidOnboardingStatusRequest: GetV1ContractorsContractorUuidOnboardingStatusRequest): string;
export declare function getV1ContractorsContractorUuidOnboardingStatusRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidOnboardingStatusRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidOnboardingStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Onboarding-Status"?: components.ContractorOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidOnboardingStatusResponse$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidOnboardingStatusResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidOnboardingStatusResponse$ {
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidOnboardingStatusResponse>;
    /** @deprecated use `GetV1ContractorsContractorUuidOnboardingStatusResponse$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidOnboardingStatusResponse$Outbound;
}
export declare function getV1ContractorsContractorUuidOnboardingStatusResponseToJSON(getV1ContractorsContractorUuidOnboardingStatusResponse: GetV1ContractorsContractorUuidOnboardingStatusResponse): string;
export declare function getV1ContractorsContractorUuidOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidonboardingstatus.d.ts.map