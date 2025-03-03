/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorFormsGet } from "../../funcs/contractorFormsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1ContractorFormRequest$inboundSchema,
};

export const tool$contractorFormsGet: ToolDefinition<typeof args> = {
  name: "contractor-forms_get",
  description: `Get a contractor form

Get a contractor form

scope: \`contractor_forms:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorFormsGet(
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
