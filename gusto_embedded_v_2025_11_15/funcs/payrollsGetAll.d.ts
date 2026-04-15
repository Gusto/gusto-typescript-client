import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all payrolls for a company
 *
 * @remarks
 * Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.
 *
 * By default, will return processed, regular payrolls for the past 6 months.
 *
 * Notes:
 * * Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
 * * end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.
 *
 * scope: `payrolls:read`
 */
export declare function payrollsGetAll(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): Promise<Result<Array<components.PayrollMinimal>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGetAll.d.ts.map