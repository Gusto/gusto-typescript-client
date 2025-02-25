/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeBenefitsGet } from "../../funcs/employeeBenefitsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$inboundSchema,
};

export const tool$employeeBenefitsGet: ToolDefinition<typeof args> = {
  name: "employee-benefits_get",
  description: `Get all benefits for an employee

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

Returns an array of all employee benefits for this employee

Benefits containing PHI are only visible to applications with the \`employee_benefits:read:phi\` scope.

scope: \`employee_benefits:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeBenefitsGet(
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
