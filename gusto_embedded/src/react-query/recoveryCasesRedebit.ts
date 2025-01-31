/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { recoveryCasesRedebit } from "../funcs/recoveryCasesRedebit.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type RecoveryCasesRedebitMutationVariables = {
  request: operations.RedebitRecoveryCaseRequest;
  options?: RequestOptions;
};

export type RecoveryCasesRedebitMutationData = void;

/**
 * Initiate a redebit for a recovery case
 *
 * @remarks
 * After resolving the underlying bank error, initiate a redebit for an open recovery case. This submission is asynchronous and a successful request responds with a 202 HTTP status.
 *
 * It may take up to four business days for the ACH debit to process; in the meantime, the status of the recovery case will be in the `initiated_redebit` state. When funds are successfully redebited, the recovery case is transitioned to the `recovered` state.
 *
 * If the company has exceeded maximum redebit attempts, or if the recovery case is not in a redebitable state, the response will be 422 Unprocessable Entity.
 *
 * scope: `recovery_cases:write`
 */
export function useRecoveryCasesRedebitMutation(
  options?: MutationHookOptions<
    RecoveryCasesRedebitMutationData,
    Error,
    RecoveryCasesRedebitMutationVariables
  >,
): UseMutationResult<
  RecoveryCasesRedebitMutationData,
  Error,
  RecoveryCasesRedebitMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildRecoveryCasesRedebitMutation(client, options),
    ...options,
  });
}

export function mutationKeyRecoveryCasesRedebit(): MutationKey {
  return ["@gusto/embedded-api", "recoveryCases", "redebit"];
}

export function buildRecoveryCasesRedebitMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: RecoveryCasesRedebitMutationVariables,
  ) => Promise<RecoveryCasesRedebitMutationData>;
} {
  return {
    mutationKey: mutationKeyRecoveryCasesRedebit(),
    mutationFn: function recoveryCasesRedebitMutationFn({
      request,
      options,
    }): Promise<RecoveryCasesRedebitMutationData> {
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
      return unwrapAsync(recoveryCasesRedebit(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
