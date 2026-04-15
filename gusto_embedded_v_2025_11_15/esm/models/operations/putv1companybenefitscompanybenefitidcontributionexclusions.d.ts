import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContributionExclusion, ContributionExclusion$Outbound } from "../components/contributionexclusion.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody = {
    /**
     * The list of contribution exclusions to update
     */
    contributionExclusions: Array<ContributionExclusion>;
};
export type PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody;
};
export type PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contributionExclusionList?: Array<ContributionExclusion> | undefined;
};
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody$Outbound = {
    contribution_exclusions: Array<ContributionExclusion$Outbound>;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody>;
export declare function putV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBodyToJSON(putV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody: PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody): string;
/** @internal */
export type PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$outboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$Outbound, z.ZodTypeDef, PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest>;
export declare function putV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestToJSON(putV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest: PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest): string;
/** @internal */
export declare const PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse$inboundSchema: z.ZodType<PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companybenefitscompanybenefitidcontributionexclusions.d.ts.map