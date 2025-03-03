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
import { contractorPaymentsGet } from "../funcs/contractorPaymentsGet.js";
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

export type ContractorPaymentsGetQueryData = components.ContractorPayment;

/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export function useContractorPaymentsGet(
  request:
    operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
  options?: QueryHookOptions<ContractorPaymentsGetQueryData>,
): UseQueryResult<ContractorPaymentsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorPaymentsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export function useContractorPaymentsGetSuspense(
  request:
    operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
  options?: SuspenseQueryHookOptions<ContractorPaymentsGetQueryData>,
): UseSuspenseQueryResult<ContractorPaymentsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorPaymentsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorPaymentsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request:
    operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorPaymentsGetQuery(
      client$,
      request,
    ),
  });
}

export function setContractorPaymentsGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    contractorPaymentId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: ContractorPaymentsGetQueryData,
): ContractorPaymentsGetQueryData | undefined {
  const key = queryKeyContractorPaymentsGet(...queryKeyBase);

  return client.setQueryData<ContractorPaymentsGetQueryData>(key, data);
}

export function invalidateContractorPaymentsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      contractorPaymentId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "contractorPayments",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorPaymentsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorPayments", "get"],
  });
}

export function buildContractorPaymentsGetQuery(
  client$: GustoEmbeddedCore,
  request:
    operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorPaymentsGetQueryData>;
} {
  return {
    queryKey: queryKeyContractorPaymentsGet(
      request.companyId,
      request.contractorPaymentId,
      { xGustoAPIVersion: request.xGustoAPIVersion },
    ),
    queryFn: async function contractorPaymentsGetQueryFn(
      ctx,
    ): Promise<ContractorPaymentsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorPaymentsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorPaymentsGet(
  companyId: string,
  contractorPaymentId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorPayments",
    "get",
    companyId,
    contractorPaymentId,
    parameters,
  ];
}
