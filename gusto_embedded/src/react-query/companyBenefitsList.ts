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
import { companyBenefitsList } from "../funcs/companyBenefitsList.js";
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

export type CompanyBenefitsListQueryData =
  operations.GetV1CompaniesCompanyIdCompanyBenefitsResponse;

/**
 * Get benefits for a company
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export function useCompanyBenefitsList(
  request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
  options?: QueryHookOptions<CompanyBenefitsListQueryData>,
): UseQueryResult<CompanyBenefitsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildCompanyBenefitsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get benefits for a company
 *
 * @remarks
 * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
 *
 * Note that company benefits can be deactivated only when no employees are enrolled.
 *
 * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
 *
 * scope: `company_benefits:read`
 */
export function useCompanyBenefitsListSuspense(
  request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
  options?: SuspenseQueryHookOptions<CompanyBenefitsListQueryData>,
): UseSuspenseQueryResult<CompanyBenefitsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildCompanyBenefitsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchCompanyBenefitsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildCompanyBenefitsListQuery(
      client$,
      request,
    ),
  });
}

export function setCompanyBenefitsListData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: {
      active?: boolean | undefined;
      enrollmentCount?: boolean | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: CompanyBenefitsListQueryData,
): CompanyBenefitsListQueryData | undefined {
  const key = queryKeyCompanyBenefitsList(...queryKeyBase);

  return client.setQueryData<CompanyBenefitsListQueryData>(key, data);
}

export function invalidateCompanyBenefitsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: {
        active?: boolean | undefined;
        enrollmentCount?: boolean | undefined;
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
      "companyBenefits",
      "list",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllCompanyBenefitsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "companyBenefits", "list"],
  });
}

export function buildCompanyBenefitsListQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdCompanyBenefitsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<CompanyBenefitsListQueryData>;
} {
  return {
    queryKey: queryKeyCompanyBenefitsList(request.companyId, {
      active: request.active,
      enrollmentCount: request.enrollmentCount,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function companyBenefitsListQueryFn(
      ctx,
    ): Promise<CompanyBenefitsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(companyBenefitsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyCompanyBenefitsList(
  companyId: string,
  parameters: {
    active?: boolean | undefined;
    enrollmentCount?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "companyBenefits",
    "list",
    companyId,
    parameters,
  ];
}
