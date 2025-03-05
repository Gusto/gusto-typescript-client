/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { contractorPaymentsFund } from "../funcs/contractorPaymentsFund.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1ContractorPaymentsContractorPaymentUuidFundRequest,
  GetV1ContractorPaymentsContractorPaymentUuidFundResponse,
} from "../models/operations/getv1contractorpaymentscontractorpaymentuuidfund.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ContractorPaymentsFundMutationVariables = {
  request: GetV1ContractorPaymentsContractorPaymentUuidFundRequest;
  options?: RequestOptions;
};

export type ContractorPaymentsFundMutationData =
  GetV1ContractorPaymentsContractorPaymentUuidFundResponse;

/**
 * Fund a contractor payment [DEMO]
 *
 * @remarks
 * > 🚧 Demo action
 * >
 * > This action is only available in the Demo environment
 *
 * Simulate funding a contractor payment. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.
 *
 * scope: `payrolls:run`
 */
export function useContractorPaymentsFundMutation(
  options?: MutationHookOptions<
    ContractorPaymentsFundMutationData,
    Error,
    ContractorPaymentsFundMutationVariables
  >,
): UseMutationResult<
  ContractorPaymentsFundMutationData,
  Error,
  ContractorPaymentsFundMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildContractorPaymentsFundMutation(client, options),
    ...options,
  });
}

export function mutationKeyContractorPaymentsFund(): MutationKey {
  return ["@gusto/embedded-api", "contractorPayments", "fund"];
}

export function buildContractorPaymentsFundMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ContractorPaymentsFundMutationVariables,
  ) => Promise<ContractorPaymentsFundMutationData>;
} {
  return {
    mutationKey: mutationKeyContractorPaymentsFund(),
    mutationFn: function contractorPaymentsFundMutationFn({
      request,
      options,
    }): Promise<ContractorPaymentsFundMutationData> {
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
      return unwrapAsync(contractorPaymentsFund(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
