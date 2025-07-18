/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
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
export const TaxRequirementMetadataType = {
  Text: "text",
  Currency: "currency",
  Radio: "radio",
  Select: "select",
  Percent: "percent",
  AccountNumber: "account_number",
  TaxRate: "tax_rate",
  WorkersCompensationRate: "workers_compensation_rate",
} as const;
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
export type TaxRequirementMetadataType = ClosedEnum<
  typeof TaxRequirementMetadataType
>;

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
  shortLabel?: string | null | undefined;
};

/**
 * [for `workers_compensation_rate`] The type of rate being collected. Either:
 *
 * @remarks
 *   - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 *   - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
 */
export const RateType = {
  Percent: "percent",
  CurrencyPerHour: "currency_per_hour",
} as const;
/**
 * [for `workers_compensation_rate`] The type of rate being collected. Either:
 *
 * @remarks
 *   - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
 *   - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
 */
export type RateType = ClosedEnum<typeof RateType>;

/**
 * Describes the type of tax_rate validation rule
 */
export const TaxRequirementMetadataValidationType = {
  OneOf: "one_of",
  MinMax: "min_max",
} as const;
/**
 * Describes the type of tax_rate validation rule
 */
export type TaxRequirementMetadataValidationType = ClosedEnum<
  typeof TaxRequirementMetadataValidationType
>;

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
   *   - `percent`: A percentage formatted as a decimal, e.g. `0.01` for 1%
   *   - `currency_per_hour`: A dollar amount per hour, e.g. `3.24` for $3.24/hr
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
export const TaxRequirementMetadataType$inboundSchema: z.ZodNativeEnum<
  typeof TaxRequirementMetadataType
> = z.nativeEnum(TaxRequirementMetadataType);

/** @internal */
export const TaxRequirementMetadataType$outboundSchema: z.ZodNativeEnum<
  typeof TaxRequirementMetadataType
> = TaxRequirementMetadataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRequirementMetadataType$ {
  /** @deprecated use `TaxRequirementMetadataType$inboundSchema` instead. */
  export const inboundSchema = TaxRequirementMetadataType$inboundSchema;
  /** @deprecated use `TaxRequirementMetadataType$outboundSchema` instead. */
  export const outboundSchema = TaxRequirementMetadataType$outboundSchema;
}

/** @internal */
export const TaxRequirementMetadataValue$inboundSchema: z.ZodType<
  TaxRequirementMetadataValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.boolean()]);

/** @internal */
export type TaxRequirementMetadataValue$Outbound = string | boolean;

/** @internal */
export const TaxRequirementMetadataValue$outboundSchema: z.ZodType<
  TaxRequirementMetadataValue$Outbound,
  z.ZodTypeDef,
  TaxRequirementMetadataValue
> = z.union([z.string(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRequirementMetadataValue$ {
  /** @deprecated use `TaxRequirementMetadataValue$inboundSchema` instead. */
  export const inboundSchema = TaxRequirementMetadataValue$inboundSchema;
  /** @deprecated use `TaxRequirementMetadataValue$outboundSchema` instead. */
  export const outboundSchema = TaxRequirementMetadataValue$outboundSchema;
  /** @deprecated use `TaxRequirementMetadataValue$Outbound` instead. */
  export type Outbound = TaxRequirementMetadataValue$Outbound;
}

export function taxRequirementMetadataValueToJSON(
  taxRequirementMetadataValue: TaxRequirementMetadataValue,
): string {
  return JSON.stringify(
    TaxRequirementMetadataValue$outboundSchema.parse(
      taxRequirementMetadataValue,
    ),
  );
}

export function taxRequirementMetadataValueFromJSON(
  jsonString: string,
): SafeParseResult<TaxRequirementMetadataValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxRequirementMetadataValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxRequirementMetadataValue' from JSON`,
  );
}

/** @internal */
export const TaxRequirementMetadataOptions$inboundSchema: z.ZodType<
  TaxRequirementMetadataOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string(),
  value: z.union([z.string(), z.boolean()]),
  short_label: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "short_label": "shortLabel",
  });
});

/** @internal */
export type TaxRequirementMetadataOptions$Outbound = {
  label: string;
  value: string | boolean;
  short_label?: string | null | undefined;
};

/** @internal */
export const TaxRequirementMetadataOptions$outboundSchema: z.ZodType<
  TaxRequirementMetadataOptions$Outbound,
  z.ZodTypeDef,
  TaxRequirementMetadataOptions
> = z.object({
  label: z.string(),
  value: z.union([z.string(), z.boolean()]),
  shortLabel: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    shortLabel: "short_label",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRequirementMetadataOptions$ {
  /** @deprecated use `TaxRequirementMetadataOptions$inboundSchema` instead. */
  export const inboundSchema = TaxRequirementMetadataOptions$inboundSchema;
  /** @deprecated use `TaxRequirementMetadataOptions$outboundSchema` instead. */
  export const outboundSchema = TaxRequirementMetadataOptions$outboundSchema;
  /** @deprecated use `TaxRequirementMetadataOptions$Outbound` instead. */
  export type Outbound = TaxRequirementMetadataOptions$Outbound;
}

export function taxRequirementMetadataOptionsToJSON(
  taxRequirementMetadataOptions: TaxRequirementMetadataOptions,
): string {
  return JSON.stringify(
    TaxRequirementMetadataOptions$outboundSchema.parse(
      taxRequirementMetadataOptions,
    ),
  );
}

export function taxRequirementMetadataOptionsFromJSON(
  jsonString: string,
): SafeParseResult<TaxRequirementMetadataOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxRequirementMetadataOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxRequirementMetadataOptions' from JSON`,
  );
}

/** @internal */
export const RateType$inboundSchema: z.ZodNativeEnum<typeof RateType> = z
  .nativeEnum(RateType);

/** @internal */
export const RateType$outboundSchema: z.ZodNativeEnum<typeof RateType> =
  RateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RateType$ {
  /** @deprecated use `RateType$inboundSchema` instead. */
  export const inboundSchema = RateType$inboundSchema;
  /** @deprecated use `RateType$outboundSchema` instead. */
  export const outboundSchema = RateType$outboundSchema;
}

/** @internal */
export const TaxRequirementMetadataValidationType$inboundSchema:
  z.ZodNativeEnum<typeof TaxRequirementMetadataValidationType> = z.nativeEnum(
    TaxRequirementMetadataValidationType,
  );

/** @internal */
export const TaxRequirementMetadataValidationType$outboundSchema:
  z.ZodNativeEnum<typeof TaxRequirementMetadataValidationType> =
    TaxRequirementMetadataValidationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRequirementMetadataValidationType$ {
  /** @deprecated use `TaxRequirementMetadataValidationType$inboundSchema` instead. */
  export const inboundSchema =
    TaxRequirementMetadataValidationType$inboundSchema;
  /** @deprecated use `TaxRequirementMetadataValidationType$outboundSchema` instead. */
  export const outboundSchema =
    TaxRequirementMetadataValidationType$outboundSchema;
}

/** @internal */
export const Validation$inboundSchema: z.ZodType<
  Validation,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TaxRequirementMetadataValidationType$inboundSchema,
  min: z.string().optional(),
  max: z.string().optional(),
  rates: z.array(z.string()).optional(),
});

/** @internal */
export type Validation$Outbound = {
  type: string;
  min?: string | undefined;
  max?: string | undefined;
  rates?: Array<string> | undefined;
};

/** @internal */
export const Validation$outboundSchema: z.ZodType<
  Validation$Outbound,
  z.ZodTypeDef,
  Validation
> = z.object({
  type: TaxRequirementMetadataValidationType$outboundSchema,
  min: z.string().optional(),
  max: z.string().optional(),
  rates: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Validation$ {
  /** @deprecated use `Validation$inboundSchema` instead. */
  export const inboundSchema = Validation$inboundSchema;
  /** @deprecated use `Validation$outboundSchema` instead. */
  export const outboundSchema = Validation$outboundSchema;
  /** @deprecated use `Validation$Outbound` instead. */
  export type Outbound = Validation$Outbound;
}

export function validationToJSON(validation: Validation): string {
  return JSON.stringify(Validation$outboundSchema.parse(validation));
}

export function validationFromJSON(
  jsonString: string,
): SafeParseResult<Validation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Validation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Validation' from JSON`,
  );
}

/** @internal */
export const TaxRequirementMetadata$inboundSchema: z.ZodType<
  TaxRequirementMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TaxRequirementMetadataType$inboundSchema,
  options: z.array(z.lazy(() => TaxRequirementMetadataOptions$inboundSchema))
    .optional(),
  risk_class_code: z.string().optional(),
  risk_class_description: z.string().optional(),
  rate_type: RateType$inboundSchema.optional(),
  mask: z.nullable(z.string()).optional(),
  prefix: z.nullable(z.string()).optional(),
  validation: z.lazy(() => Validation$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "risk_class_code": "riskClassCode",
    "risk_class_description": "riskClassDescription",
    "rate_type": "rateType",
  });
});

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
export const TaxRequirementMetadata$outboundSchema: z.ZodType<
  TaxRequirementMetadata$Outbound,
  z.ZodTypeDef,
  TaxRequirementMetadata
> = z.object({
  type: TaxRequirementMetadataType$outboundSchema,
  options: z.array(z.lazy(() => TaxRequirementMetadataOptions$outboundSchema))
    .optional(),
  riskClassCode: z.string().optional(),
  riskClassDescription: z.string().optional(),
  rateType: RateType$outboundSchema.optional(),
  mask: z.nullable(z.string()).optional(),
  prefix: z.nullable(z.string()).optional(),
  validation: z.lazy(() => Validation$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    riskClassCode: "risk_class_code",
    riskClassDescription: "risk_class_description",
    rateType: "rate_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxRequirementMetadata$ {
  /** @deprecated use `TaxRequirementMetadata$inboundSchema` instead. */
  export const inboundSchema = TaxRequirementMetadata$inboundSchema;
  /** @deprecated use `TaxRequirementMetadata$outboundSchema` instead. */
  export const outboundSchema = TaxRequirementMetadata$outboundSchema;
  /** @deprecated use `TaxRequirementMetadata$Outbound` instead. */
  export type Outbound = TaxRequirementMetadata$Outbound;
}

export function taxRequirementMetadataToJSON(
  taxRequirementMetadata: TaxRequirementMetadata,
): string {
  return JSON.stringify(
    TaxRequirementMetadata$outboundSchema.parse(taxRequirementMetadata),
  );
}

export function taxRequirementMetadataFromJSON(
  jsonString: string,
): SafeParseResult<TaxRequirementMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxRequirementMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxRequirementMetadata' from JSON`,
  );
}
