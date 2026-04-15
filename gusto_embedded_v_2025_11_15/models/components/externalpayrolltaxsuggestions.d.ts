import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type TaxSuggestions = {
    /**
     * The ID of the tax.
     */
    taxId?: number | undefined;
    /**
     * Calculated tax amount.
     */
    amount?: string | undefined;
};
/**
 * The representation of an external payroll with minimal information.
 */
export type ExternalPayrollTaxSuggestions = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    /**
     * Possible tax liabilities selections.
     */
    taxSuggestions?: Array<TaxSuggestions> | undefined;
};
/** @internal */
export declare const TaxSuggestions$inboundSchema: z.ZodType<TaxSuggestions, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxSuggestions$Outbound = {
    tax_id?: number | undefined;
    amount?: string | undefined;
};
/** @internal */
export declare const TaxSuggestions$outboundSchema: z.ZodType<TaxSuggestions$Outbound, z.ZodTypeDef, TaxSuggestions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxSuggestions$ {
    /** @deprecated use `TaxSuggestions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxSuggestions, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxSuggestions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxSuggestions$Outbound, z.ZodTypeDef, TaxSuggestions>;
    /** @deprecated use `TaxSuggestions$Outbound` instead. */
    type Outbound = TaxSuggestions$Outbound;
}
export declare function taxSuggestionsToJSON(taxSuggestions: TaxSuggestions): string;
export declare function taxSuggestionsFromJSON(jsonString: string): SafeParseResult<TaxSuggestions, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollTaxSuggestions$inboundSchema: z.ZodType<ExternalPayrollTaxSuggestions, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollTaxSuggestions$Outbound = {
    employee_uuid?: string | undefined;
    tax_suggestions?: Array<TaxSuggestions$Outbound> | undefined;
};
/** @internal */
export declare const ExternalPayrollTaxSuggestions$outboundSchema: z.ZodType<ExternalPayrollTaxSuggestions$Outbound, z.ZodTypeDef, ExternalPayrollTaxSuggestions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollTaxSuggestions$ {
    /** @deprecated use `ExternalPayrollTaxSuggestions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollTaxSuggestions, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollTaxSuggestions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollTaxSuggestions$Outbound, z.ZodTypeDef, ExternalPayrollTaxSuggestions>;
    /** @deprecated use `ExternalPayrollTaxSuggestions$Outbound` instead. */
    type Outbound = ExternalPayrollTaxSuggestions$Outbound;
}
export declare function externalPayrollTaxSuggestionsToJSON(externalPayrollTaxSuggestions: ExternalPayrollTaxSuggestions): string;
export declare function externalPayrollTaxSuggestionsFromJSON(jsonString: string): SafeParseResult<ExternalPayrollTaxSuggestions, SDKValidationError>;
//# sourceMappingURL=externalpayrolltaxsuggestions.d.ts.map