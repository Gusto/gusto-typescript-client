import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Generate a 1099 form [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Generates a 1099 document for testing purposes.
 *
 * scope: `contractors:write`
 */
export declare function contractorFormsGenerate1099(client: GustoEmbeddedCore, request: operations.PostV1SandboxGenerate1099Request, options?: RequestOptions): APIPromise<Result<operations.PostV1SandboxGenerate1099Response, errors.UnprocessableEntityErrorObject | APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=contractorFormsGenerate1099.d.ts.map