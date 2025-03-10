/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { companiesAcceptTermsOfService } from "../funcs/companiesAcceptTermsOfService.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest,
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse,
} from "../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CompaniesAcceptTermsOfServiceMutationVariables = {
  request: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest;
  options?: RequestOptions;
};

export type CompaniesAcceptTermsOfServiceMutationData =
  PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse;

/**
 * Accept terms of service for a company user
 *
 * @remarks
 * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
 * The user must have a role in the company in order to accept the Terms of Service.
 *
 * scope: `terms_of_services:write`
 */
export function useCompaniesAcceptTermsOfServiceMutation(
  options?: MutationHookOptions<
    CompaniesAcceptTermsOfServiceMutationData,
    Error,
    CompaniesAcceptTermsOfServiceMutationVariables
  >,
): UseMutationResult<
  CompaniesAcceptTermsOfServiceMutationData,
  Error,
  CompaniesAcceptTermsOfServiceMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildCompaniesAcceptTermsOfServiceMutation(client, options),
    ...options,
  });
}

export function mutationKeyCompaniesAcceptTermsOfService(): MutationKey {
  return ["@gusto/embedded-api", "Companies", "acceptTermsOfService"];
}

export function buildCompaniesAcceptTermsOfServiceMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CompaniesAcceptTermsOfServiceMutationVariables,
  ) => Promise<CompaniesAcceptTermsOfServiceMutationData>;
} {
  return {
    mutationKey: mutationKeyCompaniesAcceptTermsOfService(),
    mutationFn: function companiesAcceptTermsOfServiceMutationFn({
      request,
      options,
    }): Promise<CompaniesAcceptTermsOfServiceMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(companiesAcceptTermsOfService(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
