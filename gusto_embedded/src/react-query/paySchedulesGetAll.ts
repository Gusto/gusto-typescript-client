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
import { paySchedulesGetAll } from "../funcs/paySchedulesGetAll.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompaniesCompanyIdPaySchedulesRequest,
  GetV1CompaniesCompanyIdPaySchedulesResponse,
} from "../models/operations/getv1companiescompanyidpayschedules.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type PaySchedulesGetAllQueryData =
  GetV1CompaniesCompanyIdPaySchedulesResponse;

/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGetAll(
  request: GetV1CompaniesCompanyIdPaySchedulesRequest,
  options?: QueryHookOptions<PaySchedulesGetAllQueryData>,
): UseQueryResult<PaySchedulesGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPaySchedulesGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get the pay schedules for a company
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGetAllSuspense(
  request: GetV1CompaniesCompanyIdPaySchedulesRequest,
  options?: SuspenseQueryHookOptions<PaySchedulesGetAllQueryData>,
): UseSuspenseQueryResult<PaySchedulesGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPaySchedulesGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPaySchedulesGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPaySchedulesGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setPaySchedulesGetAllData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: {
      page?: number | undefined;
      per?: number | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: PaySchedulesGetAllQueryData,
): PaySchedulesGetAllQueryData | undefined {
  const key = queryKeyPaySchedulesGetAll(...queryKeyBase);

  return client.setQueryData<PaySchedulesGetAllQueryData>(key, data);
}

export function invalidatePaySchedulesGetAll(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "paySchedules",
      "getAll",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllPaySchedulesGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "paySchedules", "getAll"],
  });
}

export function buildPaySchedulesGetAllQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<PaySchedulesGetAllQueryData>;
} {
  return {
    queryKey: queryKeyPaySchedulesGetAll(request.companyId, {
      page: request.page,
      per: request.per,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function paySchedulesGetAllQueryFn(
      ctx,
    ): Promise<PaySchedulesGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(paySchedulesGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPaySchedulesGetAll(
  companyId: string,
  parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "paySchedules",
    "getAll",
    companyId,
    parameters,
  ];
}
