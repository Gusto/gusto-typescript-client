import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TaxRequirementsUpdateStateMutationVariables = {
    request: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest;
    options?: RequestOptions;
};
export type TaxRequirementsUpdateStateMutationData = operations.PutV1CompaniesCompanyUuidTaxRequirementsStateResponse;
/**
 * Update State Tax Requirements
 *
 * @remarks
 * Update State Tax Requirements
 *
 * scope: `company_tax_requirements:write`
 */
export declare function useTaxRequirementsUpdateStateMutation(options?: MutationHookOptions<TaxRequirementsUpdateStateMutationData, Error, TaxRequirementsUpdateStateMutationVariables>): UseMutationResult<TaxRequirementsUpdateStateMutationData, Error, TaxRequirementsUpdateStateMutationVariables>;
export declare function mutationKeyTaxRequirementsUpdateState(): MutationKey;
export declare function buildTaxRequirementsUpdateStateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TaxRequirementsUpdateStateMutationVariables) => Promise<TaxRequirementsUpdateStateMutationData>;
};
//# sourceMappingURL=taxRequirementsUpdateState.d.ts.map