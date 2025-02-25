/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { garnishmentsCreate } from "../../funcs/garnishmentsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PostV1EmployeesEmployeeIdGarnishmentsRequest$inboundSchema,
};

export const tool$garnishmentsCreate: ToolDefinition<typeof args> = {
  name: "garnishments_create",
  description: `Create a garnishment

Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.

scope: \`garnishments:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await garnishmentsCreate(
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
