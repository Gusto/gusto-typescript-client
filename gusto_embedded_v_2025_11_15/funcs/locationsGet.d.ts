import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get company locations
 *
 * @remarks
 * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
 *
 * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
 *
 * scope: `companies:read`
 */
export declare function locationsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdLocationsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=locationsGet.d.ts.map