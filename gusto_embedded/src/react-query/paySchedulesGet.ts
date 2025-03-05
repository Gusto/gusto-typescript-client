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
import { paySchedulesGet } from "../funcs/paySchedulesGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse,
} from "../models/operations/getv1companiescompanyidpayschedulespayscheduleid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type PaySchedulesGetQueryData =
  GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdResponse;

/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGet(
  request: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  options?: QueryHookOptions<PaySchedulesGetQueryData>,
): UseQueryResult<PaySchedulesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPaySchedulesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a pay schedule
 *
 * @remarks
 * The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGetSuspense(
  request: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  options?: SuspenseQueryHookOptions<PaySchedulesGetQueryData>,
): UseSuspenseQueryResult<PaySchedulesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPaySchedulesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPaySchedulesGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPaySchedulesGetQuery(
      client$,
      request,
    ),
  });
}

export function setPaySchedulesGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    payScheduleId: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: PaySchedulesGetQueryData,
): PaySchedulesGetQueryData | undefined {
  const key = queryKeyPaySchedulesGet(...queryKeyBase);

  return client.setQueryData<PaySchedulesGetQueryData>(key, data);
}

export function invalidatePaySchedulesGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      payScheduleId: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "paySchedules", "get", ...queryKeyBase],
  });
}

export function invalidateAllPaySchedulesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "paySchedules", "get"],
  });
}

export function buildPaySchedulesGetQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetQueryData>;
} {
  return {
    queryKey: queryKeyPaySchedulesGet(
      request.companyId,
      request.payScheduleId,
      { xGustoAPIVersion: request.xGustoAPIVersion },
    ),
    queryFn: async function paySchedulesGetQueryFn(
      ctx,
    ): Promise<PaySchedulesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(paySchedulesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPaySchedulesGet(
  companyId: string,
  payScheduleId: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "paySchedules",
    "get",
    companyId,
    payScheduleId,
    parameters,
  ];
}
