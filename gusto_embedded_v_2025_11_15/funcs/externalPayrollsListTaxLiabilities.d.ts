import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export declare function externalPayrollsListTaxLiabilities(client: GustoEmbeddedCore, request: operations.GetV1TaxLiabilitiesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1TaxLiabilitiesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsListTaxLiabilities.d.ts.map