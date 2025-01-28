/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type Base = {
  type?: string | undefined;
  message?: string | undefined;
  fullMessage?: string | undefined;
};

export type DeleteV1CompanyBenefitsCompanyBenefitIdErrors = {
  base?: Array<Base> | undefined;
};

/**
 * Unprocessable Entity
 */
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData = {
  errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors | undefined;
};

/**
 * Unprocessable Entity
 */
export class DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody extends Error {
  errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors | undefined;

  /** The original data that was passed to this error instance. */
  data$: DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData;

  constructor(err: DeleteV1CompanyBenefitsCompanyBenefitIdResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;

    this.name = "DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody";
  }
}

/** @internal */
export const Base$inboundSchema: z.ZodType<Base, z.ZodTypeDef, unknown> = z
  .object({
    type: z.string().optional(),
    message: z.string().optional(),
    full_message: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "full_message": "fullMessage",
    });
  });

/** @internal */
export type Base$Outbound = {
  type?: string | undefined;
  message?: string | undefined;
  full_message?: string | undefined;
};

/** @internal */
export const Base$outboundSchema: z.ZodType<Base$Outbound, z.ZodTypeDef, Base> =
  z.object({
    type: z.string().optional(),
    message: z.string().optional(),
    fullMessage: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      fullMessage: "full_message",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Base$ {
  /** @deprecated use `Base$inboundSchema` instead. */
  export const inboundSchema = Base$inboundSchema;
  /** @deprecated use `Base$outboundSchema` instead. */
  export const outboundSchema = Base$outboundSchema;
  /** @deprecated use `Base$Outbound` instead. */
  export type Outbound = Base$Outbound;
}

export function baseToJSON(base: Base): string {
  return JSON.stringify(Base$outboundSchema.parse(base));
}

export function baseFromJSON(
  jsonString: string,
): SafeParseResult<Base, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Base$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Base' from JSON`,
  );
}

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors,
    z.ZodTypeDef,
    unknown
  > = z.object({
    base: z.array(z.lazy(() => Base$inboundSchema)).optional(),
  });

/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound = {
  base?: Array<Base$Outbound> | undefined;
};

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound,
    z.ZodTypeDef,
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors
  > = z.object({
    base: z.array(z.lazy(() => Base$outboundSchema)).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1CompanyBenefitsCompanyBenefitIdErrors$ {
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound` instead. */
  export type Outbound = DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound;
}

export function deleteV1CompanyBenefitsCompanyBenefitIdErrorsToJSON(
  deleteV1CompanyBenefitsCompanyBenefitIdErrors:
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors,
): string {
  return JSON.stringify(
    DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema.parse(
      deleteV1CompanyBenefitsCompanyBenefitIdErrors,
    ),
  );
}

export function deleteV1CompanyBenefitsCompanyBenefitIdErrorsFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1CompanyBenefitsCompanyBenefitIdErrors,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DeleteV1CompanyBenefitsCompanyBenefitIdErrors' from JSON`,
  );
}

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$inboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    errors: z.lazy(() =>
      DeleteV1CompanyBenefitsCompanyBenefitIdErrors$inboundSchema
    ).optional(),
  })
    .transform((v) => {
      return new DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody(v);
    });

/** @internal */
export type DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound = {
  errors?: DeleteV1CompanyBenefitsCompanyBenefitIdErrors$Outbound | undefined;
};

/** @internal */
export const DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$outboundSchema:
  z.ZodType<
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody
  > = z.instanceof(DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      errors: z.lazy(() =>
        DeleteV1CompanyBenefitsCompanyBenefitIdErrors$outboundSchema
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$ {
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$inboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$outboundSchema;
  /** @deprecated use `DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound` instead. */
  export type Outbound =
    DeleteV1CompanyBenefitsCompanyBenefitIdResponseBody$Outbound;
}
