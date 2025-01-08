/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { employeeFormsGenerateW2 } from "../funcs/employeeFormsGenerateW2.js";
import { employeeFormsGet } from "../funcs/employeeFormsGet.js";
import { employeeFormsGetById } from "../funcs/employeeFormsGetById.js";
import { employeeFormsGetPdf } from "../funcs/employeeFormsGetPdf.js";
import { employeeFormsSign } from "../funcs/employeeFormsSign.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class EmployeeForms extends ClientSDK {
  /**
   * Generate a W2 form [DEMO]
   *
   * @remarks
   * > 🚧 Demo action
   * >
   * > This action is only available in the Demo environment
   *
   * Generates a W2 document for testing purposes.
   *
   * scope: `employees:write`
   */
  async generateW2(
    request: operations.PostV1SandboxGenerateW2Request,
    options?: RequestOptions,
  ): Promise<operations.PostV1SandboxGenerateW2Form> {
    return unwrapAsync(employeeFormsGenerateW2(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all employee forms
   *
   * @remarks
   * Get a list of all employee's forms
   *
   * scope: `employee_forms:read`
   */
  async get(
    request: operations.GetV1EmployeeFormsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Form>> {
    return unwrapAsync(employeeFormsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee form
   *
   * @remarks
   * Get an employee form
   *
   * scope: `employee_forms:read`
   */
  async getById(
    request: operations.GetV1EmployeeFormRequest,
    options?: RequestOptions,
  ): Promise<components.Form> {
    return unwrapAsync(employeeFormsGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Get the employee form pdf
   *
   * @remarks
   * Get the link to the employee form PDF
   *
   * scope: `employee_forms:read`
   */
  async getPdf(
    request: operations.GetV1EmployeeFormPdfRequest,
    options?: RequestOptions,
  ): Promise<components.FormPdf> {
    return unwrapAsync(employeeFormsGetPdf(
      this,
      request,
      options,
    ));
  }

  /**
   * Sign an employee form
   *
   * @remarks
   * Sign an employee form
   *
   * scope: `employee_forms:sign`
   */
  async sign(
    request: operations.PutV1EmployeeFormSignRequest,
    options?: RequestOptions,
  ): Promise<components.Form> {
    return unwrapAsync(employeeFormsSign(
      this,
      request,
      options,
    ));
  }
}
