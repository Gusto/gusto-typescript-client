import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1TaxLiabilitiesRequest, PutV1TaxLiabilitiesResponse } from "../models/operations/putv1taxliabilities.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update tax liabilities
 *
 * @remarks
 * Update tax liabilities for a company.
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsUpdateTaxLiabilities(client: GustoEmbeddedCore, request: PutV1TaxLiabilitiesRequest, options?: RequestOptions): APIPromise<Result<PutV1TaxLiabilitiesResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsUpdateTaxLiabilities.d.ts.map