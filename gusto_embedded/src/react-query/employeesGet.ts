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
import { employeesGet } from "../funcs/employeesGet.js";
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

export type EmployeesGetQueryData = Array<components.Employee>;

/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export function useEmployeesGet(
  request: operations.GetV1CompaniesCompanyIdEmployeesRequest,
  options?: QueryHookOptions<EmployeesGetQueryData>,
): UseQueryResult<EmployeesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export function useEmployeesGetSuspense(
  request: operations.GetV1CompaniesCompanyIdEmployeesRequest,
  options?: SuspenseQueryHookOptions<EmployeesGetQueryData>,
): UseSuspenseQueryResult<EmployeesGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeesGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeesGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdEmployeesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeesGetQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeesGetData(
  client: QueryClient,
  queryKeyBase: [
    companyId: string,
    parameters: {
      terminated?: boolean | undefined;
      include?: Array<operations.Include> | undefined;
      page?: number | undefined;
      per?: number | undefined;
      searchTerm?: string | undefined;
      xGustoAPIVersion?: components.VersionHeader | undefined;
    },
  ],
  data: EmployeesGetQueryData,
): EmployeesGetQueryData | undefined {
  const key = queryKeyEmployeesGet(...queryKeyBase);

  return client.setQueryData<EmployeesGetQueryData>(key, data);
}

export function invalidateEmployeesGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      companyId: string,
      parameters: {
        terminated?: boolean | undefined;
        include?: Array<operations.Include> | undefined;
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
      },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "get", ...queryKeyBase],
  });
}

export function invalidateAllEmployeesGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "get"],
  });
}

export function buildEmployeesGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1CompaniesCompanyIdEmployeesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (context: QueryFunctionContext) => Promise<EmployeesGetQueryData>;
} {
  return {
    queryKey: queryKeyEmployeesGet(request.companyId, {
      terminated: request.terminated,
      include: request.include,
      page: request.page,
      per: request.per,
      searchTerm: request.searchTerm,
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeesGetQueryFn(
      ctx,
    ): Promise<EmployeesGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeesGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeesGet(
  companyId: string,
  parameters: {
    terminated?: boolean | undefined;
    include?: Array<operations.Include> | undefined;
    page?: number | undefined;
    per?: number | undefined;
    searchTerm?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
  },
): QueryKey {
  return ["@gusto/embedded-api", "Employees", "get", companyId, parameters];
}
