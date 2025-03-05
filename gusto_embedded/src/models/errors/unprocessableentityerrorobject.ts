/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  EntityErrorObject,
  EntityErrorObject$inboundSchema,
  EntityErrorObject$Outbound,
  EntityErrorObject$outboundSchema,
} from "../components/entityerrorobject.js";

/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export type UnprocessableEntityErrorObjectData = {
  errors?: Array<EntityErrorObject> | undefined;
};

/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export class UnprocessableEntityErrorObject extends Error {
  errors?: Array<EntityErrorObject> | undefined;

  /** The original data that was passed to this error instance. */
  data$: UnprocessableEntityErrorObjectData;

  constructor(err: UnprocessableEntityErrorObjectData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;

    this.name = "UnprocessableEntityErrorObject";
  }
}

/** @internal */
export const UnprocessableEntityErrorObject$inboundSchema: z.ZodType<
  UnprocessableEntityErrorObject,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(EntityErrorObject$inboundSchema).optional(),
})
  .transform((v) => {
    return new UnprocessableEntityErrorObject(v);
  });

/** @internal */
export type UnprocessableEntityErrorObject$Outbound = {
  errors?: Array<EntityErrorObject$Outbound> | undefined;
};

/** @internal */
export const UnprocessableEntityErrorObject$outboundSchema: z.ZodType<
  UnprocessableEntityErrorObject$Outbound,
  z.ZodTypeDef,
  UnprocessableEntityErrorObject
> = z.instanceof(UnprocessableEntityErrorObject)
  .transform(v => v.data$)
  .pipe(z.object({
    errors: z.array(EntityErrorObject$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntityErrorObject$ {
  /** @deprecated use `UnprocessableEntityErrorObject$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntityErrorObject$inboundSchema;
  /** @deprecated use `UnprocessableEntityErrorObject$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntityErrorObject$outboundSchema;
  /** @deprecated use `UnprocessableEntityErrorObject$Outbound` instead. */
  export type Outbound = UnprocessableEntityErrorObject$Outbound;
}
