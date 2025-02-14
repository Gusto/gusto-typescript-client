/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { externalPayrollsCalculateTaxes } from "../funcs/externalPayrollsCalculateTaxes.js";
import { externalPayrollsCreate } from "../funcs/externalPayrollsCreate.js";
import { externalPayrollsDelete } from "../funcs/externalPayrollsDelete.js";
import { externalPayrollsFinalizeTaxLiabilities } from "../funcs/externalPayrollsFinalizeTaxLiabilities.js";
import { externalPayrollsGet } from "../funcs/externalPayrollsGet.js";
import { externalPayrollsListTaxLiabilities } from "../funcs/externalPayrollsListTaxLiabilities.js";
import { externalPayrollsRetrieve } from "../funcs/externalPayrollsRetrieve.js";
import { externalPayrollsUpdate } from "../funcs/externalPayrollsUpdate.js";
import { externalPayrollsUpdateTaxLiabilities } from "../funcs/externalPayrollsUpdateTaxLiabilities.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ExternalPayrolls extends ClientSDK {
  /**
   * Create a new external payroll for a company
   *
   * @remarks
   * Creates a new external payroll for the company.
   *
   * scope: `external_payrolls:write`
   */
  async create(
    request: operations.PostV1ExternalPayrollRequest,
    options?: RequestOptions,
  ): Promise<components.ExternalPayroll> {
    return unwrapAsync(externalPayrollsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get external payrolls for a company
   *
   * @remarks
   * Get an external payroll for a given company.
   *
   * scope: `external_payrolls:read`
   */
  async get(
    request: operations.GetV1CompanyExternalPayrollsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ExternalPayrollBasic>> {
    return unwrapAsync(externalPayrollsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an external payroll
   *
   * @remarks
   * Get an external payroll for a given company.
   *
   * scope: `external_payrolls:read`
   */
  async retrieve(
    request: operations.GetV1ExternalPayrollRequest,
    options?: RequestOptions,
  ): Promise<components.ExternalPayroll> {
    return unwrapAsync(externalPayrollsRetrieve(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an external payroll
   *
   * @remarks
   * Delete an external payroll.
   *
   * scope: `external_payrolls:write`
   */
  async delete(
    request: operations.DeleteV1ExternalPayrollRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(externalPayrollsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an external payroll
   *
   * @remarks
   * Update an external payroll with a list of external payroll items
   *
   * scope: `external_payrolls:write`
   */
  async update(
    request: operations.PutV1ExternalPayrollRequest,
    options?: RequestOptions,
  ): Promise<components.ExternalPayroll> {
    return unwrapAsync(externalPayrollsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get tax suggestions for an external payroll
   *
   * @remarks
   * Get tax suggestions for an external payroll. Earnings and/or benefits
   * data must be saved prior to the calculation in order to retrieve accurate
   * tax calculation.
   *
   * scope: `external_payrolls:read`
   */
  async calculateTaxes(
    request: operations.GetV1ExternalPayrollCalculateTaxesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.ExternalPayrollTaxSuggestions>> {
    return unwrapAsync(externalPayrollsCalculateTaxes(
      this,
      request,
      options,
    ));
  }

  /**
   * Get tax liabilities
   *
   * @remarks
   * Get tax liabilities from aggregate external payrolls for a company.
   *
   * scope: `external_payrolls:read`
   */
  async listTaxLiabilities(
    request: operations.GetV1TaxLiabilitiesRequest,
    options?: RequestOptions,
  ): Promise<Array<Array<components.TaxLiabilitiesSelections>>> {
    return unwrapAsync(externalPayrollsListTaxLiabilities(
      this,
      request,
      options,
    ));
  }

  /**
   * Update tax liabilities
   *
   * @remarks
   * Update tax liabilities for a company.
   *
   * scope: `external_payrolls:write`
   */
  async updateTaxLiabilities(
    request: operations.PutV1TaxLiabilitiesRequest,
    options?: RequestOptions,
  ): Promise<Array<Array<components.TaxLiabilitiesSelections>>> {
    return unwrapAsync(externalPayrollsUpdateTaxLiabilities(
      this,
      request,
      options,
    ));
  }

  /**
   * Finalize tax liabilities options and convert into processed payrolls
   *
   * @remarks
   * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
   *
   * scope: `external_payrolls:write`
   */
  async finalizeTaxLiabilities(
    request: operations.PutV1TaxLiabilitiesFinishRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(externalPayrollsFinalizeTaxLiabilities(
      this,
      request,
      options,
    ));
  }
}
