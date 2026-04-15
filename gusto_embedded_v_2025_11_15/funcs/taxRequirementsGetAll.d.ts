import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get All Tax Requirement States
 *
 * @remarks
 * Returns objects describing the states that have tax requirements for the company
 *
 * scope: `company_tax_requirements:read`
 */
export declare function taxRequirementsGetAll(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=taxRequirementsGetAll.d.ts.map