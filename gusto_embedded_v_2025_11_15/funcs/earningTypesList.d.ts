import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all earning types for a company
 *
 * @remarks
 * A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.
 *
 * #### Default Earning Type
 * Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)
 *
 * #### Custom Earning Type
 * Custom earning types are all the other earning types added specifically for a company.
 *
 * scope: `payrolls:read`
 */
export declare function earningTypesList(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): APIPromise<Result<operations.GetV1CompaniesCompanyIdEarningTypesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=earningTypesList.d.ts.map