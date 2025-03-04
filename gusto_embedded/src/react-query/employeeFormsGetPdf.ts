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
import { employeeFormsGetPdf } from "../funcs/employeeFormsGetPdf.js";
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

export type EmployeeFormsGetPdfQueryData =
  operations.GetV1EmployeeFormPdfResponse;

/**
 * Get the employee form pdf
 *
 * @remarks
 * Get the link to the employee form PDF
 *
 * scope: `employee_forms:read`
 */
export function useEmployeeFormsGetPdf(
  request: operations.GetV1EmployeeFormPdfRequest,
  options?: QueryHookOptions<EmployeeFormsGetPdfQueryData>,
): UseQueryResult<EmployeeFormsGetPdfQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeFormsGetPdfQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get the employee form pdf
 *
 * @remarks
 * Get the link to the employee form PDF
 *
 * scope: `employee_forms:read`
 */
export function useEmployeeFormsGetPdfSuspense(
  request: operations.GetV1EmployeeFormPdfRequest,
  options?: SuspenseQueryHookOptions<EmployeeFormsGetPdfQueryData>,
): UseSuspenseQueryResult<EmployeeFormsGetPdfQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeFormsGetPdfQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeFormsGetPdf(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeeFormPdfRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeFormsGetPdfQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeFormsGetPdfData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: EmployeeFormsGetPdfQueryData,
): EmployeeFormsGetPdfQueryData | undefined {
  const key = queryKeyEmployeeFormsGetPdf(...queryKeyBase);

  return client.setQueryData<EmployeeFormsGetPdfQueryData>(key, data);
}

export function invalidateEmployeeFormsGetPdf(
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
      "getPdf",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeFormsGetPdf(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeForms", "getPdf"],
  });
}

export function buildEmployeeFormsGetPdfQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeeFormPdfRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeFormsGetPdfQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeFormsGetPdf(request.employeeId, request.formId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeFormsGetPdfQueryFn(
      ctx,
    ): Promise<EmployeeFormsGetPdfQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeFormsGetPdf(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeFormsGetPdf(
  employeeId: string,
  formId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeForms",
    "getPdf",
    employeeId,
    formId,
    parameters,
  ];
}
