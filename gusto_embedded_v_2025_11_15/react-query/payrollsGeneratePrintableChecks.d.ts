import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsGeneratePrintableChecksMutationVariables = {
    request: operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksRequest;
    options?: RequestOptions;
};
export type PayrollsGeneratePrintableChecksMutationData = operations.PostV1PayrollsPayrollUuidGeneratedDocumentsPrintablePayrollChecksResponse;
/**
 * Generate printable payroll checks (pdf)
 *
 * @remarks
 * This endpoint initiates the generation of employee checks for the payroll specified by payroll_uuid. A generation status and corresponding request_uuid will be returned. Use the generated document GET endpoint with document_type: `printable_payroll_checks` and request_uuid to poll the check generation process and retrieve the generated check URL upon completion.
 *
 * scope: `generated_documents:write`
 */
export declare function usePayrollsGeneratePrintableChecksMutation(options?: MutationHookOptions<PayrollsGeneratePrintableChecksMutationData, Error, PayrollsGeneratePrintableChecksMutationVariables>): UseMutationResult<PayrollsGeneratePrintableChecksMutationData, Error, PayrollsGeneratePrintableChecksMutationVariables>;
export declare function mutationKeyPayrollsGeneratePrintableChecks(): MutationKey;
export declare function buildPayrollsGeneratePrintableChecksMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsGeneratePrintableChecksMutationVariables) => Promise<PayrollsGeneratePrintableChecksMutationData>;
};
//# sourceMappingURL=payrollsGeneratePrintableChecks.d.ts.map