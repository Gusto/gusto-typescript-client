import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Contractors extends ClientSDK {
    /**
     * Create a contractor
     *
     * @remarks
     * Create an individual or business contractor.
     *
     * scope: `contractors:manage`
     */
    create(request: operations.PostV1CompaniesCompanyUuidContractorsRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyUuidContractorsResponse>;
    /**
     * Get contractors of a company
     *
     * @remarks
     * Get all contractors, active and inactive, individual and business, for a company.
     *
     * scope: `contractors:read`
     */
    list(request: operations.GetV1CompaniesCompanyUuidContractorsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyUuidContractorsResponse>;
    /**
     * Get a contractor
     *
     * @remarks
     * Get a contractor.
     *
     * scope: `contractors:read`
     */
    get(request: operations.GetV1ContractorsContractorUuidRequest, options?: RequestOptions): Promise<operations.GetV1ContractorsContractorUuidResponse>;
    /**
     * Update a contractor
     *
     * @remarks
     * Update a contractor.
     *
     * scope: `contractors:write`
     *
     * > 🚧 Warning
     * >
     * > Watch out when changing a contractor's type (when the contractor is finished onboarding). Specifically, changing contractor type can be dangerous since Gusto won’t recognize and file two separate 1099s if they simply change from business to individual
     */
    update(request: operations.PutV1ContractorsContractorUuidRequest, options?: RequestOptions): Promise<operations.PutV1ContractorsContractorUuidResponse>;
    /**
     * Delete a contractor
     *
     * @remarks
     * A contractor can only be deleted when there are no contractor payments.
     *
     * scope: `contractors:manage`
     */
    delete(request: operations.DeleteV1ContractorsContractorUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1ContractorsContractorUuidResponse>;
    /**
     * Get the contractor's onboarding status
     *
     * @remarks
     * Retrieves a contractor's onboarding status. The data returned helps inform the required onboarding steps and respective completion status.
     *
     * scope: `contractors:read`
     *
     * ## onboarding_status
     *
     * ### Admin-facilitated onboarding
     * | onboarding_status | Description |
     * |:------------------|------------:|
     * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
     * | `admin_onboarding_review` | All information has been completed and admin needs to confirm onboarding. |
     * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
     *
     * ### Contractor self-onboarding
     *
     * | onboarding_status | Description |
     * | --- | ----------- |
     * | `admin_onboarding_incomplete` | Admin needs to enter basic information about the contractor. |
     * | `self_onboarding_not_invited` | Admin has the intention to invite the contractor to self-onboard (e.g., marking a checkbox), but the system has not yet sent the invitation. |
     * | `self_onboarding_invited` | Contractor has been sent an invitation to self-onboard. |
     * | `self_onboarding_started` | Contractor has started the self-onboarding process. |
     * | `self_onboarding_review` | Admin needs to review contractors's entered information and confirm onboarding. |
     * | `onboarding_completed` | Contractor has been fully onboarded and verified. |
     *
     * ## onboarding_steps
     *
     * | onboarding_steps | Requirement(s) to be completed |
     * |:-----------------|-------------------------------:|
     * | `basic_details` | Add individual contractor's first name, last name, social security number or Business name and EIN depending on the contractor type |
     * | `add_address` | Add contractor address. |
     * | `compensation_details` | Add contractor compensation. |
     * | `payment_details` | Set up contractor's direct deposit or set to check. |
     * | `sign_documents` | Contractor forms (e.g., W9) are generated & signed. |
     * | `file_new_hire_report` | Contractor new hire report is generated. |
     */
    getOnboardingStatus(request: operations.GetV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): Promise<operations.GetV1ContractorsContractorUuidOnboardingStatusResponse>;
    /**
     * Change the contractor's onboarding status
     *
     * @remarks
     * Updates a contractor's onboarding status.
     *
     * scope: `contractors:write`
     *
     * Below is a list of valid onboarding status changes depending on the intended action to be performed on behalf of the contractor.
     *
     * | Action | current onboarding_status | new onboarding_status |
     * |:------------------|:------------:|----------:|
     * | Mark a contractor as self-onboarding | `admin_onboarding_incomplete` | `self_onboarding_not_invited` |
     * | Invite a contractor to self-onboard | `admin_onboarding_incomplete` or `self_onboarding_not_invited` | `self_onboarding_invited` |
     * | Cancel a contractor's self-onboarding | `self_onboarding_invited` or `self_onboarding_not_invited` | `admin_onboarding_incomplete` |
     * | Review a contractor's self-onboarded info | `self_onboarding_started` | `self_onboarding_review` |
     * | Finish a contractor's onboarding | `admin_onboarding_review` or `self_onboarding_review` | `onboarding_completed` |
     */
    updateOnboardingStatus(request: operations.PutV1ContractorsContractorUuidOnboardingStatusRequest, options?: RequestOptions): Promise<operations.PutV1ContractorsContractorUuidOnboardingStatusResponse>;
    /**
     * Get a contractor address
     *
     * @remarks
     * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * scope: `contractors:read`
     */
    getAddress(request: operations.GetV1ContractorsContractorUuidAddressRequest, options?: RequestOptions): Promise<operations.GetV1ContractorsContractorUuidAddressResponse>;
    /**
     * Update a contractor's address
     *
     * @remarks
     * The address of a contractor is used to determine certain tax information about them. Addresses are geocoded on create and update to ensure validity.
     *
     * scope: `contractors:write`
     */
    updateAddress(request: operations.PutV1ContractorsContractorUuidAddressRequest, options?: RequestOptions): Promise<operations.PutV1ContractorsContractorUuidAddressResponse>;
}
//# sourceMappingURL=contractors.d.ts.map