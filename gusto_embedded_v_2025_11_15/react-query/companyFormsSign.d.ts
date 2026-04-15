import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyFormsSignMutationVariables = {
    request: operations.PutV1CompanyFormSignRequest;
    options?: RequestOptions;
};
export type CompanyFormsSignMutationData = operations.PutV1CompanyFormSignResponse;
/**
 * Sign a company form
 *
 * @remarks
 * Sign a company form. Company forms must be signed by the company signatory.
 *
 * scope: `company_forms:sign`
 */
export declare function useCompanyFormsSignMutation(options?: MutationHookOptions<CompanyFormsSignMutationData, Error, CompanyFormsSignMutationVariables>): UseMutationResult<CompanyFormsSignMutationData, Error, CompanyFormsSignMutationVariables>;
export declare function mutationKeyCompanyFormsSign(): MutationKey;
export declare function buildCompanyFormsSignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyFormsSignMutationVariables) => Promise<CompanyFormsSignMutationData>;
};
//# sourceMappingURL=companyFormsSign.d.ts.map