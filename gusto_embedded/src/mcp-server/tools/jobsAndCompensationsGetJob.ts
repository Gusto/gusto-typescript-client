/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsGetJob } from "../../funcs/jobsAndCompensationsGetJob.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1JobsJobIdRequest$inboundSchema,
};

export const tool$jobsAndCompensationsGetJob: ToolDefinition<typeof args> = {
  name: "jobs-and-compensations_get-job",
  description: `Get a job

Get a job.

scope: \`jobs:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsGetJob(
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
