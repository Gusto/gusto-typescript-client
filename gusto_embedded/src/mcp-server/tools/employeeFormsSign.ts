/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeFormsSign } from "../../funcs/employeeFormsSign.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PutV1EmployeeFormSignRequest$inboundSchema,
};

export const tool$employeeFormsSign: ToolDefinition<typeof args> = {
  name: "employee-forms_sign",
  description: `Sign an employee form

Sign an employee form.

The optional preparer attributes are only valid for I-9 form. When a preparer is used, the
first name, last name, street address, city, state, and zip for that preparer are all required.

scope: \`employee_forms:sign\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeFormsSign(
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
