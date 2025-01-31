/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { companiesFinishOnboarding } from "../funcs/companiesFinishOnboarding.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CompaniesFinishOnboardingMutationVariables = {
  request: operations.GetV1CompanyFinishOnboardingRequest;
  options?: RequestOptions;
};

export type CompaniesFinishOnboardingMutationData =
  components.CompanyOnboardingStatus;

/**
 * Finish company onboarding
 *
 * @remarks
 * Finalize a given company's onboarding process.
 *
 * ### Approve a company in demo
 * After a company is finished onboarding, Gusto requires an additional step to review and approve that company. The company onboarding status is `"onboarding_completed": false`, until the API call is made to finish company onboarding.
 * In production environments, this step is required for risk-analysis purposes.
 *
 * We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.
 *
 * ```shell
 * PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'
 *
 * # Response: Company object, with company_status: 'Approved'
 * ```
 *
 * scope: `companies:write`
 */
export function useCompaniesFinishOnboardingMutation(
  options?: MutationHookOptions<
    CompaniesFinishOnboardingMutationData,
    Error,
    CompaniesFinishOnboardingMutationVariables
  >,
): UseMutationResult<
  CompaniesFinishOnboardingMutationData,
  Error,
  CompaniesFinishOnboardingMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildCompaniesFinishOnboardingMutation(client, options),
    ...options,
  });
}

export function mutationKeyCompaniesFinishOnboarding(): MutationKey {
  return ["@gusto/embedded-api", "Companies", "finishOnboarding"];
}

export function buildCompaniesFinishOnboardingMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CompaniesFinishOnboardingMutationVariables,
  ) => Promise<CompaniesFinishOnboardingMutationData>;
} {
  return {
    mutationKey: mutationKeyCompaniesFinishOnboarding(),
    mutationFn: function companiesFinishOnboardingMutationFn({
      request,
      options,
    }): Promise<CompaniesFinishOnboardingMutationData> {
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
      return unwrapAsync(companiesFinishOnboarding(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
