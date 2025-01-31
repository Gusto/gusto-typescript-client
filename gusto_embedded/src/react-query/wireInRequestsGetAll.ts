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
import { wireInRequestsGetAll } from "../funcs/wireInRequestsGetAll.js";
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

export type WireInRequestsGetAllQueryData = Array<components.WireInRequest>;

/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export function useWireInRequestsGetAll(
  request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: QueryHookOptions<WireInRequestsGetAllQueryData>,
): UseQueryResult<WireInRequestsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildWireInRequestsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export function useWireInRequestsGetAllSuspense(
  request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: SuspenseQueryHookOptions<WireInRequestsGetAllQueryData>,
): UseSuspenseQueryResult<WireInRequestsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildWireInRequestsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWireInRequestsGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWireInRequestsGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setWireInRequestsGetAllData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: WireInRequestsGetAllQueryData,
): WireInRequestsGetAllQueryData | undefined {
  const key = queryKeyWireInRequestsGetAll(...queryKeyBase);

  return client.setQueryData<WireInRequestsGetAllQueryData>(key, data);
}

export function invalidateWireInRequestsGetAll(
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
      "wireInRequests",
      "getAll",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllWireInRequestsGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "wireInRequests", "getAll"],
  });
}

export function buildWireInRequestsGetAllQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<WireInRequestsGetAllQueryData>;
} {
  return {
    queryKey: queryKeyWireInRequestsGetAll(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function wireInRequestsGetAllQueryFn(
      ctx,
    ): Promise<WireInRequestsGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(wireInRequestsGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWireInRequestsGetAll(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "wireInRequests",
    "getAll",
    companyUuid,
    parameters,
  ];
}
