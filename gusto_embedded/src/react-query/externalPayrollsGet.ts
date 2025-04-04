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
import { externalPayrollsGet } from "../funcs/externalPayrollsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompanyExternalPayrollsRequest,
  GetV1CompanyExternalPayrollsResponse,
} from "../models/operations/getv1companyexternalpayrolls.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ExternalPayrollsGetQueryData = GetV1CompanyExternalPayrollsResponse;

/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsGet(
  request: GetV1CompanyExternalPayrollsRequest,
  options?: QueryHookOptions<ExternalPayrollsGetQueryData>,
): UseQueryResult<ExternalPayrollsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildExternalPayrollsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsGetSuspense(
  request: GetV1CompanyExternalPayrollsRequest,
  options?: SuspenseQueryHookOptions<ExternalPayrollsGetQueryData>,
): UseSuspenseQueryResult<ExternalPayrollsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildExternalPayrollsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchExternalPayrollsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompanyExternalPayrollsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildExternalPayrollsGetQuery(
      client$,
      request,
    ),
  });
}

export function setExternalPayrollsGetData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ExternalPayrollsGetQueryData,
): ExternalPayrollsGetQueryData | undefined {
  const key = queryKeyExternalPayrollsGet(...queryKeyBase);

  return client.setQueryData<ExternalPayrollsGetQueryData>(key, data);
}

export function invalidateExternalPayrollsGet(
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
      "externalPayrolls",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllExternalPayrollsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "externalPayrolls", "get"],
  });
}

export function buildExternalPayrollsGetQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompanyExternalPayrollsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ExternalPayrollsGetQueryData>;
} {
  return {
    queryKey: queryKeyExternalPayrollsGet(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function externalPayrollsGetQueryFn(
      ctx,
    ): Promise<ExternalPayrollsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(externalPayrollsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyExternalPayrollsGet(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "externalPayrolls",
    "get",
    companyUuid,
    parameters,
  ];
}
