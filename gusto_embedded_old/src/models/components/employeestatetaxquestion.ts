/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmployeeStateTaxAnswer,
  EmployeeStateTaxAnswer$inboundSchema,
  EmployeeStateTaxAnswer$Outbound,
  EmployeeStateTaxAnswer$outboundSchema,
} from "./employeestatetaxanswer.js";
import {
  EmployeeStateTaxInputQuestionFormat,
  EmployeeStateTaxInputQuestionFormat$inboundSchema,
  EmployeeStateTaxInputQuestionFormat$Outbound,
  EmployeeStateTaxInputQuestionFormat$outboundSchema,
} from "./employeestatetaxinputquestionformat.js";

export type EmployeeStateTaxQuestion = {
  /**
   * A short title for the question
   */
  label: string;
  /**
   * An explaination of the question - this may contain inline html formatted links.
   */
  description: string;
  /**
   * A unique identifier of the question (for the given state) - used for updating the answer.
   */
  key: string;
  inputQuestionFormat: EmployeeStateTaxInputQuestionFormat;
  answers: Array<EmployeeStateTaxAnswer>;
};

/** @internal */
export const EmployeeStateTaxQuestion$inboundSchema: z.ZodType<
  EmployeeStateTaxQuestion,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string(),
  description: z.string(),
  key: z.string(),
  input_question_format: EmployeeStateTaxInputQuestionFormat$inboundSchema,
  answers: z.array(EmployeeStateTaxAnswer$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "input_question_format": "inputQuestionFormat",
  });
});

/** @internal */
export type EmployeeStateTaxQuestion$Outbound = {
  label: string;
  description: string;
  key: string;
  input_question_format: EmployeeStateTaxInputQuestionFormat$Outbound;
  answers: Array<EmployeeStateTaxAnswer$Outbound>;
};

/** @internal */
export const EmployeeStateTaxQuestion$outboundSchema: z.ZodType<
  EmployeeStateTaxQuestion$Outbound,
  z.ZodTypeDef,
  EmployeeStateTaxQuestion
> = z.object({
  label: z.string(),
  description: z.string(),
  key: z.string(),
  inputQuestionFormat: EmployeeStateTaxInputQuestionFormat$outboundSchema,
  answers: z.array(EmployeeStateTaxAnswer$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    inputQuestionFormat: "input_question_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmployeeStateTaxQuestion$ {
  /** @deprecated use `EmployeeStateTaxQuestion$inboundSchema` instead. */
  export const inboundSchema = EmployeeStateTaxQuestion$inboundSchema;
  /** @deprecated use `EmployeeStateTaxQuestion$outboundSchema` instead. */
  export const outboundSchema = EmployeeStateTaxQuestion$outboundSchema;
  /** @deprecated use `EmployeeStateTaxQuestion$Outbound` instead. */
  export type Outbound = EmployeeStateTaxQuestion$Outbound;
}

export function employeeStateTaxQuestionToJSON(
  employeeStateTaxQuestion: EmployeeStateTaxQuestion,
): string {
  return JSON.stringify(
    EmployeeStateTaxQuestion$outboundSchema.parse(employeeStateTaxQuestion),
  );
}

export function employeeStateTaxQuestionFromJSON(
  jsonString: string,
): SafeParseResult<EmployeeStateTaxQuestion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmployeeStateTaxQuestion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmployeeStateTaxQuestion' from JSON`,
  );
}
