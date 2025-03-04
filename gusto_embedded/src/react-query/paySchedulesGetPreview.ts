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
import { paySchedulesGetPreview } from "../funcs/paySchedulesGetPreview.js";
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

export type PaySchedulesGetPreviewQueryData =
  operations.GetV1CompaniesCompanyIdPaySchedulesPreviewResponse;

/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export function usePaySchedulesGetPreview(
  request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest,
  options?: QueryHookOptions<PaySchedulesGetPreviewQueryData>,
): UseQueryResult<PaySchedulesGetPreviewQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPaySchedulesGetPreviewQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Preview pay schedule dates
 *
 * @remarks
 * Provides a preview of a pay schedule with the specified parameters for the next 18 months.
 *
 * scope: `pay_schedules:write`
 */
export function usePaySchedulesGetPreviewSuspense(
  request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest,
  options?: SuspenseQueryHookOptions<PaySchedulesGetPreviewQueryData>,
): UseSuspenseQueryResult<PaySchedulesGetPreviewQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPaySchedulesGetPreviewQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPaySchedulesGetPreview(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPaySchedulesGetPreviewQuery(
      client$,
      request,
    ),
  });
}

export function setPaySchedulesGetPreviewData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: {
      frequency: operations.QueryParamFrequency;
      anchorPayDate: string;
      anchorEndOfPayPeriod: string;
      day1?: number | undefined;
      day2?: number | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: PaySchedulesGetPreviewQueryData,
): PaySchedulesGetPreviewQueryData | undefined {
  const key = queryKeyPaySchedulesGetPreview(...queryKeyBase);

  return client.setQueryData<PaySchedulesGetPreviewQueryData>(key, data);
}

export function invalidatePaySchedulesGetPreview(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: {
        frequency: operations.QueryParamFrequency;
        anchorPayDate: string;
        anchorEndOfPayPeriod: string;
        day1?: number | undefined;
        day2?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
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
      "getPreview",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllPaySchedulesGetPreview(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "paySchedules", "getPreview"],
  });
}

export function buildPaySchedulesGetPreviewQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdPaySchedulesPreviewRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<PaySchedulesGetPreviewQueryData>;
} {
  return {
    queryKey: queryKeyPaySchedulesGetPreview(request.companyId, {
      frequency: request.frequency,
      anchorPayDate: request.anchorPayDate,
      anchorEndOfPayPeriod: request.anchorEndOfPayPeriod,
      day1: request.day1,
      day2: request.day2,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function paySchedulesGetPreviewQueryFn(
      ctx,
    ): Promise<PaySchedulesGetPreviewQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(paySchedulesGetPreview(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPaySchedulesGetPreview(
  companyId: string,
  parameters: {
    frequency: operations.QueryParamFrequency;
    anchorPayDate: string;
    anchorEndOfPayPeriod: string;
    day1?: number | undefined;
    day2?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "paySchedules",
    "getPreview",
    companyId,
    parameters,
  ];
}
