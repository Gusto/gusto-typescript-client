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
 * Create a contractor payment group
 *
 * @remarks
 * Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)
 *
 * scope: `payrolls:run`
 */
export declare function contractorPaymentGroupsCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentGroupsCreate.d.ts.map