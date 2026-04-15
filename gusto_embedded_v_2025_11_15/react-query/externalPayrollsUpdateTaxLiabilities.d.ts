import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ExternalPayrollsUpdateTaxLiabilitiesMutationVariables = {
    request: operations.PutV1TaxLiabilitiesRequest;
    options?: RequestOptions;
};
export type ExternalPayrollsUpdateTaxLiabilitiesMutationData = operations.PutV1TaxLiabilitiesResponse;
/**
 * Update tax liabilities
 *
 * @remarks
 * Update tax liabilities for a company.
 *
 * scope: `external_payrolls:write`
 */
export declare function useExternalPayrollsUpdateTaxLiabilitiesMutation(options?: MutationHookOptions<ExternalPayrollsUpdateTaxLiabilitiesMutationData, Error, ExternalPayrollsUpdateTaxLiabilitiesMutationVariables>): UseMutationResult<ExternalPayrollsUpdateTaxLiabilitiesMutationData, Error, ExternalPayrollsUpdateTaxLiabilitiesMutationVariables>;
export declare function mutationKeyExternalPayrollsUpdateTaxLiabilities(): MutationKey;
export declare function buildExternalPayrollsUpdateTaxLiabilitiesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ExternalPayrollsUpdateTaxLiabilitiesMutationVariables) => Promise<ExternalPayrollsUpdateTaxLiabilitiesMutationData>;
};
//# sourceMappingURL=externalPayrollsUpdateTaxLiabilities.d.ts.map