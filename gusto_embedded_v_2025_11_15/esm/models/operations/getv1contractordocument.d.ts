import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Document } from "../components/document.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentRequest = {
    /**
     * The UUID of the document
     */
    documentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorDocumentResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    document?: Document | undefined;
};
/** @internal */
export type GetV1ContractorDocumentRequest$Outbound = {
    document_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentRequest>;
export declare function getV1ContractorDocumentRequestToJSON(getV1ContractorDocumentRequest: GetV1ContractorDocumentRequest): string;
/** @internal */
export declare const GetV1ContractorDocumentResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorDocumentResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocument.d.ts.map