/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paySchedulesGet } from "../../funcs/paySchedulesGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest$inboundSchema,
};

export const tool$paySchedulesGet: ToolDefinition<typeof args> = {
  name: "pay-schedules_get",
  description: `Get a pay schedule

The pay schedule object in Gusto captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

scope: \`pay_schedules:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paySchedulesGet(
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
