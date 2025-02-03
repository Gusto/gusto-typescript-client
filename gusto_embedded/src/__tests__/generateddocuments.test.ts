/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Generateddocuments Get V1 Generated Documents Document Type Request Uuid Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-generated_documents-document_type-request_uuid-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.generatedDocuments.get({
    documentType: "printable_payroll_checks",
    requestUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    requestUuid: "p83d0ca8-7d41-42a9-834y-7d218ef6cb20",
    status: "succeeded",
    documentUrls: [
      "https://document.url.com",
    ],
  });
});
