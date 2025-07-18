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
import { contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements } from "../funcs/contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion,
  GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest,
  GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse,
} from "../models/operations/getv1contractorpaymentgroupsidpartnerdisbursements.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData =
  GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse;

/**
 * Get partner disbursements for a contractor payment group
 *
 * @remarks
 * Get partner disbursements for a specific contractor payment group.
 *
 * scope: `partner_disbursements:read`
 */
export function useContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
  request: GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest,
  options?: QueryHookOptions<
    ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
  >,
): UseQueryResult<
  ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData,
  Error
> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get partner disbursements for a contractor payment group
 *
 * @remarks
 * Get partner disbursements for a specific contractor payment group.
 *
 * scope: `partner_disbursements:read`
 */
export function useContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsSuspense(
  request: GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest,
  options?: SuspenseQueryHookOptions<
    ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
  >,
): UseSuspenseQueryResult<
  ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData,
  Error
> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQuery(
      client$,
      request,
    ),
  });
}

export function setContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsData(
  client: QueryClient,
  queryKeyBase: [
    id: string,
    parameters: {
      xGustoAPIVersion?:
        | GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion
        | undefined;
    },
  ],
  data:
    ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData,
):
  | ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
  | undefined
{
  const key =
    queryKeyContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
      ...queryKeyBase,
    );

  return client.setQueryData<
    ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
  >(key, data);
}

export function invalidateContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      id: string,
      parameters: {
        xGustoAPIVersion?:
          | GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion
          | undefined;
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
      "getV1ContractorPaymentGroupsIdPartnerDisbursements",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "contractorPaymentGroups",
      "getV1ContractorPaymentGroupsIdPartnerDisbursements",
    ],
  });
}

export function buildContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQuery(
  client$: GustoEmbeddedCore,
  request: GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<
    ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
  >;
} {
  return {
    queryKey:
      queryKeyContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
        request.id,
        { xGustoAPIVersion: request.xGustoAPIVersion },
      ),
    queryFn:
      async function contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryFn(
        ctx,
      ): Promise<
        ContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursementsQueryData
      > {
        const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
        const mergedOptions = {
          ...options,
          fetchOptions: { ...options?.fetchOptions, signal: sig },
        };

        return unwrapAsync(
          contractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
            client$,
            request,
            mergedOptions,
          ),
        );
      },
  };
}

export function queryKeyContractorPaymentGroupsGetV1ContractorPaymentGroupsIdPartnerDisbursements(
  id: string,
  parameters: {
    xGustoAPIVersion?:
      | GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion
      | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorPaymentGroups",
    "getV1ContractorPaymentGroupsIdPartnerDisbursements",
    id,
    parameters,
  ];
}
