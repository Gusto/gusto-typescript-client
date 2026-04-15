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
 * Create a contractor
 *
 * @remarks
 * Create an individual or business contractor.
 *
 * scope: `contractors:manage`
 */
export declare function contractorsCreate(client: GustoEmbeddedCore, request: operations.PostV1CompaniesCompanyUuidContractorsRequest, options?: RequestOptions): APIPromise<Result<operations.PostV1CompaniesCompanyUuidContractorsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorsCreate.d.ts.map