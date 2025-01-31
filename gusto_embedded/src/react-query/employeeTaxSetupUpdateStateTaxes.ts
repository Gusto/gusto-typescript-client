/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeTaxSetupUpdateStateTaxes } from "../funcs/employeeTaxSetupUpdateStateTaxes.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeTaxSetupUpdateStateTaxesMutationVariables = {
  request: operations.PutV1EmployeesEmployeeIdStateTaxesRequest;
  options?: RequestOptions;
};

export type EmployeeTaxSetupUpdateStateTaxesMutationData = Array<
  components.EmployeeStateTax
>;

/**
 * Update an employee's state taxes
 *
 * @remarks
 * Update attributes relevant for an employee's state taxes.
 *
 * As described for the GET endpoint, the answers must be supplied in the effective-dated format, but currently only a single answer will be accepted - `valid_from` and `valid_up_to` must be `"2010-01-01"` and `null` respectively.
 *
 * scope: `employee_state_taxes:write`
 */
export function useEmployeeTaxSetupUpdateStateTaxesMutation(
  options?: MutationHookOptions<
    EmployeeTaxSetupUpdateStateTaxesMutationData,
    Error,
    EmployeeTaxSetupUpdateStateTaxesMutationVariables
  >,
): UseMutationResult<
  EmployeeTaxSetupUpdateStateTaxesMutationData,
  Error,
  EmployeeTaxSetupUpdateStateTaxesMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeTaxSetupUpdateStateTaxesMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeTaxSetupUpdateStateTaxes(): MutationKey {
  return ["@gusto/embedded-api", "employeeTaxSetup", "updateStateTaxes"];
}

export function buildEmployeeTaxSetupUpdateStateTaxesMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeTaxSetupUpdateStateTaxesMutationVariables,
  ) => Promise<EmployeeTaxSetupUpdateStateTaxesMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeTaxSetupUpdateStateTaxes(),
    mutationFn: function employeeTaxSetupUpdateStateTaxesMutationFn({
      request,
      options,
    }): Promise<EmployeeTaxSetupUpdateStateTaxesMutationData> {
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
      return unwrapAsync(employeeTaxSetupUpdateStateTaxes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
