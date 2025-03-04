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
import { companyBenefitsGetSupported } from "../funcs/companyBenefitsGetSupported.js";
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

export type CompanyBenefitsGetSupportedQueryData =
  operations.GetV1BenefitsBenefitIdResponse;

/**
 * Get a supported benefit by ID
 *
 * @remarks
 * Returns a benefit supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export function useCompanyBenefitsGetSupported(
  request: operations.GetV1BenefitsBenefitIdRequest,
  options?: QueryHookOptions<CompanyBenefitsGetSupportedQueryData>,
): UseQueryResult<CompanyBenefitsGetSupportedQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildCompanyBenefitsGetSupportedQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a supported benefit by ID
 *
 * @remarks
 * Returns a benefit supported by Gusto.
 *
 * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
 *
 * scope: `benefits:read`
 */
export function useCompanyBenefitsGetSupportedSuspense(
  request: operations.GetV1BenefitsBenefitIdRequest,
  options?: SuspenseQueryHookOptions<CompanyBenefitsGetSupportedQueryData>,
): UseSuspenseQueryResult<CompanyBenefitsGetSupportedQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildCompanyBenefitsGetSupportedQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCompanyBenefitsGetSupported(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1BenefitsBenefitIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCompanyBenefitsGetSupportedQuery(
      client$,
      request,
    ),
  });
}

export function setCompanyBenefitsGetSupportedData(
  client: QueryClient,
  queryKeyBase: [
    benefitId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: CompanyBenefitsGetSupportedQueryData,
): CompanyBenefitsGetSupportedQueryData | undefined {
  const key = queryKeyCompanyBenefitsGetSupported(...queryKeyBase);

  return client.setQueryData<CompanyBenefitsGetSupportedQueryData>(key, data);
}

export function invalidateCompanyBenefitsGetSupported(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      benefitId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "companyBenefits",
      "getSupported",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllCompanyBenefitsGetSupported(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "companyBenefits", "getSupported"],
  });
}

export function buildCompanyBenefitsGetSupportedQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1BenefitsBenefitIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<CompanyBenefitsGetSupportedQueryData>;
} {
  return {
    queryKey: queryKeyCompanyBenefitsGetSupported(request.benefitId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function companyBenefitsGetSupportedQueryFn(
      ctx,
    ): Promise<CompanyBenefitsGetSupportedQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(companyBenefitsGetSupported(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCompanyBenefitsGetSupported(
  benefitId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "companyBenefits",
    "getSupported",
    benefitId,
    parameters,
  ];
}
