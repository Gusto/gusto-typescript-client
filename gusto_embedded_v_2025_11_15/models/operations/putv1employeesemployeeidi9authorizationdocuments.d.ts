import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Documents = {
    /**
     * The document type
     */
    documentType: string;
    /**
     * The document title associated with the document type
     */
    documentTitle: string;
    /**
     * The document's document number
     */
    documentNumber?: string | undefined;
    /**
     * The document's expiration date
     */
    expirationDate?: string | undefined;
    /**
     * The document's issuing authority
     */
    issuingAuthority: string;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody = {
    /**
     * An array of I-9 verification documents
     */
    documents: Array<Documents>;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody;
};
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse = {
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
    i9AuthorizationDocumentsObject?: Array<components.I9AuthorizationDocument> | undefined;
};
/** @internal */
export declare const Documents$inboundSchema: z.ZodType<Documents, z.ZodTypeDef, unknown>;
/** @internal */
export type Documents$Outbound = {
    document_type: string;
    document_title: string;
    document_number?: string | undefined;
    expiration_date?: string | undefined;
    issuing_authority: string;
};
/** @internal */
export declare const Documents$outboundSchema: z.ZodType<Documents$Outbound, z.ZodTypeDef, Documents>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Documents$ {
    /** @deprecated use `Documents$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Documents, z.ZodTypeDef, unknown>;
    /** @deprecated use `Documents$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Documents$Outbound, z.ZodTypeDef, Documents>;
    /** @deprecated use `Documents$Outbound` instead. */
    type Outbound = Documents$Outbound;
}
export declare function documentsToJSON(documents: Documents): string;
export declare function documentsFromJSON(jsonString: string): SafeParseResult<Documents, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound = {
    documents: Array<Documents$Outbound>;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBodyToJSON(putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestToJSON(putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "I9-Authorization-Documents-Object"?: Array<components.I9AuthorizationDocument$Outbound> | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseToJSON(putV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse: PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse): string;
export declare function putV1EmployeesEmployeeIdI9AuthorizationDocumentsResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidi9authorizationdocuments.d.ts.map