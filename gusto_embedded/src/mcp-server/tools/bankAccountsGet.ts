/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankAccountsGet } from "../../funcs/bankAccountsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1CompaniesCompanyIdBankAccountsRequest$inboundSchema,
};

export const tool$bankAccountsGet: ToolDefinition<typeof args> = {
  name: "bank-accounts_get",
  description: `Get all company bank accounts

Returns company bank accounts. Currently, we only support a single default bank account per company.

scope: \`company_bank_accounts:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await bankAccountsGet(
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
