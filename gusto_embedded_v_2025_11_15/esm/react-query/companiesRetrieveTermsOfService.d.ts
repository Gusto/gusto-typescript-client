import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse } from "../models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservice.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesRetrieveTermsOfServiceMutationVariables = {
    request: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest;
    options?: RequestOptions;
};
export type CompaniesRetrieveTermsOfServiceMutationData = PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse;
export type CompaniesRetrieveTermsOfServiceMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Retrieve terms of service status for an admin
 *
 * @remarks
 * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 *
 * scope: `terms_of_services:read`
 */
export declare function useCompaniesRetrieveTermsOfServiceMutation(options?: MutationHookOptions<CompaniesRetrieveTermsOfServiceMutationData, CompaniesRetrieveTermsOfServiceMutationError, CompaniesRetrieveTermsOfServiceMutationVariables>): UseMutationResult<CompaniesRetrieveTermsOfServiceMutationData, CompaniesRetrieveTermsOfServiceMutationError, CompaniesRetrieveTermsOfServiceMutationVariables>;
export declare function mutationKeyCompaniesRetrieveTermsOfService(): MutationKey;
export declare function buildCompaniesRetrieveTermsOfServiceMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesRetrieveTermsOfServiceMutationVariables) => Promise<CompaniesRetrieveTermsOfServiceMutationData>;
};
//# sourceMappingURL=companiesRetrieveTermsOfService.d.ts.map