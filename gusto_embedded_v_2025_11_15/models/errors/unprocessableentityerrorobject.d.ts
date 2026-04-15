import * as z from "zod";
import * as components from "../components/index.js";
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export type UnprocessableEntityErrorObjectData = {
    errors?: Array<components.EntityErrorObject> | undefined;
};
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export declare class UnprocessableEntityErrorObject extends Error {
    errors?: Array<components.EntityErrorObject> | undefined;
    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityErrorObjectData;
    constructor(err: UnprocessableEntityErrorObjectData);
}
/** @internal */
export declare const UnprocessableEntityErrorObject$inboundSchema: z.ZodType<UnprocessableEntityErrorObject, z.ZodTypeDef, unknown>;
/** @internal */
export type UnprocessableEntityErrorObject$Outbound = {
    errors?: Array<components.EntityErrorObject$Outbound> | undefined;
};
/** @internal */
export declare const UnprocessableEntityErrorObject$outboundSchema: z.ZodType<UnprocessableEntityErrorObject$Outbound, z.ZodTypeDef, UnprocessableEntityErrorObject>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnprocessableEntityErrorObject$ {
    /** @deprecated use `UnprocessableEntityErrorObject$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnprocessableEntityErrorObject, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnprocessableEntityErrorObject$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnprocessableEntityErrorObject$Outbound, z.ZodTypeDef, UnprocessableEntityErrorObject>;
    /** @deprecated use `UnprocessableEntityErrorObject$Outbound` instead. */
    type Outbound = UnprocessableEntityErrorObject$Outbound;
}
//# sourceMappingURL=unprocessableentityerrorobject.d.ts.map