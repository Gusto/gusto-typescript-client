/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { companyBenefitsCreate } from "../funcs/companyBenefitsCreate.js";
import { companyBenefitsDelete } from "../funcs/companyBenefitsDelete.js";
import { companyBenefitsGet } from "../funcs/companyBenefitsGet.js";
import { companyBenefitsGetAll } from "../funcs/companyBenefitsGetAll.js";
import { companyBenefitsGetEmployeeBenefits } from "../funcs/companyBenefitsGetEmployeeBenefits.js";
import { companyBenefitsGetRequirements } from "../funcs/companyBenefitsGetRequirements.js";
import { companyBenefitsGetSummary } from "../funcs/companyBenefitsGetSummary.js";
import { companyBenefitsGetSupported } from "../funcs/companyBenefitsGetSupported.js";
import { companyBenefitsList } from "../funcs/companyBenefitsList.js";
import { companyBenefitsUpdate } from "../funcs/companyBenefitsUpdate.js";
import { companyBenefitsUpdateEmployeeBenefits } from "../funcs/companyBenefitsUpdateEmployeeBenefits.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
  DeleteV1CompanyBenefitsCompanyBenefitIdResponse,
} from "../models/operations/deletev1companybenefitscompanybenefitid.js";
import {
  GetV1BenefitsRequest,
  GetV1BenefitsResponse,
} from "../models/operations/getv1benefits.js";
import {
  GetV1BenefitsBenefitIdRequest,
  GetV1BenefitsBenefitIdResponse,
} from "../models/operations/getv1benefitsbenefitid.js";
import {
  GetV1BenefitsBenefitsIdRequirementsRequest,
  GetV1BenefitsBenefitsIdRequirementsResponse,
} from "../models/operations/getv1benefitsbenefitsidrequirements.js";
import {
  GetV1BenefitsCompanyBenefitIdSummaryRequest,
  GetV1BenefitsCompanyBenefitIdSummaryResponse,
} from "../models/operations/getv1benefitscompanybenefitidsummary.js";
import {
  GetV1CompaniesCompanyIdCompanyBenefitsRequest,
  GetV1CompaniesCompanyIdCompanyBenefitsResponse,
} from "../models/operations/getv1companiescompanyidcompanybenefits.js";
import {
  GetV1CompanyBenefitsCompanyBenefitIdRequest,
  GetV1CompanyBenefitsCompanyBenefitIdResponse,
} from "../models/operations/getv1companybenefitscompanybenefitid.js";
import {
  GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
  GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
} from "../models/operations/getv1companybenefitscompanybenefitidemployeebenefits.js";
import {
  PostV1CompaniesCompanyIdCompanyBenefitsRequest,
  PostV1CompaniesCompanyIdCompanyBenefitsResponse,
} from "../models/operations/postv1companiescompanyidcompanybenefits.js";
import {
  PutV1CompanyBenefitsCompanyBenefitIdRequest,
  PutV1CompanyBenefitsCompanyBenefitIdResponse,
} from "../models/operations/putv1companybenefitscompanybenefitid.js";
import {
  PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
  PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse,
} from "../models/operations/putv1companybenefitscompanybenefitidemployeebenefits.js";
import { unwrapAsync } from "../types/fp.js";

export class CompanyBenefits extends ClientSDK {
  /**
   * Create a company benefit
   *
   * @remarks
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * scope: `company_benefits:write`
   */
  async create(
    request: PostV1CompaniesCompanyIdCompanyBenefitsRequest,
    options?: RequestOptions,
  ): Promise<PostV1CompaniesCompanyIdCompanyBenefitsResponse> {
    return unwrapAsync(companyBenefitsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get benefits for a company
   *
   * @remarks
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
   *
   * scope: `company_benefits:read`
   */
  async list(
    request: GetV1CompaniesCompanyIdCompanyBenefitsRequest,
    options?: RequestOptions,
  ): Promise<GetV1CompaniesCompanyIdCompanyBenefitsResponse> {
    return unwrapAsync(companyBenefitsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a company benefit
   *
   * @remarks
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * When with_employee_benefits parameter with true value is passed, employee_benefits:read scope is required to return employee_benefits.
   *
   * scope: `company_benefits:read`
   */
  async get(
    request: GetV1CompanyBenefitsCompanyBenefitIdRequest,
    options?: RequestOptions,
  ): Promise<GetV1CompanyBenefitsCompanyBenefitIdResponse> {
    return unwrapAsync(companyBenefitsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a company benefit
   *
   * @remarks
   * Company benefits represent the benefits that a company is offering to employees. This ties together a particular supported benefit with the company-specific information for the offering of that benefit.
   *
   * Note that company benefits can be deactivated only when no employees are enrolled.
   *
   * scope: `company_benefits:write`
   */
  async update(
    request: PutV1CompanyBenefitsCompanyBenefitIdRequest,
    options?: RequestOptions,
  ): Promise<PutV1CompanyBenefitsCompanyBenefitIdResponse> {
    return unwrapAsync(companyBenefitsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a company benefit
   *
   * @remarks
   * The following must be true in order to delete a company benefit
   *   - There are no employee benefits associated with the company benefit
   *   - There are no payroll items associated with the company benefit
   *   - The benefit is not managed by a Partner or by Gusto (type must be 'External')
   *
   * scope: `company_benefits:write`
   */
  async delete(
    request: DeleteV1CompanyBenefitsCompanyBenefitIdRequest,
    options?: RequestOptions,
  ): Promise<DeleteV1CompanyBenefitsCompanyBenefitIdResponse> {
    return unwrapAsync(companyBenefitsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all benefits supported by Gusto
   *
   * @remarks
   * Returns all benefits supported by Gusto.
   *
   * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
   *
   * scope: `benefits:read`
   */
  async getAll(
    request: GetV1BenefitsRequest,
    options?: RequestOptions,
  ): Promise<GetV1BenefitsResponse> {
    return unwrapAsync(companyBenefitsGetAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a supported benefit by ID
   *
   * @remarks
   * Returns a benefit supported by Gusto.
   *
   * The benefit object in Gusto contains high level information about a particular benefit type and its tax considerations. When companies choose to offer a benefit, they are creating a Company Benefit object associated with a particular benefit.
   *
   * scope: `benefits:read`
   */
  async getSupported(
    request: GetV1BenefitsBenefitIdRequest,
    options?: RequestOptions,
  ): Promise<GetV1BenefitsBenefitIdResponse> {
    return unwrapAsync(companyBenefitsGetSupported(
      this,
      request,
      options,
    ));
  }

  /**
   * Get company benefit summary by company benefit id.
   *
   * @remarks
   * Returns summary benefit data for the requested company benefit id.
   *
   * Benefits containing PHI are only visible to applications with the `company_benefits:read:phi` scope.
   *
   * scope: `company_benefits:read`
   */
  async getSummary(
    request: GetV1BenefitsCompanyBenefitIdSummaryRequest,
    options?: RequestOptions,
  ): Promise<GetV1BenefitsCompanyBenefitIdSummaryResponse> {
    return unwrapAsync(companyBenefitsGetSummary(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all employee benefits for a company benefit
   *
   * @remarks
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   *
   * Returns an array of all employee benefits enrolled for this company benefit.
   *
   * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
   *
   * scope: `employee_benefits:read`
   */
  async getEmployeeBenefits(
    request: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
    options?: RequestOptions,
  ): Promise<GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse> {
    return unwrapAsync(companyBenefitsGetEmployeeBenefits(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk update employee benefits for a company benefit
   *
   * @remarks
   * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
   *
   * Create or update(if the employee is already enrolled in the company benefit previously) an employee benefit for the company benefit.
   *
   * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
   *
   * scope: `employee_benefits:write`
   */
  async updateEmployeeBenefits(
    request: PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest,
    options?: RequestOptions,
  ): Promise<PutV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse> {
    return unwrapAsync(companyBenefitsUpdateEmployeeBenefits(
      this,
      request,
      options,
    ));
  }

  /**
   * Get benefit fields requirements by ID
   *
   * @remarks
   * Returns field requirements for the requested benefit type.
   *
   * scope: `benefits:read`
   */
  async getRequirements(
    request: GetV1BenefitsBenefitsIdRequirementsRequest,
    options?: RequestOptions,
  ): Promise<GetV1BenefitsBenefitsIdRequirementsResponse> {
    return unwrapAsync(companyBenefitsGetRequirements(
      this,
      request,
      options,
    ));
  }
}
