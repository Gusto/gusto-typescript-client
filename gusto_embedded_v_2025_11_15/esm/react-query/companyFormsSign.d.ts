import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompanyFormSignRequest, PutV1CompanyFormSignResponse } from "../models/operations/putv1companyformsign.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyFormsSignMutationVariables = {
    request: PutV1CompanyFormSignRequest;
    options?: RequestOptions;
};
export type CompanyFormsSignMutationData = PutV1CompanyFormSignResponse;
export type CompanyFormsSignMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Sign a company form
 *
 * @remarks
 * Sign a company form. Company forms must be signed by the company signatory.
 *
 * scope: `company_forms:sign`
 */
export declare function useCompanyFormsSignMutation(options?: MutationHookOptions<CompanyFormsSignMutationData, CompanyFormsSignMutationError, CompanyFormsSignMutationVariables>): UseMutationResult<CompanyFormsSignMutationData, CompanyFormsSignMutationError, CompanyFormsSignMutationVariables>;
export declare function mutationKeyCompanyFormsSign(): MutationKey;
export declare function buildCompanyFormsSignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyFormsSignMutationVariables) => Promise<CompanyFormsSignMutationData>;
};
//# sourceMappingURL=companyFormsSign.d.ts.map