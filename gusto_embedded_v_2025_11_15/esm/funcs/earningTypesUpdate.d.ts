import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse } from "../models/operations/putv1companiescompanyidearningtypesearningtypeuuid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update an earning type
 *
 * @remarks
 * Update an earning type.
 *
 * scope: `payrolls:write`
 */
export declare function earningTypesUpdate(client: GustoEmbeddedCore, request: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, options?: RequestOptions): APIPromise<Result<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=earningTypesUpdate.d.ts.map