import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumentType } from "../components/documenttype.js";
import { GeneratedDocument } from "../components/generateddocument.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest = {
    /**
     * The type of document being generated
     */
    documentType: DocumentType;
    /**
     * The UUID of the request to generate a document. Generate document endpoints return request_uuids to be used with the GET generated document endpoint.
     */
    requestUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    generatedDocument?: GeneratedDocument | undefined;
};
/** @internal */
export type GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound = {
    document_type: string;
    request_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$outboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest$Outbound, z.ZodTypeDef, GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest>;
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidRequestToJSON(getV1GeneratedDocumentsDocumentTypeRequestUuidRequest: GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest): string;
/** @internal */
export declare const GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse$inboundSchema: z.ZodType<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, z.ZodTypeDef, unknown>;
export declare function getV1GeneratedDocumentsDocumentTypeRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1generateddocumentsdocumenttyperequestuuid.d.ts.map