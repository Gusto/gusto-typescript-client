import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export declare function timeOffPoliciesGetAll(client: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest, options?: RequestOptions): APIPromise<Result<operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=timeOffPoliciesGetAll.d.ts.map