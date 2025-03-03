/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { holidayPayPoliciesAddEmployees } from "../../funcs/holidayPayPoliciesAddEmployees.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PutCompaniesCompanyUuidHolidayPayPolicyAddRequest$inboundSchema,
};

export const tool$holidayPayPoliciesAddEmployees: ToolDefinition<typeof args> =
  {
    name: "holiday-pay-policies_add-employees",
    description: `Add employees to a company's holiday pay policy

Add employees to a company's holiday pay policy

scope: \`holiday_pay_policies:write\``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await holidayPayPoliciesAddEmployees(
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
