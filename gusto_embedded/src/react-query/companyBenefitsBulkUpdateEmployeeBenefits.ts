/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { companyBenefitsBulkUpdateEmployeeBenefits } from "../funcs/companyBenefitsBulkUpdateEmployeeBenefits.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables = {
  request:
    operations.PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest;
  options?: RequestOptions;
};

export type CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData = Array<
  components.EmployeeBenefit
>;

/**
 * Bulk update employee benefits for a company benefit
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:write`
 */
export function useCompanyBenefitsBulkUpdateEmployeeBenefitsMutation(
  options?: MutationHookOptions<
    CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData,
    Error,
    CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables
  >,
): UseMutationResult<
  CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData,
  Error,
  CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildCompanyBenefitsBulkUpdateEmployeeBenefitsMutation(client, options),
    ...options,
  });
}

export function mutationKeyCompanyBenefitsBulkUpdateEmployeeBenefits(): MutationKey {
  return [
    "@gusto/embedded-api",
    "companyBenefits",
    "bulkUpdateEmployeeBenefits",
  ];
}

export function buildCompanyBenefitsBulkUpdateEmployeeBenefitsMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CompanyBenefitsBulkUpdateEmployeeBenefitsMutationVariables,
  ) => Promise<CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData>;
} {
  return {
    mutationKey: mutationKeyCompanyBenefitsBulkUpdateEmployeeBenefits(),
    mutationFn: function companyBenefitsBulkUpdateEmployeeBenefitsMutationFn({
      request,
      options,
    }): Promise<CompanyBenefitsBulkUpdateEmployeeBenefitsMutationData> {
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
      return unwrapAsync(companyBenefitsBulkUpdateEmployeeBenefits(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
