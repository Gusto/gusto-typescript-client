import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export declare function employeesTimeOffActivitiesGet(client: GustoEmbeddedCore, request: operations.GetVersionEmployeesTimeOffActivitiesRequest, options?: RequestOptions): Promise<Result<components.TimeOffActivity, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=employeesTimeOffActivitiesGet.d.ts.map