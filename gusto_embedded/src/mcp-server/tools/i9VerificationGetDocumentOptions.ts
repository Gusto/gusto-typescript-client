/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { i9VerificationGetDocumentOptions } from "../../funcs/i9VerificationGetDocumentOptions.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest$inboundSchema,
};

export const tool$i9VerificationGetDocumentOptions: ToolDefinition<
  typeof args
> = {
  name: "i9-verification_get-document-options",
  description: `Get an employee's I-9 verification document options

An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint returns the possible document options based on the employee's authorization status. These options can then be used to create the I-9 verification documents.

scope: \`i9_authorizations:read\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await i9VerificationGetDocumentOptions(
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
