/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorPaymentMethodGet } from "../../funcs/contractorPaymentMethodGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetV1ContractorsContractorUuidPaymentMethodRequest$inboundSchema,
};

export const tool$contractorPaymentMethodGet: ToolDefinition<typeof args> = {
  name: "contractor-payment-method_get",
  description: `Get a contractor's payment method

Fetches a contractor's payment method. A contractor payment method
describes how the payment should be split across the contractor's associated
bank accounts.

scope: \`contractor_payment_methods:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorPaymentMethodGet(
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
