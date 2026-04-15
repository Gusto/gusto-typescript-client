import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type I9VerificationCreateDocumentsMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest;
    options?: RequestOptions;
};
export type I9VerificationCreateDocumentsMutationData = operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse;
/**
 * Create an employee's I-9 authorization verification documents
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
 *
 * Use the document options endpoint to get the possible document types and titles, which can vary depending on the employee's authorization status.
 *
 * > 🚧 Every request must contain the complete list of documents for the Employee.
 * >
 * > Every request to this endpoint removes any previous verification document records for the employee.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function useI9VerificationCreateDocumentsMutation(options?: MutationHookOptions<I9VerificationCreateDocumentsMutationData, Error, I9VerificationCreateDocumentsMutationVariables>): UseMutationResult<I9VerificationCreateDocumentsMutationData, Error, I9VerificationCreateDocumentsMutationVariables>;
export declare function mutationKeyI9VerificationCreateDocuments(): MutationKey;
export declare function buildI9VerificationCreateDocumentsMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: I9VerificationCreateDocumentsMutationVariables) => Promise<I9VerificationCreateDocumentsMutationData>;
};
//# sourceMappingURL=i9VerificationCreateDocuments.d.ts.map