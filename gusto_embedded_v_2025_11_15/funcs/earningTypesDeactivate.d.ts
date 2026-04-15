import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Deactivate an earning type
 *
 * @remarks
 * Deactivate an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function earningTypesDeactivate(client: GustoEmbeddedCore, request: operations.DeleteV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, options?: RequestOptions): Promise<Result<void, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=earningTypesDeactivate.d.ts.map