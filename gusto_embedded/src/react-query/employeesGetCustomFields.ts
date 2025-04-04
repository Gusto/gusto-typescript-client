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
import { employeesGetCustomFields } from "../funcs/employeesGetCustomFields.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1EmployeesEmployeeIdCustomFieldsRequest,
  GetV1EmployeesEmployeeIdCustomFieldsResponse,
} from "../models/operations/getv1employeesemployeeidcustomfields.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type EmployeesGetCustomFieldsQueryData =
  GetV1EmployeesEmployeeIdCustomFieldsResponse;

/**
 * Get an employee's custom fields
 *
 * @remarks
 * Returns a list of the employee's custom fields.
 *
 * scope: `employees:read`
 */
export function useEmployeesGetCustomFields(
  request: GetV1EmployeesEmployeeIdCustomFieldsRequest,
  options?: QueryHookOptions<EmployeesGetCustomFieldsQueryData>,
): UseQueryResult<EmployeesGetCustomFieldsQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeesGetCustomFieldsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee's custom fields
 *
 * @remarks
 * Returns a list of the employee's custom fields.
 *
 * scope: `employees:read`
 */
export function useEmployeesGetCustomFieldsSuspense(
  request: GetV1EmployeesEmployeeIdCustomFieldsRequest,
  options?: SuspenseQueryHookOptions<EmployeesGetCustomFieldsQueryData>,
): UseSuspenseQueryResult<EmployeesGetCustomFieldsQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeesGetCustomFieldsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeesGetCustomFields(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdCustomFieldsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeesGetCustomFieldsQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeesGetCustomFieldsData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: {
      page?: number | undefined;
      per?: number | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: EmployeesGetCustomFieldsQueryData,
): EmployeesGetCustomFieldsQueryData | undefined {
  const key = queryKeyEmployeesGetCustomFields(...queryKeyBase);

  return client.setQueryData<EmployeesGetCustomFieldsQueryData>(key, data);
}

export function invalidateEmployeesGetCustomFields(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "Employees",
      "getCustomFields",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeesGetCustomFields(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "getCustomFields"],
  });
}

export function buildEmployeesGetCustomFieldsQuery(
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdCustomFieldsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeesGetCustomFieldsQueryData>;
} {
  return {
    queryKey: queryKeyEmployeesGetCustomFields(request.employeeId, {
      page: request.page,
      per: request.per,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeesGetCustomFieldsQueryFn(
      ctx,
    ): Promise<EmployeesGetCustomFieldsQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeesGetCustomFields(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeesGetCustomFields(
  employeeId: string,
  parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Employees",
    "getCustomFields",
    employeeId,
    parameters,
  ];
}
