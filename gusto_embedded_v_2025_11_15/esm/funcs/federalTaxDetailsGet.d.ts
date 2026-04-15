import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyIdFederalTaxDetailsRequest, GetV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/getv1companiescompanyidfederaltaxdetails.js";
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
export declare function federalTaxDetailsGet(client: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesCompanyIdFederalTaxDetailsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=federalTaxDetailsGet.d.ts.map