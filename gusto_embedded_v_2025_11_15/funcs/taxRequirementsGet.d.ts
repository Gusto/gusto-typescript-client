import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get State Tax Requirements
 *
 * @remarks
 * Get all tax requirements for a given state.
 *
 * ### Metadata Examples
 *
 * ```json select
 * {
 *   "type": "select",
 *   "options": [
 *     { "label": "Semiweekly",  value: "Semi-weekly" },
 *     { "label": "Monthly",  value: "Monthly" },
 *     { "label": "Quarterly",  value: "Quarterly" },
 *   ]
 * }
 * ```
 * ```json radio
 * {
 *   "type": "radio",
 *   "options": [
 *     { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
 *     { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
 *   ]
 * }
 * ```
 * ```json account_number
 * {
 *   "type": "account_number",
 *   "mask": "######-##',
 *   "prefix": null
 * }
 * ```
 * ```json tax_rate
 * {
 *   "type": "tax_rate",
 *   "validation": {
 *     "type": "min_max",
 *     "min": "0.0004",
 *     "max": "0.081"
 *   }
 * }
 * ```
 *
 * scope: `company_tax_requirements:read`
 */
export declare function taxRequirementsGet(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=taxRequirementsGet.d.ts.map