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
import { employeesRetrieve } from "../funcs/employeesRetrieve.js";
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

export type EmployeesRetrieveQueryData = components.Employee;

/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export function useEmployeesRetrieve(
  request: operations.GetV1EmployeesRequest,
  options?: QueryHookOptions<EmployeesRetrieveQueryData>,
): UseQueryResult<EmployeesRetrieveQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeesRetrieveQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee
 *
 * @remarks
 * Get an employee.
 *
 * scope: `employees:read`
 */
export function useEmployeesRetrieveSuspense(
  request: operations.GetV1EmployeesRequest,
  options?: SuspenseQueryHookOptions<EmployeesRetrieveQueryData>,
): UseSuspenseQueryResult<EmployeesRetrieveQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeesRetrieveQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeesRetrieve(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeesRetrieveQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeesRetrieveData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: {
      include?: Array<operations.QueryParamInclude> | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: EmployeesRetrieveQueryData,
): EmployeesRetrieveQueryData | undefined {
  const key = queryKeyEmployeesRetrieve(...queryKeyBase);

  return client.setQueryData<EmployeesRetrieveQueryData>(key, data);
}

export function invalidateEmployeesRetrieve(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: {
        include?: Array<operations.QueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "retrieve", ...queryKeyBase],
  });
}

export function invalidateAllEmployeesRetrieve(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "retrieve"],
  });
}

export function buildEmployeesRetrieveQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeesRetrieveQueryData>;
} {
  return {
    queryKey: queryKeyEmployeesRetrieve(request.employeeId, {
      include: request.include,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeesRetrieveQueryFn(
      ctx,
    ): Promise<EmployeesRetrieveQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeesRetrieve(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeesRetrieve(
  employeeId: string,
  parameters: {
    include?: Array<operations.QueryParamInclude> | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Employees",
    "retrieve",
    employeeId,
    parameters,
  ];
}
