/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorsList } from "../../funcs/contractorsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompaniesCompanyUuidContractorsRequest$inboundSchema,
};

export const tool$contractorsList: ToolDefinition<typeof args> = {
  name: "contractors_list",
  description: `Get contractors of a company

Get all contractors, active and inactive, individual and business, for a company.

scope: \`contractors:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorsList(
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
