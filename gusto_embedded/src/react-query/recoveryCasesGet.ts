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
import { recoveryCasesGet } from "../funcs/recoveryCasesGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetRecoveryCasesRequest,
  GetRecoveryCasesResponse,
} from "../models/operations/getrecoverycases.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type RecoveryCasesGetQueryData = GetRecoveryCasesResponse;

/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export function useRecoveryCasesGet(
  request: GetRecoveryCasesRequest,
  options?: QueryHookOptions<RecoveryCasesGetQueryData>,
): UseQueryResult<RecoveryCasesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildRecoveryCasesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export function useRecoveryCasesGetSuspense(
  request: GetRecoveryCasesRequest,
  options?: SuspenseQueryHookOptions<RecoveryCasesGetQueryData>,
): UseSuspenseQueryResult<RecoveryCasesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildRecoveryCasesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchRecoveryCasesGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetRecoveryCasesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildRecoveryCasesGetQuery(
      client$,
      request,
    ),
  });
}

export function setRecoveryCasesGetData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: RecoveryCasesGetQueryData,
): RecoveryCasesGetQueryData | undefined {
  const key = queryKeyRecoveryCasesGet(...queryKeyBase);

  return client.setQueryData<RecoveryCasesGetQueryData>(key, data);
}

export function invalidateRecoveryCasesGet(
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
    queryKey: ["@gusto/embedded-api", "recoveryCases", "get", ...queryKeyBase],
  });
}

export function invalidateAllRecoveryCasesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "recoveryCases", "get"],
  });
}

export function buildRecoveryCasesGetQuery(
  client$: GustoEmbeddedCore,
  request: GetRecoveryCasesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<RecoveryCasesGetQueryData>;
} {
  return {
    queryKey: queryKeyRecoveryCasesGet(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function recoveryCasesGetQueryFn(
      ctx,
    ): Promise<RecoveryCasesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(recoveryCasesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyRecoveryCasesGet(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "recoveryCases",
    "get",
    companyUuid,
    parameters,
  ];
}
