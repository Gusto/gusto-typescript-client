/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeOffPoliciesGet } from "../../funcs/timeOffPoliciesGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest$inboundSchema,
};

export const tool$timeOffPoliciesGet: ToolDefinition<typeof args> = {
  name: "time-off-policies_get",
  description: `Get a time off policy

Get a time off policy

scope: \`time_off_policies:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await timeOffPoliciesGet(
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
