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
import { contractorPaymentGroupsGet } from "../funcs/contractorPaymentGroupsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse,
} from "../models/operations/getv1contractorpaymentgroupscontractorpaymentgroupid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ContractorPaymentGroupsGetQueryData =
  GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse;

/**
 * Fetch a contractor payment group
 *
 * @remarks
 * Returns a contractor payment group with all associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export function useContractorPaymentGroupsGet(
  request: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  options?: QueryHookOptions<ContractorPaymentGroupsGetQueryData>,
): UseQueryResult<ContractorPaymentGroupsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorPaymentGroupsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Fetch a contractor payment group
 *
 * @remarks
 * Returns a contractor payment group with all associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export function useContractorPaymentGroupsGetSuspense(
  request: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  options?: SuspenseQueryHookOptions<ContractorPaymentGroupsGetQueryData>,
): UseSuspenseQueryResult<ContractorPaymentGroupsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorPaymentGroupsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorPaymentGroupsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorPaymentGroupsGetQuery(
      client$,
      request,
    ),
  });
}

export function setContractorPaymentGroupsGetData(
  client: QueryClient,
  queryKeyBase: [
    contractorPaymentGroupUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ContractorPaymentGroupsGetQueryData,
): ContractorPaymentGroupsGetQueryData | undefined {
  const key = queryKeyContractorPaymentGroupsGet(...queryKeyBase);

  return client.setQueryData<ContractorPaymentGroupsGetQueryData>(key, data);
}

export function invalidateContractorPaymentGroupsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      contractorPaymentGroupUuid: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "contractorPaymentGroups",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorPaymentGroupsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorPaymentGroups", "get"],
  });
}

export function buildContractorPaymentGroupsGetQuery(
  client$: GustoEmbeddedCore,
  request: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorPaymentGroupsGetQueryData>;
} {
  return {
    queryKey: queryKeyContractorPaymentGroupsGet(
      request.contractorPaymentGroupUuid,
      { xGustoAPIVersion: request.xGustoAPIVersion },
    ),
    queryFn: async function contractorPaymentGroupsGetQueryFn(
      ctx,
    ): Promise<ContractorPaymentGroupsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorPaymentGroupsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorPaymentGroupsGet(
  contractorPaymentGroupUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorPaymentGroups",
    "get",
    contractorPaymentGroupUuid,
    parameters,
  ];
}
