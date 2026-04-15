import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Remove people from a department
 *
 * @remarks
 * Remove employees and contractors from a department
 *
 * scope: `departments:write`
 */
export declare function departmentsRemove(client: GustoEmbeddedCore, request: operations.PutRemovePeopleFromDepartmentRequest, options?: RequestOptions): Promise<Result<components.Department, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=departmentsRemove.d.ts.map