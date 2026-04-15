import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a custom earning type
 *
 * @remarks
 * Create a custom earning type.
 *
 * If an inactive earning type exists with the same name, this will reactivate it instead of creating a new one.
 *
 * scope: `payrolls:write`
 */
export declare function earningTypesCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyIdEarningTypesResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=earningTypesCreate.d.ts.map