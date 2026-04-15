import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdFederalTaxDetailsRequest, PutV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/putv1companiescompanyidfederaltaxdetails.js";
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
export declare function federalTaxDetailsUpdate(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyIdFederalTaxDetailsResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=federalTaxDetailsUpdate.d.ts.map