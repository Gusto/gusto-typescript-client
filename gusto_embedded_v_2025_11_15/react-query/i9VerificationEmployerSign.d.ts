import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type I9VerificationEmployerSignMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest;
    options?: RequestOptions;
};
export type I9VerificationEmployerSignMutationData = operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse;
/**
 * Employer sign an employee's Form I-9
 *
 * @remarks
 * Sign an employee's Form I-9 as an employer. Once the form is signed, the employee's I-9 authorization is considered complete and cannot be modified.
 *
 * scope: `i9_authorizations:manage`
 */
export declare function useI9VerificationEmployerSignMutation(options?: MutationHookOptions<I9VerificationEmployerSignMutationData, Error, I9VerificationEmployerSignMutationVariables>): UseMutationResult<I9VerificationEmployerSignMutationData, Error, I9VerificationEmployerSignMutationVariables>;
export declare function mutationKeyI9VerificationEmployerSign(): MutationKey;
export declare function buildI9VerificationEmployerSignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: I9VerificationEmployerSignMutationVariables) => Promise<I9VerificationEmployerSignMutationData>;
};
//# sourceMappingURL=i9VerificationEmployerSign.d.ts.map