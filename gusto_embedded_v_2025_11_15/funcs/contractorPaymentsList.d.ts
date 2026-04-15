import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get contractor payments for a company
 *
 * @remarks
 * Returns an object containing individual contractor payments, within a given time period, including totals.
 *
 * scope: `payrolls:read`
 */
export declare function contractorPaymentsList(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdContractorPaymentsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentsList.d.ts.map