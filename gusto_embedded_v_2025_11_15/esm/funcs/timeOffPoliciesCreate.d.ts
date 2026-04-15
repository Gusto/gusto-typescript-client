import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompaniesCompanyUuidTimeOffPoliciesRequest, PostV1CompaniesCompanyUuidTimeOffPoliciesResponse } from "../models/operations/postv1companiescompanyuuidtimeoffpolicies.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a time off policy
 *
 * @remarks
 * Create a time off policy
 *
 * scope: `time_off_policies:write`
 */
export declare function timeOffPoliciesCreate(client: GustoEmbeddedCore, request: PostV1CompaniesCompanyUuidTimeOffPoliciesRequest, options?: RequestOptions): APIPromise<Result<PostV1CompaniesCompanyUuidTimeOffPoliciesResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=timeOffPoliciesCreate.d.ts.map