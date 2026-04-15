import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class ContractorDocuments extends ClientSDK {
    /**
     * Get all contractor documents
     *
     * @remarks
     * Get a list of all contractor's documents
     *
     * scope: `contractor_documents:read`
     */
    getAll(request: operations.GetV1ContractorDocumentsRequest, options?: RequestOptions): Promise<operations.GetV1ContractorDocumentsResponse>;
    /**
     * Get a contractor document
     *
     * @remarks
     * Get a contractor document.
     *
     * scope: `contractor_documents:read`
     */
    get(request: operations.GetV1ContractorDocumentRequest, options?: RequestOptions): Promise<operations.GetV1ContractorDocumentResponse>;
    /**
     * Get the contractor document pdf
     *
     * @remarks
     * Get the contractor document pdf.
     *
     * scope: `contractor_documents:read`
     */
    getPdf(request: operations.GetV1ContractorDocumentPdfRequest, options?: RequestOptions): Promise<operations.GetV1ContractorDocumentPdfResponse>;
    /**
     * Sign a contractor document
     *
     * @remarks
     * Sign a contractor document.
     *
     * scope: `contractor_documents:write`
     */
    sign(request: operations.PutV1ContractorDocumentSignRequest, options?: RequestOptions): Promise<operations.PutV1ContractorDocumentSignResponse>;
}
//# sourceMappingURL=contractordocuments.d.ts.map