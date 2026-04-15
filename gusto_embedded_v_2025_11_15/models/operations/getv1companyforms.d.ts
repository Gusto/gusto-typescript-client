import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompanyFormsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompanyFormsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    formList?: Array<components.Form> | undefined;
};
/** @internal */
export declare const GetV1CompanyFormsRequest$inboundSchema: z.ZodType<GetV1CompanyFormsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompanyFormsRequest$outboundSchema: z.ZodType<GetV1CompanyFormsRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormsRequest$ {
    /** @deprecated use `GetV1CompanyFormsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormsRequest$Outbound, z.ZodTypeDef, GetV1CompanyFormsRequest>;
    /** @deprecated use `GetV1CompanyFormsRequest$Outbound` instead. */
    type Outbound = GetV1CompanyFormsRequest$Outbound;
}
export declare function getV1CompanyFormsRequestToJSON(getV1CompanyFormsRequest: GetV1CompanyFormsRequest): string;
export declare function getV1CompanyFormsRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompanyFormsResponse$inboundSchema: z.ZodType<GetV1CompanyFormsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompanyFormsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Form-List"?: Array<components.Form$Outbound> | undefined;
};
/** @internal */
export declare const GetV1CompanyFormsResponse$outboundSchema: z.ZodType<GetV1CompanyFormsResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompanyFormsResponse$ {
    /** @deprecated use `GetV1CompanyFormsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompanyFormsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompanyFormsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompanyFormsResponse$Outbound, z.ZodTypeDef, GetV1CompanyFormsResponse>;
    /** @deprecated use `GetV1CompanyFormsResponse$Outbound` instead. */
    type Outbound = GetV1CompanyFormsResponse$Outbound;
}
export declare function getV1CompanyFormsResponseToJSON(getV1CompanyFormsResponse: GetV1CompanyFormsResponse): string;
export declare function getV1CompanyFormsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompanyFormsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companyforms.d.ts.map