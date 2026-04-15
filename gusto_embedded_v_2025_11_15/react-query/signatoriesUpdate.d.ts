import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type SignatoriesUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest;
    options?: RequestOptions;
};
export type SignatoriesUpdateMutationData = operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse;
/**
 * Update a signatory
 *
 * @remarks
 * Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.
 *
 * scope: `signatories:write`
 */
export declare function useSignatoriesUpdateMutation(options?: MutationHookOptions<SignatoriesUpdateMutationData, Error, SignatoriesUpdateMutationVariables>): UseMutationResult<SignatoriesUpdateMutationData, Error, SignatoriesUpdateMutationVariables>;
export declare function mutationKeySignatoriesUpdate(): MutationKey;
export declare function buildSignatoriesUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: SignatoriesUpdateMutationVariables) => Promise<SignatoriesUpdateMutationData>;
};
//# sourceMappingURL=signatoriesUpdate.d.ts.map