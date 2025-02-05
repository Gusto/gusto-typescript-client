/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Contractors Post V1 Companies Company Uuid Contractors Create An Individual Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Create an Individual contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Fixed",
      startDate: "2020-04-01",
      email: "johnson@johnson.com",
      firstName: "Johnson",
      lastName: "Johnson",
      workState: "CA",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "45c84535-4779-4ecb-af28-3bb833fa3225",
    isActive: true,
    hourlyRate: "50.0",
    fileNewHireReport: false,
  });
});

test("Contractors Post V1 Companies Company Uuid Contractors Create A Business Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Create a Business contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Fixed",
      startDate: "2020-04-01",
      businessName: "Johnson-Johnson Contractors",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "4113dafc-14a6-4275-a15f-9c79a520c8a0",
    isActive: true,
    hourlyRate: "50.0",
    fileNewHireReport: false,
  });
});

test("Contractors Post V1 Companies Company Uuid Contractors Individual Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Individual Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Fixed",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c9fc1ad3-c107-4e7b-aa21-2dd4b00a7a07",
    companyUuid: "b7457fec-3b76-43bb-9c6e-69cca4688942",
    wageType: "Hourly",
    isActive: false,
    version: "63859768485e218ccf8a449bb60f14ed",
    type: "Individual",
    firstName: "Kory",
    lastName: "Gottlieb",
    middleInitial: "P",
    businessName: null,
    ein: null,
    hasEin: false,
    email: "keira.west@mckenzie.org",
    startDate: "2022-01-01",
    address: null,
    hourlyRate: "60.00",
    fileNewHireReport: true,
    workState: "FL",
    onboarded: true,
    onboardingStatus: "onboarding_completed",
    paymentMethod: null,
    hasSsn: true,
    departmentUuid: null,
  });
});

test("Contractors Post V1 Companies Company Uuid Contractors Business Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Business Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Hourly",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c7c0659c-21a6-4b4e-b74c-9252576fc68c",
    companyUuid: "0ec4ae6e-e436-460d-b63c-94a14503d16f",
    wageType: "Fixed",
    isActive: true,
    version: "8aab307f1e8ed788697f8986346af559",
    type: "Business",
    firstName: null,
    lastName: null,
    middleInitial: null,
    businessName: "Labadie-Stroman",
    ein: "XX-XXX0001",
    hasEin: true,
    email: "jonatan@kerluke.info",
    startDate: "2022-01-01",
    address: null,
    hourlyRate: "0.00",
    fileNewHireReport: false,
    workState: null,
    onboarded: false,
    onboardingStatus: "admin_onboarding_incomplete",
    paymentMethod: null,
    hasSsn: false,
  });
});

test("Contractors Post V1 Companies Company Uuid Contractors Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Hourly",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Post V1 Companies Company Uuid Contractors Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Fixed",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Post V1 Companies Company Uuid Contractors Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_uuid-contractors-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.create({
    companyUuid: "<id>",
    requestBody: {
      wageType: "Hourly",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Get V1 Companies Company Uuid Contractors Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-companies-company_uuid-contractors-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.list({
    companyUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "c9fc1ad3-c107-4e7b-aa21-2dd4b00a7a07",
      companyUuid: "b7457fec-3b76-43bb-9c6e-69cca4688942",
      wageType: "Fixed",
      isActive: false,
      version: "63859768485e218ccf8a449bb60f14ed",
      type: "Individual",
      firstName: "Kory",
      lastName: "Gottlieb",
      middleInitial: "P",
      businessName: null,
      ein: null,
      hasEin: false,
      email: "keira.west@mckenzie.org",
      startDate: "2022-01-01",
      address: {
        street1: "621 Jast Row",
        street2: "Apt. 281",
        city: "Coral Springs",
        state: "FL",
        zip: "33065",
        country: "USA",
      },
      hourlyRate: "0.00",
      fileNewHireReport: false,
      workState: null,
      onboarded: true,
      onboardingStatus: "onboarding_completed",
      hasSsn: true,
      departmentUuid: "1802465d-4f68-4865-920c-1307ab095f12",
    },
    {
      uuid: "183a86f4-a803-4b38-9357-cd9b78e2560c",
      companyUuid: "afdd5d98-581b-4fc0-b988-706b7d23b2a5",
      wageType: "Fixed",
      isActive: true,
      version: "8aab307f1e8ed788697f8986346af559",
      type: "Business",
      firstName: null,
      lastName: null,
      middleInitial: null,
      businessName: "Labadie-Stroman",
      ein: "XX-XXX0001",
      hasEin: true,
      email: "jonatan@kerluke.info",
      startDate: "2022-01-01",
      address: {
        street1: "1625 Bednar Center",
        street2: "Apt. 480",
        city: "Port Charlotte",
        state: "FL",
        zip: "33954",
        country: "USA",
      },
      hourlyRate: "0.00",
      fileNewHireReport: false,
      workState: null,
      onboarded: true,
      onboardingStatus: "onboarding_completed",
      hasSsn: false,
    },
    {
      uuid: "ea1c2d65-b622-4899-bcb7-5cd0fe0232aa",
      companyUuid: "281c763d-a2ba-4f51-b9e8-b1ed61576d62",
      wageType: "Fixed",
      isActive: true,
      version: "b48c46abfed1487b873b442334b3c4ff",
      type: "Individual",
      firstName: "Chanel",
      lastName: "Boyle",
      middleInitial: "X",
      businessName: null,
      ein: null,
      hasEin: false,
      email: "loyal@hettinger.biz",
      address: {
        street1: "35913 Darrick Run",
        street2: "Apt. 913",
        city: "Cypress",
        state: "TX",
        zip: "77433",
        country: "USA",
      },
      hourlyRate: "0.00",
      fileNewHireReport: true,
      workState: "TX",
      onboarded: true,
      onboardingStatus: "onboarding_completed",
      hasSsn: true,
    },
  ]);
});

test("Contractors Get V1 Contractors Contractor Uuid Individual Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractors-contractor_uuid-Individual Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.get({
    contractorUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c9fc1ad3-c107-4e7b-aa21-2dd4b00a7a07",
    companyUuid: "b7457fec-3b76-43bb-9c6e-69cca4688942",
    wageType: "Hourly",
    isActive: false,
    version: "63859768485e218ccf8a449bb60f14ed",
    type: "Individual",
    firstName: "Kory",
    lastName: "Gottlieb",
    middleInitial: "P",
    businessName: null,
    ein: null,
    hasEin: false,
    email: "keira.west@mckenzie.org",
    startDate: "2022-01-01",
    address: {
      street1: "621 Jast Row",
      street2: "Apt. 281",
      city: "Coral Springs",
      state: "FL",
      zip: "33065",
      country: "USA",
    },
    hourlyRate: "60.00",
    fileNewHireReport: true,
    workState: "FL",
    onboarded: true,
    onboardingStatus: "onboarding_completed",
    paymentMethod: "Direct Deposit",
    hasSsn: true,
    departmentUuid: "56260b3d-c375-415c-b77a-75d99f717193",
  });
});

test("Contractors Get V1 Contractors Contractor Uuid Business Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractors-contractor_uuid-Business Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.get({
    contractorUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c7c0659c-21a6-4b4e-b74c-9252576fc68c",
    companyUuid: "0ec4ae6e-e436-460d-b63c-94a14503d16f",
    wageType: "Fixed",
    isActive: true,
    version: "8aab307f1e8ed788697f8986346af559",
    type: "Business",
    firstName: null,
    lastName: null,
    middleInitial: null,
    businessName: "Labadie-Stroman",
    ein: "XX-XXX0001",
    hasEin: true,
    email: "jonatan@kerluke.info",
    startDate: "2022-01-01",
    address: null,
    hourlyRate: "0.00",
    fileNewHireReport: false,
    workState: null,
    onboarded: false,
    onboardingStatus: "admin_onboarding_incomplete",
    paymentMethod: "Direct Deposit",
    hasSsn: false,
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Update An Individual Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Update an Individual Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "b48c46abfed1487b873b442334b3c4ff",
      wageType: "Hourly",
      startDate: "2021-01-01",
      hourlyRate: "20.00",
      firstName: "Chanel",
      lastName: "Boyle",
      middleInitial: "X",
      isActive: true,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "63ba7bbb-da29-4c1b-827d-792289357acf",
    isActive: true,
    hourlyRate: "50.0",
    fileNewHireReport: false,
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Update A Business Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Update a Business Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "b48c46abfed1487b873b442334b3c4ff",
      wageType: "Fixed",
      startDate: "2020-01-11",
      businessName: "Contracting Solutions",
      ein: "991113334",
      isActive: false,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "72a92a7e-5b65-4564-908c-30ecaedc35c9",
    isActive: true,
    hourlyRate: "50.0",
    fileNewHireReport: false,
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Individual Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Individual Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c9fc1ad3-c107-4e7b-aa21-2dd4b00a7a07",
    companyUuid: "b7457fec-3b76-43bb-9c6e-69cca4688942",
    wageType: "Hourly",
    isActive: false,
    version: "63859768485e218ccf8a449bb60f14ed",
    type: "Individual",
    firstName: "Kory",
    lastName: "Gottlieb",
    middleInitial: "P",
    businessName: null,
    ein: null,
    hasEin: false,
    email: "keira.west@mckenzie.org",
    startDate: "2022-01-01",
    address: {
      street1: "621 Jast Row",
      street2: "Apt. 281",
      city: "Coral Springs",
      state: "FL",
      zip: "33065",
      country: "USA",
    },
    hourlyRate: "60.00",
    fileNewHireReport: true,
    workState: "FL",
    onboarded: true,
    onboardingStatus: "onboarding_completed",
    paymentMethod: "Direct Deposit",
    hasSsn: true,
    departmentUuid: "56260b3d-c375-415c-b77a-75d99f717193",
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Business Contractor", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Business Contractor",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "c7c0659c-21a6-4b4e-b74c-9252576fc68c",
    companyUuid: "0ec4ae6e-e436-460d-b63c-94a14503d16f",
    wageType: "Fixed",
    isActive: true,
    version: "8aab307f1e8ed788697f8986346af559",
    type: "Business",
    firstName: null,
    lastName: null,
    middleInitial: null,
    businessName: "Labadie-Stroman",
    ein: "XX-XXX0001",
    hasEin: true,
    email: "jonatan@kerluke.info",
    startDate: "2022-01-01",
    address: null,
    hourlyRate: "0.00",
    fileNewHireReport: false,
    workState: null,
    onboarded: false,
    onboardingStatus: "admin_onboarding_incomplete",
    paymentMethod: "Direct Deposit",
    hasSsn: false,
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.update({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
      startDate: "2020-01-11",
      hourlyRate: "40.0",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Delete V1 Contractors Contractor Uuid", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("delete-v1-contractors-contractor_uuid"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.contractors.delete({
    contractorUuid: "<id>",
  });
});

test("Contractors Get V1 Contractors Contractor Uuid Onboarding Status Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractors-contractor_uuid-onboarding_status-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.getOnboardingStatus({
    contractorUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "bc57832c-d8bc-43a7-ae99-3a03380ff037",
    onboardingStatus: "admin_onboarding_incomplete",
    onboardingSteps: [
      {
        title: "Basic details",
        id: "basic_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Enter compensation details",
        id: "compensation_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Add an address",
        id: "add_address",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Payment details",
        id: "payment_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Sign and acknowledge documents",
        id: "sign_documents",
        required: false,
        completed: false,
        requirements: [
          "basic_details,",
          "add_address",
        ],
      },
      {
        title: "File new hire report",
        id: "file_new_hire_report",
        required: false,
        completed: false,
        requirements: [
          "basic_details",
        ],
      },
    ],
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Onboarding Status Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-onboarding_status-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateOnboardingStatus({
    contractorUuid: "<id>",
    requestBody: {},
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "bc57832c-d8bc-43a7-ae99-3a03380ff037",
    onboardingStatus: "admin_onboarding_incomplete",
    onboardingSteps: [
      {
        title: "Basic details",
        id: "basic_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Enter compensation details",
        id: "compensation_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Add an address",
        id: "add_address",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Payment details",
        id: "payment_details",
        required: true,
        completed: false,
        requirements: [],
      },
      {
        title: "Sign and acknowledge documents",
        id: "sign_documents",
        required: false,
        completed: false,
        requirements: [
          "basic_details,",
          "add_address",
        ],
      },
      {
        title: "File new hire report",
        id: "file_new_hire_report",
        required: false,
        completed: false,
        requirements: [
          "basic_details",
        ],
      },
    ],
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Onboarding Status Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-onboarding_status-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateOnboardingStatus({
    contractorUuid: "<id>",
    requestBody: {},
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Onboarding Status Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-onboarding_status-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateOnboardingStatus({
    contractorUuid: "<id>",
    requestBody: {},
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Onboarding Status Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-onboarding_status-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateOnboardingStatus({
    contractorUuid: "<id>",
    requestBody: {},
  });
  expect(result).toBeDefined();
});

test("Contractors Get V1 Contractors Contractor Uuid Address Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractors-contractor_uuid-address-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.getAddress({
    contractorUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    version: "23323096a8015e32d9795fadf1fd300d",
    street1: "999 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
    active: true,
    contractorUuid: "9779767c-6044-48e0-bf68-aeb370b9a2e7",
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Address Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-address-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateAddress({
    contractorUuid: "<id>",
    requestBody: {
      version: "fe75bd065ff48b91c35fe8ff842f986c",
      street1: "300 3rd Street",
      street2: "<value>",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    version: "23323096a8015e32d9795fadf1fd300d",
    street1: "999 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
    active: true,
    contractorUuid: "9779767c-6044-48e0-bf68-aeb370b9a2e7",
  });
});

test("Contractors Put V1 Contractors Contractor Uuid Address Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-address-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateAddress({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Address Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-address-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateAddress({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Contractors Put V1 Contractors Contractor Uuid Address Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "put-v1-contractors-contractor_uuid-address-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractors.updateAddress({
    contractorUuid: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});
