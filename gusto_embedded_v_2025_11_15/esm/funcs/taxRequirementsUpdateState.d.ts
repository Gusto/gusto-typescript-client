import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, PutV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "../models/operations/putv1companiescompanyuuidtaxrequirementsstate.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update State Tax Requirements
 *
 * @remarks
 * Update State Tax Requirements
 *
 * scope: `company_tax_requirements:write`
 */
export declare function taxRequirementsUpdateState(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=taxRequirementsUpdateState.d.ts.map