/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { payrollsGeneratePrintableChecks } from "../funcs/payrollsGeneratePrintableChecks.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest,
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse,
} from "../models/operations/postv1payrollspayrolluuidgenerateddocumentsprintablepayrollchecks.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PayrollsGeneratePrintableChecksMutationVariables = {
  request:
    PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest;
  options?: RequestOptions;
};

export type PayrollsGeneratePrintableChecksMutationData =
  PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse;

/**
 * Generate printable payroll checks (pdf)
 *
 * @remarks
 * This endpoint initiates the generation of employee checks for the payroll specified by payroll_uuid. A generation status and corresponding request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.
 *
 * scope: `generated_documents:write`
 */
export function usePayrollsGeneratePrintableChecksMutation(
  options?: MutationHookOptions<
    PayrollsGeneratePrintableChecksMutationData,
    Error,
    PayrollsGeneratePrintableChecksMutationVariables
  >,
): UseMutationResult<
  PayrollsGeneratePrintableChecksMutationData,
  Error,
  PayrollsGeneratePrintableChecksMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPayrollsGeneratePrintableChecksMutation(client, options),
    ...options,
  });
}

export function mutationKeyPayrollsGeneratePrintableChecks(): MutationKey {
  return ["@gusto/embedded-api", "Payrolls", "generatePrintableChecks"];
}

export function buildPayrollsGeneratePrintableChecksMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PayrollsGeneratePrintableChecksMutationVariables,
  ) => Promise<PayrollsGeneratePrintableChecksMutationData>;
} {
  return {
    mutationKey: mutationKeyPayrollsGeneratePrintableChecks(),
    mutationFn: function payrollsGeneratePrintableChecksMutationFn({
      request,
      options,
    }): Promise<PayrollsGeneratePrintableChecksMutationData> {
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
      return unwrapAsync(payrollsGeneratePrintableChecks(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
