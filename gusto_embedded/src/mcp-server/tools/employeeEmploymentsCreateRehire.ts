/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeEmploymentsCreateRehire } from "../../funcs/employeeEmploymentsCreateRehire.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV1EmployeesEmployeeIdRehireRequest$inboundSchema,
};

export const tool$employeeEmploymentsCreateRehire: ToolDefinition<typeof args> =
  {
    name: "employee-employments_create-rehire",
    description: `Create an employee rehire

Rehire is created whenever an employee is scheduled to return to the company.

scope: \`employments:write\``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await employeeEmploymentsCreateRehire(
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
