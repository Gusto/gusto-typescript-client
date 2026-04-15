import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Example response
 */
export type SupportedBenefit = {
    /**
     * The benefit type in Gusto.
     */
    benefitType?: number | undefined;
    /**
     * The name of the benefit.
     */
    name?: string | undefined;
    /**
     * The description of the benefit.
     */
    description?: string | undefined;
    /**
     * Whether the benefit is deducted before tax calculations, thus reducing one’s taxable income
     */
    pretax?: boolean | undefined;
    /**
     * Whether the benefit is deducted after tax calculations.
     */
    posttax?: boolean | undefined;
    /**
     * Whether the benefit is considered imputed income.
     */
    imputed?: boolean | undefined;
    /**
     * Whether the benefit is healthcare related.
     */
    healthcare?: boolean | undefined;
    /**
     * Whether the benefit is associated with retirement planning.
     */
    retirement?: boolean | undefined;
    /**
     * Whether the benefit has a government mandated yearly limit. If the benefit has a government mandated yearly limit, employees cannot be added to more than one benefit of this type.
     */
    yearlyLimit?: boolean | undefined;
    /**
     * Category where the benefit belongs to.
     */
    category?: string | undefined;
};
/** @internal */
export declare const SupportedBenefit$inboundSchema: z.ZodType<SupportedBenefit, z.ZodTypeDef, unknown>;
/** @internal */
export type SupportedBenefit$Outbound = {
    benefit_type?: number | undefined;
    name?: string | undefined;
    description?: string | undefined;
    pretax?: boolean | undefined;
    posttax?: boolean | undefined;
    imputed?: boolean | undefined;
    healthcare?: boolean | undefined;
    retirement?: boolean | undefined;
    yearly_limit?: boolean | undefined;
    category?: string | undefined;
};
/** @internal */
export declare const SupportedBenefit$outboundSchema: z.ZodType<SupportedBenefit$Outbound, z.ZodTypeDef, SupportedBenefit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SupportedBenefit$ {
    /** @deprecated use `SupportedBenefit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SupportedBenefit, z.ZodTypeDef, unknown>;
    /** @deprecated use `SupportedBenefit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SupportedBenefit$Outbound, z.ZodTypeDef, SupportedBenefit>;
    /** @deprecated use `SupportedBenefit$Outbound` instead. */
    type Outbound = SupportedBenefit$Outbound;
}
export declare function supportedBenefitToJSON(supportedBenefit: SupportedBenefit): string;
export declare function supportedBenefitFromJSON(jsonString: string): SafeParseResult<SupportedBenefit, SDKValidationError>;
//# sourceMappingURL=supportedbenefit.d.ts.map