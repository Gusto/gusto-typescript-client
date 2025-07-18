/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements } from "../funcs/payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsRequest,
  PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsResponse,
} from "../models/operations/patchv1companiescompanyidpayrollsidpartnerdisbursements.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationVariables =
  {
    request: PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsRequest;
    options?: RequestOptions;
  };

export type PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationData =
  PatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsResponse;

/**
 * Update partner disbursements for a payroll
 *
 * @remarks
 * Update partner disbursements for a specific payroll.
 *
 * scope: `partner_disbursements:write`
 */
export function usePayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutation(
  options?: MutationHookOptions<
    PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationData,
    Error,
    PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationVariables
  >,
): UseMutationResult<
  PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationData,
  Error,
  PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutation(
      client,
      options,
    ),
    ...options,
  });
}

export function mutationKeyPayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements(): MutationKey {
  return [
    "@gusto/embedded-api",
    "Payrolls",
    "patchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements",
  ];
}

export function buildPayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables:
      PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationVariables,
  ) => Promise<
    PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationData
  >;
} {
  return {
    mutationKey:
      mutationKeyPayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements(),
    mutationFn:
      function payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationFn(
        {
          request,
          options,
        },
      ): Promise<
        PayrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursementsMutationData
      > {
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
        return unwrapAsync(
          payrollsPatchV1CompaniesCompanyIdPayrollsIdPartnerDisbursements(
            client$,
            request,
            mergedOptions,
          ),
        );
      },
  };
}
