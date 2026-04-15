import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaxRequirementSet, TaxRequirementSet$Outbound } from "./taxrequirementset.js";
export type TaxRequirementsState = {
    companyUuid?: string | undefined;
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     */
    state?: string | undefined;
    requirementSets?: Array<TaxRequirementSet> | undefined;
};
/** @internal */
export declare const TaxRequirementsState$inboundSchema: z.ZodType<TaxRequirementsState, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementsState$Outbound = {
    company_uuid?: string | undefined;
    state?: string | undefined;
    requirement_sets?: Array<TaxRequirementSet$Outbound> | undefined;
};
/** @internal */
export declare const TaxRequirementsState$outboundSchema: z.ZodType<TaxRequirementsState$Outbound, z.ZodTypeDef, TaxRequirementsState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementsState$ {
    /** @deprecated use `TaxRequirementsState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementsState, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementsState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementsState$Outbound, z.ZodTypeDef, TaxRequirementsState>;
    /** @deprecated use `TaxRequirementsState$Outbound` instead. */
    type Outbound = TaxRequirementsState$Outbound;
}
export declare function taxRequirementsStateToJSON(taxRequirementsState: TaxRequirementsState): string;
export declare function taxRequirementsStateFromJSON(jsonString: string): SafeParseResult<TaxRequirementsState, SDKValidationError>;
//# sourceMappingURL=taxrequirementsstate.d.ts.map