import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyOnboardingStatusRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Comma delimited string indicating whether to include any additional steps of onboarding. Currently only supports the value "external_payroll".
     */
    additionalSteps?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyOnboardingStatusResponse = {
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
    companyOnboardingStatus?: components.CompanyOnboardingStatus | undefined;
};
/** @internal */
export declare const GetV1CompanyOnboardingStatusRequest$inboundSchema: z.ZodType<GetV1CompanyOnboardingStatusRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyOnboardingStatusRequest$Outbound = {
    company_uuid: string;
    additional_steps?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyOnboardingStatusRequest$outboundSchema: z.ZodType<GetV1CompanyOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1CompanyOnboardingStatusRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyOnboardingStatusRequest$ {
    /** @deprecated use `GetV1CompanyOnboardingStatusRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyOnboardingStatusRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyOnboardingStatusRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyOnboardingStatusRequest$Outbound, z.ZodTypeDef, GetV1CompanyOnboardingStatusRequest>;
    /** @deprecated use `GetV1CompanyOnboardingStatusRequest$Outbound` instead. */
    type Outbound = GetV1CompanyOnboardingStatusRequest$Outbound;
}
export declare function getV1CompanyOnboardingStatusRequestToJSON(getV1CompanyOnboardingStatusRequest: GetV1CompanyOnboardingStatusRequest): string;
export declare function getV1CompanyOnboardingStatusRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyOnboardingStatusRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyOnboardingStatusResponse$inboundSchema: z.ZodType<GetV1CompanyOnboardingStatusResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyOnboardingStatusResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Onboarding-Status"?: components.CompanyOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyOnboardingStatusResponse$outboundSchema: z.ZodType<GetV1CompanyOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1CompanyOnboardingStatusResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyOnboardingStatusResponse$ {
    /** @deprecated use `GetV1CompanyOnboardingStatusResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyOnboardingStatusResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyOnboardingStatusResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyOnboardingStatusResponse$Outbound, z.ZodTypeDef, GetV1CompanyOnboardingStatusResponse>;
    /** @deprecated use `GetV1CompanyOnboardingStatusResponse$Outbound` instead. */
    type Outbound = GetV1CompanyOnboardingStatusResponse$Outbound;
}
export declare function getV1CompanyOnboardingStatusResponseToJSON(getV1CompanyOnboardingStatusResponse: GetV1CompanyOnboardingStatusResponse): string;
export declare function getV1CompanyOnboardingStatusResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyOnboardingStatusResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyonboardingstatus.d.ts.map