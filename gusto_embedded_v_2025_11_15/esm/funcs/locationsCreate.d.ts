import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdLocationsRequest, PostV1CompaniesCompanyIdLocationsResponse } from "../models/operations/postv1companiescompanyidlocations.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a company location
 *
 * @remarks
 * Create a company location, which represents any address associated with a company: mailing
 * addresses, filing addresses, or work locations. A single address may serve multiple, or all, purposes.
 *
 * Since all company locations are subsets of locations, use the Locations endpoints to
 * [get](ref:get-v1-locations-location_id) or [update](ref:put-v1-locations-location_id) an individual record.
 *
 * scope: `companies:write`
 */
export declare function locationsCreate(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdLocationsRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdLocationsResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=locationsCreate.d.ts.map