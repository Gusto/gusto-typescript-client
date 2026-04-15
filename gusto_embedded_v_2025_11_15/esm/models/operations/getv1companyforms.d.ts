import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form } from "../components/form.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Sort company forms. Options: name, year, quarter, draft, document_content_type, created_at (optionally with :asc or :desc suffix)
     */
    sortBy?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyFormsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    formList?: Array<Form> | undefined;
};
/** @internal */
export type GetV1CompanyFormsRequest$Outbound = {
    company_id: string;
    sort_by?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormsRequest$outboundSchema: z.ZodType<GetV1CompanyFormsRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormsRequest>;
export declare function getV1CompanyFormsRequestToJSON(getV1CompanyFormsRequest: GetV1CompanyFormsRequest): string;
/** @internal */
export declare const GetV1CompanyFormsResponse$inboundSchema: z.ZodType<GetV1CompanyFormsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyforms.d.ts.map