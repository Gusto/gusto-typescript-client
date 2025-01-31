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
import { industrySelectionGet } from "../funcs/industrySelectionGet.js";
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

export type IndustrySelectionGetQueryData = components.Industry;

/**
 * Get a company industry selection
 *
 * @remarks
 * Get industry selection for the company.
 *
 * scope: `companies:read`
 */
export function useIndustrySelectionGet(
  request: operations.GetV1CompanyIndustryRequest,
  options?: QueryHookOptions<IndustrySelectionGetQueryData>,
): UseQueryResult<IndustrySelectionGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildIndustrySelectionGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a company industry selection
 *
 * @remarks
 * Get industry selection for the company.
 *
 * scope: `companies:read`
 */
export function useIndustrySelectionGetSuspense(
  request: operations.GetV1CompanyIndustryRequest,
  options?: SuspenseQueryHookOptions<IndustrySelectionGetQueryData>,
): UseSuspenseQueryResult<IndustrySelectionGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildIndustrySelectionGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchIndustrySelectionGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompanyIndustryRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildIndustrySelectionGetQuery(
      client$,
      request,
    ),
  });
}

export function setIndustrySelectionGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: IndustrySelectionGetQueryData,
): IndustrySelectionGetQueryData | undefined {
  const key = queryKeyIndustrySelectionGet(...queryKeyBase);

  return client.setQueryData<IndustrySelectionGetQueryData>(key, data);
}

export function invalidateIndustrySelectionGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "industrySelection",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllIndustrySelectionGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "industrySelection", "get"],
  });
}

export function buildIndustrySelectionGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompanyIndustryRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<IndustrySelectionGetQueryData>;
} {
  return {
    queryKey: queryKeyIndustrySelectionGet(request.companyId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function industrySelectionGetQueryFn(
      ctx,
    ): Promise<IndustrySelectionGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(industrySelectionGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyIndustrySelectionGet(
  companyId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "industrySelection",
    "get",
    companyId,
    parameters,
  ];
}
