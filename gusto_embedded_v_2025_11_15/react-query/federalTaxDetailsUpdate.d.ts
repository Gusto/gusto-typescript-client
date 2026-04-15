import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type FederalTaxDetailsUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest;
    options?: RequestOptions;
};
export type FederalTaxDetailsUpdateMutationData = operations.PutV1CompaniesCompanyIdFederalTaxDetailsResponse;
/**
 * Update Federal Tax Details
 *
 * @remarks
 * Updates attributes relevant for a company's federal taxes.
 * This information is required is to onboard a company for use with Gusto Embedded Payroll.
 *
 * scope: `company_federal_taxes:write`
 */
export declare function useFederalTaxDetailsUpdateMutation(options?: MutationHookOptions<FederalTaxDetailsUpdateMutationData, Error, FederalTaxDetailsUpdateMutationVariables>): UseMutationResult<FederalTaxDetailsUpdateMutationData, Error, FederalTaxDetailsUpdateMutationVariables>;
export declare function mutationKeyFederalTaxDetailsUpdate(): MutationKey;
export declare function buildFederalTaxDetailsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: FederalTaxDetailsUpdateMutationVariables) => Promise<FederalTaxDetailsUpdateMutationData>;
};
//# sourceMappingURL=federalTaxDetailsUpdate.d.ts.map