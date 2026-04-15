import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a company's payment configs
 *
 * @remarks
 * Get payment speed for the company and fast payment limit (1-day is only applicable to partners that opt in).
 *
 * scope: `company_payment_configs:read`
 */
export declare function paymentConfigsGet(client: GustoEmbeddedCore, request: operations.GetV1CompanyPaymentConfigsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompanyPaymentConfigsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paymentConfigsGet.d.ts.map