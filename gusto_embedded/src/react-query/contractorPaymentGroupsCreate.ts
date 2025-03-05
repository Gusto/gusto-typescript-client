/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { contractorPaymentGroupsCreate } from "../funcs/contractorPaymentGroupsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1CompaniesCompanyIdContractorPaymentGroupsRequest,
  PostV1CompaniesCompanyIdContractorPaymentGroupsResponse,
} from "../models/operations/postv1companiescompanyidcontractorpaymentgroups.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ContractorPaymentGroupsCreateMutationVariables = {
  request: PostV1CompaniesCompanyIdContractorPaymentGroupsRequest;
  options?: RequestOptions;
};

export type ContractorPaymentGroupsCreateMutationData =
  PostV1CompaniesCompanyIdContractorPaymentGroupsResponse;

/**
 * Create a contractor payment group
 *
 * @remarks
 * Pay a group of contractors. Information needed depends on the contractor's wage type (hourly vs fixed)
 *
 * scope: `payrolls:run`
 */
export function useContractorPaymentGroupsCreateMutation(
  options?: MutationHookOptions<
    ContractorPaymentGroupsCreateMutationData,
    Error,
    ContractorPaymentGroupsCreateMutationVariables
  >,
): UseMutationResult<
  ContractorPaymentGroupsCreateMutationData,
  Error,
  ContractorPaymentGroupsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildContractorPaymentGroupsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyContractorPaymentGroupsCreate(): MutationKey {
  return ["@gusto/embedded-api", "contractorPaymentGroups", "create"];
}

export function buildContractorPaymentGroupsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ContractorPaymentGroupsCreateMutationVariables,
  ) => Promise<ContractorPaymentGroupsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyContractorPaymentGroupsCreate(),
    mutationFn: function contractorPaymentGroupsCreateMutationFn({
      request,
      options,
    }): Promise<ContractorPaymentGroupsCreateMutationData> {
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
      return unwrapAsync(contractorPaymentGroupsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
