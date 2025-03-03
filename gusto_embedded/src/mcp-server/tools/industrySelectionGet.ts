/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { industrySelectionGet } from "../../funcs/industrySelectionGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompanyIndustryRequest$inboundSchema,
};

export const tool$industrySelectionGet: ToolDefinition<typeof args> = {
  name: "industry-selection_get",
  description: `Get a company industry selection

Get industry selection for the company.

scope: \`companies:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await industrySelectionGet(
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
