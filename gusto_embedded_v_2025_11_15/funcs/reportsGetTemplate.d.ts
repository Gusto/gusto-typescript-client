import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a report template
 *
 * @remarks
 * Get a company's report template. The only supported report type is `payroll_journal`. The resulting columns and groupings from this endpoint can be used as a guidance to create the report using the POST create report endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function reportsGetTemplate(client: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidReportTemplatesReportTypeRequest, options?: RequestOptions): APIPromise<Result<operations.GetCompaniesCompanyUuidReportTemplatesReportTypeResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=reportsGetTemplate.d.ts.map