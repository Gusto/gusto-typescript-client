import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export declare function employeesList(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdEmployeesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesList.d.ts.map