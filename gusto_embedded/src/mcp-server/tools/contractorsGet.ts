/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorsGet } from "../../funcs/contractorsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1ContractorsContractorUuidRequest$inboundSchema,
};

export const tool$contractorsGet: ToolDefinition<typeof args> = {
  name: "contractors_get",
  description: `Get a contractor

Get a contractor.

scope: \`contractors:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorsGet(
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
