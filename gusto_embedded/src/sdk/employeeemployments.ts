/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeEmploymentsCreateRehire } from "../funcs/employeeEmploymentsCreateRehire.js";
import { employeeEmploymentsCreateTermination } from "../funcs/employeeEmploymentsCreateTermination.js";
import { employeeEmploymentsDeleteRehire } from "../funcs/employeeEmploymentsDeleteRehire.js";
import { employeeEmploymentsDeleteTermination } from "../funcs/employeeEmploymentsDeleteTermination.js";
import { employeeEmploymentsGetHistory } from "../funcs/employeeEmploymentsGetHistory.js";
import { employeeEmploymentsGetRehire } from "../funcs/employeeEmploymentsGetRehire.js";
import { employeeEmploymentsGetTermination } from "../funcs/employeeEmploymentsGetTermination.js";
import { employeeEmploymentsUpdateRehire } from "../funcs/employeeEmploymentsUpdateRehire.js";
import { employeeEmploymentsUpdateTermination } from "../funcs/employeeEmploymentsUpdateTermination.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class EmployeeEmployments extends ClientSDK {
  /**
   * Create an employee termination
   *
   * @remarks
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   *
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   *
   * scope: `employments:write`
   */
  async createTermination(
    request: operations.PostV1EmployeesEmployeeIdTerminationsRequest,
    options?: RequestOptions,
  ): Promise<components.Termination> {
    return unwrapAsync(employeeEmploymentsCreateTermination(
      this,
      request,
      options,
    ));
  }

  /**
   * Get terminations for an employee
   *
   * @remarks
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   *
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   *
   * scope: `employments:read`
   */
  async getTermination(
    request: operations.GetV1EmployeesEmployeeIdTerminationsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Termination>> {
    return unwrapAsync(employeeEmploymentsGetTermination(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an employee termination
   *
   * @remarks
   * Delete an employee termination.
   *
   * scope: `employments:write`
   */
  async deleteTermination(
    request: operations.DeleteV1EmployeesEmployeeIdTerminationsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(employeeEmploymentsDeleteTermination(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee termination
   *
   * @remarks
   * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
   *
   * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
   *
   * scope: `employments:write`
   */
  async updateTermination(
    request: operations.PutV1TerminationsEmployeeIdRequest,
    options?: RequestOptions,
  ): Promise<components.Termination> {
    return unwrapAsync(employeeEmploymentsUpdateTermination(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an employee rehire
   *
   * @remarks
   * Rehire is created whenever an employee is scheduled to return to the company.
   *
   * scope: `employments:write`
   */
  async createRehire(
    request: operations.PostV1EmployeesEmployeeIdRehireRequest,
    options?: RequestOptions,
  ): Promise<components.Rehire> {
    return unwrapAsync(employeeEmploymentsCreateRehire(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee rehire
   *
   * @remarks
   * Update an employee's rehire.
   *
   * scope: `employments:write`
   */
  async updateRehire(
    request: operations.PutV1EmployeesEmployeeIdRehireRequest,
    options?: RequestOptions,
  ): Promise<components.Rehire> {
    return unwrapAsync(employeeEmploymentsUpdateRehire(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee rehire
   *
   * @remarks
   * Retrieve an employee's rehire, which contains information on when the employee returns to work.
   *
   * scope: `employments:read`
   */
  async getRehire(
    request: operations.GetV1EmployeesEmployeeIdRehireRequest,
    options?: RequestOptions,
  ): Promise<components.Rehire> {
    return unwrapAsync(employeeEmploymentsGetRehire(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an employee rehire
   *
   * @remarks
   * Delete an employee rehire. An employee rehire cannot be deleted if it's active (past effective date).
   *
   * scope: `employments:write`
   */
  async deleteRehire(
    request: operations.DeleteV1EmployeesEmployeeIdRehireRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(employeeEmploymentsDeleteRehire(
      this,
      request,
      options,
    ));
  }

  /**
   * Get employment history for an employee
   *
   * @remarks
   * Retrieve the employment history for a given employee, which includes termination and rehire.
   *
   * scope: `employments:read`
   */
  async getHistory(
    request: operations.GetV1EmployeesEmployeeIdEmploymentHistoryRequest,
    options?: RequestOptions,
  ): Promise<Array<components.EmploymentHistoryList>> {
    return unwrapAsync(employeeEmploymentsGetHistory(
      this,
      request,
      options,
    ));
  }
}
