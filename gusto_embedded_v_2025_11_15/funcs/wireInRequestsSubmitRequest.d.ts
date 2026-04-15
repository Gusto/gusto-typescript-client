import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Submit a wire in request
 *
 * @remarks
 * Submit a wire in request for a payment
 *
 * scope: `payrolls:run`
 */
export declare function wireInRequestsSubmitRequest(client: GustoEmbeddedCore, request: operations.PutWireInRequestsWireInRequestUuidRequest, options?: RequestOptions): Promise<Result<components.WireInRequest, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=wireInRequestsSubmitRequest.d.ts.map