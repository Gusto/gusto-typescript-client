/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorPaymentMethodGetBankAccounts } from "../../funcs/contractorPaymentMethodGetBankAccounts.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.GetV1ContractorsContractorUuidBankAccountsRequest$inboundSchema,
};

export const tool$contractorPaymentMethodGetBankAccounts: ToolDefinition<
  typeof args
> = {
  name: "contractor-payment-method_get-bank-accounts",
  description: `Get all contractor bank accounts

Returns all contractor bank accounts.

scope: \`contractor_payment_methods:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await contractorPaymentMethodGetBankAccounts(
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
