import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse } from "../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";
import { MutationHookOptions } from "./_types.js";
export type CompaniesAcceptTermsOfServiceMutationVariables = {
    request: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest;
    options?: RequestOptions;
};
export type CompaniesAcceptTermsOfServiceMutationData = PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse;
export type CompaniesAcceptTermsOfServiceMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Accept terms of service for an admin
 *
 * @remarks
 * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 * The user must be a company admin in order to accept the Terms of Service.
 *
 * scope: `terms_of_services:write`
 */
export declare function useCompaniesAcceptTermsOfServiceMutation(options?: MutationHookOptions<CompaniesAcceptTermsOfServiceMutationData, CompaniesAcceptTermsOfServiceMutationError, CompaniesAcceptTermsOfServiceMutationVariables>): UseMutationResult<CompaniesAcceptTermsOfServiceMutationData, CompaniesAcceptTermsOfServiceMutationError, CompaniesAcceptTermsOfServiceMutationVariables>;
export declare function mutationKeyCompaniesAcceptTermsOfService(): MutationKey;
export declare function buildCompaniesAcceptTermsOfServiceMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompaniesAcceptTermsOfServiceMutationVariables) => Promise<CompaniesAcceptTermsOfServiceMutationData>;
};
//# sourceMappingURL=companiesAcceptTermsOfService.d.ts.map