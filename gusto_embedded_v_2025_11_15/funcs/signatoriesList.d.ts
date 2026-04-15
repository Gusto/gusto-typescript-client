import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function signatoriesList(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyUuidSignatoriesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=signatoriesList.d.ts.map