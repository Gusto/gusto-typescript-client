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
import { companiesGet } from "../funcs/companiesGet.js";
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

export type CompaniesGetQueryData = components.Company;

/**
 * Get a company
 *
 * @remarks
 * Get a company.
 * The employees:read scope is required to return home_address and non-work locations.
 * The company_admin:read scope is required to return primary_payroll_admin.
 * The signatories:read scope is required to return primary_signatory.
 *
 * scope: `companies:read`
 */
export function useCompaniesGet(
  request: operations.GetV1CompaniesRequest,
  options?: QueryHookOptions<CompaniesGetQueryData>,
): UseQueryResult<CompaniesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildCompaniesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a company
 *
 * @remarks
 * Get a company.
 * The employees:read scope is required to return home_address and non-work locations.
 * The company_admin:read scope is required to return primary_payroll_admin.
 * The signatories:read scope is required to return primary_signatory.
 *
 * scope: `companies:read`
 */
export function useCompaniesGetSuspense(
  request: operations.GetV1CompaniesRequest,
  options?: SuspenseQueryHookOptions<CompaniesGetQueryData>,
): UseSuspenseQueryResult<CompaniesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildCompaniesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCompaniesGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCompaniesGetQuery(
      client$,
      request,
    ),
  });
}

export function setCompaniesGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: CompaniesGetQueryData,
): CompaniesGetQueryData | undefined {
  const key = queryKeyCompaniesGet(...queryKeyBase);

  return client.setQueryData<CompaniesGetQueryData>(key, data);
}

export function invalidateCompaniesGet(
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
    queryKey: ["@gusto/embedded-api", "Companies", "get", ...queryKeyBase],
  });
}

export function invalidateAllCompaniesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Companies", "get"],
  });
}

export function buildCompaniesGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<CompaniesGetQueryData>;
} {
  return {
    queryKey: queryKeyCompaniesGet(request.companyId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function companiesGetQueryFn(
      ctx,
    ): Promise<CompaniesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(companiesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCompaniesGet(
  companyId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return ["@gusto/embedded-api", "Companies", "get", companyId, parameters];
}
