import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { BenefitSummary } from "../components/benefitsummary.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1BenefitsCompanyBenefitIdSummaryResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Benefit summary response
     */
    benefitSummary?: BenefitSummary | undefined;
};
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
export declare function getV1BenefitsCompanyBenefitIdSummaryRequestToJSON(getV1BenefitsCompanyBenefitIdSummaryRequest: GetV1BenefitsCompanyBenefitIdSummaryRequest): string;
/** @internal */
export declare const GetV1BenefitsCompanyBenefitIdSummaryResponse$inboundSchema: z.ZodType<GetV1BenefitsCompanyBenefitIdSummaryResponse, z.ZodTypeDef, unknown>;
export declare function getV1BenefitsCompanyBenefitIdSummaryResponseFromJSON(jsonString: string): SafeParseResult<GetV1BenefitsCompanyBenefitIdSummaryResponse, SDKValidationError>;
//# sourceMappingURL=getv1benefitscompanybenefitidsummary.d.ts.map