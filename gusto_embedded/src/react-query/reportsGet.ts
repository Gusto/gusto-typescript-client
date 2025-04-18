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
import { reportsGet } from "../funcs/reportsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetReportsReportUuidRequest,
  GetReportsReportUuidResponse,
} from "../models/operations/getreportsreportuuid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ReportsGetQueryData = GetReportsReportUuidResponse;

/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * scope: `company_reports:read`
 */
export function useReportsGet(
  request: GetReportsReportUuidRequest,
  options?: QueryHookOptions<ReportsGetQueryData>,
): UseQueryResult<ReportsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildReportsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * scope: `company_reports:read`
 */
export function useReportsGetSuspense(
  request: GetReportsReportUuidRequest,
  options?: SuspenseQueryHookOptions<ReportsGetQueryData>,
): UseSuspenseQueryResult<ReportsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildReportsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchReportsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetReportsReportUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildReportsGetQuery(
      client$,
      request,
    ),
  });
}

export function setReportsGetData(
  client: QueryClient,
  queryKeyBase: [
    reportUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ReportsGetQueryData,
): ReportsGetQueryData | undefined {
  const key = queryKeyReportsGet(...queryKeyBase);

  return client.setQueryData<ReportsGetQueryData>(key, data);
}

export function invalidateReportsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      reportUuid: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Reports", "get", ...queryKeyBase],
  });
}

export function invalidateAllReportsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Reports", "get"],
  });
}

export function buildReportsGetQuery(
  client$: GustoEmbeddedCore,
  request: GetReportsReportUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<ReportsGetQueryData>;
} {
  return {
    queryKey: queryKeyReportsGet(request.reportUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function reportsGetQueryFn(
      ctx,
    ): Promise<ReportsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(reportsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyReportsGet(
  reportUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return ["@gusto/embedded-api", "Reports", "get", reportUuid, parameters];
}
