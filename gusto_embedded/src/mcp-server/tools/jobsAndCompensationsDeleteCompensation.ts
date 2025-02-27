/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsDeleteCompensation } from "../../funcs/jobsAndCompensationsDeleteCompensation.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteV1CompensationsCompensationIdRequest$inboundSchema,
};

export const tool$jobsAndCompensationsDeleteCompensation: ToolDefinition<
  typeof args
> = {
  name: "jobs-and-compensations_delete-compensation",
  description: `Delete a compensation

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent \`effective_date\`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.

scope: \`jobs:write\`
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsDeleteCompensation(
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

    return formatResult(void 0, apiCall);
  },
};
