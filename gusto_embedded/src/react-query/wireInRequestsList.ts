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
import { wireInRequestsList } from "../funcs/wireInRequestsList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetCompaniesCompanyUuidWireInRequestUuidRequest,
  GetCompaniesCompanyUuidWireInRequestUuidResponse,
} from "../models/operations/getcompaniescompanyuuidwireinrequestuuid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type WireInRequestsListQueryData =
  GetCompaniesCompanyUuidWireInRequestUuidResponse;

/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export function useWireInRequestsList(
  request: GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: QueryHookOptions<WireInRequestsListQueryData>,
): UseQueryResult<WireInRequestsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildWireInRequestsListQuery(
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
export function useWireInRequestsListSuspense(
  request: GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: SuspenseQueryHookOptions<WireInRequestsListQueryData>,
): UseSuspenseQueryResult<WireInRequestsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildWireInRequestsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchWireInRequestsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetCompaniesCompanyUuidWireInRequestUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildWireInRequestsListQuery(
      client$,
      request,
    ),
  });
}

export function setWireInRequestsListData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: WireInRequestsListQueryData,
): WireInRequestsListQueryData | undefined {
  const key = queryKeyWireInRequestsList(...queryKeyBase);

  return client.setQueryData<WireInRequestsListQueryData>(key, data);
}

export function invalidateWireInRequestsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "wireInRequests",
      "list",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllWireInRequestsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "wireInRequests", "list"],
  });
}

export function buildWireInRequestsListQuery(
  client$: GustoEmbeddedCore,
  request: GetCompaniesCompanyUuidWireInRequestUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<WireInRequestsListQueryData>;
} {
  return {
    queryKey: queryKeyWireInRequestsList(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function wireInRequestsListQueryFn(
      ctx,
    ): Promise<WireInRequestsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(wireInRequestsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyWireInRequestsList(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "wireInRequests",
    "list",
    companyUuid,
    parameters,
  ];
}
