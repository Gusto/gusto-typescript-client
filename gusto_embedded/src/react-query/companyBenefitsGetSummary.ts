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
import { companyBenefitsGetSummary } from "../funcs/companyBenefitsGetSummary.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1BenefitsCompanyBenefitIdSummaryRequest,
  GetV1BenefitsCompanyBenefitIdSummaryResponse,
} from "../models/operations/getv1benefitscompanybenefitidsummary.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type CompanyBenefitsGetSummaryQueryData =
  GetV1BenefitsCompanyBenefitIdSummaryResponse;

/**
 * Get company benefit summary by company benefit id.
 *
 * @remarks
 * Returns summary benefit data for the requested company benefit id.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export function useCompanyBenefitsGetSummary(
  request: GetV1BenefitsCompanyBenefitIdSummaryRequest,
  options?: QueryHookOptions<CompanyBenefitsGetSummaryQueryData>,
): UseQueryResult<CompanyBenefitsGetSummaryQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildCompanyBenefitsGetSummaryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get company benefit summary by company benefit id.
 *
 * @remarks
 * Returns summary benefit data for the requested company benefit id.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export function useCompanyBenefitsGetSummarySuspense(
  request: GetV1BenefitsCompanyBenefitIdSummaryRequest,
  options?: SuspenseQueryHookOptions<CompanyBenefitsGetSummaryQueryData>,
): UseSuspenseQueryResult<CompanyBenefitsGetSummaryQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildCompanyBenefitsGetSummaryQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCompanyBenefitsGetSummary(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1BenefitsCompanyBenefitIdSummaryRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCompanyBenefitsGetSummaryQuery(
      client$,
      request,
    ),
  });
}

export function setCompanyBenefitsGetSummaryData(
  client: QueryClient,
  queryKeyBase: [
    companyBenefitId: string,
    parameters: {
      startDate?: string | undefined;
      endDate?: string | undefined;
      detailed?: boolean | undefined;
      xGustoAPIVersion?: VersionHeader | undefined;
    },
  ],
  data: CompanyBenefitsGetSummaryQueryData,
): CompanyBenefitsGetSummaryQueryData | undefined {
  const key = queryKeyCompanyBenefitsGetSummary(...queryKeyBase);

  return client.setQueryData<CompanyBenefitsGetSummaryQueryData>(key, data);
}

export function invalidateCompanyBenefitsGetSummary(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyBenefitId: string,
      parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        detailed?: boolean | undefined;
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
      "companyBenefits",
      "getSummary",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllCompanyBenefitsGetSummary(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "companyBenefits", "getSummary"],
  });
}

export function buildCompanyBenefitsGetSummaryQuery(
  client$: GustoEmbeddedCore,
  request: GetV1BenefitsCompanyBenefitIdSummaryRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<CompanyBenefitsGetSummaryQueryData>;
} {
  return {
    queryKey: queryKeyCompanyBenefitsGetSummary(request.companyBenefitId, {
      startDate: request.startDate,
      endDate: request.endDate,
      detailed: request.detailed,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function companyBenefitsGetSummaryQueryFn(
      ctx,
    ): Promise<CompanyBenefitsGetSummaryQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(companyBenefitsGetSummary(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCompanyBenefitsGetSummary(
  companyBenefitId: string,
  parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    detailed?: boolean | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "companyBenefits",
    "getSummary",
    companyBenefitId,
    parameters,
  ];
}
