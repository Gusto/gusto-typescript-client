import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaxRequirement, TaxRequirement$Outbound } from "./taxrequirement.js";
export type TaxRequirementSet = {
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     */
    state?: string | undefined;
    /**
     * An identifier for a set of requirements. A list of requirement sets can contain multiple sets with the same `key` and different `effective_from` values.
     */
    key?: string | undefined;
    /**
     * Customer facing label for the requirement set, e.g. "Registrations"
     */
    label?: string | undefined;
    /**
     * An ISO 8601 formatted date representing the date values became effective. Some requirement sets are effective dated, while others are not. Multiple requirement sets for the same state/key can/will exist with unique effective dates. If a requirement set is has an `effective_from` value, all requirement sets with the same key will also have an `effective_from` value.
     */
    effectiveFrom?: string | null | undefined;
    requirements?: Array<TaxRequirement> | undefined;
};
/** @internal */
export declare const TaxRequirementSet$inboundSchema: z.ZodType<TaxRequirementSet, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementSet$Outbound = {
    state?: string | undefined;
    key?: string | undefined;
    label?: string | undefined;
    effective_from?: string | null | undefined;
    requirements?: Array<TaxRequirement$Outbound> | undefined;
};
/** @internal */
export declare const TaxRequirementSet$outboundSchema: z.ZodType<TaxRequirementSet$Outbound, z.ZodTypeDef, TaxRequirementSet>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementSet$ {
    /** @deprecated use `TaxRequirementSet$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementSet, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementSet$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementSet$Outbound, z.ZodTypeDef, TaxRequirementSet>;
    /** @deprecated use `TaxRequirementSet$Outbound` instead. */
    type Outbound = TaxRequirementSet$Outbound;
}
export declare function taxRequirementSetToJSON(taxRequirementSet: TaxRequirementSet): string;
export declare function taxRequirementSetFromJSON(jsonString: string): SafeParseResult<TaxRequirementSet, SDKValidationError>;
//# sourceMappingURL=taxrequirementset.d.ts.map