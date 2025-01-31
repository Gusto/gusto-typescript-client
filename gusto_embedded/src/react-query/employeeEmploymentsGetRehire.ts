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
import { employeeEmploymentsGetRehire } from "../funcs/employeeEmploymentsGetRehire.js";
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

export type EmployeeEmploymentsGetRehireQueryData = components.Rehire;

/**
 * Get an employee rehire
 *
 * @remarks
 * Retrieve an employee's rehire, which contains information on when the employee returns to work.
 *
 * scope: `employments:read`
 */
export function useEmployeeEmploymentsGetRehire(
  request: operations.GetV1EmployeesEmployeeIdRehireRequest,
  options?: QueryHookOptions<EmployeeEmploymentsGetRehireQueryData>,
): UseQueryResult<EmployeeEmploymentsGetRehireQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeEmploymentsGetRehireQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee rehire
 *
 * @remarks
 * Retrieve an employee's rehire, which contains information on when the employee returns to work.
 *
 * scope: `employments:read`
 */
export function useEmployeeEmploymentsGetRehireSuspense(
  request: operations.GetV1EmployeesEmployeeIdRehireRequest,
  options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetRehireQueryData>,
): UseSuspenseQueryResult<EmployeeEmploymentsGetRehireQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeEmploymentsGetRehireQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeEmploymentsGetRehire(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdRehireRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeEmploymentsGetRehireQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeEmploymentsGetRehireData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: EmployeeEmploymentsGetRehireQueryData,
): EmployeeEmploymentsGetRehireQueryData | undefined {
  const key = queryKeyEmployeeEmploymentsGetRehire(...queryKeyBase);

  return client.setQueryData<EmployeeEmploymentsGetRehireQueryData>(key, data);
}

export function invalidateEmployeeEmploymentsGetRehire(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "employeeEmployments",
      "getRehire",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeEmploymentsGetRehire(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeEmployments", "getRehire"],
  });
}

export function buildEmployeeEmploymentsGetRehireQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdRehireRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeEmploymentsGetRehireQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeEmploymentsGetRehire(request.employeeId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeEmploymentsGetRehireQueryFn(
      ctx,
    ): Promise<EmployeeEmploymentsGetRehireQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeEmploymentsGetRehire(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeEmploymentsGetRehire(
  employeeId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeEmployments",
    "getRehire",
    employeeId,
    parameters,
  ];
}
