/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { timeOffPoliciesAddEmployees } from "../funcs/timeOffPoliciesAddEmployees.js";
import { timeOffPoliciesCalculateAccruingTimeOffHours } from "../funcs/timeOffPoliciesCalculateAccruingTimeOffHours.js";
import { timeOffPoliciesCreate } from "../funcs/timeOffPoliciesCreate.js";
import { timeOffPoliciesDeactivate } from "../funcs/timeOffPoliciesDeactivate.js";
import { timeOffPoliciesGet } from "../funcs/timeOffPoliciesGet.js";
import { timeOffPoliciesGetAll } from "../funcs/timeOffPoliciesGetAll.js";
import { timeOffPoliciesRemoveEmployees } from "../funcs/timeOffPoliciesRemoveEmployees.js";
import { timeOffPoliciesUpdate } from "../funcs/timeOffPoliciesUpdate.js";
import { timeOffPoliciesUpdateBalance } from "../funcs/timeOffPoliciesUpdateBalance.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class TimeOffPolicies extends ClientSDK {
  /**
   * Calculate accruing time off hours
   *
   * @remarks
   * Returns a list of accruing time off for each time off policy associated with the employee.
   *
   * Factors affecting the accrued hours:
   *   * the time off policy accrual method (whether they get pay per hour worked, per hour paid, with / without overtime, accumulate time off based on pay period / calendar year / anniversary)
   *   * how many hours of work during this pay period
   *   * how many hours of PTO / sick hours taken during this pay period (for per hour paid policies only)
   *   * company pay schedule frequency (for per pay period)
   *
   * If none of the parameters is passed in, the accrued time off hour will be 0.
   *
   * scope: `payrolls:read`
   */
  async calculateAccruingTimeOffHours(
    request:
      operations.PostV1PayrollsPayrollIdCalculateAccruingTimeOffHoursRequest,
    options?: RequestOptions,
  ): Promise<Array<components.AccruingTimeOffHour>> {
    return unwrapAsync(timeOffPoliciesCalculateAccruingTimeOffHours(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a time off policy
   *
   * @remarks
   * Get a time off policy
   *
   * scope: `time_off_policies:read`
   */
  async get(
    request: operations.GetTimeOffPoliciesTimeOffPolicyUuidRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a time off policy
   *
   * @remarks
   * Update a time off policy
   *
   * scope: `time_off_policies:write`
   */
  async update(
    request: operations.PutTimeOffPoliciesTimeOffPolicyUuidRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all time off policies
   *
   * @remarks
   * Get all time off policies for a company
   *
   * scope: `time_off_policies:read`
   */
  async getAll(
    request: operations.GetCompaniesCompanyUuidTimeOffPoliciesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.TimeOffPolicy>> {
    return unwrapAsync(timeOffPoliciesGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a time off policy
   *
   * @remarks
   * Create a time off policy
   *
   * scope: `time_off_policies:write`
   */
  async create(
    request: operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Add employees to a time off policy
   *
   * @remarks
   * Add employees to a time off policy. Employees are required to have at least one job to be added to a time off policy. Accepts starting balances for non-unlimited policies
   *
   * scope: `time_off_policies:write`
   */
  async addEmployees(
    request:
      operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidAddEmployeesRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesAddEmployees(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove employees from a time off policy
   *
   * @remarks
   * Remove employees from a time off policy
   *
   * scope: `time_off_policies:write`
   */
  async removeEmployees(
    request:
      operations.PutV1TimeOffPoliciesTimeOffPolicyUuidRemoveEmployeesRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesRemoveEmployees(
      this,
      request,
      options,
    ));
  }

  /**
   * Update employee time off hour balances
   *
   * @remarks
   * Updates time off hours balances for employees for a time off policy
   *
   * scope: `time_off_policies:write`
   */
  async updateBalance(
    request:
      operations.PutVersionTimeOffPoliciesTimeOffPolicyUuidBalanceRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesUpdateBalance(
      this,
      request,
      options,
    ));
  }

  /**
   * Deactivate a time off policy
   *
   * @remarks
   * Deactivate a time off policy
   *
   * scope: `time_off_policies:write`
   */
  async deactivate(
    request: operations.PutV1TimeOffPoliciesTimeOffPolicyUuidDeactivateRequest,
    options?: RequestOptions,
  ): Promise<components.TimeOffPolicy> {
    return unwrapAsync(timeOffPoliciesDeactivate(
      this,
      request,
      options,
    ));
  }
}
