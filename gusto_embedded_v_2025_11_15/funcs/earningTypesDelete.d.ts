import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Deactivate an earning type
 *
 * @remarks
 * Deactivate an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function earningTypesDelete(client: GustoEmbeddedCore, request: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, options?: RequestOptions): APIPromise<Result<operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=earningTypesDelete.d.ts.map