/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { companyAttachmentsCreate } from "../funcs/companyAttachmentsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type CompanyAttachmentsCreateMutationVariables = {
  request: operations.PostV1CompaniesAttachmentRequest;
  options?: RequestOptions;
};

export type CompanyAttachmentsCreateMutationData =
  operations.PostV1CompaniesAttachmentResponse;

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
export function useCompanyAttachmentsCreateMutation(
  options?: MutationHookOptions<
    CompanyAttachmentsCreateMutationData,
    Error,
    CompanyAttachmentsCreateMutationVariables
  >,
): UseMutationResult<
  CompanyAttachmentsCreateMutationData,
  Error,
  CompanyAttachmentsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildCompanyAttachmentsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyCompanyAttachmentsCreate(): MutationKey {
  return ["@gusto/embedded-api", "companyAttachments", "create"];
}

export function buildCompanyAttachmentsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: CompanyAttachmentsCreateMutationVariables,
  ) => Promise<CompanyAttachmentsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyCompanyAttachmentsCreate(),
    mutationFn: function companyAttachmentsCreateMutationFn({
      request,
      options,
    }): Promise<CompanyAttachmentsCreateMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(companyAttachmentsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
