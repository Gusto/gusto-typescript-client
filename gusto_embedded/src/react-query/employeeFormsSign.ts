/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeFormsSign } from "../funcs/employeeFormsSign.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type EmployeeFormsSignMutationVariables = {
  request: operations.PutV1EmployeeFormSignRequest;
  options?: RequestOptions;
};

export type EmployeeFormsSignMutationData = components.Form;

/**
 * Sign an employee form
 *
 * @remarks
 * Sign an employee form.
 *
 * The optional preparer attributes are only valid for I-9 form. When a preparer is used, the
 * first name, last name, street address, city, state, and zip for that preparer are all required.
 *
 * scope: `employee_forms:sign`
 */
export function useEmployeeFormsSignMutation(
  options?: MutationHookOptions<
    EmployeeFormsSignMutationData,
    Error,
    EmployeeFormsSignMutationVariables
  >,
): UseMutationResult<
  EmployeeFormsSignMutationData,
  Error,
  EmployeeFormsSignMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildEmployeeFormsSignMutation(client, options),
    ...options,
  });
}

export function mutationKeyEmployeeFormsSign(): MutationKey {
  return ["@gusto/embedded-api", "employeeForms", "sign"];
}

export function buildEmployeeFormsSignMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: EmployeeFormsSignMutationVariables,
  ) => Promise<EmployeeFormsSignMutationData>;
} {
  return {
    mutationKey: mutationKeyEmployeeFormsSign(),
    mutationFn: function employeeFormsSignMutationFn({
      request,
      options,
    }): Promise<EmployeeFormsSignMutationData> {
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
      return unwrapAsync(employeeFormsSign(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
