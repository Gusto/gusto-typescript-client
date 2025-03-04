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
import { employeesGetTimeOffActivities } from "../funcs/employeesGetTimeOffActivities.js";
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

export type EmployeesGetTimeOffActivitiesQueryData =
  operations.GetVersionEmployeesTimeOffActivitiesResponse;

/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export function useEmployeesGetTimeOffActivities(
  request: operations.GetVersionEmployeesTimeOffActivitiesRequest,
  options?: QueryHookOptions<EmployeesGetTimeOffActivitiesQueryData>,
): UseQueryResult<EmployeesGetTimeOffActivitiesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeesGetTimeOffActivitiesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get employee time off activities
 *
 * @remarks
 * Get employee time off activities.
 *
 * scope: `employee_time_off_activities:read`
 */
export function useEmployeesGetTimeOffActivitiesSuspense(
  request: operations.GetVersionEmployeesTimeOffActivitiesRequest,
  options?: SuspenseQueryHookOptions<EmployeesGetTimeOffActivitiesQueryData>,
): UseSuspenseQueryResult<EmployeesGetTimeOffActivitiesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeesGetTimeOffActivitiesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeesGetTimeOffActivities(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetVersionEmployeesTimeOffActivitiesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeesGetTimeOffActivitiesQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeesGetTimeOffActivitiesData(
  client: QueryClient,
  queryKeyBase: [
    employeeUuid: string,
    parameters: {
      timeOffType: string;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: EmployeesGetTimeOffActivitiesQueryData,
): EmployeesGetTimeOffActivitiesQueryData | undefined {
  const key = queryKeyEmployeesGetTimeOffActivities(...queryKeyBase);

  return client.setQueryData<EmployeesGetTimeOffActivitiesQueryData>(key, data);
}

export function invalidateEmployeesGetTimeOffActivities(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeUuid: string,
      parameters: {
        timeOffType: string;
        xGustoAPIVersion?: components.VersionHeader | undefined;
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
      "getTimeOffActivities",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeesGetTimeOffActivities(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "getTimeOffActivities"],
  });
}

export function buildEmployeesGetTimeOffActivitiesQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetVersionEmployeesTimeOffActivitiesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeesGetTimeOffActivitiesQueryData>;
} {
  return {
    queryKey: queryKeyEmployeesGetTimeOffActivities(request.employeeUuid, {
      timeOffType: request.timeOffType,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeesGetTimeOffActivitiesQueryFn(
      ctx,
    ): Promise<EmployeesGetTimeOffActivitiesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeesGetTimeOffActivities(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeesGetTimeOffActivities(
  employeeUuid: string,
  parameters: {
    timeOffType: string;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Employees",
    "getTimeOffActivities",
    employeeUuid,
    parameters,
  ];
}
