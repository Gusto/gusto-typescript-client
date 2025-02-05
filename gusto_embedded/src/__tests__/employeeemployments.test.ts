/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Employeeemployments Post V1 Employees Employee Id Terminations Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-terminations-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createTermination({
    employeeId: "<id>",
    requestBody: {
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Post V1 Employees Employee Id Terminations Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-terminations-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createTermination({
    employeeId: "<id>",
    requestBody: {
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Post V1 Employees Employee Id Terminations Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-terminations-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createTermination({
    employeeId: "<id>",
    requestBody: {
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Delete V1 Employees Employee Id Terminations Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-employees-employee_id-terminations-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.employeeEmployments.deleteTermination({
    employeeId: "<id>",
  });
});

test("Employeeemployments Put V1 Terminations Employee Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-terminations-employee_id-Basic"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateTermination({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Put V1 Terminations Employee Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-terminations-employee_id-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateTermination({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Put V1 Terminations Employee Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-terminations-employee_id-Nested"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateTermination({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Post V1 Employees Employee Id Rehire Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-rehire-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createRehire({
    employeeId: "<id>",
    rehireBody: {
      effectiveDate: "<value>",
      fileNewHireReport: true,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Post V1 Employees Employee Id Rehire Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-rehire-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createRehire({
    employeeId: "<id>",
    rehireBody: {
      effectiveDate: "<value>",
      fileNewHireReport: false,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Post V1 Employees Employee Id Rehire Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-employees-employee_id-rehire-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.createRehire({
    employeeId: "<id>",
    rehireBody: {
      effectiveDate: "<value>",
      fileNewHireReport: true,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Put V1 Employees Employee Id Rehire Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-employees-employee_id-rehire-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateRehire({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
      fileNewHireReport: true,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Put V1 Employees Employee Id Rehire Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-employees-employee_id-rehire-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateRehire({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
      fileNewHireReport: true,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Put V1 Employees Employee Id Rehire Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-employees-employee_id-rehire-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.updateRehire({
    employeeId: "<id>",
    requestBody: {
      version: "<value>",
      effectiveDate: "<value>",
      fileNewHireReport: true,
      workLocationUuid: "<id>",
    },
  });
  expect(result).toBeDefined();
});

test("Employeeemployments Delete V1 Employees Employee Id Rehire Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-employees-employee_id-rehire-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.employeeEmployments.deleteRehire({
    employeeId: "<id>",
  });
});

test("Employeeemployments Get V1 Employees Employee Id Employment History Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-employees-employee_id-employment_history-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.employeeEmployments.getHistory({
    employeeId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      hireDate: "2023-05-30",
      terminationDate: "<value>",
      fileNewHireReport: true,
      twoPercentShareholder: false,
      employmentStatus: "seasonal",
    },
    {
      hireDate: "2021-02-02",
      terminationDate: "2023-03-01",
      fileNewHireReport: false,
      twoPercentShareholder: false,
      employmentStatus: "full_time",
    },
  ]);
});
