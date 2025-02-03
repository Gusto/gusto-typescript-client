/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Achtransactions Get Ach Transactions Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient("get-ach-transactions-Example"),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.achTransactions.get({
    companyUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      uuid: "123e4567-e89b-12d3-a456-426655440000",
      companyUuid: "456e7890-e12b-34c5-d678-901234567890",
      paymentEventType: "Payroll",
      paymentEventUuid: "789e0123-e45f-67ab-c890-123456789012",
      recipientType: "Employee",
      recipientUuid: "012e3456-f78d-90ab-12cd-345678901234",
      errorCode: "<value>",
      transactionType: "Credit employee pay",
      paymentStatus: "submitted",
      paymentDirection: "credit",
      paymentEventCheckDate: "2023-10-02T00:00:00Z",
      paymentDate: "2023-10-17T00:00:00Z",
      amount: "123.00",
      description: "PAY 380654",
    },
  ]);
});
