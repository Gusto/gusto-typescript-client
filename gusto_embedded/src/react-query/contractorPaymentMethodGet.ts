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
import { contractorPaymentMethodGet } from "../funcs/contractorPaymentMethodGet.js";
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

export type ContractorPaymentMethodGetQueryData =
  components.ContractorPaymentMethod;

/**
 * Get a contractor's payment method
 *
 * @remarks
 * Fetches a contractor's payment method. A contractor payment method
 * describes how the payment should be split across the contractor's associated
 * bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export function useContractorPaymentMethodGet(
  request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest,
  options?: QueryHookOptions<ContractorPaymentMethodGetQueryData>,
): UseQueryResult<ContractorPaymentMethodGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorPaymentMethodGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a contractor's payment method
 *
 * @remarks
 * Fetches a contractor's payment method. A contractor payment method
 * describes how the payment should be split across the contractor's associated
 * bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export function useContractorPaymentMethodGetSuspense(
  request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest,
  options?: SuspenseQueryHookOptions<ContractorPaymentMethodGetQueryData>,
): UseSuspenseQueryResult<ContractorPaymentMethodGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorPaymentMethodGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorPaymentMethodGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorPaymentMethodGetQuery(
      client$,
      request,
    ),
  });
}

export function setContractorPaymentMethodGetData(
  client: QueryClient,
  queryKeyBase: [
    contractorUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: ContractorPaymentMethodGetQueryData,
): ContractorPaymentMethodGetQueryData | undefined {
  const key = queryKeyContractorPaymentMethodGet(...queryKeyBase);

  return client.setQueryData<ContractorPaymentMethodGetQueryData>(key, data);
}

export function invalidateContractorPaymentMethodGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      contractorUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "contractorPaymentMethod",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorPaymentMethodGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorPaymentMethod", "get"],
  });
}

export function buildContractorPaymentMethodGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorPaymentMethodGetQueryData>;
} {
  return {
    queryKey: queryKeyContractorPaymentMethodGet(request.contractorUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function contractorPaymentMethodGetQueryFn(
      ctx,
    ): Promise<ContractorPaymentMethodGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorPaymentMethodGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorPaymentMethodGet(
  contractorUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorPaymentMethod",
    "get",
    contractorUuid,
    parameters,
  ];
}
