/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeEmploymentsUpdateTermination } from "../funcs/employeeEmploymentsUpdateTermination.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeEmploymentsUpdateTerminationMutationVariables = {
  request: operations.PutV1TerminationsEmployeeIdRequest;
  options?: RequestOptions;
};

export type EmployeeEmploymentsUpdateTerminationMutationData =
  operations.PutV1TerminationsEmployeeIdResponse;

/**
 * Update an employee termination
 *
 * @remarks
 * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
 *
 * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
 *
 * scope: `employments:write`
 */
export function useEmployeeEmploymentsUpdateTerminationMutation(
  options?: MutationHookOptions<
    EmployeeEmploymentsUpdateTerminationMutationData,
    Error,
    EmployeeEmploymentsUpdateTerminationMutationVariables
  >,
): UseMutationResult<
  EmployeeEmploymentsUpdateTerminationMutationData,
  Error,
  EmployeeEmploymentsUpdateTerminationMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeEmploymentsUpdateTerminationMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeEmploymentsUpdateTermination(): MutationKey {
  return ["@gusto/embedded-api", "employeeEmployments", "updateTermination"];
}

export function buildEmployeeEmploymentsUpdateTerminationMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeEmploymentsUpdateTerminationMutationVariables,
  ) => Promise<EmployeeEmploymentsUpdateTerminationMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeEmploymentsUpdateTermination(),
    mutationFn: function employeeEmploymentsUpdateTerminationMutationFn({
      request,
      options,
    }): Promise<EmployeeEmploymentsUpdateTerminationMutationData> {
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
      return unwrapAsync(employeeEmploymentsUpdateTermination(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
