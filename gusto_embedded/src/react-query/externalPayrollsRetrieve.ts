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
import { externalPayrollsRetrieve } from "../funcs/externalPayrollsRetrieve.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1ExternalPayrollRequest,
  GetV1ExternalPayrollResponse,
} from "../models/operations/getv1externalpayroll.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ExternalPayrollsRetrieveQueryData = GetV1ExternalPayrollResponse;

/**
 * Get an external payroll
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsRetrieve(
  request: GetV1ExternalPayrollRequest,
  options?: QueryHookOptions<ExternalPayrollsRetrieveQueryData>,
): UseQueryResult<ExternalPayrollsRetrieveQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildExternalPayrollsRetrieveQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an external payroll
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsRetrieveSuspense(
  request: GetV1ExternalPayrollRequest,
  options?: SuspenseQueryHookOptions<ExternalPayrollsRetrieveQueryData>,
): UseSuspenseQueryResult<ExternalPayrollsRetrieveQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildExternalPayrollsRetrieveQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchExternalPayrollsRetrieve(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1ExternalPayrollRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildExternalPayrollsRetrieveQuery(
      client$,
      request,
    ),
  });
}

export function setExternalPayrollsRetrieveData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    externalPayrollId: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ExternalPayrollsRetrieveQueryData,
): ExternalPayrollsRetrieveQueryData | undefined {
  const key = queryKeyExternalPayrollsRetrieve(...queryKeyBase);

  return client.setQueryData<ExternalPayrollsRetrieveQueryData>(key, data);
}

export function invalidateExternalPayrollsRetrieve(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      externalPayrollId: string,
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
      "retrieve",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllExternalPayrollsRetrieve(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "externalPayrolls", "retrieve"],
  });
}

export function buildExternalPayrollsRetrieveQuery(
  client$: GustoEmbeddedCore,
  request: GetV1ExternalPayrollRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ExternalPayrollsRetrieveQueryData>;
} {
  return {
    queryKey: queryKeyExternalPayrollsRetrieve(
      request.companyUuid,
      request.externalPayrollId,
      { xGustoAPIVersion: request.xGustoAPIVersion },
    ),
    queryFn: async function externalPayrollsRetrieveQueryFn(
      ctx,
    ): Promise<ExternalPayrollsRetrieveQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(externalPayrollsRetrieve(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyExternalPayrollsRetrieve(
  companyUuid: string,
  externalPayrollId: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "externalPayrolls",
    "retrieve",
    companyUuid,
    externalPayrollId,
    parameters,
  ];
}
