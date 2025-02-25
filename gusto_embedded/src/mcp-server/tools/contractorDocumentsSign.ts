/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorDocumentsSign } from "../../funcs/contractorDocumentsSign.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1ContractorDocumentSignRequest$inboundSchema,
};

export const tool$contractorDocumentsSign: ToolDefinition<typeof args> = {
  name: "contractor-documents_sign",
  description: `Sign a contractor document

Sign a contractor document.

scope: \`contractor_documents:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorDocumentsSign(
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
