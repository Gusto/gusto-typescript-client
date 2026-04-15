import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyOnboardingStatus } from "../components/companyonboardingstatus.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion>;
export type GetV1CompanyFinishOnboardingRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion | undefined;
};
export type GetV1CompanyFinishOnboardingResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Success
     */
    companyOnboardingStatus?: CompanyOnboardingStatus | undefined;
};
/** @internal */
export declare const GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1CompanyFinishOnboardingHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1CompanyFinishOnboardingRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFinishOnboardingRequest$outboundSchema: z.ZodType<GetV1CompanyFinishOnboardingRequest$Outbound, z.ZodTypeDef, GetV1CompanyFinishOnboardingRequest>;
export declare function getV1CompanyFinishOnboardingRequestToJSON(getV1CompanyFinishOnboardingRequest: GetV1CompanyFinishOnboardingRequest): string;
/** @internal */
export declare const GetV1CompanyFinishOnboardingResponse$inboundSchema: z.ZodType<GetV1CompanyFinishOnboardingResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyFinishOnboardingResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFinishOnboardingResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyfinishonboarding.d.ts.map