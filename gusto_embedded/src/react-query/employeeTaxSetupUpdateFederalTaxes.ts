/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeTaxSetupUpdateFederalTaxes } from "../funcs/employeeTaxSetupUpdateFederalTaxes.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1EmployeesEmployeeIdFederalTaxesRequest,
  PutV1EmployeesEmployeeIdFederalTaxesResponse,
} from "../models/operations/putv1employeesemployeeidfederaltaxes.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeTaxSetupUpdateFederalTaxesMutationVariables = {
  request: PutV1EmployeesEmployeeIdFederalTaxesRequest;
  options?: RequestOptions;
};

export type EmployeeTaxSetupUpdateFederalTaxesMutationData =
  PutV1EmployeesEmployeeIdFederalTaxesResponse;

/**
 * Update an employee's federal taxes
 *
 * @remarks
 * Update attributes relevant for an employee's federal taxes.
 *
 * scope: `employee_federal_taxes:write`
 */
export function useEmployeeTaxSetupUpdateFederalTaxesMutation(
  options?: MutationHookOptions<
    EmployeeTaxSetupUpdateFederalTaxesMutationData,
    Error,
    EmployeeTaxSetupUpdateFederalTaxesMutationVariables
  >,
): UseMutationResult<
  EmployeeTaxSetupUpdateFederalTaxesMutationData,
  Error,
  EmployeeTaxSetupUpdateFederalTaxesMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeTaxSetupUpdateFederalTaxesMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeTaxSetupUpdateFederalTaxes(): MutationKey {
  return ["@gusto/embedded-api", "employeeTaxSetup", "updateFederalTaxes"];
}

export function buildEmployeeTaxSetupUpdateFederalTaxesMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeTaxSetupUpdateFederalTaxesMutationVariables,
  ) => Promise<EmployeeTaxSetupUpdateFederalTaxesMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeTaxSetupUpdateFederalTaxes(),
    mutationFn: function employeeTaxSetupUpdateFederalTaxesMutationFn({
      request,
      options,
    }): Promise<EmployeeTaxSetupUpdateFederalTaxesMutationData> {
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
      return unwrapAsync(employeeTaxSetupUpdateFederalTaxes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
