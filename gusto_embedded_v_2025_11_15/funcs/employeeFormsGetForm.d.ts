import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function employeeFormsGetForm(client: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest, options?: RequestOptions): Promise<Result<components.Form, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeeFormsGetForm.d.ts.map