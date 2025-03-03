/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { departmentsDelete } from "../../funcs/departmentsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteDepartmentRequest$inboundSchema,
};

export const tool$departmentsDelete: ToolDefinition<typeof args> = {
  name: "departments_delete",
  description: `Delete a department

Delete a department. You cannot delete a department until all employees and contractors have been removed.

scope: \`departments:write\`
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await departmentsDelete(
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
