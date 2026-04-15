import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1SandboxGenerate1099Request, PostV1SandboxGenerate1099Response } from "../models/operations/postv1sandboxgenerate1099.js";
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
export declare function contractorFormsGenerate1099(client: GustoEmbeddedCore, request: PostV1SandboxGenerate1099Request, options?: RequestOptions): APIPromise<Result<PostV1SandboxGenerate1099Response, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorFormsGenerate1099.d.ts.map