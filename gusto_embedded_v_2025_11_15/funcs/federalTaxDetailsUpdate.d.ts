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
 * Update Federal Tax Details
 *
 * @remarks
 * Updates attributes relevant for a company's federal taxes.
 * This information is required is to onboard a company for use with Gusto Embedded Payroll.
 *
 * scope: `company_federal_taxes:write`
 */
export declare function federalTaxDetailsUpdate(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=federalTaxDetailsUpdate.d.ts.map