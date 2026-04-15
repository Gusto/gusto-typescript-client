import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update an employee's onboarding documents config
 *
 * @remarks
 * Indicate whether to include the Form I-9 for an employee during the onboarding process.
 *
 * scope: `employees:manage`
 */
export declare function employeesUpdateOnboardingDocumentsConfig(client: GustoEmbeddedCore, request: operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest, options?: RequestOptions): APIPromise<Result<operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesUpdateOnboardingDocumentsConfig.d.ts.map