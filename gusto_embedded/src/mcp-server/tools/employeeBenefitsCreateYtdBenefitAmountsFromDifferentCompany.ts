/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany } from "../../funcs/employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .PostEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$inboundSchema,
};

export const tool$employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany:
  ToolDefinition<typeof args> = {
    name: "employee-benefits_create-ytd-benefit-amounts-from-different-company",
    description: `Create year-to-date benefit amounts from a different company

Year-to-date benefit amounts from a different company represents the amount of money added to an employee's plan during a current year, made outside of the current contribution when they were employed at a different company.

This endpoint only supports passing outside contributions for 401(k) benefits.

scope: \`employee_benefits:write\``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await employeeBenefitsCreateYtdBenefitAmountsFromDifferentCompany(
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

      return formatResult(void 0, apiCall);
    },
  };
