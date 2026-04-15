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
 * Finalize tax liabilities options and convert into processed payrolls
 *
 * @remarks
 * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsFinalizeTaxLiabilities(client: GustoEmbeddedCore, request: operations.PutV1TaxLiabilitiesFinishRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1TaxLiabilitiesFinishResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=externalPayrollsFinalizeTaxLiabilities.d.ts.map