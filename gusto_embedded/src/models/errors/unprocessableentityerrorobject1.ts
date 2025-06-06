/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  EntityErrorObject,
  EntityErrorObject$inboundSchema,
  EntityErrorObject$Outbound,
  EntityErrorObject$outboundSchema,
} from "../components/entityerrorobject.js";
import {
  HTTPMetadata,
  HTTPMetadata$inboundSchema,
  HTTPMetadata$Outbound,
  HTTPMetadata$outboundSchema,
} from "../components/httpmetadata.js";
import { GustoEmbeddedError } from "./gustoembeddederror.js";

/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export type UnprocessableEntityErrorObject1Data = {
  errors: Array<EntityErrorObject>;
  httpMeta: HTTPMetadata;
};

/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export class UnprocessableEntityErrorObject1 extends GustoEmbeddedError {
  errors: Array<EntityErrorObject>;

  /** The original data that was passed to this error instance. */
  data$: UnprocessableEntityErrorObject1Data;

  constructor(
    err: UnprocessableEntityErrorObject1Data,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.errors = err.errors;

    this.name = "UnprocessableEntityErrorObject1";
  }
}

/** @internal */
export const UnprocessableEntityErrorObject1$inboundSchema: z.ZodType<
  UnprocessableEntityErrorObject1,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(EntityErrorObject$inboundSchema),
  HttpMeta: HTTPMetadata$inboundSchema,
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "HttpMeta": "httpMeta",
    });

    return new UnprocessableEntityErrorObject1(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UnprocessableEntityErrorObject1$Outbound = {
  errors: Array<EntityErrorObject$Outbound>;
  HttpMeta: HTTPMetadata$Outbound;
};

/** @internal */
export const UnprocessableEntityErrorObject1$outboundSchema: z.ZodType<
  UnprocessableEntityErrorObject1$Outbound,
  z.ZodTypeDef,
  UnprocessableEntityErrorObject1
> = z.instanceof(UnprocessableEntityErrorObject1)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(EntityErrorObject$outboundSchema),
      httpMeta: HTTPMetadata$outboundSchema,
    }).transform((v) => {
      return remap$(v, {
        httpMeta: "HttpMeta",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableEntityErrorObject1$ {
  /** @deprecated use `UnprocessableEntityErrorObject1$inboundSchema` instead. */
  export const inboundSchema = UnprocessableEntityErrorObject1$inboundSchema;
  /** @deprecated use `UnprocessableEntityErrorObject1$outboundSchema` instead. */
  export const outboundSchema = UnprocessableEntityErrorObject1$outboundSchema;
  /** @deprecated use `UnprocessableEntityErrorObject1$Outbound` instead. */
  export type Outbound = UnprocessableEntityErrorObject1$Outbound;
}
