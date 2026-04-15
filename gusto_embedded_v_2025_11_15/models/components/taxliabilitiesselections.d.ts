import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PossibleLiabilities = {
    /**
     * Liability amount.
     */
    liabilityAmount?: string | undefined;
    /**
     * The external payroll check date.
     */
    payrollCheckDate?: string | null | undefined;
    /**
     * The UUID of the external payroll.
     */
    externalPayrollUuid?: string | null | undefined;
};
/**
 * Example response
 */
export type TaxLiabilitiesSelections = {
    /**
     * The ID of the tax.
     */
    taxId?: number | undefined;
    /**
     * The name of the tax.
     */
    taxName?: string | undefined;
    /**
     * The UUID of last unpaid external payroll.
     */
    lastUnpaidExternalPayrollUuid?: string | null | undefined;
    /**
     * Possible tax liabilities selections.
     */
    possibleLiabilities?: Array<PossibleLiabilities> | undefined;
};
/** @internal */
export declare const PossibleLiabilities$inboundSchema: z.ZodType<PossibleLiabilities, z.ZodTypeDef, unknown>;
/** @internal */
export type PossibleLiabilities$Outbound = {
    liability_amount?: string | undefined;
    payroll_check_date?: string | null | undefined;
    external_payroll_uuid?: string | null | undefined;
};
/** @internal */
export declare const PossibleLiabilities$outboundSchema: z.ZodType<PossibleLiabilities$Outbound, z.ZodTypeDef, PossibleLiabilities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PossibleLiabilities$ {
    /** @deprecated use `PossibleLiabilities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PossibleLiabilities, z.ZodTypeDef, unknown>;
    /** @deprecated use `PossibleLiabilities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PossibleLiabilities$Outbound, z.ZodTypeDef, PossibleLiabilities>;
    /** @deprecated use `PossibleLiabilities$Outbound` instead. */
    type Outbound = PossibleLiabilities$Outbound;
}
export declare function possibleLiabilitiesToJSON(possibleLiabilities: PossibleLiabilities): string;
export declare function possibleLiabilitiesFromJSON(jsonString: string): SafeParseResult<PossibleLiabilities, SDKValidationError>;
/** @internal */
export declare const TaxLiabilitiesSelections$inboundSchema: z.ZodType<TaxLiabilitiesSelections, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxLiabilitiesSelections$Outbound = {
    tax_id?: number | undefined;
    tax_name?: string | undefined;
    last_unpaid_external_payroll_uuid?: string | null | undefined;
    possible_liabilities?: Array<PossibleLiabilities$Outbound> | undefined;
};
/** @internal */
export declare const TaxLiabilitiesSelections$outboundSchema: z.ZodType<TaxLiabilitiesSelections$Outbound, z.ZodTypeDef, TaxLiabilitiesSelections>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxLiabilitiesSelections$ {
    /** @deprecated use `TaxLiabilitiesSelections$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxLiabilitiesSelections, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxLiabilitiesSelections$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxLiabilitiesSelections$Outbound, z.ZodTypeDef, TaxLiabilitiesSelections>;
    /** @deprecated use `TaxLiabilitiesSelections$Outbound` instead. */
    type Outbound = TaxLiabilitiesSelections$Outbound;
}
export declare function taxLiabilitiesSelectionsToJSON(taxLiabilitiesSelections: TaxLiabilitiesSelections): string;
export declare function taxLiabilitiesSelectionsFromJSON(jsonString: string): SafeParseResult<TaxLiabilitiesSelections, SDKValidationError>;
//# sourceMappingURL=taxliabilitiesselections.d.ts.map