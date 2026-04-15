import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the document
     */
    documentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse = {
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
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound = {
    employee_id: string;
    document_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequestToJSON(deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest: DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest): string;
export declare function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponseToJSON(deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse: DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse): string;
export declare function deleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidi9authorizationdocumentsdocumentid.d.ts.map