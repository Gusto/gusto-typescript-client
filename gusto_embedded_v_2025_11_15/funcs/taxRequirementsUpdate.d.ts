import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Update State Tax Requirements
 *
 * @remarks
 * Update State Tax Requirements
 *
 * scope: `company_tax_requirements:write`
 */
export declare function taxRequirementsUpdate(client: GustoEmbeddedCore, request: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<Result<void, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=taxRequirementsUpdate.d.ts.map