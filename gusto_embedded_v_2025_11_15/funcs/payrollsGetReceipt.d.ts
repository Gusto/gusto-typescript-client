import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get a single payroll receipt
 *
 * @remarks
 * Returns a payroll receipt.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function payrollsGetReceipt(client: GustoEmbeddedCore, request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=payrollsGetReceipt.d.ts.map