/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeAddressesUpdateHomeAddress } from "../funcs/employeeAddressesUpdateHomeAddress.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeAddressesUpdateHomeAddressMutationVariables = {
  request: operations.PutV1HomeAddressesHomeAddressUuidRequest;
  options?: RequestOptions;
};

export type EmployeeAddressesUpdateHomeAddressMutationData =
  components.EmployeeAddress;

/**
 * Update an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:write`
 */
export function useEmployeeAddressesUpdateHomeAddressMutation(
  options?: MutationHookOptions<
    EmployeeAddressesUpdateHomeAddressMutationData,
    Error,
    EmployeeAddressesUpdateHomeAddressMutationVariables
  >,
): UseMutationResult<
  EmployeeAddressesUpdateHomeAddressMutationData,
  Error,
  EmployeeAddressesUpdateHomeAddressMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeAddressesUpdateHomeAddressMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeAddressesUpdateHomeAddress(): MutationKey {
  return ["@gusto/embedded-api", "employeeAddresses", "updateHomeAddress"];
}

export function buildEmployeeAddressesUpdateHomeAddressMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeAddressesUpdateHomeAddressMutationVariables,
  ) => Promise<EmployeeAddressesUpdateHomeAddressMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeAddressesUpdateHomeAddress(),
    mutationFn: function employeeAddressesUpdateHomeAddressMutationFn({
      request,
      options,
    }): Promise<EmployeeAddressesUpdateHomeAddressMutationData> {
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
      return unwrapAsync(employeeAddressesUpdateHomeAddress(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
