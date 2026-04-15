import * as z from "zod/v3";
import { EntityErrorObject } from "../components/entityerrorobject.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
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
export declare class UnprocessableEntityErrorObject1 extends GustoEmbeddedError {
    errors: Array<EntityErrorObject>;
    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityErrorObject1Data;
    constructor(err: UnprocessableEntityErrorObject1Data, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const UnprocessableEntityErrorObject1$inboundSchema: z.ZodType<UnprocessableEntityErrorObject1, z.ZodTypeDef, unknown>;
//# sourceMappingURL=unprocessableentityerrorobject1.d.ts.map