import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { CompanyBenefitWithEmployeeBenefits } from "../components/companybenefitwithemployeebenefits.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Available options:
 *
 * @remarks
 * - all_benefits: If with_employee_benefits=true, include all effective dated benefits for each employee instead of only the current benefits.
 */
export declare const GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude: {
    readonly AllBenefits: "all_benefits";
};
/**
 * Available options:
 *
 * @remarks
 * - all_benefits: If with_employee_benefits=true, include all effective dated benefits for each employee instead of only the current benefits.
 */
export type GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude = ClosedEnum<typeof GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude>;
export type GetV1CompanyBenefitsCompanyBenefitIdRequest = {
    /**
     * The UUID of the company benefit
     */
    companyBenefitId: string;
    /**
     * Whether to return employee benefits associated with the benefit
     */
    withEmployeeBenefits?: boolean | undefined;
    /**
     * Available options:
     *
     * @remarks
     * - all_benefits: If with_employee_benefits=true, include all effective dated benefits for each employee instead of only the current benefits.
     */
    include?: GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyBenefitsCompanyBenefitIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    companyBenefitWithEmployeeBenefits?: CompanyBenefitWithEmployeeBenefits | undefined;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude$outboundSchema: z.ZodNativeEnum<typeof GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude>;
/** @internal */
export type GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound = {
    company_benefit_id: string;
    with_employee_benefits?: boolean | undefined;
    include?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdRequest$outboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1CompanyBenefitsCompanyBenefitIdRequest>;
export declare function getV1CompanyBenefitsCompanyBenefitIdRequestToJSON(getV1CompanyBenefitsCompanyBenefitIdRequest: GetV1CompanyBenefitsCompanyBenefitIdRequest): string;
/** @internal */
export declare const GetV1CompanyBenefitsCompanyBenefitIdResponse$inboundSchema: z.ZodType<GetV1CompanyBenefitsCompanyBenefitIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyBenefitsCompanyBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyBenefitsCompanyBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1companybenefitscompanybenefitid.d.ts.map