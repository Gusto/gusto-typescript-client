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
 * Retrieve invoicing data for companies
 *
 * @remarks
 * Retrieve data for active companies used to calculate invoices for Gusto Embedded Payroll. A company is considered active for an invoice period if they are an active partner managed company, have run payroll or created contractor payments since becoming a partner managed company, and are not suspended at any point during the invoice period.  This endpoint forces pagination, with 100 results returned at a time. You can learn more about our pagination here: [pagination guide](https://docs.gusto.com/embedded-payroll/docs/pagination)
 *
 * > 📘 System Access Authentication
 * >
 * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)
 *
 * scope: `invoices:read`
 */
export declare function invoicesGetByPeriod(client: GustoEmbeddedCore, security: operations.GetInvoicesInvoicePeriodSecurity, request: operations.GetInvoicesInvoicePeriodRequest, options?: RequestOptions): Promise<Result<components.InvoiceData, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=invoicesGetByPeriod.d.ts.map