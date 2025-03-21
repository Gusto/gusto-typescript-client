/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { payrollsPrepare } from "../funcs/payrollsPrepare.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest,
  PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse,
} from "../models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PayrollsPrepareMutationVariables = {
  request: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest;
  options?: RequestOptions;
};

export type PayrollsPrepareMutationData =
  PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse;

/**
 * Prepare a payroll for update
 *
 * @remarks
 * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
 *
 * Notes:
 *  * Will null out calculated_at & totals if a payroll has already been calculated.
 *  * Will return the version param used for updating the payroll
 *
 * scope: `payrolls:write`
 */
export function usePayrollsPrepareMutation(
  options?: MutationHookOptions<
    PayrollsPrepareMutationData,
    Error,
    PayrollsPrepareMutationVariables
  >,
): UseMutationResult<
  PayrollsPrepareMutationData,
  Error,
  PayrollsPrepareMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPayrollsPrepareMutation(client, options),
    ...options,
  });
}

export function mutationKeyPayrollsPrepare(): MutationKey {
  return ["@gusto/embedded-api", "Payrolls", "prepare"];
}

export function buildPayrollsPrepareMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PayrollsPrepareMutationVariables,
  ) => Promise<PayrollsPrepareMutationData>;
} {
  return {
    mutationKey: mutationKeyPayrollsPrepare(),
    mutationFn: function payrollsPrepareMutationFn({
      request,
      options,
    }): Promise<PayrollsPrepareMutationData> {
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
      return unwrapAsync(payrollsPrepare(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
