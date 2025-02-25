/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeFormsGetPdf } from "../../funcs/employeeFormsGetPdf.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetV1EmployeeFormPdfRequest$inboundSchema,
};

export const tool$employeeFormsGetPdf: ToolDefinition<typeof args> = {
  name: "employee-forms_get-pdf",
  description: `Get the employee form pdf

Get the link to the employee form PDF

scope: \`employee_forms:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await employeeFormsGetPdf(
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
