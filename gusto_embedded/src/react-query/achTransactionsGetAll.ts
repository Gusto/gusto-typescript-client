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
import { achTransactionsGetAll } from "../funcs/achTransactionsGetAll.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetAchTransactionsRequest,
  GetAchTransactionsResponse,
} from "../models/operations/getachtransactions.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type AchTransactionsGetAllQueryData = GetAchTransactionsResponse;

/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export function useAchTransactionsGetAll(
  request: GetAchTransactionsRequest,
  options?: QueryHookOptions<AchTransactionsGetAllQueryData>,
): UseQueryResult<AchTransactionsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildAchTransactionsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export function useAchTransactionsGetAllSuspense(
  request: GetAchTransactionsRequest,
  options?: SuspenseQueryHookOptions<AchTransactionsGetAllQueryData>,
): UseSuspenseQueryResult<AchTransactionsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildAchTransactionsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchAchTransactionsGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetAchTransactionsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildAchTransactionsGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setAchTransactionsGetAllData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: {
      contractorPaymentUuid?: string | undefined;
      payrollUuid?: string | undefined;
      transactionType?: string | undefined;
      paymentDirection?: string | undefined;
      page?: number | undefined;
      per?: number | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: AchTransactionsGetAllQueryData,
): AchTransactionsGetAllQueryData | undefined {
  const key = queryKeyAchTransactionsGetAll(...queryKeyBase);

  return client.setQueryData<AchTransactionsGetAllQueryData>(key, data);
}

export function invalidateAchTransactionsGetAll(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      parameters: {
        contractorPaymentUuid?: string | undefined;
        payrollUuid?: string | undefined;
        transactionType?: string | undefined;
        paymentDirection?: string | undefined;
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
      "achTransactions",
      "getAll",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllAchTransactionsGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "achTransactions", "getAll"],
  });
}

export function buildAchTransactionsGetAllQuery(
  client$: GustoEmbeddedCore,
  request: GetAchTransactionsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<AchTransactionsGetAllQueryData>;
} {
  return {
    queryKey: queryKeyAchTransactionsGetAll(request.companyUuid, {
      contractorPaymentUuid: request.contractorPaymentUuid,
      payrollUuid: request.payrollUuid,
      transactionType: request.transactionType,
      paymentDirection: request.paymentDirection,
      page: request.page,
      per: request.per,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function achTransactionsGetAllQueryFn(
      ctx,
    ): Promise<AchTransactionsGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(achTransactionsGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyAchTransactionsGetAll(
  companyUuid: string,
  parameters: {
    contractorPaymentUuid?: string | undefined;
    payrollUuid?: string | undefined;
    transactionType?: string | undefined;
    paymentDirection?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "achTransactions",
    "getAll",
    companyUuid,
    parameters,
  ];
}
