/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companiesCreateAdmin } from "../../funcs/companiesCreateAdmin.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.PostV1CompaniesCompanyIdAdminsRequest$inboundSchema,
};

export const tool$companiesCreateAdmin: ToolDefinition<typeof args> = {
  name: "companies_create-admin",
  description: `Create an admin for the company

Creates a new admin for a company.
If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.

scope: \`company_admin:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await companiesCreateAdmin(
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
