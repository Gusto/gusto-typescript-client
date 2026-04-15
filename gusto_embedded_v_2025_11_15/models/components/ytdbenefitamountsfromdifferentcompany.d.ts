import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Ytd Benefit Amounts From Different Company
 */
export type YtdBenefitAmountsFromDifferentCompany = {
    /**
     * The unique identifier for this benefit amount record.
     */
    uuid: string;
    /**
     * The benefit type supported by Gusto. See [Benefit Types](https://docs.gusto.com/embedded-payroll/reference/get-v1-benefits) for more information.
     */
    benefitType: number;
    /**
     * The year-to-date employee deduction made outside the current company.
     */
    ytdEmployeeDeductionAmount: string;
    /**
     * The year-to-date company contribution made outside the current company.
     */
    ytdCompanyContributionAmount: string;
};
/** @internal */
export declare const YtdBenefitAmountsFromDifferentCompany$inboundSchema: z.ZodType<YtdBenefitAmountsFromDifferentCompany, z.ZodTypeDef, unknown>;
/** @internal */
export type YtdBenefitAmountsFromDifferentCompany$Outbound = {
    uuid: string;
    benefit_type: number;
    ytd_employee_deduction_amount: string;
    ytd_company_contribution_amount: string;
};
/** @internal */
export declare const YtdBenefitAmountsFromDifferentCompany$outboundSchema: z.ZodType<YtdBenefitAmountsFromDifferentCompany$Outbound, z.ZodTypeDef, YtdBenefitAmountsFromDifferentCompany>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace YtdBenefitAmountsFromDifferentCompany$ {
    /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$inboundSchema` instead. */
    const inboundSchema: z.ZodType<YtdBenefitAmountsFromDifferentCompany, z.ZodTypeDef, unknown>;
    /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$outboundSchema` instead. */
    const outboundSchema: z.ZodType<YtdBenefitAmountsFromDifferentCompany$Outbound, z.ZodTypeDef, YtdBenefitAmountsFromDifferentCompany>;
    /** @deprecated use `YtdBenefitAmountsFromDifferentCompany$Outbound` instead. */
    type Outbound = YtdBenefitAmountsFromDifferentCompany$Outbound;
}
export declare function ytdBenefitAmountsFromDifferentCompanyToJSON(ytdBenefitAmountsFromDifferentCompany: YtdBenefitAmountsFromDifferentCompany): string;
export declare function ytdBenefitAmountsFromDifferentCompanyFromJSON(jsonString: string): SafeParseResult<YtdBenefitAmountsFromDifferentCompany, SDKValidationError>;
//# sourceMappingURL=ytdbenefitamountsfromdifferentcompany.d.ts.map