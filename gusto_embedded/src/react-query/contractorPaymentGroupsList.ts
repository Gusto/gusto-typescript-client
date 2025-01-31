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
import { contractorPaymentGroupsList } from "../funcs/contractorPaymentGroupsList.js";
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

export type ContractorPaymentGroupsListQueryData = Array<
  components.ContractorPaymentGroupMinimal
>;

/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export function useContractorPaymentGroupsList(
  request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest,
  options?: QueryHookOptions<ContractorPaymentGroupsListQueryData>,
): UseQueryResult<ContractorPaymentGroupsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorPaymentGroupsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export function useContractorPaymentGroupsListSuspense(
  request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest,
  options?: SuspenseQueryHookOptions<ContractorPaymentGroupsListQueryData>,
): UseSuspenseQueryResult<ContractorPaymentGroupsListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorPaymentGroupsListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorPaymentGroupsList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorPaymentGroupsListQuery(
      client$,
      request,
    ),
  });
}

export function setContractorPaymentGroupsListData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: {
      startDate?: string | undefined;
      endDate?: string | undefined;
      page?: number | undefined;
      per?: number | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: ContractorPaymentGroupsListQueryData,
): ContractorPaymentGroupsListQueryData | undefined {
  const key = queryKeyContractorPaymentGroupsList(...queryKeyBase);

  return client.setQueryData<ContractorPaymentGroupsListQueryData>(key, data);
}

export function invalidateContractorPaymentGroupsList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
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
      "contractorPaymentGroups",
      "list",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorPaymentGroupsList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorPaymentGroups", "list"],
  });
}

export function buildContractorPaymentGroupsListQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorPaymentGroupsListQueryData>;
} {
  return {
    queryKey: queryKeyContractorPaymentGroupsList(request.companyId, {
      startDate: request.startDate,
      endDate: request.endDate,
      page: request.page,
      per: request.per,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function contractorPaymentGroupsListQueryFn(
      ctx,
    ): Promise<ContractorPaymentGroupsListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorPaymentGroupsList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorPaymentGroupsList(
  companyId: string,
  parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorPaymentGroups",
    "list",
    companyId,
    parameters,
  ];
}
