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
import { paySchedulesGetAssignments } from "../funcs/paySchedulesGetAssignments.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
  GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse,
} from "../models/operations/getv1companiescompanyidpayschedulesassignments.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type PaySchedulesGetAssignmentsQueryData =
  GetV1CompaniesCompanyIdPaySchedulesAssignmentsResponse;

/**
 * Get pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGetAssignments(
  request: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
  options?: QueryHookOptions<PaySchedulesGetAssignmentsQueryData>,
): UseQueryResult<PaySchedulesGetAssignmentsQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildPaySchedulesGetAssignmentsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.
 *
 * scope: `pay_schedules:read`
 */
export function usePaySchedulesGetAssignmentsSuspense(
  request: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
  options?: SuspenseQueryHookOptions<PaySchedulesGetAssignmentsQueryData>,
): UseSuspenseQueryResult<PaySchedulesGetAssignmentsQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildPaySchedulesGetAssignmentsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchPaySchedulesGetAssignments(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildPaySchedulesGetAssignmentsQuery(
      client$,
      request,
    ),
  });
}

export function setPaySchedulesGetAssignmentsData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: PaySchedulesGetAssignmentsQueryData,
): PaySchedulesGetAssignmentsQueryData | undefined {
  const key = queryKeyPaySchedulesGetAssignments(...queryKeyBase);

  return client.setQueryData<PaySchedulesGetAssignmentsQueryData>(key, data);
}

export function invalidatePaySchedulesGetAssignments(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "paySchedules",
      "getAssignments",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllPaySchedulesGetAssignments(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "paySchedules", "getAssignments"],
  });
}

export function buildPaySchedulesGetAssignmentsQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<PaySchedulesGetAssignmentsQueryData>;
} {
  return {
    queryKey: queryKeyPaySchedulesGetAssignments(request.companyId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function paySchedulesGetAssignmentsQueryFn(
      ctx,
    ): Promise<PaySchedulesGetAssignmentsQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(paySchedulesGetAssignments(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyPaySchedulesGetAssignments(
  companyId: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "paySchedules",
    "getAssignments",
    companyId,
    parameters,
  ];
}
