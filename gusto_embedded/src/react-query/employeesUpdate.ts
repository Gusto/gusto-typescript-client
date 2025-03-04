/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeesUpdate } from "../funcs/employeesUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeesUpdateMutationVariables = {
  request: operations.PutV1EmployeesRequest;
  options?: RequestOptions;
};

export type EmployeesUpdateMutationData = operations.PutV1EmployeesResponse;

/**
 * Update an employee
 *
 * @remarks
 * Update an employee.
 *
 * scope: `employees:write`
 */
export function useEmployeesUpdateMutation(
  options?: MutationHookOptions<
    EmployeesUpdateMutationData,
    Error,
    EmployeesUpdateMutationVariables
  >,
): UseMutationResult<
  EmployeesUpdateMutationData,
  Error,
  EmployeesUpdateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeesUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeesUpdate(): MutationKey {
  return ["@gusto/embedded-api", "Employees", "update"];
}

export function buildEmployeesUpdateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeesUpdateMutationVariables,
  ) => Promise<EmployeesUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeesUpdate(),
    mutationFn: function employeesUpdateMutationFn({
      request,
      options,
    }): Promise<EmployeesUpdateMutationData> {
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
      return unwrapAsync(employeesUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
