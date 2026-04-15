import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Describes the type of requirement - each type may have additional metadata properties to describe possible values, formats, etc.
 *
 * @remarks
 *
 * - `text`: free-text input, no additional requirements
 * - `currency`: a value representing a dollar amount, e.g. `374.55` representing `$374.55`
 * - `radio`: choose one of options provided, see `options`
 * - `select`: choose one of options provided, see `options`
 * - `percent`: A decimal value representing a percentage, e.g. `0.034` representing `3.4%`
 * - `account_number`: An account number for a tax agency, more information provided by `mask` and `prefix`
 * - `tax_rate`: A decimal value representing a tax rate, e.g. `0.034` representing a tax rate of `3.4%`, see `validation` for additional validation guidance
 * - `workers_compensation_rate`: A decimal value representing a percentage, see `risk_class_code`, `risk_class_description`, and `rate_type`
 */
export declare const TaxRequirementMetadataType: {
    readonly Text: "text";
    readonly Currency: "currency";
    readonly Radio: "radio";
    readonly Select: "select";
    readonly Percent: "percent";
    readonly AccountNumber: "account_number";
    readonly TaxRate: "tax_rate";
    readonly WorkersCompensationRate: "workers_compensation_rate";
};
/**
 * Describes the type of requirement - each type may have additional metadata properties to describe possible values, formats, etc.
 *
 * @remarks
 *
 * - `text`: free-text input, no additional requirements
 * - `currency`: a value representing a dollar amount, e.g. `374.55` representing `$374.55`
 * - `radio`: choose one of options provided, see `options`
 * - `select`: choose one of options provided, see `options`
 * - `percent`: A decimal value representing a percentage, e.g. `0.034` representing `3.4%`
 * - `account_number`: An account number for a tax agency, more information provided by `mask` and `prefix`
 * - `tax_rate`: A decimal value representing a tax rate, e.g. `0.034` representing a tax rate of `3.4%`, see `validation` for additional validation guidance
 * - `workers_compensation_rate`: A decimal value representing a percentage, see `risk_class_code`, `risk_class_description`, and `rate_type`
 */
export type TaxRequirementMetadataType = ClosedEnum<typeof TaxRequirementMetadataType>;
/**
 * The actual value to be submitted
 */
export type TaxRequirementMetadataValue = string | boolean;
export type TaxRequirementMetadataOptions = {
    /**
     * A customer facing label for the answer
     */
    label: string;
    /**
     * The actual value to be submitted
     */
    value: string | boolean;
    /**
     * A less verbose label that may sometimes be available
     */
    shortLabel?: string | undefined;
};
/**
 * [for `workers_compensation_rate`] The type of rate being collected. Either:
 *
 * @remarks
 *  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 *  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
 */
export declare const RateType: {
    readonly Percent: "percent";
    readonly CurrencyPerHour: "currency_per_hour";
};
/**
 * [for `workers_compensation_rate`] The type of rate being collected. Either:
 *
 * @remarks
 *  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 *  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
 */
export type RateType = ClosedEnum<typeof RateType>;
/**
 * Describes the type of tax_rate validation rule
 */
export declare const TaxRequirementMetadataValidationType: {
    readonly OneOf: "one_of";
    readonly MinMax: "min_max";
};
/**
 * Describes the type of tax_rate validation rule
 */
export type TaxRequirementMetadataValidationType = ClosedEnum<typeof TaxRequirementMetadataValidationType>;
/**
 * [for `tax_rate`] Describes the validation required for the tax rate
 */
export type Validation = {
    /**
     * Describes the type of tax_rate validation rule
     */
    type: TaxRequirementMetadataValidationType;
    /**
     * [for `min_max`] The inclusive lower bound of the tax rate
     */
    min?: string | undefined;
    /**
     * [for `min_max`] The inclusive upper bound of the tax rate
     */
    max?: string | undefined;
    /**
     * [for `one_of`] The possible, unformatted tax rates for selection.
     *
     * @remarks
     * - e.g. ["0.0", "0.001"] representing 0% and 0.1%
     */
    rates?: Array<string> | undefined;
};
export type TaxRequirementMetadata = {
    /**
     * Describes the type of requirement - each type may have additional metadata properties to describe possible values, formats, etc.
     *
     * @remarks
     *
     * - `text`: free-text input, no additional requirements
     * - `currency`: a value representing a dollar amount, e.g. `374.55` representing `$374.55`
     * - `radio`: choose one of options provided, see `options`
     * - `select`: choose one of options provided, see `options`
     * - `percent`: A decimal value representing a percentage, e.g. `0.034` representing `3.4%`
     * - `account_number`: An account number for a tax agency, more information provided by `mask` and `prefix`
     * - `tax_rate`: A decimal value representing a tax rate, e.g. `0.034` representing a tax rate of `3.4%`, see `validation` for additional validation guidance
     * - `workers_compensation_rate`: A decimal value representing a percentage, see `risk_class_code`, `risk_class_description`, and `rate_type`
     */
    type: TaxRequirementMetadataType;
    /**
     * [for `select` or `radio`] An array of objects describing the possible values.
     */
    options?: Array<TaxRequirementMetadataOptions> | undefined;
    /**
     * [for `workers_compensation_rate`] The industry risk class code for the rate being requested
     */
    riskClassCode?: string | undefined;
    /**
     * [for `workers_compensation_rate`] A description of the industry risk class for the rate being requested
     */
    riskClassDescription?: string | undefined;
    /**
     * [for `workers_compensation_rate`] The type of rate being collected. Either:
     *
     * @remarks
     *  - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
     *  - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
     */
    rateType?: RateType | undefined;
    /**
     * [for `account_number`] A pattern describing the format of the account number
     *
     * @remarks
     *
     * The mask is a sequence of characters representing the requirements of the actual account number. Each character in the mask represents a single character in the account number as follows:
     * - `#`: a digit (`\d`)
     * - `@`: a upper or lower case letter (`[a-zA-Z]`)
     * - `^`: an uppercase letter (`[A-Z]`)
     * - `%`: a digit or uppercase letter (`[0-9A-Z]`)
     * - any other character represents the literal character
     *
     * Examples:
     * - mask: `WHT-######` represents `WHT-` followed by 5 digits, e.g. `WHT-33421`
     * - mask: `%####-^^` supports values of `75544-AB` and `Z7654-HK`
     */
    mask?: string | null | undefined;
    /**
     * [for `account_number`] A value that precedes the value to be collected - useful for display, but should not be submitted as part of the value. E.g. some tax agencies use an account number that is a company's federal ein plus two digits. In that case the mask would be `##` and the prefix `XXXXX1234`.
     */
    prefix?: string | null | undefined;
    /**
     * [for `tax_rate`] Describes the validation required for the tax rate
     */
    validation?: Validation | undefined;
};
/** @internal */
export declare const TaxRequirementMetadataType$inboundSchema: z.ZodNativeEnum<typeof TaxRequirementMetadataType>;
/** @internal */
export declare const TaxRequirementMetadataType$outboundSchema: z.ZodNativeEnum<typeof TaxRequirementMetadataType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementMetadataType$ {
    /** @deprecated use `TaxRequirementMetadataType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
        readonly Currency: "currency";
        readonly Radio: "radio";
        readonly Select: "select";
        readonly Percent: "percent";
        readonly AccountNumber: "account_number";
        readonly TaxRate: "tax_rate";
        readonly WorkersCompensationRate: "workers_compensation_rate";
    }>;
    /** @deprecated use `TaxRequirementMetadataType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Text: "text";
        readonly Currency: "currency";
        readonly Radio: "radio";
        readonly Select: "select";
        readonly Percent: "percent";
        readonly AccountNumber: "account_number";
        readonly TaxRate: "tax_rate";
        readonly WorkersCompensationRate: "workers_compensation_rate";
    }>;
}
/** @internal */
export declare const TaxRequirementMetadataValue$inboundSchema: z.ZodType<TaxRequirementMetadataValue, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementMetadataValue$Outbound = string | boolean;
/** @internal */
export declare const TaxRequirementMetadataValue$outboundSchema: z.ZodType<TaxRequirementMetadataValue$Outbound, z.ZodTypeDef, TaxRequirementMetadataValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementMetadataValue$ {
    /** @deprecated use `TaxRequirementMetadataValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementMetadataValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementMetadataValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementMetadataValue$Outbound, z.ZodTypeDef, TaxRequirementMetadataValue>;
    /** @deprecated use `TaxRequirementMetadataValue$Outbound` instead. */
    type Outbound = TaxRequirementMetadataValue$Outbound;
}
export declare function taxRequirementMetadataValueToJSON(taxRequirementMetadataValue: TaxRequirementMetadataValue): string;
export declare function taxRequirementMetadataValueFromJSON(jsonString: string): SafeParseResult<TaxRequirementMetadataValue, SDKValidationError>;
/** @internal */
export declare const TaxRequirementMetadataOptions$inboundSchema: z.ZodType<TaxRequirementMetadataOptions, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementMetadataOptions$Outbound = {
    label: string;
    value: string | boolean;
    short_label?: string | undefined;
};
/** @internal */
export declare const TaxRequirementMetadataOptions$outboundSchema: z.ZodType<TaxRequirementMetadataOptions$Outbound, z.ZodTypeDef, TaxRequirementMetadataOptions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementMetadataOptions$ {
    /** @deprecated use `TaxRequirementMetadataOptions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementMetadataOptions, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementMetadataOptions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementMetadataOptions$Outbound, z.ZodTypeDef, TaxRequirementMetadataOptions>;
    /** @deprecated use `TaxRequirementMetadataOptions$Outbound` instead. */
    type Outbound = TaxRequirementMetadataOptions$Outbound;
}
export declare function taxRequirementMetadataOptionsToJSON(taxRequirementMetadataOptions: TaxRequirementMetadataOptions): string;
export declare function taxRequirementMetadataOptionsFromJSON(jsonString: string): SafeParseResult<TaxRequirementMetadataOptions, SDKValidationError>;
/** @internal */
export declare const RateType$inboundSchema: z.ZodNativeEnum<typeof RateType>;
/** @internal */
export declare const RateType$outboundSchema: z.ZodNativeEnum<typeof RateType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RateType$ {
    /** @deprecated use `RateType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Percent: "percent";
        readonly CurrencyPerHour: "currency_per_hour";
    }>;
    /** @deprecated use `RateType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Percent: "percent";
        readonly CurrencyPerHour: "currency_per_hour";
    }>;
}
/** @internal */
export declare const TaxRequirementMetadataValidationType$inboundSchema: z.ZodNativeEnum<typeof TaxRequirementMetadataValidationType>;
/** @internal */
export declare const TaxRequirementMetadataValidationType$outboundSchema: z.ZodNativeEnum<typeof TaxRequirementMetadataValidationType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementMetadataValidationType$ {
    /** @deprecated use `TaxRequirementMetadataValidationType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly OneOf: "one_of";
        readonly MinMax: "min_max";
    }>;
    /** @deprecated use `TaxRequirementMetadataValidationType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly OneOf: "one_of";
        readonly MinMax: "min_max";
    }>;
}
/** @internal */
export declare const Validation$inboundSchema: z.ZodType<Validation, z.ZodTypeDef, unknown>;
/** @internal */
export type Validation$Outbound = {
    type: string;
    min?: string | undefined;
    max?: string | undefined;
    rates?: Array<string> | undefined;
};
/** @internal */
export declare const Validation$outboundSchema: z.ZodType<Validation$Outbound, z.ZodTypeDef, Validation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Validation$ {
    /** @deprecated use `Validation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Validation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Validation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Validation$Outbound, z.ZodTypeDef, Validation>;
    /** @deprecated use `Validation$Outbound` instead. */
    type Outbound = Validation$Outbound;
}
export declare function validationToJSON(validation: Validation): string;
export declare function validationFromJSON(jsonString: string): SafeParseResult<Validation, SDKValidationError>;
/** @internal */
export declare const TaxRequirementMetadata$inboundSchema: z.ZodType<TaxRequirementMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxRequirementMetadata$Outbound = {
    type: string;
    options?: Array<TaxRequirementMetadataOptions$Outbound> | undefined;
    risk_class_code?: string | undefined;
    risk_class_description?: string | undefined;
    rate_type?: string | undefined;
    mask?: string | null | undefined;
    prefix?: string | null | undefined;
    validation?: Validation$Outbound | undefined;
};
/** @internal */
export declare const TaxRequirementMetadata$outboundSchema: z.ZodType<TaxRequirementMetadata$Outbound, z.ZodTypeDef, TaxRequirementMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxRequirementMetadata$ {
    /** @deprecated use `TaxRequirementMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxRequirementMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxRequirementMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxRequirementMetadata$Outbound, z.ZodTypeDef, TaxRequirementMetadata>;
    /** @deprecated use `TaxRequirementMetadata$Outbound` instead. */
    type Outbound = TaxRequirementMetadata$Outbound;
}
export declare function taxRequirementMetadataToJSON(taxRequirementMetadata: TaxRequirementMetadata): string;
export declare function taxRequirementMetadataFromJSON(jsonString: string): SafeParseResult<TaxRequirementMetadata, SDKValidationError>;
//# sourceMappingURL=taxrequirementmetadata.d.ts.map