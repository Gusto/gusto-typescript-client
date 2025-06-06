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
import { employeesGetOnboardingStatus } from "../funcs/employeesGetOnboardingStatus.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  GetV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion,
  GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  GetV1EmployeesEmployeeIdOnboardingStatusResponse,
} from "../models/operations/getv1employeesemployeeidonboardingstatus.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import {
  QueryHookOptions,
  SuspenseQueryHookOptions,
  TupleToPrefixes,
} from "./_types.js";

export type EmployeesGetOnboardingStatusQueryData =
  GetV1EmployeesEmployeeIdOnboardingStatusResponse;

/**
 * Get the employee's onboarding status
 *
 * @remarks
 * # Description
 * Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `employees:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
 * | `onboarding_completed` | Employee has been fully onboarded and verified. |
 *
 * ### Employee self-onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
 * | `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
 * | `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
 * | `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
 * | `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
 * | `self_onboarding_awaiting_admin_review` | Admin has started to verify the employee's information. |
 * | `onboarding_completed` | Employee has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
 * | `compensation_details` | Associate employee to a job & compensation. |
 * | `add_work_address` | Add employee work address. |
 * | `add_home_address` | Add employee home address. |
 * | `federal_tax_setup` | Set up federal tax withholdings. |
 * | `state_tax_setup` | Set up state tax withholdings. |
 * | `direct_deposit_setup` | (optional) Set up employee's direct deposit. |
 * | `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
 * | `file_new_hire_report` | File a new hire report for this employee. |
 * | `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |
 */
export function useEmployeesGetOnboardingStatus(
  request: GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  options?: QueryHookOptions<EmployeesGetOnboardingStatusQueryData>,
): UseQueryResult<EmployeesGetOnboardingStatusQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useQuery({
    ...buildEmployeesGetOnboardingStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

/**
 * Get the employee's onboarding status
 *
 * @remarks
 * # Description
 * Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
 *
 * scope: `employees:read`
 *
 * ## onboarding_status
 *
 * ### Admin-facilitated onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
 * | `onboarding_completed` | Employee has been fully onboarded and verified. |
 *
 * ### Employee self-onboarding
 * | onboarding_status | Description |
 * |:------------------|------------:|
 * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
 * | `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
 * | `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
 * | `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
 * | `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
 * | `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
 * | `self_onboarding_awaiting_admin_review` | Admin has started to verify the employee's information. |
 * | `onboarding_completed` | Employee has been fully onboarded and verified. |
 *
 * ## onboarding_steps
 *
 * | onboarding_steps | Requirement(s) to be completed |
 * |:-----------------|-------------------------------:|
 * | `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
 * | `compensation_details` | Associate employee to a job & compensation. |
 * | `add_work_address` | Add employee work address. |
 * | `add_home_address` | Add employee home address. |
 * | `federal_tax_setup` | Set up federal tax withholdings. |
 * | `state_tax_setup` | Set up state tax withholdings. |
 * | `direct_deposit_setup` | (optional) Set up employee's direct deposit. |
 * | `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
 * | `file_new_hire_report` | File a new hire report for this employee. |
 * | `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |
 */
export function useEmployeesGetOnboardingStatusSuspense(
  request: GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  options?: SuspenseQueryHookOptions<EmployeesGetOnboardingStatusQueryData>,
): UseSuspenseQueryResult<EmployeesGetOnboardingStatusQueryData, Error> {
  const client = useGustoEmbeddedContext();
  return useSuspenseQuery({
    ...buildEmployeesGetOnboardingStatusQuery(
      client,
      request,
      options,
    ),
    ...options,
  });
}

export function prefetchEmployeesGetOnboardingStatus(
  queryClient: QueryClient,
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdOnboardingStatusRequest,
): Promise<void> {
  return queryClient.prefetchQuery({
    ...buildEmployeesGetOnboardingStatusQuery(
      client$,
      request,
    ),
  });
}

export function setEmployeesGetOnboardingStatusData(
  client: QueryClient,
  queryKeyBase: [
    employeeId: string,
    parameters: {
      xGustoAPIVersion?:
        | GetV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
        | undefined;
    },
  ],
  data: EmployeesGetOnboardingStatusQueryData,
): EmployeesGetOnboardingStatusQueryData | undefined {
  const key = queryKeyEmployeesGetOnboardingStatus(...queryKeyBase);

  return client.setQueryData<EmployeesGetOnboardingStatusQueryData>(key, data);
}

export function invalidateEmployeesGetOnboardingStatus(
  client: QueryClient,
  queryKeyBase: TupleToPrefixes<
    [
      employeeId: string,
      parameters: {
        xGustoAPIVersion?:
          | GetV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
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
      "Employees",
      "getOnboardingStatus",
      ...queryKeyBase,
    ],
  });
}

export function invalidateAllEmployeesGetOnboardingStatus(
  client: QueryClient,
  filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">,
): Promise<void> {
  return client.invalidateQueries({
    ...filters,
    queryKey: ["@gusto/embedded-api", "Employees", "getOnboardingStatus"],
  });
}

export function buildEmployeesGetOnboardingStatusQuery(
  client$: GustoEmbeddedCore,
  request: GetV1EmployeesEmployeeIdOnboardingStatusRequest,
  options?: RequestOptions,
): {
  queryKey: QueryKey;
  queryFn: (
    context: QueryFunctionContext,
  ) => Promise<EmployeesGetOnboardingStatusQueryData>;
} {
  return {
    queryKey: queryKeyEmployeesGetOnboardingStatus(request.employeeId, {
      xGustoAPIVersion: request.xGustoAPIVersion,
    }),
    queryFn: async function employeesGetOnboardingStatusQueryFn(
      ctx,
    ): Promise<EmployeesGetOnboardingStatusQueryData> {
      const sig = combineSignals(ctx.signal, options?.fetchOptions?.signal);
      const mergedOptions = {
        ...options,
        fetchOptions: { ...options?.fetchOptions, signal: sig },
      };

      return unwrapAsync(employeesGetOnboardingStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}

export function queryKeyEmployeesGetOnboardingStatus(
  employeeId: string,
  parameters: {
    xGustoAPIVersion?:
      | GetV1EmployeesEmployeeIdOnboardingStatusHeaderXGustoAPIVersion
      | undefined;
  },
): QueryKey {
  return [
    "@gusto/embedded-api",
    "Employees",
    "getOnboardingStatus",
    employeeId,
    parameters,
  ];
}
