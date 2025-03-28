/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeesCreateHistorical } from "../funcs/employeesCreateHistorical.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1HistoricalEmployeesRequest,
  PostV1HistoricalEmployeesResponse,
} from "../models/operations/postv1historicalemployees.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeesCreateHistoricalMutationVariables = {
  request: PostV1HistoricalEmployeesRequest;
  options?: RequestOptions;
};

export type EmployeesCreateHistoricalMutationData =
  PostV1HistoricalEmployeesResponse;

/**
 * Create a historical employee
 *
 * @remarks
 * Create a historical employee, an employee that was previously dismissed from the company in the current year.
 *
 * scope: `employees:manage`
 */
export function useEmployeesCreateHistoricalMutation(
  options?: MutationHookOptions<
    EmployeesCreateHistoricalMutationData,
    Error,
    EmployeesCreateHistoricalMutationVariables
  >,
): UseMutationResult<
  EmployeesCreateHistoricalMutationData,
  Error,
  EmployeesCreateHistoricalMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeesCreateHistoricalMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeesCreateHistorical(): MutationKey {
  return ["@gusto/embedded-api", "Employees", "createHistorical"];
}

export function buildEmployeesCreateHistoricalMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeesCreateHistoricalMutationVariables,
  ) => Promise<EmployeesCreateHistoricalMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeesCreateHistorical(),
    mutationFn: function employeesCreateHistoricalMutationFn({
      request,
      options,
    }): Promise<EmployeesCreateHistoricalMutationData> {
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
      return unwrapAsync(employeesCreateHistorical(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
