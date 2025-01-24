/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeePaymentMethodCreateBankAccount } from "../funcs/employeePaymentMethodCreateBankAccount.js";
import { employeePaymentMethodDeleteBankAccount } from "../funcs/employeePaymentMethodDeleteBankAccount.js";
import { employeePaymentMethodGet } from "../funcs/employeePaymentMethodGet.js";
import { employeePaymentMethodUpdate } from "../funcs/employeePaymentMethodUpdate.js";
import { employeePaymentMethodUpdateBankAccount } from "../funcs/employeePaymentMethodUpdateBankAccount.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class EmployeePaymentMethod extends ClientSDK {
  /**
   * Create an employee bank account
   *
   * @remarks
   * Creates an employee bank account. An employee can have multiple
   * bank accounts. Note that creating an employee bank account will also update
   * the employee's payment method.
   *
   * scope: `employee_payment_methods:write`
   */
  async createBankAccount(
    request: operations.PostV1EmployeesEmployeeIdBankAccountsRequest,
    options?: RequestOptions,
  ): Promise<components.EmployeeBankAccount> {
    return unwrapAsync(employeePaymentMethodCreateBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an employee bank account
   *
   * @remarks
   * Deletes an employee bank account. To update an employee's bank
   * account details, delete the bank account first and create a new one.
   *
   * scope: `employee_payment_methods:write`
   */
  async deleteBankAccount(
    request:
      operations.DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(employeePaymentMethodDeleteBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee bank account
   *
   * @remarks
   * Updates an employee bank account.
   *
   * scope: `employee_payment_methods:write`
   */
  async updateBankAccount(
    request: operations.PutV1EmployeesEmployeeIdBankAccountsRequest,
    options?: RequestOptions,
  ): Promise<components.EmployeeBankAccount> {
    return unwrapAsync(employeePaymentMethodUpdateBankAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee's payment method
   *
   * @remarks
   * Fetches an employee's payment method. An employee payment method
   * describes how the payment should be split across the employee's associated
   * bank accounts.
   *
   * scope: `employee_payment_methods:read`
   */
  async get(
    request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest,
    options?: RequestOptions,
  ): Promise<components.EmployeePaymentMethod> {
    return unwrapAsync(employeePaymentMethodGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee's payment method
   *
   * @remarks
   * Updates an employee's payment method. Note that creating an employee
   * bank account will also update the employee's payment method.
   *
   * scope: `employee_payment_methods:write`
   */
  async update(
    request: operations.PutV1EmployeesEmployeeIdPaymentMethodRequest,
    options?: RequestOptions,
  ): Promise<components.EmployeePaymentMethod> {
    return unwrapAsync(employeePaymentMethodUpdate(
      this,
      request,
      options,
    ));
  }
}
