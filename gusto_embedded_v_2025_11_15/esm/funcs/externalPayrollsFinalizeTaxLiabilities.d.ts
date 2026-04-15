import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1TaxLiabilitiesFinishRequest, PutV1TaxLiabilitiesFinishResponse } from "../models/operations/putv1taxliabilitiesfinish.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Finalize tax liabilities options and convert into processed payrolls
 *
 * @remarks
 * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
 *
 * scope: `external_payrolls:write`
 */
export declare function externalPayrollsFinalizeTaxLiabilities(client: GustoEmbeddedCore, request: PutV1TaxLiabilitiesFinishRequest, options?: RequestOptions): APIPromise<Result<PutV1TaxLiabilitiesFinishResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=externalPayrollsFinalizeTaxLiabilities.d.ts.map