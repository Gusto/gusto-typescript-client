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
import { garnishmentsList } from "../funcs/garnishmentsList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1EmployeesEmployeeIdGarnishmentsRequest,
  GetV1EmployeesEmployeeIdGarnishmentsResponse,
} from "../models/operations/getv1employeesemployeeidgarnishments.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type GarnishmentsListQueryData =
  GetV1EmployeesEmployeeIdGarnishmentsResponse;

/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export function useGarnishmentsList(
  request: GetV1EmployeesEmployeeIdGarnishmentsRequest,
  options?: QueryHookOptions<GarnishmentsListQueryData>,
): UseQueryResult<GarnishmentsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildGarnishmentsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get garnishments for an employee
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:read`
 */
export function useGarnishmentsListSuspense(
  request: GetV1EmployeesEmployeeIdGarnishmentsRequest,
  options?: SuspenseQueryHookOptions<GarnishmentsListQueryData>,
): UseSuspenseQueryResult<GarnishmentsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildGarnishmentsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchGarnishmentsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdGarnishmentsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildGarnishmentsListQuery(
      client$,
      request,
    ),
  });
}

export function setGarnishmentsListData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: {
      page?: number | undefined;
      per?: number | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: GarnishmentsListQueryData,
): GarnishmentsListQueryData | undefined {
  const key = queryKeyGarnishmentsList(...queryKeyBase);

  return client.setQueryData<GarnishmentsListQueryData>(key, data);
}

export function invalidateGarnishmentsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
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
    queryKey: ["@gusto/embedded-api", "Garnishments", "list", ...queryKeyBase],
  });
}

export function invalidateAllGarnishmentsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Garnishments", "list"],
  });
}

export function buildGarnishmentsListQuery(
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdGarnishmentsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<GarnishmentsListQueryData>;
} {
  return {
    queryKey: queryKeyGarnishmentsList(request.employeeId, {
      page: request.page,
      per: request.per,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function garnishmentsListQueryFn(
      ctx,
    ): Promise<GarnishmentsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(garnishmentsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyGarnishmentsList(
  employeeId: string,
  parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Garnishments",
    "list",
    employeeId,
    parameters,
  ];
}
