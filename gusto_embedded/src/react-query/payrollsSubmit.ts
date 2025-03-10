/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { payrollsSubmit } from "../funcs/payrollsSubmit.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest,
  PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse,
} from "../models/operations/putv1companiescompanyidpayrollspayrollidsubmit.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PayrollsSubmitMutationVariables = {
  request: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest;
  options?: RequestOptions;
};

export type PayrollsSubmitMutationData =
  PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse;

/**
 * Submit payroll
 *
 * @remarks
 * Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.
 *
 * You should poll to ensure that payroll is processed successfully, as async errors only occur after async processing is complete.
 *
 * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
 *
 * scope: `payrolls:run`
 */
export function usePayrollsSubmitMutation(
  options?: MutationHookOptions<
    PayrollsSubmitMutationData,
    Error,
    PayrollsSubmitMutationVariables
  >,
): UseMutationResult<
  PayrollsSubmitMutationData,
  Error,
  PayrollsSubmitMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPayrollsSubmitMutation(client, options),
    ...options,
  });
}

export function mutationKeyPayrollsSubmit(): MutationKey {
  return ["@gusto/embedded-api", "Payrolls", "submit"];
}

export function buildPayrollsSubmitMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PayrollsSubmitMutationVariables,
  ) => Promise<PayrollsSubmitMutationData>;
} {
  return {
    mutationKey: mutationKeyPayrollsSubmit(),
    mutationFn: function payrollsSubmitMutationFn({
      request,
      options,
    }): Promise<PayrollsSubmitMutationData> {
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
      return unwrapAsync(payrollsSubmit(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
