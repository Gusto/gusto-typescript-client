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
import { timeOffPoliciesGetAll } from "../funcs/timeOffPoliciesGetAll.js";
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

export type TimeOffPoliciesGetAllQueryData =
  operations.GetCompaniesCompanyUuidTimeOffPoliciesResponse;

/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export function useTimeOffPoliciesGetAll(
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: QueryHookOptions<TimeOffPoliciesGetAllQueryData>,
): UseQueryResult<TimeOffPoliciesGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildTimeOffPoliciesGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export function useTimeOffPoliciesGetAllSuspense(
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: SuspenseQueryHookOptions<TimeOffPoliciesGetAllQueryData>,
): UseSuspenseQueryResult<TimeOffPoliciesGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildTimeOffPoliciesGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchTimeOffPoliciesGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildTimeOffPoliciesGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setTimeOffPoliciesGetAllData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: TimeOffPoliciesGetAllQueryData,
): TimeOffPoliciesGetAllQueryData | undefined {
  const key = queryKeyTimeOffPoliciesGetAll(...queryKeyBase);

  return client.setQueryData<TimeOffPoliciesGetAllQueryData>(key, data);
}

export function invalidateTimeOffPoliciesGetAll(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "timeOffPolicies",
      "getAll",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllTimeOffPoliciesGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "timeOffPolicies", "getAll"],
  });
}

export function buildTimeOffPoliciesGetAllQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<TimeOffPoliciesGetAllQueryData>;
} {
  return {
    queryKey: queryKeyTimeOffPoliciesGetAll(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function timeOffPoliciesGetAllQueryFn(
      ctx,
    ): Promise<TimeOffPoliciesGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(timeOffPoliciesGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyTimeOffPoliciesGetAll(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "timeOffPolicies",
    "getAll",
    companyUuid,
    parameters,
  ];
}
