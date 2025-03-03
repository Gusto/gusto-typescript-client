/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeOffPoliciesGetAll } from "../../funcs/timeOffPoliciesGetAll.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema,
};

export const tool$timeOffPoliciesGetAll: ToolDefinition<typeof args> = {
  name: "time-off-policies_get-all",
  description: `Get all time off policies

Get all time off policies for a company

scope: \`time_off_policies:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await timeOffPoliciesGetAll(
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
