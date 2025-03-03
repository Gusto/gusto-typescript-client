/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companyAttachmentsCreate } from "../../funcs/companyAttachmentsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV1CompaniesAttachmentRequest$inboundSchema,
};

export const tool$companyAttachmentsCreate: ToolDefinition<typeof args> = {
  name: "company-attachments_create",
  description: `Create Company Attachment and Upload File

Upload a file and create a company attachment. We recommend uploading
PDF files for optimal compatibility. However, the following file types are
allowed: .qbb, .qbm, .gif, .jpg, .png, .pdf, .xls, .xlsx, .doc and .docx. 

scope: \`company_attachments:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await companyAttachmentsCreate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
