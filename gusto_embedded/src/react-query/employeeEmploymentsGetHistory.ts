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
import { employeeEmploymentsGetHistory } from "../funcs/employeeEmploymentsGetHistory.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1EmployeesEmployeeIdEmploymentHistoryHeaderXGustoAPIVersion,
  GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
  GetV1EmployeesEmployeeIdEmploymentHistoryResponse,
} from "../models/operations/getv1employeesemployeeidemploymenthistory.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type EmployeeEmploymentsGetHistoryQueryData =
  GetV1EmployeesEmployeeIdEmploymentHistoryResponse;

/**
 * Get employment history for an employee
 *
 * @remarks
 * Retrieve the employment history for a given employee, which includes termination and rehire.
 *
 * scope: `employments:read`
 */
export function useEmployeeEmploymentsGetHistory(
  request: GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
  options?: QueryHookOptions<EmployeeEmploymentsGetHistoryQueryData>,
): UseQueryResult<EmployeeEmploymentsGetHistoryQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeEmploymentsGetHistoryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get employment history for an employee
 *
 * @remarks
 * Retrieve the employment history for a given employee, which includes termination and rehire.
 *
 * scope: `employments:read`
 */
export function useEmployeeEmploymentsGetHistorySuspense(
  request: GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
  options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetHistoryQueryData>,
): UseSuspenseQueryResult<EmployeeEmploymentsGetHistoryQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeEmploymentsGetHistoryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeEmploymentsGetHistory(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeEmploymentsGetHistoryQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeEmploymentsGetHistoryData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: {
      xGustoAPIVersion?:
        | GetV1EmployeesEmployeeIdEmploymentHistoryHeaderXGustoAPIVersion
        | undefined;
    },
  ],
  data: EmployeeEmploymentsGetHistoryQueryData,
): EmployeeEmploymentsGetHistoryQueryData | undefined {
  const key = queryKeyEmployeeEmploymentsGetHistory(...queryKeyBase);

  return client.setQueryData<EmployeeEmploymentsGetHistoryQueryData>(key, data);
}

export function invalidateEmployeeEmploymentsGetHistory(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: {
        xGustoAPIVersion?:
          | GetV1EmployeesEmployeeIdEmploymentHistoryHeaderXGustoAPIVersion
          | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "employeeEmployments",
      "getHistory",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeEmploymentsGetHistory(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeEmployments", "getHistory"],
  });
}

export function buildEmployeeEmploymentsGetHistoryQuery(
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeEmploymentsGetHistoryQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeEmploymentsGetHistory(request.employeeId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeEmploymentsGetHistoryQueryFn(
      ctx,
    ): Promise<EmployeeEmploymentsGetHistoryQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeEmploymentsGetHistory(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeEmploymentsGetHistory(
  employeeId: string,
  parameters: {
    xGustoAPIVersion?:
      | GetV1EmployeesEmployeeIdEmploymentHistoryHeaderXGustoAPIVersion
      | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeEmployments",
    "getHistory",
    employeeId,
    parameters,
  ];
}
