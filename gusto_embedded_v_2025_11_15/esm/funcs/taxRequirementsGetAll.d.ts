import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsRequest, GetV1CompaniesCompanyUuidTaxRequirementsResponse } from "../models/operations/getv1companiescompanyuuidtaxrequirements.js";
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
export declare function taxRequirementsGetAll(client: GustoEmbeddedCore, request: GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: RequestOptions): APIPromise<Result<GetV1CompaniesCompanyUuidTaxRequirementsResponse, GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=taxRequirementsGetAll.d.ts.map