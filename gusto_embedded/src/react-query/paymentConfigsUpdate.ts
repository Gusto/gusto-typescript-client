/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { paymentConfigsUpdate } from "../funcs/paymentConfigsUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PaymentConfigsUpdateMutationVariables = {
  request: operations.PutV1CompanyPaymentConfigsRequest;
  options?: RequestOptions;
};

export type PaymentConfigsUpdateMutationData =
  operations.PutV1CompanyPaymentConfigsResponse;

/**
 * Update a company's payment configs
 *
 * @remarks
 * Update payment speed and fast payment limit for a company. At least one of `payment_speed` or `fast_payment_limit` parameters is required. 1-day option is only applicable to partners that opt in.
 *
 * scope: `company_payment_configs:write`
 */
export function usePaymentConfigsUpdateMutation(
  options?: MutationHookOptions<
    PaymentConfigsUpdateMutationData,
    Error,
    PaymentConfigsUpdateMutationVariables
  >,
): UseMutationResult<
  PaymentConfigsUpdateMutationData,
  Error,
  PaymentConfigsUpdateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPaymentConfigsUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyPaymentConfigsUpdate(): MutationKey {
  return ["@gusto/embedded-api", "paymentConfigs", "update"];
}

export function buildPaymentConfigsUpdateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PaymentConfigsUpdateMutationVariables,
  ) => Promise<PaymentConfigsUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyPaymentConfigsUpdate(),
    mutationFn: function paymentConfigsUpdateMutationFn({
      request,
      options,
    }): Promise<PaymentConfigsUpdateMutationData> {
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
      return unwrapAsync(paymentConfigsUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
