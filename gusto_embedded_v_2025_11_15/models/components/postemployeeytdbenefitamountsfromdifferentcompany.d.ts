import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostEmployeeYtdBenefitAmountsFromDifferentCompany = {
    /**
     * The benefit type supported by Gusto.
     */
    benefitType?: number | undefined;
    /**
     * The tax year for which this amount applies.
     */
    taxYear: number;
    /**
     * The year-to-date employee deduction made outside the current company.
     */
    ytdEmployeeDeductionAmount?: string | undefined;
    /**
     * The year-to-date company contribution made outside the current company.
     */
    ytdCompanyContributionAmount?: string | undefined;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompany, z.ZodTypeDef, unknown>;
/** @internal */
export type PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound = {
    benefit_type?: number | undefined;
    tax_year: number;
    ytd_employee_deduction_amount: string;
    ytd_company_contribution_amount: string;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompany>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostEmployeeYtdBenefitAmountsFromDifferentCompany$ {
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompany, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompany>;
    /** @deprecated use `PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound` instead. */
    type Outbound = PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound;
}
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyToJSON(postEmployeeYtdBenefitAmountsFromDifferentCompany: PostEmployeeYtdBenefitAmountsFromDifferentCompany): string;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyFromJSON(jsonString: string): SafeParseResult<PostEmployeeYtdBenefitAmountsFromDifferentCompany, SDKValidationError>;
//# sourceMappingURL=postemployeeytdbenefitamountsfromdifferentcompany.d.ts.map