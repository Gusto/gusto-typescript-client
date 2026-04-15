import * as z from "zod/v3";
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
export type PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound = {
    benefit_type?: number | undefined;
    tax_year: number;
    ytd_employee_deduction_amount: string;
    ytd_company_contribution_amount: string;
};
/** @internal */
export declare const PostEmployeeYtdBenefitAmountsFromDifferentCompany$outboundSchema: z.ZodType<PostEmployeeYtdBenefitAmountsFromDifferentCompany$Outbound, z.ZodTypeDef, PostEmployeeYtdBenefitAmountsFromDifferentCompany>;
export declare function postEmployeeYtdBenefitAmountsFromDifferentCompanyToJSON(postEmployeeYtdBenefitAmountsFromDifferentCompany: PostEmployeeYtdBenefitAmountsFromDifferentCompany): string;
//# sourceMappingURL=postemployeeytdbenefitamountsfromdifferentcompany.d.ts.map