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
import { companiesGetOnboardingStatus } from "../funcs/companiesGetOnboardingStatus.js";
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

export type CompaniesGetOnboardingStatusQueryData =
  components.CompanyOnboardingStatus;

/**
 * Get the company's onboarding status
 *
 * @remarks
 * Get company's onboarding status.
 * The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `company_onboarding_status:read`
 */
export function useCompaniesGetOnboardingStatus(
  request: operations.GetV1CompanyOnboardingStatusRequest,
  options?: QueryHookOptions<CompaniesGetOnboardingStatusQueryData>,
): UseQueryResult<CompaniesGetOnboardingStatusQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildCompaniesGetOnboardingStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get the company's onboarding status
 *
 * @remarks
 * Get company's onboarding status.
 * The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `company_onboarding_status:read`
 */
export function useCompaniesGetOnboardingStatusSuspense(
  request: operations.GetV1CompanyOnboardingStatusRequest,
  options?: SuspenseQueryHookOptions<CompaniesGetOnboardingStatusQueryData>,
): UseSuspenseQueryResult<CompaniesGetOnboardingStatusQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildCompaniesGetOnboardingStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCompaniesGetOnboardingStatus(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompanyOnboardingStatusRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCompaniesGetOnboardingStatusQuery(
      client$,
      request,
    ),
  });
}

export function setCompaniesGetOnboardingStatusData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: CompaniesGetOnboardingStatusQueryData,
): CompaniesGetOnboardingStatusQueryData | undefined {
  const key = queryKeyCompaniesGetOnboardingStatus(...queryKeyBase);

  return client.setQueryData<CompaniesGetOnboardingStatusQueryData>(key, data);
}

export function invalidateCompaniesGetOnboardingStatus(
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
      "Companies",
      "getOnboardingStatus",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllCompaniesGetOnboardingStatus(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Companies", "getOnboardingStatus"],
  });
}

export function buildCompaniesGetOnboardingStatusQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompanyOnboardingStatusRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<CompaniesGetOnboardingStatusQueryData>;
} {
  return {
    queryKey: queryKeyCompaniesGetOnboardingStatus(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function companiesGetOnboardingStatusQueryFn(
      ctx,
    ): Promise<CompaniesGetOnboardingStatusQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(companiesGetOnboardingStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCompaniesGetOnboardingStatus(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Companies",
    "getOnboardingStatus",
    companyUuid,
    parameters,
  ];
}
