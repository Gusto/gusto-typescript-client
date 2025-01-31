/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { departmentsRemovePeople } from "../funcs/departmentsRemovePeople.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type DepartmentsRemovePeopleMutationVariables = {
  request: operations.PutRemovePeopleFromDepartmentRequest;
  options?: RequestOptions;
};

export type DepartmentsRemovePeopleMutationData = components.Department;

/**
 * Remove people from a department
 *
 * @remarks
 * Remove employees and contractors from a department
 *
 * scope: `departments:write`
 */
export function useDepartmentsRemovePeopleMutation(
  options?: MutationHookOptions<
    DepartmentsRemovePeopleMutationData,
    Error,
    DepartmentsRemovePeopleMutationVariables
  >,
): UseMutationResult<
  DepartmentsRemovePeopleMutationData,
  Error,
  DepartmentsRemovePeopleMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildDepartmentsRemovePeopleMutation(client, options),
    ...options,
  });
}

export function mutationKeyDepartmentsRemovePeople(): MutationKey {
  return ["@gusto/embedded-api", "Departments", "removePeople"];
}

export function buildDepartmentsRemovePeopleMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: DepartmentsRemovePeopleMutationVariables,
  ) => Promise<DepartmentsRemovePeopleMutationData>;
} {
  return {
    mutationKey: mutationKeyDepartmentsRemovePeople(),
    mutationFn: function departmentsRemovePeopleMutationFn({
      request,
      options,
    }): Promise<DepartmentsRemovePeopleMutationData> {
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
      return unwrapAsync(departmentsRemovePeople(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
