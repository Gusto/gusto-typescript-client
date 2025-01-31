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
import { externalPayrollsGetTaxLiabilities } from "../funcs/externalPayrollsGetTaxLiabilities.js";
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

export type ExternalPayrollsGetTaxLiabilitiesQueryData = Array<
  Array<components.TaxLiabilitiesSelections>
>;

/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsGetTaxLiabilities(
  request: operations.GetV1TaxLiabilitiesRequest,
  options?: QueryHookOptions<ExternalPayrollsGetTaxLiabilitiesQueryData>,
): UseQueryResult<ExternalPayrollsGetTaxLiabilitiesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildExternalPayrollsGetTaxLiabilitiesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get tax liabilities
 *
 * @remarks
 * Get tax liabilities from aggregate external payrolls for a company.
 *
 * scope: `external_payrolls:read`
 */
export function useExternalPayrollsGetTaxLiabilitiesSuspense(
  request: operations.GetV1TaxLiabilitiesRequest,
  options?: SuspenseQueryHookOptions<
    ExternalPayrollsGetTaxLiabilitiesQueryData
  >,
): UseSuspenseQueryResult<ExternalPayrollsGetTaxLiabilitiesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildExternalPayrollsGetTaxLiabilitiesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchExternalPayrollsGetTaxLiabilities(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1TaxLiabilitiesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildExternalPayrollsGetTaxLiabilitiesQuery(
      client$,
      request,
    ),
  });
}

export function setExternalPayrollsGetTaxLiabilitiesData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: ExternalPayrollsGetTaxLiabilitiesQueryData,
): ExternalPayrollsGetTaxLiabilitiesQueryData | undefined {
  const key = queryKeyExternalPayrollsGetTaxLiabilities(...queryKeyBase);

  return client.setQueryData<ExternalPayrollsGetTaxLiabilitiesQueryData>(
    key,
    data,
  );
}

export function invalidateExternalPayrollsGetTaxLiabilities(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "externalPayrolls",
      "getTaxLiabilities",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllExternalPayrollsGetTaxLiabilities(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "externalPayrolls", "getTaxLiabilities"],
  });
}

export function buildExternalPayrollsGetTaxLiabilitiesQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1TaxLiabilitiesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ExternalPayrollsGetTaxLiabilitiesQueryData>;
} {
  return {
    queryKey: queryKeyExternalPayrollsGetTaxLiabilities(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function externalPayrollsGetTaxLiabilitiesQueryFn(
      ctx,
    ): Promise<ExternalPayrollsGetTaxLiabilitiesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(externalPayrollsGetTaxLiabilities(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyExternalPayrollsGetTaxLiabilities(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "externalPayrolls",
    "getTaxLiabilities",
    companyUuid,
    parameters,
  ];
}
