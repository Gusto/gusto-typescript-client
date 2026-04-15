import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Companies extends ClientSDK {
    /**
     * Create a partner managed company
     *
     * @remarks
     * Create a partner managed company. When you successfully call the API, it does the following:
     * * Creates a new company in Gusto
     * * Creates a new user using the provided email if the user does not already exist.
     * * Makes the user the primary payroll administrator of the new company.
     *
     * In response, you will receive oauth access tokens for the created company.
     *
     * IMPORTANT: the returned access and refresh tokens are reserved for this company only. They cannot be used to access other companies AND previously granted tokens cannot be used to access this company.
     *
     * > 📘 System Access Authentication
     * >
     * > this endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access)
     */
    createPartnerManaged(security: operations.PostV1PartnerManagedCompaniesSecurity, request: operations.PostV1PartnerManagedCompaniesRequest, options?: RequestOptions): Promise<operations.PostV1PartnerManagedCompaniesResponse>;
    /**
     * Get a company
     *
     * @remarks
     * Get a company.
     * The employees:read scope is required to return home_address and non-work locations.
     * The company_admin:read scope is required to return primary_payroll_admin.
     * The signatories:read scope is required to return primary_signatory.
     *
     * scope: `companies:read`
     */
    get(request: operations.GetV1CompaniesRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesResponse>;
    /**
     * Update a company
     *
     * @remarks
     * Update a company.
     *
     * scope: `companies:write`
     */
    update(request: operations.PutV1CompaniesRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesResponse>;
    /**
     * Migrate company to embedded payroll
     *
     * @remarks
     * Migrate an existing Gusto customer to your embedded payroll product.
     *
     * To use this endpoint, the customer will need to connect their Gusto account to your application using [OAuth2](https://docs.gusto.com/embedded-payroll/docs/oauth2) then view and [accept the Embedded Payroll Terms of Service](https://docs.gusto.com/embedded-payroll/reference/post-partner-managed-companies-company_uuid-accept_terms_of_service).
     *
     * scope: `partner_managed_companies:write`
     */
    migrate(request: operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, options?: RequestOptions): Promise<operations.PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse>;
    /**
     * Accept terms of service for a company user
     *
     * @remarks
     * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
     * The user must have a role in the company in order to accept the Terms of Service.
     *
     * scope: `terms_of_services:write`
     */
    acceptTermsOfService(request: operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, options?: RequestOptions): Promise<operations.PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse>;
    /**
     * Retrieve terms of service status for a company user
     *
     * @remarks
     * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
     *
     * scope: `terms_of_services:read`
     */
    retrieveTermsOfService(request: operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, options?: RequestOptions): Promise<operations.PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse>;
    /**
     * Create an admin for the company
     *
     * @remarks
     * Creates a new admin for a company.
     * If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
     *
     * scope: `company_admin:write`
     */
    createAdmin(request: operations.PostV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyIdAdminsResponse>;
    /**
     * Get all the admins at a company
     *
     * @remarks
     * Returns a list of all the admins at a company
     *
     * scope: `company_admin:read`
     */
    listAdmins(request: operations.GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdAdminsResponse>;
    /**
     * Get the company's onboarding status
     *
     * @remarks
     * Get company's onboarding status.
     * The data returned helps inform the required onboarding steps and respective completion status.
     *
     * scope: `company_onboarding_status:read`
     */
    getOnboardingStatus(request: operations.GetV1CompanyOnboardingStatusRequest, options?: RequestOptions): Promise<operations.GetV1CompanyOnboardingStatusResponse>;
    /**
     * Finish company onboarding
     *
     * @remarks
     * Finalize a given company's onboarding process.
     *
     * ### Approve a company in demo
     * After a company is finished onboarding, Gusto requires an additional step to review and approve that company. The company onboarding status is `"onboarding_completed": false`, until the API call is made to finish company onboarding.
     * In production environments, this step is required for risk-analysis purposes.
     *
     * We provide the endpoint `PUT '/v1/companies/{company_uuid}/approve'` to facilitate company approvals in the demo environment.
     *
     * ```shell
     * PUT '/v1/companies/89771af8-b964-472e-8064-554dfbcb56d9/approve'
     *
     * # Response: Company object, with company_status: 'Approved'
     * ```
     *
     * scope: `companies:write`
     */
    finishOnboarding(request: operations.GetV1CompanyFinishOnboardingRequest, options?: RequestOptions): Promise<operations.GetV1CompanyFinishOnboardingResponse>;
    /**
     * Get the custom fields of a company
     *
     * @remarks
     * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
     *
     * scope: `companies:read`
     */
    getCustomFields(request: operations.GetV1CompaniesCompanyIdCustomFieldsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyIdCustomFieldsResponse>;
}
//# sourceMappingURL=companies.d.ts.map