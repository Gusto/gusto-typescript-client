import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, PutV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "../models/operations/putv1companiescompanyuuidtaxrequirementsstate.js";
import { MutationHookOptions } from "./_types.js";
export type TaxRequirementsUpdateStateMutationVariables = {
    request: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest;
    options?: RequestOptions;
};
export type TaxRequirementsUpdateStateMutationData = PutV1CompaniesCompanyUuidTaxRequirementsStateResponse;
export type TaxRequirementsUpdateStateMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Update State Tax Requirements
 *
 * @remarks
 * Update State Tax Requirements
 *
 * scope: `company_tax_requirements:write`
 */
export declare function useTaxRequirementsUpdateStateMutation(options?: MutationHookOptions<TaxRequirementsUpdateStateMutationData, TaxRequirementsUpdateStateMutationError, TaxRequirementsUpdateStateMutationVariables>): UseMutationResult<TaxRequirementsUpdateStateMutationData, TaxRequirementsUpdateStateMutationError, TaxRequirementsUpdateStateMutationVariables>;
export declare function mutationKeyTaxRequirementsUpdateState(): MutationKey;
export declare function buildTaxRequirementsUpdateStateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TaxRequirementsUpdateStateMutationVariables) => Promise<TaxRequirementsUpdateStateMutationData>;
};
//# sourceMappingURL=taxRequirementsUpdateState.d.ts.map