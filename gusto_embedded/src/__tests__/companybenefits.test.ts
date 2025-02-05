/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Companybenefits Post V1 Companies Company Id Company Benefits Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-company_benefits-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description: "yuck vice between gee ugh ha",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    uuid: "d2cec746-caee-464a-bcaf-00d93f7049c9",
    benefitType: 1,
    active: true,
    description: "Kaiser Permanente",
    deletable: true,
    supportsPercentageAmounts: true,
    responsibleForEmployerTaxes: false,
    responsibleForEmployeeW2: false,
  });
});

test("Companybenefits Post V1 Companies Company Id Company Benefits Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-company_benefits-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description:
        "bulky electronics through for ick superb nudge embalm simple ouch",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Post V1 Companies Company Id Company Benefits Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-company_benefits-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description:
        "yahoo until planula conceal pfft partially till distant zowie nasalise",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Post V1 Companies Company Id Company Benefits Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-company_benefits-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.create({
    companyId: "<id>",
    requestBody: {
      description:
        "down ha who political inside bony procurement funny entwine institute",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Get V1 Company Benefits Company Benefit Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-company_benefits-company_benefit_id-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.get({
    companyBenefitId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    uuid: "d2cec746-caee-464a-bcaf-00d93f7049c9",
    active: true,
    description: "Kaiser Permanente",
    deletable: true,
    supportsPercentageAmounts: true,
    responsibleForEmployerTaxes: false,
    responsibleForEmployeeW2: false,
    employeeBenefits: [
      {
        employeeUuid: "ae44a0b2-3c89-41e1-91c8-5f8224a779ca",
        companyBenefitUuid: "d2cec746-caee-464a-bcaf-00d93f7049c9",
        active: true,
        deductAsPercentage: false,
        employeeDeduction: "3",
        companyContribution: "0",
        uuid: "9988f241-9aee-4383-bfca-eac79cf58135",
        contribution: {
          type: "amount",
          value: {},
        },
      },
    ],
  });
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
    requestBody: {
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      active: false,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    uuid: "d2cec746-caee-464a-bcaf-00d93f7049c9",
    benefitType: 1,
    active: true,
    description: "Kaiser Permanente",
    deletable: true,
    supportsPercentageAmounts: true,
    responsibleForEmployerTaxes: false,
    responsibleForEmployeeW2: false,
  });
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.update({
    companyBenefitId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Companybenefits Delete V1 Company Benefits Company Benefit Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-company_benefits-company_benefit_id-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.companyBenefits.delete({
    companyBenefitId: "<id>",
  });
});

test("Companybenefits Get V1 Benefits Supported Benefits", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-v1-benefits-Supported Benefits"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.getAll({});
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      benefitType: 1,
      name: "Medical Insurance",
      description: "Deductions and contributions for Medical Insurance",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: true,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 2,
      name: "Dental Insurance",
      description: "Deductions and contributions for Dental Insurance",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: true,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 3,
      name: "Vision Insurance",
      description: "Deductions and contributions for Vision Insurance",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: true,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 6,
      name: "Health Savings Account",
      description:
        "Health Savings Accounts (HSA) allow employees to be reimbursed for qualified medical expenses. Contributions are pre-tax and lower the total amount of tax paid by employees and the employer. Employers may also make tax-free contributions to employees' HSA. Remaining balances are carried over in next year.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: true,
      category: "Health",
    },
    {
      benefitType: 7,
      name: "Health FSA",
      description:
        "Flexible Spending Accounts (FSA) allow employees to be reimbursed for qualified medical expenses. Contributions are pre-tax and lower the total amount of tax paid by employees and the employer. Employers may also make tax-free contributions to employees' FSA. Remaining balances are not carried over in next year.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: true,
      category: "Health",
    },
    {
      benefitType: 11,
      name: "Dependent Care FSA",
      description:
        "Dependent Care FSA reimburses employees for expenses to care for dependents while the employee is at work (e.g. Daycares). Contributions are pre-tax and lower the total amount of tax paid by employees and the employer. Employers may also make tax-free contributions to employee FSA. Remaining balances are not carried over to the next year. Single parents or Married couples filing a joint return can elect up to $5000 per year. Married couples filing separate returns are limited to $2500 elections each.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: true,
      category: "Health",
    },
    {
      benefitType: 8,
      name: "SIMPLE IRA",
      description:
        "The SIMPLE IRA is a tax-deferred retirement savings plan for employees. It is often used by small businesses as an alternative to 401(k) due to its relatively low operating cost. Employers are required to contribute a specific percentage to an employee's SIMPLE IRA.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 105,
      name: "Roth 401(k)",
      description:
        "Roth 401(k) is an after-tax savings plan for employees. The standard maximum is $18,000, or $24,000 for employees over 50 years old.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 110,
      name: "Roth 403(b)",
      description:
        "Roth 403(b) is an after-tax savings plan for certain clerics, employees of public schools, and employees of other types of tax-exempt organizations. Contributions made by employees are taxable for federal and state withholding. Often, employers contribute additional pre-tax dollars to the employee’s Roth account to encourage saving for retirement.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 5,
      name: "401(k)",
      description:
        "401(k) is tax-deferred retirement savings plan for employees. The standard maximum is $18,000, or $24,000 for employees over 50 years old.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 9,
      name: "403(b)",
      description:
        "403(b) is tax-deferred retirement savings plan for certain clerics, employees of public schools, and employees of other types of tax-exempt organizations.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 108,
      name: "SEP-IRA",
      description:
        "A SEP-IRA is a pre-tax retirement savings plan where only the employer contributes. It is often used by small businesses as an alternative to 401(k) due to its relatively low operating cost. Employers are required to contribute the same percentage to all enrolled employees, with a maximum contribution of 25% of the employee’s compensation.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 109,
      name: "SARSEP",
      description:
        "A SARSEP is a pre-tax retirement savings plan used by small businesses as an alternative to 401(k) due to its relatively low operating cost. While new SARSEP plans are not available, there are still some companies that are grandfathered into the plan. Employers are required to contribute the same percentage to all enrolled employees, with a maximum contribution of 25% of the employee’s compensation.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: true,
      yearlyLimit: true,
      category: "Savings and Retirement",
    },
    {
      benefitType: 107,
      name: "Group-Term Life Insurance",
      description:
        "Group-Term Life Insurance for coverage in excess of $50,000 per employee is a taxable fringe benefit. See IRS Publication 15-B to determine the dollar value of the excess coverage.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 10,
      name: "Commuter Benefits (pre-tax)",
      description:
        "Tax-free commuter benefits for transit, vanpooling, bicycling, and work-related parking costs. The annual maximum contribution for this pre-tax benefit is in the IRS publication 15-B.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 106,
      name: "Personal Use of Company Car",
      description:
        "When an employee uses a company-owned car for personal matters, it is considered taxable benefit provided in-kind.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 111,
      name: "529 College Savings",
      description:
        "529 College Savings is an after-tax savings plan for employees designed to encourage saving for future college costs. This benefit should be reported as a taxable benefit and will therefore be taxed.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Other",
    },
    {
      benefitType: 112,
      name: "Student Loan Repayment",
      description:
        "Student Loan Repayment is an after-tax savings plan for employees to pay towards their outstanding student loans. An employee can choose to set aside after-tax dollars towards this benefit. These benefits should be reported as a taxable benefit and will therefore be taxed.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Other",
    },
    {
      benefitType: 998,
      name: "Short Term Disability (post-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 999,
      name: "Long Term Disability (post-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 996,
      name: "Short Term Disability (pre-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 997,
      name: "Long Term Disability (pre-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 991,
      name: "Voluntary Short Term Disability (post-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 992,
      name: "Voluntary Long Term Disability (post-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 993,
      name: "Voluntary Life (post-tax)",
      description:
        "Third Party Disability or Third Party Leave are policies offered by employers that pay an employee for a specific life event (maternity leave, injury). All payments made to employees come from a third-party, such as an insurer. For more information on the taxation of these plans, please refer to publication 15-A for more details.",
      pretax: false,
      posttax: true,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Health",
    },
    {
      benefitType: 113,
      name: "Commuter Parking",
      description:
        "Tax-free commuter benefits allow employees to reduce their monthly commuting expenses for transit, carpooling, bicycling, and work-related parking costs. Please note that there is an annual maximum for this pre-tax benefit. The maximum dollar amount is found in IRS Publication 15-B.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 114,
      name: "Commuter Transit",
      description:
        "Tax-free commuter benefits allow employees to reduce their monthly commuting expenses for transit, carpooling, bicycling, and work-related parking costs. Please note that there is an annual maximum for this pre-tax benefit. The maximum dollar amount is found in IRS Publication 15-B.",
      pretax: true,
      posttax: false,
      imputed: false,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 100,
      name: "Other (taxable)",
      description: "Other taxable benefit",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Other",
    },
    {
      benefitType: 201,
      name: "Cell Phone (taxable)",
      description:
        "Employer-sponsored benefits like this are called fringe benefits, and they don’t get special tax treatment—they’ll be reported as taxable wages on your employees’ paystubs.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 202,
      name: "Gym & Fitness (taxable)",
      description:
        "Employer-sponsored benefits like this are called fringe benefits, and they don’t get special tax treatment—they’ll be reported as taxable wages on your employees’ paystubs.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 203,
      name: "Housing (taxable)",
      description:
        "Employer-sponsored benefits like this are called fringe benefits, and they don’t get special tax treatment—they’ll be reported as taxable wages on your employees’ paystubs.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
    {
      benefitType: 204,
      name: "Wellness (taxable)",
      description:
        "Employer-sponsored benefits like this are called fringe benefits, and they don’t get special tax treatment—they’ll be reported as taxable wages on your employees’ paystubs.",
      pretax: false,
      posttax: true,
      imputed: true,
      healthcare: false,
      retirement: false,
      yearlyLimit: false,
      category: "Transportation",
    },
  ]);
});

test("Companybenefits Get V1 Benefits Benefit Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-v1-benefits-benefit_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.getSupportedBenefit({
    benefitId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    benefitType: 1,
    name: "Medical Insurance",
    description: "Deductions and contributions for Medical Insurance",
    pretax: true,
    posttax: false,
    imputed: false,
    healthcare: true,
    retirement: false,
    yearlyLimit: false,
  });
});

test("Companybenefits Get V1 Benefits Company Benefit Id Summary Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-benefits-company_benefit_id-summary-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.getSummary({
    companyBenefitId: "<id>",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    description: "Simple IRA",
    companyBenefitDeduction: "60.0",
    companyBenefitContribution: "30.0",
  });
});

test("Companybenefits Get V1 Company Benefits Company Benefit Id Employee Benefits Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-company_benefits-company_benefit_id-employee_benefits-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.getEmployeeBenefits({
    companyBenefitId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      version: "09j3d29jqdpj92109j9j2d90dq",
      active: true,
      employeeDeduction: "100.00",
      deductAsPercentage: false,
      employeeDeductionAnnualMaximum: "200.00",
      elective: false,
      companyContributionAnnualMaximum: "200.00",
      limitOption: null,
      catchUp: false,
      coverageAmount: null,
      deductionReducesTaxableIncome: null,
      coverageSalaryMultiplier: "0.00",
      companyContribution: "100.00",
      contributeAsPercentage: false,
      employeeUuid: "8f9f3f68-8fd3-499d-ade7-4a052e56494e",
      companyBenefitUuid: "54e37c27-43e6-4ae5-a5b2-e29895a133be",
      uuid: "e91ca856-a915-4339-9b18-29f9cd66b031",
    },
  ]);
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Employee Benefits Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-employee_benefits-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.bulkUpdateEmployeeBenefits(
    {
      companyBenefitId: "<id>",
      requestBody: {
        employeeBenefits: [
          {
            version: "09j3d29jqdpj92109j9j2d90dq",
            employeeUuid: "8f9f3f68-8fd3-499d-ade7-4a052e56494e",
          },
        ],
      },
    },
  );
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      version: "09j3d29jqdpj92109j9j2d90dq",
      active: true,
      employeeDeduction: "100.00",
      deductAsPercentage: false,
      employeeDeductionAnnualMaximum: "200.00",
      elective: false,
      companyContributionAnnualMaximum: "200.00",
      limitOption: null,
      catchUp: false,
      coverageAmount: null,
      deductionReducesTaxableIncome: null,
      coverageSalaryMultiplier: "0.00",
      companyContribution: "100.00",
      contributeAsPercentage: false,
      employeeUuid: "8f9f3f68-8fd3-499d-ade7-4a052e56494e",
      companyBenefitUuid: "54e37c27-43e6-4ae5-a5b2-e29895a133be",
      uuid: "e91ca856-a915-4339-9b18-29f9cd66b031",
    },
  ]);
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Employee Benefits Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-employee_benefits-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.bulkUpdateEmployeeBenefits(
    {
      companyBenefitId: "<id>",
      requestBody: {
        employeeBenefits: [],
      },
    },
  );
  expect(result).toBeDefined();
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Employee Benefits Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-employee_benefits-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.bulkUpdateEmployeeBenefits(
    {
      companyBenefitId: "<id>",
      requestBody: {
        employeeBenefits: [
          {
            employeeUuid: "<id>",
          },
          {
            employeeUuid: "<id>",
          },
          {
            employeeUuid: "<id>",
          },
        ],
      },
    },
  );
  expect(result).toBeDefined();
});

test("Companybenefits Put V1 Company Benefits Company Benefit Id Employee Benefits Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-company_benefits-company_benefit_id-employee_benefits-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.bulkUpdateEmployeeBenefits(
    {
      companyBenefitId: "<id>",
      requestBody: {
        employeeBenefits: [],
      },
    },
  );
  expect(result).toBeDefined();
});

test("Companybenefits Get V1 Benefits Benefits Id Requirements Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-benefits-benefits_id-requirements-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.companyBenefits.getRequirements({
    benefitId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    employeeDeduction: {
      required: true,
      editable: true,
      choices: [
        "<value>",
      ],
    },
    contribution: {
      required: true,
      editable: true,
      defaultValue: {
        value: "2",
        type: "percentage",
      },
      choices: [
        "percentage",
      ],
    },
    deductAsPercentage: {
      required: true,
      editable: true,
      choices: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
    catchUp: {
      required: true,
      editable: true,
      choices: [
        "<value>",
      ],
    },
    limitOption: {
      required: false,
      editable: false,
      choices: [
        "<value>",
      ],
    },
    companyContributionAnnualMaximum: {
      required: false,
      editable: false,
      choices: [
        "<value>",
        "<value>",
      ],
    },
    coverageSalaryMultiplier: {
      required: false,
      editable: false,
      choices: [
        "<value>",
        "<value>",
      ],
    },
    coverageAmount: {
      required: false,
      editable: false,
      choices: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
  });
});
