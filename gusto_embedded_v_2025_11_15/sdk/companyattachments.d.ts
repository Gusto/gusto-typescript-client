import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class CompanyAttachments extends ClientSDK {
    /**
     * Get Company Attachment Details
     *
     * @remarks
     * Retrieve the detail of an attachment uploaded by the company.
     *
     * scope: `company_attachments:read`
     */
    getDetails(request: operations.GetV1CompaniesAttachmentRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesAttachmentResponse>;
    /**
     * Get List of Company Attachments
     *
     * @remarks
     * Retrieve a list of all the attachments uploaded by the company.
     *
     * scope: `company_attachments:read`
     */
    getList(request: operations.GetV1CompaniesAttachmentsRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesAttachmentsResponse>;
    /**
     * Create Company Attachment and Upload File
     *
     * @remarks
     * Upload a file and create a company attachment. We recommend uploading
     * PDF files for optimal compatibility. However, the following file types are
     * allowed: .qbb, .qbm, .gif, .jpg, .png, .pdf, .xls, .xlsx, .doc and .docx.
     *
     * scope: `company_attachments:write`
     */
    create(request: operations.PostV1CompaniesAttachmentRequest, options?: RequestOptions): Promise<operations.PostV1CompaniesAttachmentResponse>;
}
//# sourceMappingURL=companyattachments.d.ts.map