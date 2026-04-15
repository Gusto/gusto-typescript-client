import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type TaxRequirementsUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyUuidTaxRequirementsStateRequest;
    options?: RequestOptions;
};
export type TaxRequirementsUpdateMutationData = void;
/**
 * Update State Tax Requirements
 *
 * @remarks
 * Update State Tax Requirements
 *
 * scope: `company_tax_requirements:write`
 */
export declare function useTaxRequirementsUpdateMutation(options?: MutationHookOptions<TaxRequirementsUpdateMutationData, Error, TaxRequirementsUpdateMutationVariables>): UseMutationResult<TaxRequirementsUpdateMutationData, Error, TaxRequirementsUpdateMutationVariables>;
export declare function mutationKeyTaxRequirementsUpdate(): MutationKey;
export declare function buildTaxRequirementsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: TaxRequirementsUpdateMutationVariables) => Promise<TaxRequirementsUpdateMutationData>;
};
//# sourceMappingURL=taxRequirementsUpdate.d.ts.map