/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeAddressesCreate } from "../funcs/employeeAddressesCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1EmployeesEmployeeIdHomeAddressesRequest,
  PostV1EmployeesEmployeeIdHomeAddressesResponse,
} from "../models/operations/postv1employeesemployeeidhomeaddresses.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeAddressesCreateMutationVariables = {
  request: PostV1EmployeesEmployeeIdHomeAddressesRequest;
  options?: RequestOptions;
};

export type EmployeeAddressesCreateMutationData =
  PostV1EmployeesEmployeeIdHomeAddressesResponse;

/**
 * Create an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:write`
 */
export function useEmployeeAddressesCreateMutation(
  options?: MutationHookOptions<
    EmployeeAddressesCreateMutationData,
    Error,
    EmployeeAddressesCreateMutationVariables
  >,
): UseMutationResult<
  EmployeeAddressesCreateMutationData,
  Error,
  EmployeeAddressesCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeAddressesCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeAddressesCreate(): MutationKey {
  return ["@gusto/embedded-api", "employeeAddresses", "create"];
}

export function buildEmployeeAddressesCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeAddressesCreateMutationVariables,
  ) => Promise<EmployeeAddressesCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeAddressesCreate(),
    mutationFn: function employeeAddressesCreateMutationFn({
      request,
      options,
    }): Promise<EmployeeAddressesCreateMutationData> {
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
      return unwrapAsync(employeeAddressesCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
