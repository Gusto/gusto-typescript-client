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
import { employeeAddressesGetHomeAddress } from "../funcs/employeeAddressesGetHomeAddress.js";
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

export type EmployeeAddressesGetHomeAddressQueryData =
  components.EmployeeAddress;

/**
 * Get an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export function useEmployeeAddressesGetHomeAddress(
  request: operations.GetV1HomeAddressesHomeAddressUuidRequest,
  options?: QueryHookOptions<EmployeeAddressesGetHomeAddressQueryData>,
): UseQueryResult<EmployeeAddressesGetHomeAddressQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeAddressesGetHomeAddressQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee's home address
 *
 * @remarks
 * The home address of an employee is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
 *
 * Supports home address effective dating and courtesy withholding.
 *
 * scope: `employees:read`
 */
export function useEmployeeAddressesGetHomeAddressSuspense(
  request: operations.GetV1HomeAddressesHomeAddressUuidRequest,
  options?: SuspenseQueryHookOptions<EmployeeAddressesGetHomeAddressQueryData>,
): UseSuspenseQueryResult<EmployeeAddressesGetHomeAddressQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeAddressesGetHomeAddressQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeAddressesGetHomeAddress(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1HomeAddressesHomeAddressUuidRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeAddressesGetHomeAddressQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeAddressesGetHomeAddressData(
  client: QueryClient,
  queryKeyBase: [
    homeAddressUuid: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: EmployeeAddressesGetHomeAddressQueryData,
): EmployeeAddressesGetHomeAddressQueryData | undefined {
  const key = queryKeyEmployeeAddressesGetHomeAddress(...queryKeyBase);

  return client.setQueryData<EmployeeAddressesGetHomeAddressQueryData>(
    key,
    data,
  );
}

export function invalidateEmployeeAddressesGetHomeAddress(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      homeAddressUuid: string,
      parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
    ]
  >,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: [
      "@gusto/embedded-api",
      "employeeAddresses",
      "getHomeAddress",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeAddressesGetHomeAddress(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeAddresses", "getHomeAddress"],
  });
}

export function buildEmployeeAddressesGetHomeAddressQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1HomeAddressesHomeAddressUuidRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeAddressesGetHomeAddressQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeAddressesGetHomeAddress(request.homeAddressUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeAddressesGetHomeAddressQueryFn(
      ctx,
    ): Promise<EmployeeAddressesGetHomeAddressQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeAddressesGetHomeAddress(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeAddressesGetHomeAddress(
  homeAddressUuid: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeAddresses",
    "getHomeAddress",
    homeAddressUuid,
    parameters,
  ];
}
