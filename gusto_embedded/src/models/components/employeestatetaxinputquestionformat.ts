/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * An allowed value to answer the question
 */
export type EmployeeStateTaxInputQuestionFormatValue =
  | string
  | boolean
  | number;

export type Options = {
  /**
   * An allowed value to answer the question
   */
  value?: string | boolean | number | undefined;
  /**
   * A display label that corresponds to the answer value
   */
  label: string;
};

export type EmployeeStateTaxInputQuestionFormat = {
  /**
   * Describes the type of question - Text, Number, Select, Currency, Date
   */
  type: string;
  /**
   * For "Select" type questions, the allowed values and display labels.
   */
  options?: Array<Options> | undefined;
};

/** @internal */
export const EmployeeStateTaxInputQuestionFormatValue$inboundSchema: z.ZodType<
  EmployeeStateTaxInputQuestionFormatValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.boolean(), z.number()]);

/** @internal */
export type EmployeeStateTaxInputQuestionFormatValue$Outbound =
  | string
  | boolean
  | number;

/** @internal */
export const EmployeeStateTaxInputQuestionFormatValue$outboundSchema: z.ZodType<
  EmployeeStateTaxInputQuestionFormatValue$Outbound,
  z.ZodTypeDef,
  EmployeeStateTaxInputQuestionFormatValue
> = z.union([z.string(), z.boolean(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeStateTaxInputQuestionFormatValue$ {
  /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$inboundSchema` instead. */
  export const inboundSchema =
    EmployeeStateTaxInputQuestionFormatValue$inboundSchema;
  /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$outboundSchema` instead. */
  export const outboundSchema =
    EmployeeStateTaxInputQuestionFormatValue$outboundSchema;
  /** @deprecated use `EmployeeStateTaxInputQuestionFormatValue$Outbound` instead. */
  export type Outbound = EmployeeStateTaxInputQuestionFormatValue$Outbound;
}

export function employeeStateTaxInputQuestionFormatValueToJSON(
  employeeStateTaxInputQuestionFormatValue:
    EmployeeStateTaxInputQuestionFormatValue,
): string {
  return JSON.stringify(
    EmployeeStateTaxInputQuestionFormatValue$outboundSchema.parse(
      employeeStateTaxInputQuestionFormatValue,
    ),
  );
}

export function employeeStateTaxInputQuestionFormatValueFromJSON(
  jsonString: string,
): SafeParseResult<
  EmployeeStateTaxInputQuestionFormatValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EmployeeStateTaxInputQuestionFormatValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EmployeeStateTaxInputQuestionFormatValue' from JSON`,
  );
}

/** @internal */
export const Options$inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown> =
  z.object({
    value: z.union([z.string(), z.boolean(), z.number()]).optional(),
    label: z.string(),
  });

/** @internal */
export type Options$Outbound = {
  value?: string | boolean | number | undefined;
  label: string;
};

/** @internal */
export const Options$outboundSchema: z.ZodType<
  Options$Outbound,
  z.ZodTypeDef,
  Options
> = z.object({
  value: z.union([z.string(), z.boolean(), z.number()]).optional(),
  label: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Options$ {
  /** @deprecated use `Options$inboundSchema` instead. */
  export const inboundSchema = Options$inboundSchema;
  /** @deprecated use `Options$outboundSchema` instead. */
  export const outboundSchema = Options$outboundSchema;
  /** @deprecated use `Options$Outbound` instead. */
  export type Outbound = Options$Outbound;
}

export function optionsToJSON(options: Options): string {
  return JSON.stringify(Options$outboundSchema.parse(options));
}

export function optionsFromJSON(
  jsonString: string,
): SafeParseResult<Options, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Options$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Options' from JSON`,
  );
}

/** @internal */
export const EmployeeStateTaxInputQuestionFormat$inboundSchema: z.ZodType<
  EmployeeStateTaxInputQuestionFormat,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  options: z.array(z.lazy(() => Options$inboundSchema)).optional(),
});

/** @internal */
export type EmployeeStateTaxInputQuestionFormat$Outbound = {
  type: string;
  options?: Array<Options$Outbound> | undefined;
};

/** @internal */
export const EmployeeStateTaxInputQuestionFormat$outboundSchema: z.ZodType<
  EmployeeStateTaxInputQuestionFormat$Outbound,
  z.ZodTypeDef,
  EmployeeStateTaxInputQuestionFormat
> = z.object({
  type: z.string(),
  options: z.array(z.lazy(() => Options$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeStateTaxInputQuestionFormat$ {
  /** @deprecated use `EmployeeStateTaxInputQuestionFormat$inboundSchema` instead. */
  export const inboundSchema =
    EmployeeStateTaxInputQuestionFormat$inboundSchema;
  /** @deprecated use `EmployeeStateTaxInputQuestionFormat$outboundSchema` instead. */
  export const outboundSchema =
    EmployeeStateTaxInputQuestionFormat$outboundSchema;
  /** @deprecated use `EmployeeStateTaxInputQuestionFormat$Outbound` instead. */
  export type Outbound = EmployeeStateTaxInputQuestionFormat$Outbound;
}

export function employeeStateTaxInputQuestionFormatToJSON(
  employeeStateTaxInputQuestionFormat: EmployeeStateTaxInputQuestionFormat,
): string {
  return JSON.stringify(
    EmployeeStateTaxInputQuestionFormat$outboundSchema.parse(
      employeeStateTaxInputQuestionFormat,
    ),
  );
}

export function employeeStateTaxInputQuestionFormatFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeStateTaxInputQuestionFormat, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EmployeeStateTaxInputQuestionFormat$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeStateTaxInputQuestionFormat' from JSON`,
  );
}
