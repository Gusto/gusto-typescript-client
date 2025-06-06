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
import { contractorDocumentsGet } from "../funcs/contractorDocumentsGet.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1ContractorDocumentRequest,
  GetV1ContractorDocumentResponse,
} from "../models/operations/getv1contractordocument.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type ContractorDocumentsGetQueryData = GetV1ContractorDocumentResponse;

/**
 * Get a contractor document
 *
 * @remarks
 * Get a contractor document.
 *
 * scope: `contractor_documents:read`
 */
export function useContractorDocumentsGet(
  request: GetV1ContractorDocumentRequest,
  options?: QueryHookOptions<ContractorDocumentsGetQueryData>,
): UseQueryResult<ContractorDocumentsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildContractorDocumentsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get a contractor document
 *
 * @remarks
 * Get a contractor document.
 *
 * scope: `contractor_documents:read`
 */
export function useContractorDocumentsGetSuspense(
  request: GetV1ContractorDocumentRequest,
  options?: SuspenseQueryHookOptions<ContractorDocumentsGetQueryData>,
): UseSuspenseQueryResult<ContractorDocumentsGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildContractorDocumentsGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchContractorDocumentsGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1ContractorDocumentRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildContractorDocumentsGetQuery(
      client$,
      request,
    ),
  });
}

export function setContractorDocumentsGetData(
  client: QueryClient,
  queryKeyBase: [
    documentUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: ContractorDocumentsGetQueryData,
): ContractorDocumentsGetQueryData | undefined {
  const key = queryKeyContractorDocumentsGet(...queryKeyBase);

  return client.setQueryData<ContractorDocumentsGetQueryData>(key, data);
}

export function invalidateContractorDocumentsGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      documentUuid: string,
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
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllContractorDocumentsGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "contractorDocuments", "get"],
  });
}

export function buildContractorDocumentsGetQuery(
  client$: GustoEmbeddedCore,
  request: GetV1ContractorDocumentRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<ContractorDocumentsGetQueryData>;
} {
  return {
    queryKey: queryKeyContractorDocumentsGet(request.documentUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function contractorDocumentsGetQueryFn(
      ctx,
    ): Promise<ContractorDocumentsGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(contractorDocumentsGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyContractorDocumentsGet(
  documentUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "contractorDocuments",
    "get",
    documentUuid,
    parameters,
  ];
}
