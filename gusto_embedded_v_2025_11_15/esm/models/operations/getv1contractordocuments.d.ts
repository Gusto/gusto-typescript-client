import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Document } from "../components/document.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorDocumentsRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorDocumentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    documents?: Array<Document> | undefined;
};
/** @internal */
export type GetV1ContractorDocumentsRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorDocumentsRequest$outboundSchema: z.ZodType<GetV1ContractorDocumentsRequest$Outbound, z.ZodTypeDef, GetV1ContractorDocumentsRequest>;
export declare function getV1ContractorDocumentsRequestToJSON(getV1ContractorDocumentsRequest: GetV1ContractorDocumentsRequest): string;
/** @internal */
export declare const GetV1ContractorDocumentsResponse$inboundSchema: z.ZodType<GetV1ContractorDocumentsResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorDocumentsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorDocumentsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractordocuments.d.ts.map