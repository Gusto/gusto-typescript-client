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
import { departmentsGetAll } from "../funcs/departmentsGetAll.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import {
  GetCompaniesDepartmentsRequest,
  GetCompaniesDepartmentsResponse,
} from "../models/operations/getcompaniesdepartments.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type DepartmentsGetAllQueryData = GetCompaniesDepartmentsResponse;

/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export function useDepartmentsGetAll(
  request: GetCompaniesDepartmentsRequest,
  options?: QueryHookOptions<DepartmentsGetAllQueryData>,
): UseQueryResult<DepartmentsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildDepartmentsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export function useDepartmentsGetAllSuspense(
  request: GetCompaniesDepartmentsRequest,
  options?: SuspenseQueryHookOptions<DepartmentsGetAllQueryData>,
): UseSuspenseQueryResult<DepartmentsGetAllQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildDepartmentsGetAllQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchDepartmentsGetAll(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetCompaniesDepartmentsRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildDepartmentsGetAllQuery(
      client$,
      request,
    ),
  });
}

export function setDepartmentsGetAllData(
  client: QueryClient,
  queryKeyBase: [
    companyUuid: string,
    parameters: { xGustoAPIVersion?: VersionHeader | undefined },
  ],
  data: DepartmentsGetAllQueryData,
): DepartmentsGetAllQueryData | undefined {
  const key = queryKeyDepartmentsGetAll(...queryKeyBase);

  return client.setQueryData<DepartmentsGetAllQueryData>(key, data);
}

export function invalidateDepartmentsGetAll(
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
    queryKey: ["@gusto/embedded-api", "Departments", "getAll", ...queryKeyBase],
  });
}

export function invalidateAllDepartmentsGetAll(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Departments", "getAll"],
  });
}

export function buildDepartmentsGetAllQuery(
  client$: GustoEmbeddedCore,
  request: GetCompaniesDepartmentsRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<DepartmentsGetAllQueryData>;
} {
  return {
    queryKey: queryKeyDepartmentsGetAll(request.companyUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function departmentsGetAllQueryFn(
      ctx,
    ): Promise<DepartmentsGetAllQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(departmentsGetAll(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyDepartmentsGetAll(
  companyUuid: string,
  parameters: { xGustoAPIVersion?: VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Departments",
    "getAll",
    companyUuid,
    parameters,
  ];
}
