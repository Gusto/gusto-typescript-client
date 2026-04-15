import * as z from "zod/v3";
import { EntityErrorObject } from "../components/entityerrorobject.js";
import { GustoEmbeddedError } from "./gustoembeddederror.js";
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export type UnprocessableEntityErrorObjectData = {
    errors: Array<EntityErrorObject>;
};
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export declare class UnprocessableEntityErrorObject extends GustoEmbeddedError {
    errors: Array<EntityErrorObject>;
    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityErrorObjectData;
    constructor(err: UnprocessableEntityErrorObjectData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const UnprocessableEntityErrorObject$inboundSchema: z.ZodType<UnprocessableEntityErrorObject, z.ZodTypeDef, unknown>;
//# sourceMappingURL=unprocessableentityerrorobject.d.ts.map