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
import { timeOffPoliciesGet } from "../funcs/timeOffPoliciesGet.js";
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

export type TimeOffPoliciesGetQueryData = Array<components.TimeOffPolicy>;

/**
 * Get all time off policies
 *
 * @remarks
 * Get all time off policies for a company
 *
 * scope: `time_off_policies:read`
 */
export function useTimeOffPoliciesGet(
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: QueryHookOptions<TimeOffPoliciesGetQueryData>,
): UseQueryResult<TimeOffPoliciesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildTimeOffPoliciesGetQuery(
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
export function useTimeOffPoliciesGetSuspense(
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: SuspenseQueryHookOptions<TimeOffPoliciesGetQueryData>,
): UseSuspenseQueryResult<TimeOffPoliciesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildTimeOffPoliciesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchTimeOffPoliciesGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildTimeOffPoliciesGetQuery(
      client$,
      request,
    ),
  });
}

export function setTimeOffPoliciesGetData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: TimeOffPoliciesGetQueryData,
): TimeOffPoliciesGetQueryData | undefined {
  const key = queryKeyTimeOffPoliciesGet(...queryKeyBase);

  return client.setQueryData<TimeOffPoliciesGetQueryData>(key, data);
}

export function invalidateTimeOffPoliciesGet(
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
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllTimeOffPoliciesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "timeOffPolicies", "get"],
  });
}

export function buildTimeOffPoliciesGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<TimeOffPoliciesGetQueryData>;
} {
  return {
    queryKey: queryKeyTimeOffPoliciesGet(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function timeOffPoliciesGetQueryFn(
      ctx,
    ): Promise<TimeOffPoliciesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(timeOffPoliciesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyTimeOffPoliciesGet(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "timeOffPolicies",
    "get",
    companyUuid,
    parameters,
  ];
}
