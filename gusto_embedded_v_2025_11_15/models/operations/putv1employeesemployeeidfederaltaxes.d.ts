import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1EmployeesEmployeeIdFederalTaxesRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    filingStatus?: string | undefined;
    extraWithholding?: string | null | undefined;
    twoJobs?: boolean | undefined;
    dependentsAmount?: string | undefined;
    otherIncome?: string | undefined;
    deductions?: string | undefined;
    w4DataType?: string | undefined;
};
export type PutV1EmployeesEmployeeIdFederalTaxesRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody;
};
export type PutV1EmployeesEmployeeIdFederalTaxesResponse = {
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
    employeeFederalTax?: components.EmployeeFederalTax | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound = {
    version: string;
    filing_status?: string | undefined;
    extra_withholding?: string | null | undefined;
    two_jobs?: boolean | undefined;
    dependents_amount?: string | undefined;
    other_income?: string | undefined;
    deductions?: string | undefined;
    w4_data_type?: string | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdFederalTaxesRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdFederalTaxesRequestBodyToJSON(putV1EmployeesEmployeeIdFederalTaxesRequestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody): string;
export declare function putV1EmployeesEmployeeIdFederalTaxesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdFederalTaxesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound = {
    employee_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdFederalTaxesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdFederalTaxesRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdFederalTaxesRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdFederalTaxesRequestToJSON(putV1EmployeesEmployeeIdFederalTaxesRequest: PutV1EmployeesEmployeeIdFederalTaxesRequest): string;
export declare function putV1EmployeesEmployeeIdFederalTaxesRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdFederalTaxesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Federal-Tax"?: components.EmployeeFederalTax$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdFederalTaxesResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdFederalTaxesResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdFederalTaxesResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdFederalTaxesResponseToJSON(putV1EmployeesEmployeeIdFederalTaxesResponse: PutV1EmployeesEmployeeIdFederalTaxesResponse): string;
export declare function putV1EmployeesEmployeeIdFederalTaxesResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdFederalTaxesResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidfederaltaxes.d.ts.map