import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1EmployeeFormSignRequestBody = {
    /**
     * The signature
     */
    signatureText: string;
    /**
     * Whether you agree to sign electronically
     */
    agree: boolean;
    /**
     * The IP address of the signatory who signed the form. Both IPv4 AND IPv6 are supported.
     */
    signedByIpAddress: string;
    /**
     * Whether there is a preparer
     */
    preparer?: boolean | undefined;
    preparerFirstName?: string | undefined;
    preparerLastName?: string | undefined;
    preparerStreet1?: string | undefined;
    preparerStreet2?: string | undefined;
    preparerCity?: string | undefined;
    preparerState?: string | undefined;
    preparerZip?: string | undefined;
    /**
     * Whether preparer agrees to sign electronically
     */
    preparerAgree?: string | undefined;
    /**
     * Whether there is a 2nd preparer
     */
    preparer2?: boolean | undefined;
    preparer2FirstName?: string | undefined;
    preparer2LastName?: string | undefined;
    preparer2Street1?: string | undefined;
    preparer2Street2?: string | undefined;
    preparer2City?: string | undefined;
    preparer2State?: string | undefined;
    preparer2Zip?: string | undefined;
    /**
     * Whether 2nd preparer agrees to sign electronically
     */
    preparer2Agree?: string | undefined;
    /**
     * Whether there is a 3rd preparer
     */
    preparer3?: boolean | undefined;
    preparer3FirstName?: string | undefined;
    preparer3LastName?: string | undefined;
    preparer3Street1?: string | undefined;
    preparer3Street2?: string | undefined;
    preparer3City?: string | undefined;
    preparer3State?: string | undefined;
    preparer3Zip?: string | undefined;
    /**
     * Whether 3rd preparer agrees to sign electronically
     */
    preparer3Agree?: string | undefined;
    /**
     * Whether there is a 4th preparer
     */
    preparer4?: boolean | undefined;
    preparer4FirstName?: string | undefined;
    preparer4LastName?: string | undefined;
    preparer4Street1?: string | undefined;
    preparer4Street2?: string | undefined;
    preparer4City?: string | undefined;
    preparer4State?: string | undefined;
    preparer4Zip?: string | undefined;
    /**
     * Whether 4th preparer agrees to sign electronically
     */
    preparer4Agree?: string | undefined;
};
export type PutV1EmployeeFormSignRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the form
     */
    formId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeeFormSignRequestBody;
};
export type PutV1EmployeeFormSignResponse = {
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
    form?: components.Form | undefined;
};
/** @internal */
export declare const PutV1EmployeeFormSignRequestBody$inboundSchema: z.ZodType<PutV1EmployeeFormSignRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeFormSignRequestBody$Outbound = {
    signature_text: string;
    agree: boolean;
    signed_by_ip_address: string;
    preparer?: boolean | undefined;
    preparer_first_name?: string | undefined;
    preparer_last_name?: string | undefined;
    preparer_street_1?: string | undefined;
    preparer_street_2?: string | undefined;
    preparer_city?: string | undefined;
    preparer_state?: string | undefined;
    preparer_zip?: string | undefined;
    preparer_agree?: string | undefined;
    preparer2?: boolean | undefined;
    preparer2_first_name?: string | undefined;
    preparer2_last_name?: string | undefined;
    preparer2_street_1?: string | undefined;
    preparer2_street_2?: string | undefined;
    preparer2_city?: string | undefined;
    preparer2_state?: string | undefined;
    preparer2_zip?: string | undefined;
    preparer2_agree?: string | undefined;
    preparer3?: boolean | undefined;
    preparer3_first_name?: string | undefined;
    preparer3_last_name?: string | undefined;
    preparer3_street_1?: string | undefined;
    preparer3_street_2?: string | undefined;
    preparer3_city?: string | undefined;
    preparer3_state?: string | undefined;
    preparer3_zip?: string | undefined;
    preparer3_agree?: string | undefined;
    preparer4?: boolean | undefined;
    preparer4_first_name?: string | undefined;
    preparer4_last_name?: string | undefined;
    preparer4_street_1?: string | undefined;
    preparer4_street_2?: string | undefined;
    preparer4_city?: string | undefined;
    preparer4_state?: string | undefined;
    preparer4_zip?: string | undefined;
    preparer4_agree?: string | undefined;
};
/** @internal */
export declare const PutV1EmployeeFormSignRequestBody$outboundSchema: z.ZodType<PutV1EmployeeFormSignRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeFormSignRequestBody$ {
    /** @deprecated use `PutV1EmployeeFormSignRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeFormSignRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeFormSignRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeFormSignRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignRequestBody>;
    /** @deprecated use `PutV1EmployeeFormSignRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeeFormSignRequestBody$Outbound;
}
export declare function putV1EmployeeFormSignRequestBodyToJSON(putV1EmployeeFormSignRequestBody: PutV1EmployeeFormSignRequestBody): string;
export declare function putV1EmployeeFormSignRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeFormSignRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeFormSignRequest$inboundSchema: z.ZodType<PutV1EmployeeFormSignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeFormSignRequest$Outbound = {
    employee_id: string;
    form_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeeFormSignRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeeFormSignRequest$outboundSchema: z.ZodType<PutV1EmployeeFormSignRequest$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeFormSignRequest$ {
    /** @deprecated use `PutV1EmployeeFormSignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeFormSignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeFormSignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeFormSignRequest$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignRequest>;
    /** @deprecated use `PutV1EmployeeFormSignRequest$Outbound` instead. */
    type Outbound = PutV1EmployeeFormSignRequest$Outbound;
}
export declare function putV1EmployeeFormSignRequestToJSON(putV1EmployeeFormSignRequest: PutV1EmployeeFormSignRequest): string;
export declare function putV1EmployeeFormSignRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeFormSignRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeeFormSignResponse$inboundSchema: z.ZodType<PutV1EmployeeFormSignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeeFormSignResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Form?: components.Form$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeeFormSignResponse$outboundSchema: z.ZodType<PutV1EmployeeFormSignResponse$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeeFormSignResponse$ {
    /** @deprecated use `PutV1EmployeeFormSignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeeFormSignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeeFormSignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeeFormSignResponse$Outbound, z.ZodTypeDef, PutV1EmployeeFormSignResponse>;
    /** @deprecated use `PutV1EmployeeFormSignResponse$Outbound` instead. */
    type Outbound = PutV1EmployeeFormSignResponse$Outbound;
}
export declare function putV1EmployeeFormSignResponseToJSON(putV1EmployeeFormSignResponse: PutV1EmployeeFormSignResponse): string;
export declare function putV1EmployeeFormSignResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeeFormSignResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeeformsign.d.ts.map