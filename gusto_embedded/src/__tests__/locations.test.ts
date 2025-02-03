/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { RFCDate } from "../types/index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Locations Post V1 Companies Company Id Locations Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-locations-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.create({
    companyId: "<id>",
    requestBody: {
      phoneNumber: "8009360383",
      street1: "425 2nd Street",
      street2: "Suite 602",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    version: "7d9753112507b9dda4fb97910f39b06e",
    companyUuid: "6bf7807c-a5a0-4f4d-b2e7-3fbb4b2299fb",
    phoneNumber: "5825710808",
    street1: "412 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
    active: true,
    mailingAddress: false,
    filingAddress: false,
    createdAt: "2023-09-12T16:42:25.000-07:00",
    updatedAt: "2023-09-12T16:42:25.000-07:00",
  });
});

test("Locations Post V1 Companies Company Id Locations Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-locations-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.create({
    companyId: "<id>",
    requestBody: {
      phoneNumber: "741.279.0107 x857",
      street1: "<value>",
      city: "Grand Island",
      state: "Illinois",
      zip: "22031",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Post V1 Companies Company Id Locations Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-locations-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.create({
    companyId: "<id>",
    requestBody: {
      phoneNumber: "(263) 266-2050",
      street1: "<value>",
      city: "Lubowitzside",
      state: "Minnesota",
      zip: "27179",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Post V1 Companies Company Id Locations Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-locations-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.create({
    companyId: "<id>",
    requestBody: {
      phoneNumber: "824-550-4439 x01255",
      street1: "<value>",
      city: "South Barrett",
      state: "Georgia",
      zip: "80985-0183",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Get V1 Companies Company Id Locations Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-companies-company_id-locations-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.getAll({
    companyId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "04552eb9-7829-4b18-ae96-6983552948df",
      version: "7d9753112507b9dda4fb97910f39b06e",
      companyUuid: "6bf7807c-a5a0-4f4d-b2e7-3fbb4b2299fb",
      phoneNumber: "5825710808",
      street1: "412 Kiera Stravenue",
      street2: "Suite 391",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "USA",
      active: true,
      mailingAddress: false,
      filingAddress: false,
      createdAt: "2023-09-12T16:42:25.000-07:00",
      updatedAt: "2023-09-12T16:42:25.000-07:00",
    },
    {
      uuid: "fa94a2fd-11a8-4024-87ff-85c587d9d2b4",
      version: "15e6b9680e00f3122729e64e3cef3224",
      companyUuid: "6bf7807c-a5a0-4f4d-b2e7-3fbb4b2299fb",
      phoneNumber: "2866070827",
      street1: "644 Fay Vista",
      street2: "Suite 842",
      city: "Richmond",
      state: "VA",
      zip: "23218",
      country: "USA",
      active: true,
      mailingAddress: false,
      filingAddress: false,
      createdAt: "2023-09-12T16:42:25.000-07:00",
      updatedAt: "2023-09-12T16:42:25.000-07:00",
    },
  ]);
});

test("Locations Get V1 Locations Location Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-v1-locations-location_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.get({
    locationId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    version: "7d9753112507b9dda4fb97910f39b06e",
    companyUuid: "6bf7807c-a5a0-4f4d-b2e7-3fbb4b2299fb",
    phoneNumber: "5825710808",
    street1: "412 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
    active: true,
    mailingAddress: false,
    filingAddress: false,
    createdAt: "2023-09-12T16:42:25.000-07:00",
    updatedAt: "2023-09-12T16:42:25.000-07:00",
  });
});

test("Locations Put V1 Locations Location Id Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-locations-location_id-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.update({
    locationId: "<id>",
    requestBody: {
      version: "1928d0c378e519e9c03fb959bc959a6b",
      phoneNumber: "8009360383",
      street1: "425 2nd Street",
      street2: "Suite 602",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "USA",
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    version: "7d9753112507b9dda4fb97910f39b06e",
    companyUuid: "6bf7807c-a5a0-4f4d-b2e7-3fbb4b2299fb",
    phoneNumber: "5825710808",
    street1: "412 Kiera Stravenue",
    street2: "Suite 391",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "USA",
    active: true,
    mailingAddress: false,
    filingAddress: false,
    createdAt: "2023-09-12T16:42:25.000-07:00",
    updatedAt: "2023-09-12T16:42:25.000-07:00",
  });
});

test("Locations Put V1 Locations Location Id Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-locations-location_id-Basic"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.update({
    locationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Put V1 Locations Location Id Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-locations-location_id-Resource"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.update({
    locationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Put V1 Locations Location Id Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("put-v1-locations-location_id-Nested"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.update({
    locationId: "<id>",
    requestBody: {
      version: "<value>",
    },
  });
  expect(result).toBeDefined();
});

test("Locations Get V1 Locations Location Uuid Minimum Wages Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-locations-location_uuid-minimum_wages-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.locations.getMinimumWages({
    locationUuid: "<id>",
    effectiveDate: "2020-01-31",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "70c523ff-c71e-4474-9c83-a4ea51bd54a8",
      wage: "13.0",
      wageType: "Regular",
      effectiveDate: new RFCDate("2022-01-01"),
      authority: "State",
      notes: "Employers with 6 or more employees",
    },
  ]);
});
