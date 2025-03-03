/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeEmploymentsGetTerminations } from "../../funcs/employeeEmploymentsGetTerminations.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1EmployeesEmployeeIdTerminationsRequest$inboundSchema,
};

export const tool$employeeEmploymentsGetTerminations: ToolDefinition<
  typeof args
> = {
  name: "employee-employments_get-terminations",
  description: `Get terminations for an employee

Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.

Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.

scope: \`employments:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeEmploymentsGetTerminations(
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
