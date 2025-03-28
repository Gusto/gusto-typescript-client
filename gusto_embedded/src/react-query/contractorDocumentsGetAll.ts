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
import { contractorDocumentsGetAll } from "../funcs/contractorDocumentsGetAll.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1ContractorDocumentsRequest,
  GetV1ContractorDocumentsResponse,
} from "../models/operations/getv1contractordocuments.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ContractorDocumentsGetAllQueryData =
  GetV1ContractorDocumentsResponse;

/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export function useContractorDocumentsGetAll(
  request: GetV1ContractorDocumentsRequest,
  options?: QueryHookOptions<ContractorDocumentsGetAllQueryData>,
): UseQueryResult<ContractorDocumentsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorDocumentsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all contractor documents
 *
 * @remarks
 * Get a list of all contractor's documents
 *
 * scope: `contractor_documents:read`
 */
export function useContractorDocumentsGetAllSuspense(
  request: GetV1ContractorDocumentsRequest,
  options?: SuspenseQueryHookOptions<ContractorDocumentsGetAllQueryData>,
): UseSuspenseQueryResult<ContractorDocumentsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorDocumentsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorDocumentsGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1ContractorDocumentsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorDocumentsGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setContractorDocumentsGetAllData(
  client: QueryClient,
  queryKeyBase: [
    contractorUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ContractorDocumentsGetAllQueryData,
): ContractorDocumentsGetAllQueryData | undefined {
  const key = queryKeyContractorDocumentsGetAll(...queryKeyBase);

  return client.setQueryData<ContractorDocumentsGetAllQueryData>(key, data);
}

export function invalidateContractorDocumentsGetAll(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      contractorUuid: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "contractorDocuments",
      "getAll",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorDocumentsGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorDocuments", "getAll"],
  });
}

export function buildContractorDocumentsGetAllQuery(
  client$: GustoEmbeddedCore,
  request: GetV1ContractorDocumentsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorDocumentsGetAllQueryData>;
} {
  return {
    queryKey: queryKeyContractorDocumentsGetAll(request.contractorUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function contractorDocumentsGetAllQueryFn(
      ctx,
    ): Promise<ContractorDocumentsGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorDocumentsGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorDocumentsGetAll(
  contractorUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorDocuments",
    "getAll",
    contractorUuid,
    parameters,
  ];
}
