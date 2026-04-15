import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get Federal Tax Details
 *
 * @remarks
 * Fetches attributes relevant for a company's federal taxes.
 *
 * scope: `company_federal_taxes:read`
 */
export declare function federalTaxDetailsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=federalTaxDetailsGet.d.ts.map