/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companyFormsGet } from "../../funcs/companyFormsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompanyFormRequest$inboundSchema,
};

export const tool$companyFormsGet: ToolDefinition<typeof args> = {
  name: "company-forms_get",
  description: `Get a company form

Get a company form

scope: \`company_forms:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await companyFormsGet(
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
