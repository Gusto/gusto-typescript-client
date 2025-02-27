/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { wireInRequestsSubmit } from "../../funcs/wireInRequestsSubmit.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutWireInRequestsWireInRequestUuidRequest$inboundSchema,
};

export const tool$wireInRequestsSubmit: ToolDefinition<typeof args> = {
  name: "wire-in-requests_submit",
  description: `Submit a wire in request

Submit a wire in request for a payment

scope: \`payrolls:run\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await wireInRequestsSubmit(
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
