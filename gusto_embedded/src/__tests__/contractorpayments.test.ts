/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { GustoEmbedded } from "../index.js";
import { RFCDate } from "../types/index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Contractorpayments Get V1 Contractor Payments Contractor Payment Uuid Receipt Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractor_payments-contractor_payment_uuid-receipt-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.getReceipt({
    contractorPaymentUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    contractorPaymentUuid: "afccb970-357e-4013-81f5-85dafc74f9b6",
    companyUuid: "c827aa0d-3928-4d5a-ab1f-400641a7d2b8",
    nameOfSender: "Torp and Sons and Sons",
    nameOfRecipient: "Patricia Hamill",
    debitDate: new RFCDate("2022-06-02"),
    license:
      "Your payroll provider partners with Gusto Inc. for payments processing. Gusto Inc. is a licensed money transmitter. Learn more on our license page.",
    licenseUri: "https://gusto.com/about/licenses",
    rightToRefund: "https://gusto.com/about/licenses",
    liabilityOfLicensee: "https://gusto.com/about/licenses",
    totals: {
      companyDebit: "748.34",
    },
    contractorPayments: [
      {
        contractorUuid: "f83d0bd8-7e20-43b9-834c-6d514ef6cb47",
        contractorFirstName: "Patricia",
        contractorLastName: "Hamill",
        contractorBusinessName: "",
        contractorType: "Individual",
        paymentMethod: "Direct Deposit",
        wage: "448.34",
        bonus: "248.00",
        reimbursement: "100.00",
      },
    ],
    licensee: {
      name: "Gusto, Zenpayroll Inc.",
      address: "525 20th St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94107",
      phoneNumber: "4157778888",
    },
  });
});

test("Contractorpayments Get V1 Contractor Payments Contractor Payment Uuid Fund Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractor_payments-contractor_payment_uuid-fund-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.fund({
    contractorPaymentUuid: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    contractorUuid: "bc57832c-d8bc-43a7-ae99-3a03380ff037",
    bonus: "20.0",
    date: "2020-10-19",
    hours: "40.0",
    paymentMethod: "Direct Deposit",
    reimbursement: "100.0",
    status: "Unfunded",
    hourlyRate: "18.0",
    mayCancel: true,
    wage: "0.0",
    wageType: "Hourly",
    wageTotal: "740.00",
  });
});

test("Contractorpayments Get V1 Contractor Payments Contractor Payment Uuid Fund Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractor_payments-contractor_payment_uuid-fund-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.fund({
    contractorPaymentUuid: "<id>",
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Get V1 Contractor Payments Contractor Payment Uuid Fund Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractor_payments-contractor_payment_uuid-fund-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.fund({
    contractorPaymentUuid: "<id>",
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Get V1 Contractor Payments Contractor Payment Uuid Fund Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-contractor_payments-contractor_payment_uuid-fund-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.fund({
    contractorPaymentUuid: "<id>",
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Post V1 Companies Company Id Contractor Payments Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-contractor_payments-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.create({
    companyId: "<id>",
    requestBody: {
      contractorUuid: "<id>",
      date: new RFCDate("2020-01-01"),
      wage: 5000,
      hours: 40,
      bonus: 500,
      reimbursement: 20,
    },
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    contractorUuid: "bc57832c-d8bc-43a7-ae99-3a03380ff037",
    bonus: "20.0",
    date: "2020-10-19",
    hours: "40.0",
    paymentMethod: "Direct Deposit",
    reimbursement: "100.0",
    status: "Unfunded",
    hourlyRate: "18.0",
    mayCancel: true,
    wage: "0.0",
    wageType: "Hourly",
    wageTotal: "740.00",
  });
});

test("Contractorpayments Post V1 Companies Company Id Contractor Payments Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-contractor_payments-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.create({
    companyId: "<id>",
    requestBody: {
      contractorUuid: "<id>",
      date: new RFCDate("2020-01-01"),
      wage: 5000,
      hours: 40,
      bonus: 500,
      reimbursement: 20,
    },
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Post V1 Companies Company Id Contractor Payments Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-contractor_payments-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.create({
    companyId: "<id>",
    requestBody: {
      contractorUuid: "<id>",
      date: new RFCDate("2020-01-01"),
      wage: 5000,
      hours: 40,
      bonus: 500,
      reimbursement: 20,
    },
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Post V1 Companies Company Id Contractor Payments Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "post-v1-companies-company_id-contractor_payments-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.create({
    companyId: "<id>",
    requestBody: {
      contractorUuid: "<id>",
      date: new RFCDate("2020-01-01"),
      wage: 5000,
      hours: 40,
      bonus: 500,
      reimbursement: 20,
    },
  });
  expect(result).toBeDefined();
});

test("Contractorpayments Get V1 Companies Company Id Contractor Payments Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-companies-company_id-contractor_payments-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.getPayments({
    companyId: "<id>",
    startDate: "2020-01-01",
    endDate: "2020-12-31",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Contractorpayments Get V1 Companies Company Id Contractor Payment Contractor Payment Example", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "get-v1-companies-company_id-contractor_payment-contractor-payment-Example",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  const result = await gustoEmbedded.contractorPayments.get({
    companyId: "<id>",
    contractorPaymentId: "<id>",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    uuid: "04552eb9-7829-4b18-ae96-6983552948df",
    contractorUuid: "bc57832c-d8bc-43a7-ae99-3a03380ff037",
    bonus: "20.0",
    date: "2020-10-19",
    hours: "40.0",
    paymentMethod: "Direct Deposit",
    reimbursement: "100.0",
    status: "Unfunded",
    hourlyRate: "18.0",
    mayCancel: true,
    wage: "0.0",
    wageType: "Hourly",
    wageTotal: "740.00",
  });
});

test("Contractorpayments Delete V1 Companies Company Id Contractor Payment Contractor Payment Basic", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-companies-company_id-contractor_payment-contractor-payment-Basic",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.contractorPayments.cancel({
    companyId: "<id>",
    contractorPaymentId: "<id>",
  });
});

test("Contractorpayments Delete V1 Companies Company Id Contractor Payment Contractor Payment Resource", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-companies-company_id-contractor_payment-contractor-payment-Resource",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.contractorPayments.cancel({
    companyId: "<id>",
    contractorPaymentId: "<id>",
  });
});

test("Contractorpayments Delete V1 Companies Company Id Contractor Payment Contractor Payment Nested", async () => {
  const gustoEmbedded = new GustoEmbedded({
    httpClient: createTestHTTPClient(
      "delete-v1-companies-company_id-contractor_payment-contractor-payment-Nested",
    ),
    companyAccessAuth: process.env["GUSTOEMBEDDED_COMPANY_ACCESS_AUTH"] ?? "",
  });

  await gustoEmbedded.contractorPayments.cancel({
    companyId: "<id>",
    contractorPaymentId: "<id>",
  });
});
