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
import { wireInRequestsGet } from "../funcs/wireInRequestsGet.js";
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

export type WireInRequestsGetQueryData =
  operations.GetWireInRequestsWireInRequestUuidResponse;

/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export function useWireInRequestsGet(
  request: operations.GetWireInRequestsWireInRequestUuidRequest,
  options?: QueryHookOptions<WireInRequestsGetQueryData>,
): UseQueryResult<WireInRequestsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildWireInRequestsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export function useWireInRequestsGetSuspense(
  request: operations.GetWireInRequestsWireInRequestUuidRequest,
  options?: SuspenseQueryHookOptions<WireInRequestsGetQueryData>,
): UseSuspenseQueryResult<WireInRequestsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildWireInRequestsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWireInRequestsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetWireInRequestsWireInRequestUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWireInRequestsGetQuery(
      client$,
      request,
    ),
  });
}

export function setWireInRequestsGetData(
  client: QueryClient,
  queryKeyBase: [
    wireInRequestUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: WireInRequestsGetQueryData,
): WireInRequestsGetQueryData | undefined {
  const key = queryKeyWireInRequestsGet(...queryKeyBase);

  return client.setQueryData<WireInRequestsGetQueryData>(key, data);
}

export function invalidateWireInRequestsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      wireInRequestUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "wireInRequests", "get", ...queryKeyBase],
  });
}

export function invalidateAllWireInRequestsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "wireInRequests", "get"],
  });
}

export function buildWireInRequestsGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetWireInRequestsWireInRequestUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<WireInRequestsGetQueryData>;
} {
  return {
    queryKey: queryKeyWireInRequestsGet(request.wireInRequestUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function wireInRequestsGetQueryFn(
      ctx,
    ): Promise<WireInRequestsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(wireInRequestsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWireInRequestsGet(
  wireInRequestUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "wireInRequests",
    "get",
    wireInRequestUuid,
    parameters,
  ];
}
