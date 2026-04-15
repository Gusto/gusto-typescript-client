import * as z from "zod";
import * as components from "../components/index.js";
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export type UnprocessableEntityErrorObject1Data = {
    errors?: Array<components.EntityErrorObject> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export declare class UnprocessableEntityErrorObject1 extends Error {
    errors?: Array<components.EntityErrorObject> | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityErrorObject1Data;
    constructor(err: UnprocessableEntityErrorObject1Data);
}
/** @internal */
export declare const UnprocessableEntityErrorObject1$inboundSchema: z.ZodType<UnprocessableEntityErrorObject1, z.ZodTypeDef, unknown>;
/** @internal */
export type UnprocessableEntityErrorObject1$Outbound = {
    errors?: Array<components.EntityErrorObject$Outbound> | undefined;
    RawResponse?: never | undefined;
};
/** @internal */
export declare const UnprocessableEntityErrorObject1$outboundSchema: z.ZodType<UnprocessableEntityErrorObject1$Outbound, z.ZodTypeDef, UnprocessableEntityErrorObject1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnprocessableEntityErrorObject1$ {
    /** @deprecated use `UnprocessableEntityErrorObject1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnprocessableEntityErrorObject1, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnprocessableEntityErrorObject1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnprocessableEntityErrorObject1$Outbound, z.ZodTypeDef, UnprocessableEntityErrorObject1>;
    /** @deprecated use `UnprocessableEntityErrorObject1$Outbound` instead. */
    type Outbound = UnprocessableEntityErrorObject1$Outbound;
}
//# sourceMappingURL=unprocessableentityerrorobject1.d.ts.map