/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companyAttachmentGetDownloadUrl } from "../../funcs/companyAttachmentGetDownloadUrl.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompaniesAttachmentUrlRequest$inboundSchema,
};

export const tool$companyAttachmentGetDownloadUrl: ToolDefinition<typeof args> =
  {
    name: "company-attachment_get-download-url",
    description: `Get a temporary url to download the Company Attachment file

Retrieve a temporary url to download a attachment file uploaded
by the company.

scope: \`company_attachments:read\``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await companyAttachmentGetDownloadUrl(
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
