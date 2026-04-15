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
export type CompanySuspensionCreationErrorsData = {
    errors: Array<EntityErrorObject>;
};
/**
 * Unprocessable Entity
 *
 * @remarks
 *
 * This may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.
 */
export declare class CompanySuspensionCreationErrors extends GustoEmbeddedError {
    errors: Array<EntityErrorObject>;
    /** The original data that was passed to this error instance. */
    data$: CompanySuspensionCreationErrorsData;
    constructor(err: CompanySuspensionCreationErrorsData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const CompanySuspensionCreationErrors$inboundSchema: z.ZodType<CompanySuspensionCreationErrors, z.ZodTypeDef, unknown>;
//# sourceMappingURL=companysuspensioncreationerrors.d.ts.map