/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeTaxSetupGetFederalTaxes } from "../../funcs/employeeTaxSetupGetFederalTaxes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema,
};

export const tool$employeeTaxSetupGetFederalTaxes: ToolDefinition<typeof args> =
  {
    name: "employee-tax-setup_get-federal-taxes",
    description: `Get an employee's federal taxes

Get attributes relevant for an employee's federal taxes.

 scope: \`employee_federal_taxes:read\``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await employeeTaxSetupGetFederalTaxes(
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
