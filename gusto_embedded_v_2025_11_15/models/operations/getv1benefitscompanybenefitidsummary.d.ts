import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1BenefitsCompanyBenefitIdSummaryRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * The start date for which to retrieve company benefit summary
     */
    startDate?: string | undefined;
    /**
     * The end date for which to retrieve company benefit summary. If left empty, defaults to today's date.
     */
    endDate?: string | undefined;
    /**
     * Display employee payroll item summary
     */
    detailed?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1BenefitsCompanyBenefitIdSummaryResponse = {
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
     * Benefit summary response
     */
    benefitSummary?: components.BenefitSummary | undefined;
};
/** @internal */
export declare const GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound = {
    company_benefit_id: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    detailed?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound, z.ZodTypeDef, GetV1BenefitsCompanyBenefitIdSummaryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsCompanyBenefitIdSummaryRequest$ {
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound, z.ZodTypeDef, GetV1BenefitsCompanyBenefitIdSummaryRequest>;
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound` instead. */
    type Outbound = GetV1BenefitsCompanyBenefitIdSummaryRequest$Outbound;
}
export declare function getV1BenefitsCompanyBenefitIdSummaryRequestToJSON(getV1BenefitsCompanyBenefitIdSummaryRequest: GetV1BenefitsCompanyBenefitIdSummaryRequest): string;
export declare function getV1BenefitsCompanyBenefitIdSummaryRequestFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsCompanyBenefitIdSummaryRequest, SDKValidationError>;
/** @internal */
export declare const GetV1BenefitsCompanyBenefitIdSummaryResponse$inboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1BenefitsCompanyBenefitIdSummaryResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Benefit-Summary"?: components.BenefitSummary$Outbound | undefined;
};
/** @internal */
export declare const GetV1BenefitsCompanyBenefitIdSummaryResponse$outboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryResponse$Outbound, z.ZodTypeDef, GetV1BenefitsCompanyBenefitIdSummaryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1BenefitsCompanyBenefitIdSummaryResponse$ {
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryResponse$Outbound, z.ZodTypeDef, GetV1BenefitsCompanyBenefitIdSummaryResponse>;
    /** @deprecated use `GetV1BenefitsCompanyBenefitIdSummaryResponse$Outbound` instead. */
    type Outbound = GetV1BenefitsCompanyBenefitIdSummaryResponse$Outbound;
}
export declare function getV1BenefitsCompanyBenefitIdSummaryResponseToJSON(getV1BenefitsCompanyBenefitIdSummaryResponse: GetV1BenefitsCompanyBenefitIdSummaryResponse): string;
export declare function getV1BenefitsCompanyBenefitIdSummaryResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsCompanyBenefitIdSummaryResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitscompanybenefitidsummary.d.ts.map