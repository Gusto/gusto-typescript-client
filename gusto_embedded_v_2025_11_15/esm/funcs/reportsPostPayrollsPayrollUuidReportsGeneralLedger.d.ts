import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostPayrollsPayrollUuidReportsGeneralLedgerRequest, PostPayrollsPayrollUuidReportsGeneralLedgerResponse } from "../models/operations/postpayrollspayrolluuidreportsgeneralledger.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create a general ledger report
 *
 * @remarks
 * Create a general ledger report for a payroll. The report can be aggregated by different dimensions such as job or department.
 *
 * Use the `request_uuid` in the response with the [report GET endpoint](../reference/get-reports-request_uuid) to poll for the status and report URL upon completion. The retrieved report will be generated in a JSON format.
 *
 * scope: `company_reports:write` OR `company_reports:write:general_ledger`
 */
export declare function reportsPostPayrollsPayrollUuidReportsGeneralLedger(client: GustoEmbeddedCore, request: PostPayrollsPayrollUuidReportsGeneralLedgerRequest, options?: RequestOptions): APIPromise<Result<PostPayrollsPayrollUuidReportsGeneralLedgerResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=reportsPostPayrollsPayrollUuidReportsGeneralLedger.d.ts.map