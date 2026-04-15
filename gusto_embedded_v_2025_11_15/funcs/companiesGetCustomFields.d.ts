import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get the custom fields of a company
 *
 * @remarks
 * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
 *
 * scope: `companies:read`
 */
export declare function companiesGetCustomFields(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdCustomFieldsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companiesGetCustomFields.d.ts.map