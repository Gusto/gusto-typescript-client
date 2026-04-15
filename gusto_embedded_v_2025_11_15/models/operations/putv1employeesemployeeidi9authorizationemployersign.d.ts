import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody = {
    /**
     * The signature
     */
    signatureText: string;
    /**
     * The signer's job title
     */
    signerTitle: string;
    /**
     * The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported.
     */
    signedByIpAddress: string;
    /**
     * Whether you agree to sign electronically
     */
    agree: boolean;
    /**
     * Any additional notes
     */
    additionalInfo?: string | undefined;
    /**
     * Whether an alternative procedure authorized by DHS to examine documents was used
     */
    altProcedure?: boolean | undefined;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse = {
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
    i9Authorization?: components.I9Authorization | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound = {
    signature_text: string;
    signer_title: string;
    signed_by_ip_address: string;
    agree: boolean;
    additional_info?: string | undefined;
    alt_procedure?: boolean | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBodyToJSON(putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestToJSON(putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization"?: components.I9Authorization$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponseToJSON(putV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidi9authorizationemployersign.d.ts.map