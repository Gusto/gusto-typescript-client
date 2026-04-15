import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type I9VerificationDeleteDocumentMutationVariables = {
    request: operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest;
    options?: RequestOptions;
};
export type I9VerificationDeleteDocumentMutationData = operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse;
/**
 * Delete an employee's I-9 verification document
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint deletes a specific verification document.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function useI9VerificationDeleteDocumentMutation(options?: MutationHookOptions<I9VerificationDeleteDocumentMutationData, Error, I9VerificationDeleteDocumentMutationVariables>): UseMutationResult<I9VerificationDeleteDocumentMutationData, Error, I9VerificationDeleteDocumentMutationVariables>;
export declare function mutationKeyI9VerificationDeleteDocument(): MutationKey;
export declare function buildI9VerificationDeleteDocumentMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: I9VerificationDeleteDocumentMutationVariables) => Promise<I9VerificationDeleteDocumentMutationData>;
};
//# sourceMappingURL=i9VerificationDeleteDocument.d.ts.map