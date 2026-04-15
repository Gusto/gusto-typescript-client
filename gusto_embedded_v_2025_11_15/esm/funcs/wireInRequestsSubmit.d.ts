import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutWireInRequestsWireInRequestUuidRequest, PutWireInRequestsWireInRequestUuidResponse } from "../models/operations/putwireinrequestswireinrequestuuid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Submit a wire in request
 *
 * @remarks
 * Submit a wire in request for a payment
 *
 * scope: `payrolls:run`
 */
export declare function wireInRequestsSubmit(client: GustoEmbeddedCore, request: PutWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): APIPromise<Result<PutWireInRequestsWireInRequestUuidResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=wireInRequestsSubmit.d.ts.map