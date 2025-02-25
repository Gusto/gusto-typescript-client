/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeePaymentMethodUpdate } from "../../funcs/employeePaymentMethodUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema,
};

export const tool$employeePaymentMethodUpdate: ToolDefinition<typeof args> = {
  name: "employee-payment-method_update",
  description: `Update an employee's payment method

Updates an employee's payment method. Note that creating an employee
bank account will also update the employee's payment method.

scope: \`employee_payment_methods:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeePaymentMethodUpdate(
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
