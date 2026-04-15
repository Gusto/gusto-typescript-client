import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyIdEarningTypesRequest, PostV1CompaniesCompanyIdEarningTypesResponse } from "../models/operations/postv1companiescompanyidearningtypes.js";
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
export declare function earningTypesCreate(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyIdEarningTypesResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=earningTypesCreate.d.ts.map