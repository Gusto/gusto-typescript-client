/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationsRetrieve } from "../../funcs/locationsRetrieve.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1LocationsLocationIdRequest$inboundSchema,
};

export const tool$locationsRetrieve: ToolDefinition<typeof args> = {
  name: "locations_retrieve",
  description: `Get a location

Get a location.

scope: \`companies:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await locationsRetrieve(
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
