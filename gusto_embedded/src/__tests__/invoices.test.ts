/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Invoices Get Invoices Invoice Period Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-invoices-invoice-period-example"),
  });

  const result = await gustoEmbedded.invoices.get({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    invoicePeriod: "2020-01",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    activeCompanies: [
      {
        companyUuid: "05ed3150-591e-4f8b-bfd5-55d478edd2d8",
        activeEmployees: 5,
        activeContractors: 3,
        initialInvoicePeriod: "2022-01",
      },
      {
        companyUuid: "9b37429c-e540-40fb-86b3-738ca9af65c7",
        activeEmployees: 0,
        activeContractors: 1,
        initialInvoicePeriod: "2023-05",
      },
    ],
  });
});

test("Invoices Get Invoices Invoice Period Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-invoices-invoice-period-Basic"),
  });

  const result = await gustoEmbedded.invoices.get({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    invoicePeriod: "2020-01",
  });
  expect(result).toBeDefined();
});

test("Invoices Get Invoices Invoice Period Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-invoices-invoice-period-Resource"),
  });

  const result = await gustoEmbedded.invoices.get({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    invoicePeriod: "2020-01",
  });
  expect(result).toBeDefined();
});

test("Invoices Get Invoices Invoice Period Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-invoices-invoice-period-Nested"),
  });

  const result = await gustoEmbedded.invoices.get({
    systemAccessAuth: process.env["GUSTOEMBEDDED_SYSTEM_ACCESS_AUTH"] ?? "",
  }, {
    invoicePeriod: "2020-01",
  });
  expect(result).toBeDefined();
});
