import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContributionExclusion } from "../components/contributionexclusion.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contributionExclusionList?: Array<ContributionExclusion> | undefined;
};
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$Outbound = {
    company_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest>;
export declare function getV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequestToJSON(getV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest: GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsRequest): string;
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdContributionExclusionsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companybenefitscompanybenefitidcontributionexclusions.d.ts.map