/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeesList } from "../../funcs/employeesList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompaniesCompanyIdEmployeesRequest$inboundSchema,
};

export const tool$employeesList: ToolDefinition<typeof args> = {
  name: "employees_list",
  description: `Get employees of a company

Get all of the employees, onboarding, active and terminated, for a given company.

scope: \`employees:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeesList(
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
