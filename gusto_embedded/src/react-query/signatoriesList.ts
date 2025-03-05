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
import { signatoriesList } from "../funcs/signatoriesList.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetV1CompaniesCompanyUuidSignatoriesRequest,
  GetV1CompaniesCompanyUuidSignatoriesResponse,
} from "../models/operations/getv1companiescompanyuuidsignatories.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type SignatoriesListQueryData =
  GetV1CompaniesCompanyUuidSignatoriesResponse;

/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export function useSignatoriesList(
  request: GetV1CompaniesCompanyUuidSignatoriesRequest,
  options?: QueryHookOptions<SignatoriesListQueryData>,
): UseQueryResult<SignatoriesListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildSignatoriesListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export function useSignatoriesListSuspense(
  request: GetV1CompaniesCompanyUuidSignatoriesRequest,
  options?: SuspenseQueryHookOptions<SignatoriesListQueryData>,
): UseSuspenseQueryResult<SignatoriesListQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildSignatoriesListQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchSignatoriesList(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyUuidSignatoriesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildSignatoriesListQuery(
      client$,
      request,
    ),
  });
}

export function setSignatoriesListData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: SignatoriesListQueryData,
): SignatoriesListQueryData | undefined {
  const key = queryKeySignatoriesList(...queryKeyBase);

  return client.setQueryData<SignatoriesListQueryData>(key, data);
}

export function invalidateSignatoriesList(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyUuid: string,
      parameters: { xGustoAPIVersion?: VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Signatories", "list", ...queryKeyBase],
  });
}

export function invalidateAllSignatoriesList(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Signatories", "list"],
  });
}

export function buildSignatoriesListQuery(
  client$: GustoEmbeddedCore,
  request: GetV1CompaniesCompanyUuidSignatoriesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<SignatoriesListQueryData>;
} {
  return {
    queryKey: queryKeySignatoriesList(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function signatoriesListQueryFn(
      ctx,
    ): Promise<SignatoriesListQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(signatoriesList(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeySignatoriesList(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Signatories",
    "list",
    companyUuid,
    parameters,
  ];
}
