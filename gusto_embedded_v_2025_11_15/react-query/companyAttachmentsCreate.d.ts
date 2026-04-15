import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type CompanyAttachmentsCreateMutationVariables = {
    request: operations.PostV1CompaniesAttachmentRequest;
    options?: RequestOptions;
};
export type CompanyAttachmentsCreateMutationData = operations.PostV1CompaniesAttachmentResponse;
/**
 * Create Company Attachment and Upload File
 *
 * @remarks
 * Upload a file and create a company attachment. We recommend uploading
 * PDF files for optimal compatibility. However, the following file types are
 * allowed: .qbb, .qbm, .gif, .jpg, .png, .pdf, .xls, .xlsx, .doc and .docx.
 *
 * scope: `company_attachments:write`
 */
export declare function useCompanyAttachmentsCreateMutation(options?: MutationHookOptions<CompanyAttachmentsCreateMutationData, Error, CompanyAttachmentsCreateMutationVariables>): UseMutationResult<CompanyAttachmentsCreateMutationData, Error, CompanyAttachmentsCreateMutationVariables>;
export declare function mutationKeyCompanyAttachmentsCreate(): MutationKey;
export declare function buildCompanyAttachmentsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: CompanyAttachmentsCreateMutationVariables) => Promise<CompanyAttachmentsCreateMutationData>;
};
//# sourceMappingURL=companyAttachmentsCreate.d.ts.map