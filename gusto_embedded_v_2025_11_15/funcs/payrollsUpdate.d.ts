import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update a payroll by ID
 *
 * @remarks
 * This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.  You can think of the **unprocessed**
 * payroll object as a template of fields that you can update.  You cannot modify the structure of the payroll object through this endpoint, only values
 * of the fields included in the payroll.  If you do not include specific employee compensations or fixed/hourly compensations in your request body, they
 * will not be removed from the payroll.
 *
 * scope: `payrolls:write`
 */
export declare function payrollsUpdate(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdPayrollsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsUpdate.d.ts.map