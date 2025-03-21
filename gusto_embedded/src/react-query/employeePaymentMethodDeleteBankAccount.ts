/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeePaymentMethodDeleteBankAccount } from "../funcs/employeePaymentMethodDeleteBankAccount.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse,
} from "../models/operations/deletev1employeesemployeeidbankaccountsbankaccountid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeePaymentMethodDeleteBankAccountMutationVariables = {
  request: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest;
  options?: RequestOptions;
};

export type EmployeePaymentMethodDeleteBankAccountMutationData =
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse;

/**
 * Delete an employee bank account
 *
 * @remarks
 * Deletes an employee bank account. To update an employee's bank
 * account details, delete the bank account first and create a new one.
 *
 * scope: `employee_payment_methods:write`
 */
export function useEmployeePaymentMethodDeleteBankAccountMutation(
  options?: MutationHookOptions<
    EmployeePaymentMethodDeleteBankAccountMutationData,
    Error,
    EmployeePaymentMethodDeleteBankAccountMutationVariables
  >,
): UseMutationResult<
  EmployeePaymentMethodDeleteBankAccountMutationData,
  Error,
  EmployeePaymentMethodDeleteBankAccountMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeePaymentMethodDeleteBankAccountMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeePaymentMethodDeleteBankAccount(): MutationKey {
  return ["@gusto/embedded-api", "employeePaymentMethod", "deleteBankAccount"];
}

export function buildEmployeePaymentMethodDeleteBankAccountMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeePaymentMethodDeleteBankAccountMutationVariables,
  ) => Promise<EmployeePaymentMethodDeleteBankAccountMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeePaymentMethodDeleteBankAccount(),
    mutationFn: function employeePaymentMethodDeleteBankAccountMutationFn({
      request,
      options,
    }): Promise<EmployeePaymentMethodDeleteBankAccountMutationData> {
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
      return unwrapAsync(employeePaymentMethodDeleteBankAccount(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
