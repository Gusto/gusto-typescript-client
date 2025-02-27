/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsGetCompensations } from "../../funcs/jobsAndCompensationsGetCompensations.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1JobsJobIdCompensationsRequest$inboundSchema,
};

export const tool$jobsAndCompensationsGetCompensations: ToolDefinition<
  typeof args
> = {
  name: "jobs-and-compensations_get-compensations",
  description: `Get compensations for a job

Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent \`effective_date\`. By default the API returns only the current compensation - see the \`include\` query parameter for retrieving all compensations.

Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same \`job_uuid\` as another will fail with a relevant error.

Use \`flsa_status\` to determine if an employee is eligible for overtime.

scope: \`jobs:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsGetCompensations(
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
