/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsCreateJob } from "../../funcs/jobsAndCompensationsCreateJob.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV1JobsJobIdRequest$inboundSchema,
};

export const tool$jobsAndCompensationsCreateJob: ToolDefinition<typeof args> = {
  name: "jobs-and-compensations_create-job",
  description: `Create a job

Create a job.

scope: \`jobs:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsCreateJob(
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
