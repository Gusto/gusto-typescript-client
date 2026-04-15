import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function contractorPaymentGroupsGetList(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdContractorPaymentGroupsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorPaymentGroupsGetList.d.ts.map