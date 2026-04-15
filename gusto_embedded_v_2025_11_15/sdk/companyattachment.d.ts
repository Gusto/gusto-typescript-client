import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
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
    getDownloadUrl(request: operations.GetV1CompaniesAttachmentUrlRequest, options?: RequestOptions): Promise<operations.GetV1CompaniesAttachmentUrlResponse>;
}
//# sourceMappingURL=companyattachment.d.ts.map