import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1WorkAddressesWorkAddressUuidRequest, PutV1WorkAddressesWorkAddressUuidResponse } from "../models/operations/putv1workaddressesworkaddressuuid.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update an employee work address
 *
 * @remarks
 * The work address of an employee is used for payroll tax purposes.
 *
 * scope: `employees:manage`
 */
export declare function employeeAddressesUpdateWorkAddress(client: GustoEmbeddedCore, request: PutV1WorkAddressesWorkAddressUuidRequest, options?: RequestOptions): APIPromise<Result<PutV1WorkAddressesWorkAddressUuidResponse, NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=employeeAddressesUpdateWorkAddress.d.ts.map