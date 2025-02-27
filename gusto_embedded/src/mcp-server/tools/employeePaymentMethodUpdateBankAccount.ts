/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeePaymentMethodUpdateBankAccount } from "../../funcs/employeePaymentMethodUpdateBankAccount.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema,
};

export const tool$employeePaymentMethodUpdateBankAccount: ToolDefinition<
  typeof args
> = {
  name: "employee-payment-method_update-bank-account",
  description: `Update an employee bank account

Updates an employee bank account.

scope: \`employee_payment_methods:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeePaymentMethodUpdateBankAccount(
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
