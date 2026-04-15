import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The representation of a company's address in Gusto.
 */
export type CompanyAddress = {
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
    /**
     * The status of the location. Inactive locations have been deleted, but may still have historical data associated with them.
     */
    active?: boolean | undefined;
};
/** @internal */
export declare const CompanyAddress$inboundSchema: z.ZodType<CompanyAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type CompanyAddress$Outbound = {
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country: string;
    active?: boolean | undefined;
};
/** @internal */
export declare const CompanyAddress$outboundSchema: z.ZodType<CompanyAddress$Outbound, z.ZodTypeDef, CompanyAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompanyAddress$ {
    /** @deprecated use `CompanyAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompanyAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompanyAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompanyAddress$Outbound, z.ZodTypeDef, CompanyAddress>;
    /** @deprecated use `CompanyAddress$Outbound` instead. */
    type Outbound = CompanyAddress$Outbound;
}
export declare function companyAddressToJSON(companyAddress: CompanyAddress): string;
export declare function companyAddressFromJSON(jsonString: string): SafeParseResult<CompanyAddress, SDKValidationError>;
//# sourceMappingURL=companyaddress.d.ts.map