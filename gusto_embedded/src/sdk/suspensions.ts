/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companiesSuspensionsGet } from "../funcs/companiesSuspensionsGet.js";
import { companiesSuspensionsSuspend } from "../funcs/companiesSuspensionsSuspend.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetCompaniesCompanyUuidSuspensionsRequest,
  GetCompaniesCompanyUuidSuspensionsResponse,
} from "../models/operations/getcompaniescompanyuuidsuspensions.js";
import {
  PostCompaniesCompanyUuidSuspensionsRequest,
  PostCompaniesCompanyUuidSuspensionsResponse,
} from "../models/operations/postcompaniescompanyuuidsuspensions.js";
import { unwrapAsync } from "../types/fp.js";

export class Suspensions extends ClientSDK {
  /**
   * Get suspensions for this company
   *
   * @remarks
   * Get existing suspension records for this company. A company may have multiple suspension records if they have suspended their Gusto account more than once.
   *
   * > 📘 To check if company is already suspended
   * >
   * > To determine if a company is _currently_ suspended, use the `is_suspended` and `company_status` fields in the [Get a company](https://docs.gusto.com/embedded-payroll/reference/get-v1-companies) endpoint.
   *
   * scope: `company_suspensions:read`
   */
  async get(
    request: GetCompaniesCompanyUuidSuspensionsRequest,
    options?: RequestOptions,
  ): Promise<GetCompaniesCompanyUuidSuspensionsResponse> {
    return unwrapAsync(companiesSuspensionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Suspend a company's account
   *
   * @remarks
   * Use this endpoint to suspend a company. After suspension, company will no longer be able to run payroll but will retain access to their information, such as retrieving employee info or retrieving past payrolls.
   *
   * scope: `company_suspensions:write`
   */
  async suspend(
    request: PostCompaniesCompanyUuidSuspensionsRequest,
    options?: RequestOptions,
  ): Promise<PostCompaniesCompanyUuidSuspensionsResponse> {
    return unwrapAsync(companiesSuspensionsSuspend(
      this,
      request,
      options,
    ));
  }
}
