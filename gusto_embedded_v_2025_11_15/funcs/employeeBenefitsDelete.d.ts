import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an employee benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * scope: `employee_benefits:write`
 */
export declare function employeeBenefitsDelete(client: GustoEmbeddedCore, request: operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeBenefitsDelete.d.ts.map