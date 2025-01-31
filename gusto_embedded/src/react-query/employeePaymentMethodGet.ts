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
import { employeePaymentMethodGet } from "../funcs/employeePaymentMethodGet.js";
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

export type EmployeePaymentMethodGetQueryData =
  components.EmployeePaymentMethod;

/**
 * Get an employee's payment method
 *
 * @remarks
 * Fetches an employee's payment method. An employee payment method
 * describes how the payment should be split across the employee's associated
 * bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export function useEmployeePaymentMethodGet(
  request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
  options?: QueryHookOptions<EmployeePaymentMethodGetQueryData>,
): UseQueryResult<EmployeePaymentMethodGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeePaymentMethodGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee's payment method
 *
 * @remarks
 * Fetches an employee's payment method. An employee payment method
 * describes how the payment should be split across the employee's associated
 * bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export function useEmployeePaymentMethodGetSuspense(
  request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
  options?: SuspenseQueryHookOptions<EmployeePaymentMethodGetQueryData>,
): UseSuspenseQueryResult<EmployeePaymentMethodGetQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeePaymentMethodGetQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeePaymentMethodGet(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeePaymentMethodGetQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeePaymentMethodGetData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: EmployeePaymentMethodGetQueryData,
): EmployeePaymentMethodGetQueryData | undefined {
  const key = queryKeyEmployeePaymentMethodGet(...queryKeyBase);

  return client.setQueryData<EmployeePaymentMethodGetQueryData>(key, data);
}

export function invalidateEmployeePaymentMethodGet(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "employeePaymentMethod",
      "get",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeePaymentMethodGet(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeePaymentMethod", "get"],
  });
}

export function buildEmployeePaymentMethodGetQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeePaymentMethodGetQueryData>;
} {
  return {
    queryKey: queryKeyEmployeePaymentMethodGet(request.employeeId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeePaymentMethodGetQueryFn(
      ctx,
    ): Promise<EmployeePaymentMethodGetQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeePaymentMethodGet(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeePaymentMethodGet(
  employeeId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeePaymentMethod",
    "get",
    employeeId,
    parameters,
  ];
}
