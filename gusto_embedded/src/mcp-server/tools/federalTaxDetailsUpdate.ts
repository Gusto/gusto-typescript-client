/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { federalTaxDetailsUpdate } from "../../funcs/federalTaxDetailsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations.PutV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema,
};

export const tool$federalTaxDetailsUpdate: ToolDefinition<typeof args> = {
  name: "federal-tax-details_update",
  description: `Update Federal Tax Details

Updates attributes relevant for a company's federal taxes.
This information is required is to onboard a company for use with Gusto Embedded Payroll.

scope: \`company_federal_taxes:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await federalTaxDetailsUpdate(
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
