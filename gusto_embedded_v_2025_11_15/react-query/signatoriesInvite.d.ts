import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type SignatoriesInviteMutationVariables = {
    request: operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest;
    options?: RequestOptions;
};
export type SignatoriesInviteMutationData = operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse;
/**
 * Invite a signatory
 *
 * @remarks
 * Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.
 */
export declare function useSignatoriesInviteMutation(options?: MutationHookOptions<SignatoriesInviteMutationData, Error, SignatoriesInviteMutationVariables>): UseMutationResult<SignatoriesInviteMutationData, Error, SignatoriesInviteMutationVariables>;
export declare function mutationKeySignatoriesInvite(): MutationKey;
export declare function buildSignatoriesInviteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: SignatoriesInviteMutationVariables) => Promise<SignatoriesInviteMutationData>;
};
//# sourceMappingURL=signatoriesInvite.d.ts.map