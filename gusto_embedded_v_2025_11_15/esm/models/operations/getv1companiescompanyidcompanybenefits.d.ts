import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyBenefit } from "../components/companybenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdCompanyBenefitsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Whether the benefit is currently active
     */
    active?: boolean | undefined;
    /**
     * Whether to return employee enrollment count
     */
    enrollmentCount?: boolean | undefined;
    /**
     * Filter by benefit type. Comma-separated list of benefit type IDs, i.e. `?benefit_type=5,105`
     */
    benefitType?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdCompanyBenefitsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyBenefitList?: Array<CompanyBenefit> | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound = {
    company_id: string;
    active?: boolean | undefined;
    enrollment_count?: boolean | undefined;
    benefit_type?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdCompanyBenefitsRequest>;
export declare function getV1CompaniesCompanyIdCompanyBenefitsRequestToJSON(getV1CompaniesCompanyIdCompanyBenefitsRequest: GetV1CompaniesCompanyIdCompanyBenefitsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdCompanyBenefitsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdCompanyBenefitsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdCompanyBenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdCompanyBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcompanybenefits.d.ts.map