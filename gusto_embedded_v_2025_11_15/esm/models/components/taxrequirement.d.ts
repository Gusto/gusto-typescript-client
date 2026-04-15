import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaxRequirementMetadata } from "./taxrequirementmetadata.js";
/**
 * The required value of the requirement identified by `key`
 */
export type TaxRequirementApplicableIfValue = boolean | string | number;
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
/**
 * The "answer"
 */
export type TaxRequirementValue = boolean | string | number;
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
    description?: string | null | undefined;
    /**
     * The "answer"
     */
    value?: boolean | string | number | null | undefined;
    metadata?: TaxRequirementMetadata | undefined;
};
/** @internal */
export declare const TaxRequirementApplicableIfValue$inboundSchema: z.ZodType<TaxRequirementApplicableIfValue, z.ZodTypeDef, unknown>;
export declare function taxRequirementApplicableIfValueFromJSON(jsonString: string): SafeParseResult<TaxRequirementApplicableIfValue, SDKValidationError>;
/** @internal */
export declare const ApplicableIf$inboundSchema: z.ZodType<ApplicableIf, z.ZodTypeDef, unknown>;
export declare function applicableIfFromJSON(jsonString: string): SafeParseResult<ApplicableIf, SDKValidationError>;
/** @internal */
export declare const TaxRequirementValue$inboundSchema: z.ZodType<TaxRequirementValue, z.ZodTypeDef, unknown>;
export declare function taxRequirementValueFromJSON(jsonString: string): SafeParseResult<TaxRequirementValue, SDKValidationError>;
/** @internal */
export declare const TaxRequirement$inboundSchema: z.ZodType<TaxRequirement, z.ZodTypeDef, unknown>;
export declare function taxRequirementFromJSON(jsonString: string): SafeParseResult<TaxRequirement, SDKValidationError>;
//# sourceMappingURL=taxrequirement.d.ts.map