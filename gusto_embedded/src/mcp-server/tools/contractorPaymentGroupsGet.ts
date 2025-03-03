/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorPaymentGroupsGet } from "../../funcs/contractorPaymentGroupsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema,
};

export const tool$contractorPaymentGroupsGet: ToolDefinition<typeof args> = {
  name: "contractor-payment-groups_get",
  description: `Fetch a contractor payment group

Returns a contractor payment group with all associated contractor payments.

scope: \`payrolls:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorPaymentGroupsGet(
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
