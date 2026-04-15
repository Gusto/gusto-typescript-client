import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeFormPdfRequest = {
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
};
export type GetV1EmployeeFormPdfResponse = {
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
    formPdf?: components.FormPdf | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormPdfRequest$inboundSchema: z.ZodType<GetV1EmployeeFormPdfRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormPdfRequest$Outbound = {
    employee_id: string;
    form_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeFormPdfRequest$outboundSchema: z.ZodType<GetV1EmployeeFormPdfRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormPdfRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormPdfRequest$ {
    /** @deprecated use `GetV1EmployeeFormPdfRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormPdfRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormPdfRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormPdfRequest$Outbound, z.ZodTypeDef, GetV1EmployeeFormPdfRequest>;
    /** @deprecated use `GetV1EmployeeFormPdfRequest$Outbound` instead. */
    type Outbound = GetV1EmployeeFormPdfRequest$Outbound;
}
export declare function getV1EmployeeFormPdfRequestToJSON(getV1EmployeeFormPdfRequest: GetV1EmployeeFormPdfRequest): string;
export declare function getV1EmployeeFormPdfRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormPdfRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeeFormPdfResponse$inboundSchema: z.ZodType<GetV1EmployeeFormPdfResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeFormPdfResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Form-Pdf"?: components.FormPdf$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeeFormPdfResponse$outboundSchema: z.ZodType<GetV1EmployeeFormPdfResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormPdfResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeFormPdfResponse$ {
    /** @deprecated use `GetV1EmployeeFormPdfResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeFormPdfResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeFormPdfResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeFormPdfResponse$Outbound, z.ZodTypeDef, GetV1EmployeeFormPdfResponse>;
    /** @deprecated use `GetV1EmployeeFormPdfResponse$Outbound` instead. */
    type Outbound = GetV1EmployeeFormPdfResponse$Outbound;
}
export declare function getV1EmployeeFormPdfResponseToJSON(getV1EmployeeFormPdfResponse: GetV1EmployeeFormPdfResponse): string;
export declare function getV1EmployeeFormPdfResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeFormPdfResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeeformpdf.d.ts.map