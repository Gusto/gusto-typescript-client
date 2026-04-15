import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ActiveCompanies = {
    /**
     * unique identifier for the company associated with the invoice data
     */
    companyUuid?: string | undefined;
    /**
     * The number of active employees the company was or will be invoiced for that invoice period. Active employees are calculated as the count of onboarded employees hired before the end of the invoice period and not terminated before the start of the invoice period.
     */
    activeEmployees?: number | undefined;
    /**
     * The number of active contractors the company was or will be invoiced for that invoice period. Active contractors are calculated as any contractor with an active contractor payment during the invoice period.
     */
    activeContractors?: number | undefined;
    /**
     * The first invoice period for the company. This will either be the invoice period of the first invoice-able event (first payroll or contractor payment) or the date they migrated to embedded, whichever is later.
     */
    initialInvoicePeriod?: string | undefined;
};
/**
 * Representation of a partners invoice data
 */
export type InvoiceData = {
    /**
     * The list of companies that are active within the invoice period
     */
    activeCompanies?: Array<ActiveCompanies> | undefined;
};
/** @internal */
export declare const ActiveCompanies$inboundSchema: z.ZodType<ActiveCompanies, z.ZodTypeDef, unknown>;
/** @internal */
export type ActiveCompanies$Outbound = {
    company_uuid?: string | undefined;
    active_employees?: number | undefined;
    active_contractors?: number | undefined;
    initial_invoice_period?: string | undefined;
};
/** @internal */
export declare const ActiveCompanies$outboundSchema: z.ZodType<ActiveCompanies$Outbound, z.ZodTypeDef, ActiveCompanies>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActiveCompanies$ {
    /** @deprecated use `ActiveCompanies$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActiveCompanies, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActiveCompanies$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActiveCompanies$Outbound, z.ZodTypeDef, ActiveCompanies>;
    /** @deprecated use `ActiveCompanies$Outbound` instead. */
    type Outbound = ActiveCompanies$Outbound;
}
export declare function activeCompaniesToJSON(activeCompanies: ActiveCompanies): string;
export declare function activeCompaniesFromJSON(jsonString: string): SafeParseResult<ActiveCompanies, SDKValidationError>;
/** @internal */
export declare const InvoiceData$inboundSchema: z.ZodType<InvoiceData, z.ZodTypeDef, unknown>;
/** @internal */
export type InvoiceData$Outbound = {
    active_companies?: Array<ActiveCompanies$Outbound> | undefined;
};
/** @internal */
export declare const InvoiceData$outboundSchema: z.ZodType<InvoiceData$Outbound, z.ZodTypeDef, InvoiceData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvoiceData$ {
    /** @deprecated use `InvoiceData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvoiceData, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvoiceData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvoiceData$Outbound, z.ZodTypeDef, InvoiceData>;
    /** @deprecated use `InvoiceData$Outbound` instead. */
    type Outbound = InvoiceData$Outbound;
}
export declare function invoiceDataToJSON(invoiceData: InvoiceData): string;
export declare function invoiceDataFromJSON(jsonString: string): SafeParseResult<InvoiceData, SDKValidationError>;
//# sourceMappingURL=invoicedata.d.ts.map