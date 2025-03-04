/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeesCreate } from "../funcs/employeesCreate.js";
import { employeesCreateHistorical } from "../funcs/employeesCreateHistorical.js";
import { employeesDelete } from "../funcs/employeesDelete.js";
import { employeesGet } from "../funcs/employeesGet.js";
import { employeesGetCustomFields } from "../funcs/employeesGetCustomFields.js";
import { employeesGetOnboardingStatus } from "../funcs/employeesGetOnboardingStatus.js";
import { employeesGetTimeOffActivities } from "../funcs/employeesGetTimeOffActivities.js";
import { employeesList } from "../funcs/employeesList.js";
import { employeesUpdate } from "../funcs/employeesUpdate.js";
import { employeesUpdateOnboardingDocumentsConfig } from "../funcs/employeesUpdateOnboardingDocumentsConfig.js";
import { employeesUpdateOnboardingStatus } from "../funcs/employeesUpdateOnboardingStatus.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Employees extends ClientSDK {
  /**
   * Create an employee
   *
   * @remarks
   * Create an employee.
   *
   * scope: `employees:manage`
   */
  async create(
    request: operations.PostV1EmployeesRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1EmployeesResponse> {
    return unwrapAsync(employeesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get employees of a company
   *
   * @remarks
   * Get all of the employees, onboarding, active and terminated, for a given company.
   *
   * scope: `employees:read`
   */
  async list(
    request: operations.GetV1CompaniesCompanyIdEmployeesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1CompaniesCompanyIdEmployeesResponse> {
    return unwrapAsync(employeesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a historical employee
   *
   * @remarks
   * Create a historical employee, an employee that was previously dismissed from the company in the current year.
   *
   * scope: `employees:manage`
   */
  async createHistorical(
    request: operations.PostV1HistoricalEmployeesRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1HistoricalEmployeesResponse> {
    return unwrapAsync(employeesCreateHistorical(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee
   *
   * @remarks
   * Get an employee.
   *
   * scope: `employees:read`
   */
  async get(
    request: operations.GetV1EmployeesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1EmployeesResponse> {
    return unwrapAsync(employeesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee
   *
   * @remarks
   * Update an employee.
   *
   * scope: `employees:write`
   */
  async update(
    request: operations.PutV1EmployeesRequest,
    options?: RequestOptions,
  ): Promise<operations.PutV1EmployeesResponse> {
    return unwrapAsync(employeesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an onboarding employee
   *
   * @remarks
   * Use this endpoint to delete an employee who is in onboarding. Deleting
   * an onboarded employee is not allowed and will return a 422 response. Please check out the Terminations api
   * if you need to terminate an onboarded employee.
   *
   * scope: `employees:manage`
   */
  async delete(
    request: operations.DeleteV1EmployeeRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteV1EmployeeResponse> {
    return unwrapAsync(employeesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee's custom fields
   *
   * @remarks
   * Returns a list of the employee's custom fields.
   *
   * scope: `employees:read`
   */
  async getCustomFields(
    request: operations.GetV1EmployeesEmployeeIdCustomFieldsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1EmployeesEmployeeIdCustomFieldsResponse> {
    return unwrapAsync(employeesGetCustomFields(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an employee's onboarding documents config
   *
   * @remarks
   * Indicate whether to include the Form I-9 for an employee during the onboarding process.
   *
   * scope: `employees:manage`
   */
  async updateOnboardingDocumentsConfig(
    request:
      operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PutV1EmployeesEmployeeIdOnboardingDocumentsConfigResponse
  > {
    return unwrapAsync(employeesUpdateOnboardingDocumentsConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the employee's onboarding status
   *
   * @remarks
   * # Description
   * Retrieves an employee's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
   *
   * scope: `employees:read`
   *
   * ## onboarding_status
   *
   * ### Admin-facilitated onboarding
   * | onboarding_status | Description |
   * |:------------------|------------:|
   * | `admin_onboarding_incomplete` | Admin needs to complete the full employee-onboarding. |
   * | `onboarding_completed` | Employee has been fully onboarded and verified. |
   *
   * ### Employee self-onboarding
   * | onboarding_status | Description |
   * |:------------------|------------:|
   * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the employee. |
   * | `self_onboarding_pending_invite` | Admin has the intention to invite the employee to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
   * | `self_onboarding_invited` | Employee has been sent an invitation to self-onboard. |
   * | `self_onboarding_invited_started` | Employee has started the self-onboarding process. |
   * | `self_onboarding_invited_overdue` | Employee's start date has passed, and employee has still not completed self-onboarding. |
   * | `self_onboarding_completed_by_employee` | Employee has completed entering in their information. The status should be updated via API to "self_onboarding_awaiting_admin_review" from here, once the Admin has started reviewing. |
   * | `self_onboarding_awaiting_admin_review` | Admin has started to verify the employee's information. |
   * | `onboarding_completed` | Employee has been fully onboarded and verified. |
   *
   * ## onboarding_steps
   *
   * | onboarding_steps | Requirement(s) to be completed |
   * |:-----------------|-------------------------------:|
   * | `personal_details` | Add employee's first name, last name, email, date of birth, social security number |
   * | `compensation_details` | Associate employee to a job & compensation. |
   * | `add_work_address` | Add employee work address. |
   * | `add_home_address` | Add employee home address. |
   * | `federal_tax_setup` | Set up federal tax withholdings. |
   * | `state_tax_setup` | Set up state tax withholdings. |
   * | `direct_deposit_setup` | (optional) Set up employee's direct deposit. |
   * | `employee_form_signing` | Employee forms (e.g., W4, direct deposit authorization) are generated & signed. |
   * | `file_new_hire_report` | File a new hire report for this employee. |
   * | `admin_review` | Admin reviews & confirms employee details (only required for Employee self-onboarding) |
   */
  async getOnboardingStatus(
    request: operations.GetV1EmployeesEmployeeIdOnboardingStatusRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1EmployeesEmployeeIdOnboardingStatusResponse> {
    return unwrapAsync(employeesGetOnboardingStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Update the employee's onboarding status
   *
   * @remarks
   * scope: `employees:manage`
   *
   * Updates an employee's onboarding status.
   * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the employee.
   *
   * | Action | current onboarding_status | new onboarding_status |
   * |:------------------|:------------:|----------:|
   * | Mark an employee as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_pending_invite` |
   * | Invite an employee to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_pending_invite` | `self_onboarding_invited` |
   * | Cancel an employee's self-onboarding | `self_onboarding_invited` or `self_onboarding_pending_invite` | `admin_onboarding_incomplete` |
   * | Review an employee's self-onboarded info | `self_onboarding_completed_by_employee` | `self_onboarding_awaiting_admin_review` |
   * | Finish an employee's onboarding | `admin_onboarding_incomplete` or `self_onboarding_awaiting_admin_review` | `onboarding_completed` |
   */
  async updateOnboardingStatus(
    request: operations.PutV1EmployeesEmployeeIdOnboardingStatusRequest,
    options?: RequestOptions,
  ): Promise<operations.PutV1EmployeesEmployeeIdOnboardingStatusResponse> {
    return unwrapAsync(employeesUpdateOnboardingStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Get employee time off activities
   *
   * @remarks
   * Get employee time off activities.
   *
   * scope: `employee_time_off_activities:read`
   */
  async getTimeOffActivities(
    request: operations.GetVersionEmployeesTimeOffActivitiesRequest,
    options?: RequestOptions,
  ): Promise<operations.GetVersionEmployeesTimeOffActivitiesResponse> {
    return unwrapAsync(employeesGetTimeOffActivities(
      this,
      request,
      options,
    ));
  }
}
