/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeEmploymentsUpdateTermination } from "../../funcs/employeeEmploymentsUpdateTermination.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1TerminationsEmployeeIdRequest$inboundSchema,
};

export const tool$employeeEmploymentsUpdateTermination: ToolDefinition<
  typeof args
> = {
  name: "employee-employments_update-termination",
  description: `Update an employee termination

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: \`employments:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeEmploymentsUpdateTermination(
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
