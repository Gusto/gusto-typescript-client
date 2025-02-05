/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Jobsandcompensations Post V1 Jobs Job Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("post-v1-jobs-job_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createJob({
    employeeId: "<id>",
    requestBody: {
      title: "Regional Manager",
      hireDate: "2020-12-21",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
    version: "d0e719137f89ca3dd334dd4cc248ffbb",
    employeeUuid: "948daac8-4355-4ece-9e2a-229898accb22",
    hireDate: "2020-01-20",
    title: "Account Director",
    primary: true,
    rate: "78000.00",
    paymentUnit: "Year",
    currentCompensationUuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
    stateWcCovered: true,
    stateWcClassCode: "null,",
    compensations: [
      {
        uuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
        version: "994b75511d1debac5d7e2ddeae13679f",
        jobUuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
        rate: "78000.00",
        paymentUnit: "Year",
        flsaStatus: "Exempt",
        effectiveDate: "2021-01-20",
        adjustForMinimumWage: false,
        minimumWages: [],
      },
    ],
  });
});

test("Jobsandcompensations Post V1 Jobs Job Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("post-v1-jobs-job_id-Basic"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createJob({
    employeeId: "<id>",
    requestBody: {
      title: "<value>",
      hireDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Post V1 Jobs Job Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("post-v1-jobs-job_id-Resource"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createJob({
    employeeId: "<id>",
    requestBody: {
      title: "<value>",
      hireDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Post V1 Jobs Job Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("post-v1-jobs-job_id-Nested"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createJob({
    employeeId: "<id>",
    requestBody: {
      title: "<value>",
      hireDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Get V1 Employees Employee Id Jobs Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-employees-employee_id-jobs-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.getJobs({
    employeeId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
      version: "6c0ed1521e8b86eb36bd4455a63a2dac",
      employeeUuid: "948daac8-4355-4ece-9e2a-229898accb22",
      hireDate: "2020-01-20",
      title: "Client Support Director",
      primary: true,
      rate: "70000.00",
      paymentUnit: "Year",
      currentCompensationUuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
      stateWcCovered: true,
      stateWcClassCode: "null,",
      compensations: [
        {
          uuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
          version: "2cd4b18662395eb53bcf80d5b5447f36",
          jobUuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
          rate: "70000.00",
          paymentUnit: "Year",
          flsaStatus: "Exempt",
          effectiveDate: "2021-01-20",
          adjustForMinimumWage: false,
          minimumWages: [],
        },
      ],
    },
  ]);
});

test("Jobsandcompensations Get V1 Jobs Job Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-v1-jobs-job_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.getJob({
    jobId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
    version: "d0e719137f89ca3dd334dd4cc248ffbb",
    employeeUuid: "948daac8-4355-4ece-9e2a-229898accb22",
    hireDate: "2020-01-20",
    title: "Account Director",
    primary: true,
    rate: "78000.00",
    paymentUnit: "Year",
    currentCompensationUuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
    stateWcCovered: true,
    stateWcClassCode: "null,",
    compensations: [
      {
        uuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
        version: "994b75511d1debac5d7e2ddeae13679f",
        jobUuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
        rate: "78000.00",
        paymentUnit: "Year",
        flsaStatus: "Exempt",
        effectiveDate: "2021-01-20",
        adjustForMinimumWage: false,
        minimumWages: [],
      },
    ],
  });
});

test("Jobsandcompensations Put V1 Jobs Job Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-jobs-job_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.update({
    jobId: "<id>",
    requestBody: {
      version: "gr78930htutrz444kuytr3s5hgxykuveb523fwl8sir",
      title: "Regional Manager",
      hireDate: "2020-12-21",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
    version: "d0e719137f89ca3dd334dd4cc248ffbb",
    employeeUuid: "948daac8-4355-4ece-9e2a-229898accb22",
    hireDate: "2020-01-20",
    title: "Account Director",
    primary: true,
    rate: "78000.00",
    paymentUnit: "Year",
    currentCompensationUuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
    stateWcCovered: true,
    stateWcClassCode: "null,",
    compensations: [
      {
        uuid: "ea8b0b90-1112-4f9d-bb93-bf029bc8537a",
        version: "994b75511d1debac5d7e2ddeae13679f",
        jobUuid: "d6d1035e-8a21-4e1d-89d5-fa894f9aff97",
        rate: "78000.00",
        paymentUnit: "Year",
        flsaStatus: "Exempt",
        effectiveDate: "2021-01-20",
        adjustForMinimumWage: false,
        minimumWages: [],
      },
    ],
  });
});

test("Jobsandcompensations Put V1 Jobs Job Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-jobs-job_id-Basic"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.update({
    jobId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Put V1 Jobs Job Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-jobs-job_id-Resource"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.update({
    jobId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Put V1 Jobs Job Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-jobs-job_id-Nested"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.update({
    jobId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Delete V1 Jobs Job Id", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("delete-v1-jobs-job_id"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.jobsAndCompensations.deleteJob({
    jobId: "<id>",
  });
});

test("Jobsandcompensations Get V1 Jobs Job Id Compensations Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-jobs-job_id-compensations-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.getCompensations({
    jobId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "db57832c-d8bc-43a7-ae99-0a04480ff037",
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
      rate: "70.00",
      paymentUnit: "Hour",
      flsaStatus: "Nonexempt",
      effectiveDate: "2020-12-11",
      adjustForMinimumWage: false,
      minimumWages: [],
    },
    {
      uuid: "a4d9ba9c-32cc-4cc1-a5bc-6ef4cd653e7a",
      version: "cc59bd3879d655fb940a1f6b675f2ad9",
      jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
      rate: "5.00",
      paymentUnit: "Hour",
      flsaStatus: "Nonexempt",
      effectiveDate: "2018-12-11",
      adjustForMinimumWage: true,
      minimumWages: [
        {
          uuid: "edeea5af-ecd6-4b1c-b5de-5cff2d302738",
          wage: "7.25",
          effectiveDate: "2018-12-11",
        },
      ],
    },
  ]);
});

test("Jobsandcompensations Post V1 Compensations Compensation Id Exempt", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-compensations-compensation_id-Exempt",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createCompensation({
    jobId: "<id>",
    requestBody: {
      rate: "60000.00",
      paymentUnit: "Year",
      flsaStatus: "Exempt",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "db57832c-d8bc-43a7-ae99-0a04480ff037",
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "60000.00",
    paymentUnit: "Year",
    flsaStatus: "Exempt",
    effectiveDate: "2020-12-11",
    adjustForMinimumWage: false,
    minimumWages: [],
  });
});

test("Jobsandcompensations Post V1 Compensations Compensation Id Minimum Wage Adjusted", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-compensations-compensation_id-Minimum Wage Adjusted",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createCompensation({
    jobId: "<id>",
    requestBody: {
      rate: "7.00",
      paymentUnit: "Hour",
      effectiveDate: "2023-01-01",
      flsaStatus: "Nonexempt",
      adjustForMinimumWage: true,
      minimumWages: [
        {
          uuid: "340832db-ab28-4112-9e10-28dd1711835f",
        },
      ],
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "a4d9ba9c-32cc-4cc1-a5bc-6ef4cd653e7a",
    version: "cc59bd3879d655fb940a1f6b675f2ad9",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "5.00",
    paymentUnit: "Hour",
    flsaStatus: "Nonexempt",
    effectiveDate: "2018-12-11",
    adjustForMinimumWage: true,
    minimumWages: [
      {
        uuid: "edeea5af-ecd6-4b1c-b5de-5cff2d302738",
        wage: "7.25",
        effectiveDate: "2018-12-11",
      },
    ],
  });
});

test("Jobsandcompensations Post V1 Compensations Compensation Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-compensations-compensation_id-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createCompensation({
    jobId: "<id>",
    requestBody: {
      paymentUnit: "Paycheck",
      flsaStatus: "Commission Only Nonexempt",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Post V1 Compensations Compensation Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-compensations-compensation_id-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createCompensation({
    jobId: "<id>",
    requestBody: {
      paymentUnit: "Hour",
      flsaStatus: "Commission Only Exempt",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Post V1 Compensations Compensation Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-compensations-compensation_id-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.createCompensation({
    jobId: "<id>",
    requestBody: {
      paymentUnit: "Month",
      flsaStatus: "Commission Only Exempt",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Get V1 Compensations Compensation Id Exempt", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-compensations-compensation_id-Exempt",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.getCompensation({
    compensationId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "db57832c-d8bc-43a7-ae99-0a04480ff037",
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "60000.00",
    paymentUnit: "Year",
    flsaStatus: "Exempt",
    effectiveDate: "2020-12-11",
    adjustForMinimumWage: false,
    minimumWages: [],
  });
});

test("Jobsandcompensations Get V1 Compensations Compensation Id Minimum Wage Adjusted", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-compensations-compensation_id-Minimum Wage Adjusted",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.getCompensation({
    compensationId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "a4d9ba9c-32cc-4cc1-a5bc-6ef4cd653e7a",
    version: "cc59bd3879d655fb940a1f6b675f2ad9",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "5.00",
    paymentUnit: "Hour",
    flsaStatus: "Nonexempt",
    effectiveDate: "2018-12-11",
    adjustForMinimumWage: true,
    minimumWages: [
      {
        uuid: "edeea5af-ecd6-4b1c-b5de-5cff2d302738",
        wage: "7.25",
        effectiveDate: "2018-12-11",
      },
    ],
  });
});

test("Jobsandcompensations Put V1 Compensations Compensation Id Exempt", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-compensations-compensation_id-Exempt",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.updateCompensation({
    compensationId: "<id>",
    requestBody: {
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      rate: "60000.00",
      paymentUnit: "Year",
      flsaStatus: "Exempt",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "db57832c-d8bc-43a7-ae99-0a04480ff037",
    version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "60000.00",
    paymentUnit: "Year",
    flsaStatus: "Exempt",
    effectiveDate: "2020-12-11",
    adjustForMinimumWage: false,
    minimumWages: [],
  });
});

test("Jobsandcompensations Put V1 Compensations Compensation Id Minimum Wage Adjusted", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-compensations-compensation_id-Minimum Wage Adjusted",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.updateCompensation({
    compensationId: "<id>",
    requestBody: {
      version: "98jr3289h3298hr9329gf9egskt3kagri32qqgiqe3872",
      rate: "7.00",
      paymentUnit: "Hour",
      flsaStatus: "Nonexempt",
      adjustForMinimumWage: true,
      minimumWages: [
        {
          uuid: "340832db-ab28-4112-9e10-28dd1711835f",
        },
      ],
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "a4d9ba9c-32cc-4cc1-a5bc-6ef4cd653e7a",
    version: "cc59bd3879d655fb940a1f6b675f2ad9",
    jobUuid: "d8f8fbe7-496d-4b69-86f0-1e2d1b73a086",
    rate: "5.00",
    paymentUnit: "Hour",
    flsaStatus: "Nonexempt",
    effectiveDate: "2018-12-11",
    adjustForMinimumWage: true,
    minimumWages: [
      {
        uuid: "edeea5af-ecd6-4b1c-b5de-5cff2d302738",
        wage: "7.25",
        effectiveDate: "2018-12-11",
      },
    ],
  });
});

test("Jobsandcompensations Put V1 Compensations Compensation Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-compensations-compensation_id-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.updateCompensation({
    compensationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Put V1 Compensations Compensation Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-compensations-compensation_id-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.updateCompensation({
    compensationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Put V1 Compensations Compensation Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-compensations-compensation_id-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.jobsAndCompensations.updateCompensation({
    compensationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Jobsandcompensations Delete V1 Compensations Compensation Id", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("delete-v1-compensations-compensation_id"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.jobsAndCompensations.deleteCompensation({
    compensationId: "<id>",
  });
});
