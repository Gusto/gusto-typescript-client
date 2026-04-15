import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Signatories extends ClientSDK {
    /**
     * Create a signatory
     *
     * @remarks
     * Create a company signatory with complete information.
     * A signatory can legally sign forms once the identity verification process is successful.
     * The signatory should be an officer, owner, general partner or LLC member manager, plan administrator, fiduciary, or an authorized representative who is designated to sign agreements on the company's behalf. An officer is the president, vice president, treasurer, chief accounting officer, etc. There can only be a single primary signatory in a company.
     *
     * scope: `signatories:manage`
     */
    create(request: operations.PostV1CompanySignatoriesRequest, options?: RequestOptions): Promise<operations.PostV1CompanySignatoriesResponse>;
    /**
     * Get all company signatories
     *
     * @remarks
     * Returns company signatories. Currently we only support a single signatory per company.
     *
     * scope: `signatories:read`
     */
    list(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesCompanyUuidSignatoriesResponse>;
    /**
     * Invite a signatory
     *
     * @remarks
     * Create a signatory with minimal information. This signatory can be invited to provide more information through the `PUT /v1/companies/{company_uuid}/signatories/{signatory_uuid}` endpoint. This will start the identity verification process and allow the signatory to be verified to sign documents.
     */
    invite(request: operations.PostV1CompaniesCompanyUuidSignatoriesInviteRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesCompanyUuidSignatoriesInviteResponse>;
    /**
     * Update a signatory
     *
     * @remarks
     * Update a signatory that has been either invited or created. If the signatory has been created with minimal information through the `POST /v1/companies/{company_uuid}/signatories/invite` endpoint, then the first update must contain all attributes specified in the request body in order to start the identity verification process.
     *
     * scope: `signatories:write`
     */
    update(request: operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, options?: RequestOptions): Promise<operations.PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
    /**
     * Delete a signatory
     *
     * @remarks
     * Delete a company signatory.
     *
     * scope: `signatories:manage`
     */
    delete(request: operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, options?: RequestOptions): Promise<operations.DeleteV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
}
//# sourceMappingURL=signatories.d.ts.map