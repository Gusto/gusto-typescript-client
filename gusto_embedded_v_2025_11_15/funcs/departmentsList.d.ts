import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export declare function departmentsList(client: GustoEmbeddedCore, request: operations.GetCompaniesDepartmentsRequest, options?: RequestOptions): Promise<Result<Array<components.Department>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=departmentsList.d.ts.map