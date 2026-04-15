import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { FormPdf } from "../components/formpdf.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorFormPdfRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorFormPdfResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    formPdf?: FormPdf | undefined;
};
/** @internal */
export type GetV1ContractorFormPdfRequest$Outbound = {
    contractor_uuid: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorFormPdfRequest$outboundSchema: z.ZodType<GetV1ContractorFormPdfRequest$Outbound, z.ZodTypeDef, GetV1ContractorFormPdfRequest>;
export declare function getV1ContractorFormPdfRequestToJSON(getV1ContractorFormPdfRequest: GetV1ContractorFormPdfRequest): string;
/** @internal */
export declare const GetV1ContractorFormPdfResponse$inboundSchema: z.ZodType<GetV1ContractorFormPdfResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorformpdf.d.ts.map