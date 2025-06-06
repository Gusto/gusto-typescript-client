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
import { employeeTaxSetupGetStateTaxes } from "../funcs/employeeTaxSetupGetStateTaxes.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion,
  GetV1EmployeesEmployeeIdStateTaxesRequest,
  GetV1EmployeesEmployeeIdStateTaxesResponse,
} from "../models/operations/getv1employeesemployeeidstatetaxes.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type EmployeeTaxSetupGetStateTaxesQueryData =
  GetV1EmployeesEmployeeIdStateTaxesResponse;

/**
 * Get an employee's state taxes
 *
 * @remarks
 * Get attributes relevant for an employee's state taxes.
 *
 * The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.
 *
 * Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the `valid_from` and `valid_up_to` must always be `"2010-01-01"` and `null` respectively.
 *
 * ## About filing new hire reports
 * Payroll Admins are responsible for filing a new hire report for each Employee. The `file_new_hire_report` question will only be listed if:
 * - the `employee.onboarding_status` is one of the following:
 *   - `admin_onboarding_incomplete`
 *   - `self_onboarding_awaiting_admin_review`
 * - that employee's work state requires filing a new hire report
 *
 * scope: `employee_state_taxes:read`
 */
export function useEmployeeTaxSetupGetStateTaxes(
  request: GetV1EmployeesEmployeeIdStateTaxesRequest,
  options?: QueryHookOptions<EmployeeTaxSetupGetStateTaxesQueryData>,
): UseQueryResult<EmployeeTaxSetupGetStateTaxesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeeTaxSetupGetStateTaxesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get an employee's state taxes
 *
 * @remarks
 * Get attributes relevant for an employee's state taxes.
 *
 * The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.
 *
 * Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the `valid_from` and `valid_up_to` must always be `"2010-01-01"` and `null` respectively.
 *
 * ## About filing new hire reports
 * Payroll Admins are responsible for filing a new hire report for each Employee. The `file_new_hire_report` question will only be listed if:
 * - the `employee.onboarding_status` is one of the following:
 *   - `admin_onboarding_incomplete`
 *   - `self_onboarding_awaiting_admin_review`
 * - that employee's work state requires filing a new hire report
 *
 * scope: `employee_state_taxes:read`
 */
export function useEmployeeTaxSetupGetStateTaxesSuspense(
  request: GetV1EmployeesEmployeeIdStateTaxesRequest,
  options?: SuspenseQueryHookOptions<EmployeeTaxSetupGetStateTaxesQueryData>,
): UseSuspenseQueryResult<EmployeeTaxSetupGetStateTaxesQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeeTaxSetupGetStateTaxesQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeeTaxSetupGetStateTaxes(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdStateTaxesRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeeTaxSetupGetStateTaxesQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeeTaxSetupGetStateTaxesData(
  client: QueryClient,
  queryKeyBase: [
    employeeUuid: string,
    parameters: {
      xGustoAPIVersion?:
        | GetV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
        | undefined;
    },
  ],
  data: EmployeeTaxSetupGetStateTaxesQueryData,
): EmployeeTaxSetupGetStateTaxesQueryData | undefined {
  const key = queryKeyEmployeeTaxSetupGetStateTaxes(...queryKeyBase);

  return client.setQueryData<EmployeeTaxSetupGetStateTaxesQueryData>(key, data);
}

export function invalidateEmployeeTaxSetupGetStateTaxes(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeUuid: string,
      parameters: {
        xGustoAPIVersion?:
          | GetV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
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
      "employeeTaxSetup",
      "getStateTaxes",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeeTaxSetupGetStateTaxes(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "employeeTaxSetup", "getStateTaxes"],
  });
}

export function buildEmployeeTaxSetupGetStateTaxesQuery(
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdStateTaxesRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeeTaxSetupGetStateTaxesQueryData>;
} {
  return {
    queryKey: queryKeyEmployeeTaxSetupGetStateTaxes(request.employeeUuid, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeeTaxSetupGetStateTaxesQueryFn(
      ctx,
    ): Promise<EmployeeTaxSetupGetStateTaxesQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeeTaxSetupGetStateTaxes(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeeTaxSetupGetStateTaxes(
  employeeUuid: string,
  parameters: {
    xGustoAPIVersion?:
      | GetV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion
      | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "employeeTaxSetup",
    "getStateTaxes",
    employeeUuid,
    parameters,
  ];
}
