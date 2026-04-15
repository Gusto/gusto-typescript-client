import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { GetV1CompaniesAttachmentUrlRequest, GetV1CompaniesAttachmentUrlResponse } from "../models/operations/getv1companiesattachmenturl.js";
export declare class CompanyAttachment extends ClientSDK {
    /**
     * Get a temporary url to download the Company Attachment file
     *
     * @remarks
     * Retrieve a temporary url to download a attachment file uploaded
     * by the company.
     *
     * scope: `company_attachments:read`
     */
    getDownloadUrl(request: GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): Promise<GetV1CompaniesAttachmentUrlResponse>;
}
//# sourceMappingURL=companyattachment.d.ts.map