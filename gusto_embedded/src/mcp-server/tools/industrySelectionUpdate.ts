/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { industrySelectionUpdate } from "../../funcs/industrySelectionUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1CompanyIndustryRequest$inboundSchema,
};

export const tool$industrySelectionUpdate: ToolDefinition<typeof args> = {
  name: "industry-selection_update",
  description: `Update a company industry selection

Update the company industry selection by passing in industry classification codes: [NAICS code](https://www.naics.com), [SICS code](https://siccode.com/) and industry title. Our UI is leveraging [Middesk API](https://docs.middesk.com/reference/introduction) to determine industry classification codes.

scope: \`companies:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await industrySelectionUpdate(
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
