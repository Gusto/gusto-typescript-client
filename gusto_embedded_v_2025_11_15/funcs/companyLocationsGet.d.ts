import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
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
export declare function companyLocationsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): Promise<Result<Array<components.Location>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=companyLocationsGet.d.ts.map