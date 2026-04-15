import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a custom report
 *
 * @remarks
 * Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the report GET endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function reportsCreateCustom(client: GustoEmbeddedCore, request: operations.PostCompaniesCompanyUuidReportsRequest, options?: RequestOptions): APIPromise<Result<operations.PostCompaniesCompanyUuidReportsResponse, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=reportsCreateCustom.d.ts.map