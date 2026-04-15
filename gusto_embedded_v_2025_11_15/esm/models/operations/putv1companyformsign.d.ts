import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Form } from "../components/form.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompanyFormSignRequestBody = {
    /**
     * The signature
     */
    signatureText: string;
    /**
     * Whether you agree to sign electronically
     */
    agree: boolean;
    /**
     * The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported. You must provide the IP address with either this parameter OR you can leave out this parameter and set the IP address in the request header using the `x-gusto-client-ip` header instead.
     */
    signedByIpAddress?: string | undefined;
};
export type PutV1CompanyFormSignRequest = {
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Optional header to supply the IP address. This can be used to supply the IP address for signature endpoints instead of the signed_by_ip_address parameter.
     */
    xGustoClientIp?: string | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompanyFormSignRequestBody;
};
export type PutV1CompanyFormSignResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    form?: Form | undefined;
};
/** @internal */
export type PutV1CompanyFormSignRequestBody$Outbound = {
    signature_text: string;
    agree: boolean;
    signed_by_ip_address?: string | undefined;
};
/** @internal */
export declare const PutV1CompanyFormSignRequestBody$outboundSchema: z.ZodType<PutV1CompanyFormSignRequestBody$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequestBody>;
export declare function putV1CompanyFormSignRequestBodyToJSON(putV1CompanyFormSignRequestBody: PutV1CompanyFormSignRequestBody): string;
/** @internal */
export type PutV1CompanyFormSignRequest$Outbound = {
    form_id: string;
    "x-gusto-client-ip"?: string | undefined;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompanyFormSignRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompanyFormSignRequest$outboundSchema: z.ZodType<PutV1CompanyFormSignRequest$Outbound, z.ZodTypeDef, PutV1CompanyFormSignRequest>;
export declare function putV1CompanyFormSignRequestToJSON(putV1CompanyFormSignRequest: PutV1CompanyFormSignRequest): string;
/** @internal */
export declare const PutV1CompanyFormSignResponse$inboundSchema: z.ZodType<PutV1CompanyFormSignResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompanyFormSignResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompanyFormSignResponse, SDKValidationError>;
//# sourceMappingURL=putv1companyformsign.d.ts.map