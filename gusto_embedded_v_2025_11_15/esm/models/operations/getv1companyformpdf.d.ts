import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { FormPdf } from "../components/formpdf.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormPdfRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyFormPdfResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    formPdf?: FormPdf | undefined;
};
/** @internal */
export type GetV1CompanyFormPdfRequest$Outbound = {
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormPdfRequest$outboundSchema: z.ZodType<GetV1CompanyFormPdfRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormPdfRequest>;
export declare function getV1CompanyFormPdfRequestToJSON(getV1CompanyFormPdfRequest: GetV1CompanyFormPdfRequest): string;
/** @internal */
export declare const GetV1CompanyFormPdfResponse$inboundSchema: z.ZodType<GetV1CompanyFormPdfResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyformpdf.d.ts.map