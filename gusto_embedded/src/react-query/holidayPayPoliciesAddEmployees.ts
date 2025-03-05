/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { holidayPayPoliciesAddEmployees } from "../funcs/holidayPayPoliciesAddEmployees.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutCompaniesCompanyUuidHolidayPayPolicyAddRequest,
  PutCompaniesCompanyUuidHolidayPayPolicyAddResponse,
} from "../models/operations/putcompaniescompanyuuidholidaypaypolicyadd.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type HolidayPayPoliciesAddEmployeesMutationVariables = {
  request: PutCompaniesCompanyUuidHolidayPayPolicyAddRequest;
  options?: RequestOptions;
};

export type HolidayPayPoliciesAddEmployeesMutationData =
  PutCompaniesCompanyUuidHolidayPayPolicyAddResponse;

/**
 * Add employees to a company's holiday pay policy
 *
 * @remarks
 * Add employees to a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:write`
 */
export function useHolidayPayPoliciesAddEmployeesMutation(
  options?: MutationHookOptions<
    HolidayPayPoliciesAddEmployeesMutationData,
    Error,
    HolidayPayPoliciesAddEmployeesMutationVariables
  >,
): UseMutationResult<
  HolidayPayPoliciesAddEmployeesMutationData,
  Error,
  HolidayPayPoliciesAddEmployeesMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildHolidayPayPoliciesAddEmployeesMutation(client, options),
    ...options,
  });
}

export function mutationKeyHolidayPayPoliciesAddEmployees(): MutationKey {
  return ["@gusto/embedded-api", "holidayPayPolicies", "addEmployees"];
}

export function buildHolidayPayPoliciesAddEmployeesMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: HolidayPayPoliciesAddEmployeesMutationVariables,
  ) => Promise<HolidayPayPoliciesAddEmployeesMutationData>;
} {
  return {
    mutationKey: mutationKeyHolidayPayPoliciesAddEmployees(),
    mutationFn: function holidayPayPoliciesAddEmployeesMutationFn({
      request,
      options,
    }): Promise<HolidayPayPoliciesAddEmployeesMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(holidayPayPoliciesAddEmployees(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
