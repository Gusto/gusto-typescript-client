/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { departmentsCreate } from "../../funcs/departmentsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostDepartmentsRequest$inboundSchema,
};

export const tool$departmentsCreate: ToolDefinition<typeof args> = {
  name: "departments_create",
  description: `Create a department

Create a department

scope: \`departments:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await departmentsCreate(
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
