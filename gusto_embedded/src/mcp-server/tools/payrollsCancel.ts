/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { payrollsCancel } from "../../funcs/payrollsCancel.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$inboundSchema,
};

export const tool$payrollsCancel: ToolDefinition<typeof args> = {
  name: "payrolls_cancel",
  description: `Cancel a payroll

Transitions a \`processed\` payroll back to the \`unprocessed\` state. A payroll can be canceled if it meets both criteria:
- \`processed\` is true
- Current time is earlier than 3:30pm PT on the payroll_deadline

scope: \`payrolls:run\`
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await payrollsCancel(
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
