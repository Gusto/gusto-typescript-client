import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export declare function paySchedulesGetPreview(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=paySchedulesGetPreview.d.ts.map