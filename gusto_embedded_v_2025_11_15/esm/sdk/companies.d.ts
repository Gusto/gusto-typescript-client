import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetV1CompaniesRequest, GetV1CompaniesResponse } from "../models/operations/getv1companies.js";
import { GetV1CompaniesCompanyIdAdminsRequest, GetV1CompaniesCompanyIdAdminsResponse } from "../models/operations/getv1companiescompanyidadmins.js";
import { GetV1CompaniesCompanyIdCustomFieldsRequest, GetV1CompaniesCompanyIdCustomFieldsResponse } from "../models/operations/getv1companiescompanyidcustomfields.js";
import { GetV1CompanyFinishOnboardingRequest, GetV1CompanyFinishOnboardingResponse } from "../models/operations/getv1companyfinishonboarding.js";
import { GetV1CompanyOnboardingStatusRequest, GetV1CompanyOnboardingStatusResponse } from "../models/operations/getv1companyonboardingstatus.js";
import { GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest, GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse } from "../models/operations/getv1partnermanagedcompaniescompanyuuidmigrationreadiness.js";
import { PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse } from "../models/operations/postpartnermanagedcompaniescompanyuuidaccepttermsofservice.js";
import { PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse } from "../models/operations/postpartnermanagedcompaniescompanyuuidretrievetermsofservice.js";
import { PostV1CompaniesCompanyIdAdminsRequest, PostV1CompaniesCompanyIdAdminsResponse } from "../models/operations/postv1companiescompanyidadmins.js";
import { PostV1PartnerManagedCompaniesRequest, PostV1PartnerManagedCompaniesResponse, PostV1PartnerManagedCompaniesSecurity } from "../models/operations/postv1partnermanagedcompanies.js";
import { PutV1CompaniesRequest, PutV1CompaniesResponse } from "../models/operations/putv1companies.js";
import { PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse } from "../models/operations/putv1partnermanagedcompaniescompanyuuidmigrate.js";
import { Suspensions } from "./suspensions.js";
export declare class Companies extends ClientSDK {
    private _suspensions?;
    get suspensions(): Suspensions;
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
    createPartnerManaged(security: PostV1PartnerManagedCompaniesSecurity, request: PostV1PartnerManagedCompaniesRequest, options?: RequestOptions): Promise<PostV1PartnerManagedCompaniesResponse>;
    /**
     * Get a company
     *
     * @remarks
     * Get a company.
     *
     * The employees:read scope is required to return home_address and non-work locations.
     * The company_admin:read scope is required to return primary_payroll_admin.
     * The signatories:read scope is required to return primary_signatory.
     *
     * scope: `companies:read`
     */
    get(request: GetV1CompaniesRequest, options?: RequestOptions): Promise<GetV1CompaniesResponse>;
    /**
     * Update a company
     *
     * @remarks
     * Update a company.
     *
     * scope: `companies:write`
     */
    update(request: PutV1CompaniesRequest, options?: RequestOptions): Promise<PutV1CompaniesResponse>;
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
    migrate(request: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, options?: RequestOptions): Promise<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse>;
    /**
     * Check company migration readiness
     *
     * @remarks
     * Check if an existing Gusto customer is ready to be migrated to embedded payroll. This endpoint returns blockers and warnings associated with migrating the company and is recommended to be called before attempting to migrate a company.
     *
     * scope: `partner_managed_companies:read`
     */
    getV1PartnerManagedCompaniesCompanyUuidMigrationReadiness(request: GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest, options?: RequestOptions): Promise<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse>;
    /**
     * Accept terms of service for an admin
     *
     * @remarks
     * Accept the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
     * The user must be a company admin in order to accept the Terms of Service.
     *
     * scope: `terms_of_services:write`
     */
    acceptTermsOfService(request: PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceRequest, options?: RequestOptions): Promise<PostPartnerManagedCompaniesCompanyUuidAcceptTermsOfServiceResponse>;
    /**
     * Retrieve terms of service status for an admin
     *
     * @remarks
     * Retrieve the user acceptance status of the Gusto Embedded Payroll's [Terms of Service](https://flows.gusto.com/terms).
     *
     * scope: `terms_of_services:read`
     */
    retrieveTermsOfService(request: PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceRequest, options?: RequestOptions): Promise<PostPartnerManagedCompaniesCompanyUuidRetrieveTermsOfServiceResponse>;
    /**
     * Create an admin for the company
     *
     * @remarks
     * Creates a new admin for a company.
     * If the email matches an existing user, this will create an admin account for the current user. Otherwise, this will create a new user.
     *
     * scope: `company_admin:write`
     */
    createAdmin(request: PostV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<PostV1CompaniesCompanyIdAdminsResponse>;
    /**
     * Get all the admins at a company
     *
     * @remarks
     * Returns a list of all the admins at a company
     *
     * scope: `company_admin:read`
     */
    listAdmins(request: GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyIdAdminsResponse>;
    /**
     * Get company onboarding status
     *
     * @remarks
     * Retrieves a company's onboarding status, including whether onboarding is complete and the list of
     * required onboarding steps with their respective completion state.
     *
     * scope: `company_onboarding_status:read`
     */
    getOnboardingStatus(request: GetV1CompanyOnboardingStatusRequest, options?: RequestOptions): Promise<GetV1CompanyOnboardingStatusResponse>;
    /**
     * Finish company onboarding
     *
     * @remarks
     * Finalize a company's onboarding process.
     *
     * ### Approve a company in demo
     *
     * After a company is finished onboarding, Gusto requires an additional step to review and approve that company.
     * The company onboarding status is "onboarding_completed": false, until the API call is made to finish company
     * onboarding. In production environments, this step is required for risk-analysis purposes.
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
    finishOnboarding(request: GetV1CompanyFinishOnboardingRequest, options?: RequestOptions): Promise<GetV1CompanyFinishOnboardingResponse>;
    /**
     * Get the custom fields of a company
     *
     * @remarks
     * Returns a list of the custom fields of the company. Useful when you need to know the schema of custom fields for an entire company
     *
     * scope: `companies:read`
     */
    getCustomFields(request: GetV1CompaniesCompanyIdCustomFieldsRequest, options?: RequestOptions): Promise<GetV1CompaniesCompanyIdCustomFieldsResponse>;
}
//# sourceMappingURL=companies.d.ts.map