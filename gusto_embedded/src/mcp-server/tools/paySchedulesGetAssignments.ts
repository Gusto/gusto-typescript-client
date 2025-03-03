/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paySchedulesGetAssignments } from "../../funcs/paySchedulesGetAssignments.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetV1CompaniesCompanyIdPaySchedulesAssignmentsRequest$inboundSchema,
};

export const tool$paySchedulesGetAssignments: ToolDefinition<typeof args> = {
  name: "pay-schedules_get-assignments",
  description: `Get pay schedule assignments for a company

This endpoint returns the current pay schedule assignment for a company, with pay schedule and employee/department mappings depending on the pay schedule type.

scope: \`pay_schedules:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paySchedulesGetAssignments(
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
