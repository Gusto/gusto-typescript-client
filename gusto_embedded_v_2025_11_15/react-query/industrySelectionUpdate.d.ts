import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type IndustrySelectionUpdateMutationVariables = {
    request: operations.PutV1CompanyIndustryRequest;
    options?: RequestOptions;
};
export type IndustrySelectionUpdateMutationData = operations.PutV1CompanyIndustryResponse;
/**
 * Update a company industry selection
 *
 * @remarks
 * Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.
 *
 * scope: `companies:write`
 */
export declare function useIndustrySelectionUpdateMutation(options?: MutationHookOptions<IndustrySelectionUpdateMutationData, Error, IndustrySelectionUpdateMutationVariables>): UseMutationResult<IndustrySelectionUpdateMutationData, Error, IndustrySelectionUpdateMutationVariables>;
export declare function mutationKeyIndustrySelectionUpdate(): MutationKey;
export declare function buildIndustrySelectionUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: IndustrySelectionUpdateMutationVariables) => Promise<IndustrySelectionUpdateMutationData>;
};
//# sourceMappingURL=industrySelectionUpdate.d.ts.map