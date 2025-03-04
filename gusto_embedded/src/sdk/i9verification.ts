/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { i9VerificationCreateDocuments } from "../funcs/i9VerificationCreateDocuments.js";
import { i9VerificationDeleteDocument } from "../funcs/i9VerificationDeleteDocument.js";
import { i9VerificationEmployerSign } from "../funcs/i9VerificationEmployerSign.js";
import { i9VerificationGetAuthorization } from "../funcs/i9VerificationGetAuthorization.js";
import { i9VerificationGetDocumentOptions } from "../funcs/i9VerificationGetDocumentOptions.js";
import { i9VerificationGetDocuments } from "../funcs/i9VerificationGetDocuments.js";
import { i9VerificationUpdate } from "../funcs/i9VerificationUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class I9Verification extends ClientSDK {
  /**
   * Get an employee's I-9 authorization
   *
   * @remarks
   * An employee's I-9 authorization stores information about an employee's authorization status and I-9 signatures, information required to filled out the Form I-9 for employment eligibility verification.
   *
   * **NOTE:** The `form_uuid` in responses from this endpoint can be used to retrieve the PDF version of the I-9. See the "get employee form PDF" request for more details.
   *
   * scope: `i9_authorizations:read`
   */
  async getAuthorization(
    request: operations.GetV1EmployeesEmployeeIdI9AuthorizationRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV1EmployeesEmployeeIdI9AuthorizationResponse> {
    return unwrapAsync(i9VerificationGetAuthorization(
      this,
      request,
      options,
    ));
  }

  /**
   * Create or update an employee's I-9 authorization
   *
   * @remarks
   * An employee's I-9 authorization stores information about an employee's authorization status, as well as signatures and other information required to complete the Form I-9 for employment eligibility verification.
   *
   * If the version is supplied and the employee I-9 authorization exists, this endpoint acts as an update. Otherwise, it will create an employee I-9 authorization.
   *
   * Validations on this endpoint are conditional:
   *
   *   * `document_type` may be required, depending on `authorization_status`.
   *   * Valid formats for `document_number` vary, depending on `document_type`.
   *   * `country` is only allowed with `document_type: 'foreign_passport'`.
   *   * `expiration_date` is only allowed with `authorization_status: 'alien'`.
   *
   * > ℹ️ Unneeded information is automatically removed during updates.
   * >
   * > If an update causes some formerly-required fields to be unneeded, the now-unneeded data will be removed automatically.
   * >
   * > **Example:** Updating `authorization_status` from `alien` to `citizen` will cause any data in `document_type`, `document_number`, `country`, and `expiration_date` to be removed, since these fields are unused for `authorization_status:'citizen'`.
   *
   * Detailed instructions for completing Form I-9 can be found at https://www.uscis.gov/sites/default/files/document/forms/i-9instr.pdf
   *
   * scope: `i9_authorizations:write`
   */
  async update(
    request: operations.PutV1EmployeesEmployeeIdI9AuthorizationRequest,
    options?: RequestOptions,
  ): Promise<operations.PutV1EmployeesEmployeeIdI9AuthorizationResponse> {
    return unwrapAsync(i9VerificationUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee's I-9 verification document options
   *
   * @remarks
   * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint returns the possible document options based on the employee's authorization status. These options can then be used to create the I-9 verification documents.
   *
   * scope: `i9_authorizations:read`
   */
  async getDocumentOptions(
    request:
      operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse
  > {
    return unwrapAsync(i9VerificationGetDocumentOptions(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an employee's I-9 verification documents
   *
   * @remarks
   * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
   *
   * scope: `i9_authorizations:read`
   */
  async getDocuments(
    request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse
  > {
    return unwrapAsync(i9VerificationGetDocuments(
      this,
      request,
      options,
    ));
  }

  /**
   * Create an employee's I-9 authorization verification documents
   *
   * @remarks
   * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
   *
   * Use the document options endpoint to get the possible document types and titles, which can vary depending on the employee's authorization status.
   *
   * > 🚧 Every request must contain the complete list of documents for the Employee.
   * >
   * > Every request to this endpoint removes any previous verification document records for the employee.
   *
   * scope: `i9_authorizations:manage`
   */
  async createDocuments(
    request: operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse
  > {
    return unwrapAsync(i9VerificationCreateDocuments(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an employee's I-9 verification document
   *
   * @remarks
   * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint deletes a specific verification document.
   *
   * scope: `i9_authorizations:manage`
   */
  async deleteDocument(
    request:
      operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse
  > {
    return unwrapAsync(i9VerificationDeleteDocument(
      this,
      request,
      options,
    ));
  }

  /**
   * Employer sign an employee's Form I-9
   *
   * @remarks
   * Sign an employee's Form I-9 as an employer. Once the form is signed, the employee's I-9 authorization is considered complete and cannot be modified.
   *
   * scope: `i9_authorizations:manage`
   */
  async employerSign(
    request:
      operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse
  > {
    return unwrapAsync(i9VerificationEmployerSign(
      this,
      request,
      options,
    ));
  }
}
