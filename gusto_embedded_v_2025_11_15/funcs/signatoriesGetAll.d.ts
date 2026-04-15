import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function signatoriesGetAll(client: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): Promise<Result<Array<components.Signatory>, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=signatoriesGetAll.d.ts.map