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
import { i9VerificationGetAuthorization } from "../funcs/i9VerificationGetAuthorization.js";
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

export type I9VerificationGetAuthorizationQueryData =
  operations.GetV1EmployeesEmployeeIdI9AuthorizationResponse;

/**
 * Get an employee's I-9 authorization
 *
 * @remarks
 * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
 *
 * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
 *
 * scope: `i9_authorizations:read`
 */
export function useI9VerificationGetAuthorization(
  request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest,
  options?: QueryHookOptions<I9VerificationGetAuthorizationQueryData>,
): UseQueryResult<I9VerificationGetAuthorizationQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildI9VerificationGetAuthorizationQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee's I-9 authorization
 *
 * @remarks
 * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
 *
 * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
 *
 * scope: `i9_authorizations:read`
 */
export function useI9VerificationGetAuthorizationSuspense(
  request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest,
  options?: SuspenseQueryHookOptions<I9VerificationGetAuthorizationQueryData>,
): UseSuspenseQueryResult<I9VerificationGetAuthorizationQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildI9VerificationGetAuthorizationQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchI9VerificationGetAuthorization(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildI9VerificationGetAuthorizationQuery(
      client$,
      request,
    ),
  });
}

export function setI9VerificationGetAuthorizationData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
  ],
  data: I9VerificationGetAuthorizationQueryData,
): I9VerificationGetAuthorizationQueryData | undefined {
  const key = queryKeyI9VerificationGetAuthorization(...queryKeyBase);

  return client.setQueryData<I9VerificationGetAuthorizationQueryData>(
    key,
    data,
  );
}

export function invalidateI9VerificationGetAuthorization(
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
      "i9Verification",
      "getAuthorization",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllI9VerificationGetAuthorization(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "i9Verification", "getAuthorization"],
  });
}

export function buildI9VerificationGetAuthorizationQuery(
  client$: GustoEmbeddedCore,
  request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<I9VerificationGetAuthorizationQueryData>;
} {
  return {
    queryKey: queryKeyI9VerificationGetAuthorization(request.employeeId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function i9VerificationGetAuthorizationQueryFn(
      ctx,
    ): Promise<I9VerificationGetAuthorizationQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(i9VerificationGetAuthorization(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyI9VerificationGetAuthorization(
  employeeId: string,
  parameters: { xGustoAPIVersion?: components.VersionHeader | undefined },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "i9Verification",
    "getAuthorization",
    employeeId,
    parameters,
  ];
}
