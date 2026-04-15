import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaxRequirementMetadata, TaxRequirementMetadata$Outbound } from "./taxrequirementmetadata.js";
/**
 * The required value of the requirement identified by `key`
 */
export type TaxRequirementValue = boolean | string | number;
export type ApplicableIf = {
    /**
     * An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set.
     */
    key?: string | undefined;
    /**
     * The required value of the requirement identified by `key`
     */
    value?: boolean | string | number | null | undefined;
};
export type TaxRequirement = {
    /**
     * An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set.
     */
    key?: string | undefined;
    /**
     * An array of references to other requirements within the requirement set. This requirement is only applicable if all referenced requirements have values matching the corresponding `value`. The primary use-case is dynamically hiding and showing requirements as values change. E.g. Show Requirement-B when Requirement-A has been answered with `false`. To be explicit, an empty array means the requirement is applicable.
     */
    applicableIf?: Array<ApplicableIf> | undefined;
    /**
     * A customer facing description of the requirement
     */
    label?: string | undefined;
    /**
     * A more detailed customer facing description of the requirement
     */
    description?: string | undefined;
    /**
     * The "answer"
     */
    value?: string | null | undefined;
    metadata?: TaxRequirementMetadata | undefined;
};
/** @internal */
export declare const TaxRequirementValue$inboundSchema: z.ZodType<TaxRequirementValue, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementValue$Outbound = boolean | string | number;
/** @internal */
export declare const TaxRequirementValue$outboundSchema: z.ZodType<TaxRequirementValue$Outbound, z.ZodTypeDef, TaxRequirementValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementValue$ {
    /** @deprecated use `TaxRequirementValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementValue$Outbound, z.ZodTypeDef, TaxRequirementValue>;
    /** @deprecated use `TaxRequirementValue$Outbound` instead. */
    type Outbound = TaxRequirementValue$Outbound;
}
export declare function taxRequirementValueToJSON(taxRequirementValue: TaxRequirementValue): string;
export declare function taxRequirementValueFromJSON(jsonString: string): SafeParseResult<TaxRequirementValue, SDKValidationError>;
/** @internal */
export declare const ApplicableIf$inboundSchema: z.ZodType<ApplicableIf, z.ZodTypeDef, unknown>;
/** @internal */
export type ApplicableIf$Outbound = {
    key?: string | undefined;
    value?: boolean | string | number | null | undefined;
};
/** @internal */
export declare const ApplicableIf$outboundSchema: z.ZodType<ApplicableIf$Outbound, z.ZodTypeDef, ApplicableIf>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApplicableIf$ {
    /** @deprecated use `ApplicableIf$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApplicableIf, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApplicableIf$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApplicableIf$Outbound, z.ZodTypeDef, ApplicableIf>;
    /** @deprecated use `ApplicableIf$Outbound` instead. */
    type Outbound = ApplicableIf$Outbound;
}
export declare function applicableIfToJSON(applicableIf: ApplicableIf): string;
export declare function applicableIfFromJSON(jsonString: string): SafeParseResult<ApplicableIf, SDKValidationError>;
/** @internal */
export declare const TaxRequirement$inboundSchema: z.ZodType<TaxRequirement, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirement$Outbound = {
    key?: string | undefined;
    applicable_if?: Array<ApplicableIf$Outbound> | undefined;
    label?: string | undefined;
    description?: string | undefined;
    value?: string | null | undefined;
    metadata?: TaxRequirementMetadata$Outbound | undefined;
};
/** @internal */
export declare const TaxRequirement$outboundSchema: z.ZodType<TaxRequirement$Outbound, z.ZodTypeDef, TaxRequirement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirement$ {
    /** @deprecated use `TaxRequirement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirement, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirement$Outbound, z.ZodTypeDef, TaxRequirement>;
    /** @deprecated use `TaxRequirement$Outbound` instead. */
    type Outbound = TaxRequirement$Outbound;
}
export declare function taxRequirementToJSON(taxRequirement: TaxRequirement): string;
export declare function taxRequirementFromJSON(jsonString: string): SafeParseResult<TaxRequirement, SDKValidationError>;
//# sourceMappingURL=taxrequirement.d.ts.map