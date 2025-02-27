/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeTaxSetupGetStateTaxes } from "../../funcs/employeeTaxSetupGetStateTaxes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema,
};

export const tool$employeeTaxSetupGetStateTaxes: ToolDefinition<typeof args> = {
  name: "employee-tax-setup_get-state-taxes",
  description: `Get an employee's state taxes

Get attributes relevant for an employee's state taxes.

The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.

Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the \`valid_from\` and \`valid_up_to\` must always be \`"2010-01-01"\` and \`null\` respectively.

## About filing new hire reports
Payroll Admins are responsible for filing a new hire report for each Employee. The \`file_new_hire_report\` question will only be listed if:
- the \`employee.onboarding_status\` is one of the following:
  - \`admin_onboarding_incomplete\`
  - \`self_onboarding_awaiting_admin_review\`
- that employee's work state requires filing a new hire report

scope: \`employee_state_taxes:read\`
`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeTaxSetupGetStateTaxes(
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
