import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1ContractorsContractorUuidAddressRequest, PutV1ContractorsContractorUuidAddressResponse } from "../models/operations/putv1contractorscontractoruuidaddress.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create or update a contractor's address
 *
 * @remarks
 * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * scope: `contractors:write`
 *
 * > 🚧 Contractors can only have one address.
 * >
 * > When a contractor is created, an address is created for them by default. Updating the address will replace the existing address.
 */
export declare function contractorsUpdateAddress(client: GustoEmbeddedCore, request: PutV1ContractorsContractorUuidAddressRequest, options?: RequestOptions): APIPromise<Result<PutV1ContractorsContractorUuidAddressResponse, UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=contractorsUpdateAddress.d.ts.map