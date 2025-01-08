/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { contractorPaymentsCreate } from "../funcs/contractorPaymentsCreate.js";
import { contractorPaymentsDelete } from "../funcs/contractorPaymentsDelete.js";
import { contractorPaymentsFund } from "../funcs/contractorPaymentsFund.js";
import { contractorPaymentsGet } from "../funcs/contractorPaymentsGet.js";
import { contractorPaymentsGetById } from "../funcs/contractorPaymentsGetById.js";
import { contractorPaymentsGetReceipt } from "../funcs/contractorPaymentsGetReceipt.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ContractorPayments extends ClientSDK {
  /**
   * Get a single contractor payment receipt
   *
   * @remarks
   * Returns a contractor payment receipt.
   *
   * Notes:
   * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
   * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
   * * Hour and dollar amounts are returned as string representations of numeric decimals.
   * * Dollar amounts are represented to the cent.
   * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
   *
   * scope: `payrolls:read`
   */
  async getReceipt(
    request:
      operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest,
    options?: RequestOptions,
  ): Promise<components.ContractorPaymentReceipt> {
    return unwrapAsync(contractorPaymentsGetReceipt(
      this,
      request,
      options,
    ));
  }

  /**
   * Fund a contractor payment [DEMO]
   *
   * @remarks
   * > 🚧 Demo action
   * >
   * > This action is only available in the Demo environment
   *
   * Simulate funding a contractor payment. Funding only occurs automatically in the production environment when bank transactions are generated. Use this action in the demo environment to transition a contractor payment's `status` from `Unfunded` to `Funded`. A `Funded` status is required for generating a contractor payment receipt.
   *
   * scope: `payrolls:run`
   */
  async fund(
    request: operations.GetV1ContractorPaymentsContractorPaymentUuidFundRequest,
    options?: RequestOptions,
  ): Promise<components.ContractorPayment> {
    return unwrapAsync(contractorPaymentsFund(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a contractor payment
   *
   * @remarks
   * Pay a contractor. Information needed depends on the contractor's wage type (hourly vs fixed)
   *
   * scope: `payrolls:run`
   */
  async create(
    request: operations.PostV1CompaniesCompanyIdContractorPaymentsRequest,
    options?: RequestOptions,
  ): Promise<components.ContractorPayment> {
    return unwrapAsync(contractorPaymentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get contractor payments for a company
   *
   * @remarks
   * Returns an object containing individual contractor payments, within a given time period, including totals.
   *
   * scope: `payrolls:read`
   */
  async get(
    request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1CompaniesCompanyIdContractorPaymentsResponseBody> {
    return unwrapAsync(contractorPaymentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a single contractor payment
   *
   * @remarks
   * Returns a single contractor payment.
   * scope: `payrolls:read`
   */
  async getById(
    request:
      operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    options?: RequestOptions,
  ): Promise<components.ContractorPayment> {
    return unwrapAsync(contractorPaymentsGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel a contractor payment
   *
   * @remarks
   * Cancels and deletes a contractor payment. If the contractor payment has already started processing ("may_cancel": true), the payment cannot be cancelled.
   *
   * scope: `payrolls:run`
   */
  async delete(
    request:
      operations.DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(contractorPaymentsDelete(
      this,
      request,
      options,
    ));
  }
}
