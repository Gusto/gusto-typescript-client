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
 * Update a company's payment configs
 *
 * @remarks
 * Update payment speed and fast payment limit for a company. At least one of `payment_speed` or `fast_payment_limit` parameters is required. 1-day option is only applicable to partners that opt in.
 *
 * scope: `company_payment_configs:write`
 */
export declare function paymentConfigsUpdate(client: GustoEmbeddedCore, request: operations.PutV1CompanyPaymentConfigsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompanyPaymentConfigsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paymentConfigsUpdate.d.ts.map