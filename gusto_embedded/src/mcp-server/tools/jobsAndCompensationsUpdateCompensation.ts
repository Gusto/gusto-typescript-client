/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsUpdateCompensation } from "../../funcs/jobsAndCompensationsUpdateCompensation.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1CompensationsCompensationIdRequest$inboundSchema,
};

export const tool$jobsAndCompensationsUpdateCompensation: ToolDefinition<
  typeof args
> = {
  name: "jobs-and-compensations_update-compensation",
  description: `Update a compensation

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent \`effective_date\`.

scope: \`jobs:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsUpdateCompensation(
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
