/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeOffPoliciesCreate } from "../../funcs/timeOffPoliciesCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest$inboundSchema,
};

export const tool$timeOffPoliciesCreate: ToolDefinition<typeof args> = {
  name: "time-off-policies_create",
  description: `Create a time off policy

Create a time off policy

scope: \`time_off_policies:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await timeOffPoliciesCreate(
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
