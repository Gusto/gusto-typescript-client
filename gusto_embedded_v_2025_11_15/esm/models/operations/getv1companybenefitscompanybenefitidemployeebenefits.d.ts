import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBenefit } from "../components/employeebenefit.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Available options:
 *
 * @remarks
 * - all_benefits: Include all effective dated benefits for each employee instead of only the current benefits.
 */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude: {
    readonly AllBenefits: "all_benefits";
};
/**
 * Available options:
 *
 * @remarks
 * - all_benefits: Include all effective dated benefits for each employee instead of only the current benefits.
 */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude = ClosedEnum<typeof GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude>;
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Available options:
     *
     * @remarks
     * - all_benefits: Include all effective dated benefits for each employee instead of only the current benefits.
     */
    include?: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBenefitList?: Array<EmployeeBenefit> | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound = {
    company_benefit_id: string;
    page?: number | undefined;
    per?: number | undefined;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest>;
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequestToJSON(getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest): string;
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companybenefitscompanybenefitidemployeebenefits.d.ts.map