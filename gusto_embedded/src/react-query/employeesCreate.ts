/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeesCreate } from "../funcs/employeesCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeesCreateMutationVariables = {
  request: operations.PostV1EmployeesRequest;
  options?: RequestOptions;
};

export type EmployeesCreateMutationData = components.Employee;

/**
 * Create an employee
 *
 * @remarks
 * Create an employee.
 *
 * scope: `employees:manage`
 */
export function useEmployeesCreateMutation(
  options?: MutationHookOptions<
    EmployeesCreateMutationData,
    Error,
    EmployeesCreateMutationVariables
  >,
): UseMutationResult<
  EmployeesCreateMutationData,
  Error,
  EmployeesCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeesCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeesCreate(): MutationKey {
  return ["@gusto/embedded-api", "Employees", "create"];
}

export function buildEmployeesCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeesCreateMutationVariables,
  ) => Promise<EmployeesCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeesCreate(),
    mutationFn: function employeesCreateMutationFn({
      request,
      options,
    }): Promise<EmployeesCreateMutationData> {
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
      return unwrapAsync(employeesCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
