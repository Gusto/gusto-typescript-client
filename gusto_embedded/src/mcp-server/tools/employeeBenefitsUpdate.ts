/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeBenefitsUpdate } from "../../funcs/employeeBenefitsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PutV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema,
};

export const tool$employeeBenefitsUpdate: ToolDefinition<typeof args> = {
  name: "employee-benefits_update",
  description: `Update an employee benefit

Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.

scope: \`employee_benefits:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeBenefitsUpdate(
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
