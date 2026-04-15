import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type SignatoriesCreateMutationVariables = {
    request: operations.PostV1CompanySignatoriesRequest;
    options?: RequestOptions;
};
export type SignatoriesCreateMutationData = operations.PostV1CompanySignatoriesResponse;
/**
 * Create a signatory
 *
 * @remarks
 * Create a company signatory with complete information.
 * A signatory can legally sign forms once the identity verification process is successful.
 * The signatory should be an officer, owner, general partner or LLC member manager, plan administrator, fiduciary, or an authorized representative who is designated to sign agreements on the company's behalf. An officer is the president, vice president, treasurer, chief accounting officer, etc. There can only be a single primary signatory in a company.
 *
 * scope: `signatories:manage`
 */
export declare function useSignatoriesCreateMutation(options?: MutationHookOptions<SignatoriesCreateMutationData, Error, SignatoriesCreateMutationVariables>): UseMutationResult<SignatoriesCreateMutationData, Error, SignatoriesCreateMutationVariables>;
export declare function mutationKeySignatoriesCreate(): MutationKey;
export declare function buildSignatoriesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: SignatoriesCreateMutationVariables) => Promise<SignatoriesCreateMutationData>;
};
//# sourceMappingURL=signatoriesCreate.d.ts.map