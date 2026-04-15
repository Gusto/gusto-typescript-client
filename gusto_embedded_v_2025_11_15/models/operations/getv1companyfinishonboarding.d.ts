import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFinishOnboardingRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyFinishOnboardingResponse = {
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
export declare const GetV1CompanyFinishOnboardingRequest$inboundSchema: z.ZodType<GetV1CompanyFinishOnboardingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFinishOnboardingRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFinishOnboardingRequest$outboundSchema: z.ZodType<GetV1CompanyFinishOnboardingRequest$Outbound, z.ZodTypeDef, GetV1CompanyFinishOnboardingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFinishOnboardingRequest$ {
    /** @deprecated use `GetV1CompanyFinishOnboardingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFinishOnboardingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFinishOnboardingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFinishOnboardingRequest$Outbound, z.ZodTypeDef, GetV1CompanyFinishOnboardingRequest>;
    /** @deprecated use `GetV1CompanyFinishOnboardingRequest$Outbound` instead. */
    type Outbound = GetV1CompanyFinishOnboardingRequest$Outbound;
}
export declare function getV1CompanyFinishOnboardingRequestToJSON(getV1CompanyFinishOnboardingRequest: GetV1CompanyFinishOnboardingRequest): string;
export declare function getV1CompanyFinishOnboardingRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFinishOnboardingRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyFinishOnboardingResponse$inboundSchema: z.ZodType<GetV1CompanyFinishOnboardingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFinishOnboardingResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Company-Onboarding-Status"?: components.CompanyOnboardingStatus$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompanyFinishOnboardingResponse$outboundSchema: z.ZodType<GetV1CompanyFinishOnboardingResponse$Outbound, z.ZodTypeDef, GetV1CompanyFinishOnboardingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFinishOnboardingResponse$ {
    /** @deprecated use `GetV1CompanyFinishOnboardingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFinishOnboardingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFinishOnboardingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFinishOnboardingResponse$Outbound, z.ZodTypeDef, GetV1CompanyFinishOnboardingResponse>;
    /** @deprecated use `GetV1CompanyFinishOnboardingResponse$Outbound` instead. */
    type Outbound = GetV1CompanyFinishOnboardingResponse$Outbound;
}
export declare function getV1CompanyFinishOnboardingResponseToJSON(getV1CompanyFinishOnboardingResponse: GetV1CompanyFinishOnboardingResponse): string;
export declare function getV1CompanyFinishOnboardingResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFinishOnboardingResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyfinishonboarding.d.ts.map