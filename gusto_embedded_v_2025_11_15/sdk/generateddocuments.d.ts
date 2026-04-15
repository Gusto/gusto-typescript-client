import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class GeneratedDocuments extends ClientSDK {
    /**
     * Get a generated document
     *
     * @remarks
     * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
     *
     * scope: `generated_documents:read`
     */
    get(request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest, options?: RequestOptions): Promise<operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse>;
}
//# sourceMappingURL=generateddocuments.d.ts.map