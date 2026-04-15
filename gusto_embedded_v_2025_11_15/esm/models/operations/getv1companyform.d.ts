import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form } from "../components/form.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompanyFormResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    form?: Form | undefined;
};
/** @internal */
export type GetV1CompanyFormRequest$Outbound = {
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormRequest$outboundSchema: z.ZodType<GetV1CompanyFormRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormRequest>;
export declare function getV1CompanyFormRequestToJSON(getV1CompanyFormRequest: GetV1CompanyFormRequest): string;
/** @internal */
export declare const GetV1CompanyFormResponse$inboundSchema: z.ZodType<GetV1CompanyFormResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompanyFormResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyform.d.ts.map