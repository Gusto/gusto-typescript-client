/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsDelete } from "../../funcs/jobsAndCompensationsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteV1JobsJobIdRequest$inboundSchema,
};

export const tool$jobsAndCompensationsDelete: ToolDefinition<typeof args> = {
  name: "jobs-and-compensations_delete",
  description: `Delete an individual job

Deletes a specific job that an employee holds.

scope: \`jobs:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await jobsAndCompensationsDelete(
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
