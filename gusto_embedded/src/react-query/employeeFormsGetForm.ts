/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  InvalidateQueryFilters,
  QueryClient,
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryResult,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { employeeFormsGetForm } from "../funcs/employeeFormsGetForm.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type EmployeeFormsGetFormQueryData = components.Form;

/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export function useEmployeeFormsGetForm(
  request: operations.GetV1EmployeeFormRequest,
  options?: QueryHookOptions<EmployeeFormsGetFormQueryData>,
): UseQueryResult<EmployeeFormsGetFormQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeFormsGetFormQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export function useEmployeeFormsGetFormSuspense(
  request: operations.GetV1EmployeeFormRequest,
  options?: SuspenseQueryHookOptions<EmployeeFormsGetFormQueryData>,
): UseSuspenseQueryResult<EmployeeFormsGetFormQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeFormsGetFormQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeFormsGetForm(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeeFormRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeFormsGetFormQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeFormsGetFormData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: EmployeeFormsGetFormQueryData,
): EmployeeFormsGetFormQueryData | undefined {
  const key = queryKeyEmployeeFormsGetForm(...queryKeyBase);

  return client.setQueryData<EmployeeFormsGetFormQueryData>(key, data);
}

export function invalidateEmployeeFormsGetForm(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      formId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "employeeForms",
      "getForm",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeFormsGetForm(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeForms", "getForm"],
  });
}

export function buildEmployeeFormsGetFormQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeeFormRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeFormsGetFormQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeFormsGetForm(request.employeeId, request.formId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeFormsGetFormQueryFn(
      ctx,
    ): Promise<EmployeeFormsGetFormQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeFormsGetForm(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeFormsGetForm(
  employeeId: string,
  formId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeForms",
    "getForm",
    employeeId,
    formId,
    parameters,
  ];
}
