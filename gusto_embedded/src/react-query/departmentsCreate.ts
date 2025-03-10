/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { departmentsCreate } from "../funcs/departmentsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostDepartmentsRequest,
  PostDepartmentsResponse,
} from "../models/operations/postdepartments.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type DepartmentsCreateMutationVariables = {
  request: PostDepartmentsRequest;
  options?: RequestOptions;
};

export type DepartmentsCreateMutationData = PostDepartmentsResponse;

/**
 * Create a department
 *
 * @remarks
 * Create a department
 *
 * scope: `departments:write`
 */
export function useDepartmentsCreateMutation(
  options?: MutationHookOptions<
    DepartmentsCreateMutationData,
    Error,
    DepartmentsCreateMutationVariables
  >,
): UseMutationResult<
  DepartmentsCreateMutationData,
  Error,
  DepartmentsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildDepartmentsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyDepartmentsCreate(): MutationKey {
  return ["@gusto/embedded-api", "Departments", "create"];
}

export function buildDepartmentsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: DepartmentsCreateMutationVariables,
  ) => Promise<DepartmentsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyDepartmentsCreate(),
    mutationFn: function departmentsCreateMutationFn({
      request,
      options,
    }): Promise<DepartmentsCreateMutationData> {
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
      return unwrapAsync(departmentsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
