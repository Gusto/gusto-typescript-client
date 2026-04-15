import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumentPdf } from "../components/documentpdf.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentPdfRequest = {
    /**
     * The UUID of the document
     */
    documentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorDocumentPdfResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    documentPdf?: DocumentPdf | undefined;
};
/** @internal */
export type GetV1ContractorDocumentPdfRequest$Outbound = {
    document_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentPdfRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentPdfRequest>;
export declare function getV1ContractorDocumentPdfRequestToJSON(getV1ContractorDocumentPdfRequest: GetV1ContractorDocumentPdfRequest): string;
/** @internal */
export declare const GetV1ContractorDocumentPdfResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentPdfResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorDocumentPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocumentpdf.d.ts.map