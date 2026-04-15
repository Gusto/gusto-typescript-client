import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutRemovePeopleFromDepartmentEmployees = {
    uuid?: string | undefined;
};
export type PutRemovePeopleFromDepartmentContractors = {
    uuid?: string | undefined;
};
export type PutRemovePeopleFromDepartmentRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * Array of employees to remove from a department
     */
    employees?: Array<PutRemovePeopleFromDepartmentEmployees> | undefined;
    /**
     * Array of contractors to remove from a department
     */
    contractors?: Array<PutRemovePeopleFromDepartmentContractors> | undefined;
};
export type PutRemovePeopleFromDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutRemovePeopleFromDepartmentRequestBody;
};
export type PutRemovePeopleFromDepartmentResponse = {
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
     * Department Object Example
     */
    department?: components.Department | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentEmployees$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentEmployees, z.ZodTypeDef, unknown>;
/** @internal */
export type PutRemovePeopleFromDepartmentEmployees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentEmployees$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentEmployees$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentEmployees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutRemovePeopleFromDepartmentEmployees$ {
    /** @deprecated use `PutRemovePeopleFromDepartmentEmployees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentEmployees, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutRemovePeopleFromDepartmentEmployees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentEmployees$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentEmployees>;
    /** @deprecated use `PutRemovePeopleFromDepartmentEmployees$Outbound` instead. */
    type Outbound = PutRemovePeopleFromDepartmentEmployees$Outbound;
}
export declare function putRemovePeopleFromDepartmentEmployeesToJSON(putRemovePeopleFromDepartmentEmployees: PutRemovePeopleFromDepartmentEmployees): string;
export declare function putRemovePeopleFromDepartmentEmployeesFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentEmployees, SDKValidationError>;
/** @internal */
export declare const PutRemovePeopleFromDepartmentContractors$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentContractors, z.ZodTypeDef, unknown>;
/** @internal */
export type PutRemovePeopleFromDepartmentContractors$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentContractors$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentContractors$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentContractors>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutRemovePeopleFromDepartmentContractors$ {
    /** @deprecated use `PutRemovePeopleFromDepartmentContractors$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentContractors, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutRemovePeopleFromDepartmentContractors$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentContractors$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentContractors>;
    /** @deprecated use `PutRemovePeopleFromDepartmentContractors$Outbound` instead. */
    type Outbound = PutRemovePeopleFromDepartmentContractors$Outbound;
}
export declare function putRemovePeopleFromDepartmentContractorsToJSON(putRemovePeopleFromDepartmentContractors: PutRemovePeopleFromDepartmentContractors): string;
export declare function putRemovePeopleFromDepartmentContractorsFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentContractors, SDKValidationError>;
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequestBody$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutRemovePeopleFromDepartmentRequestBody$Outbound = {
    version?: string | undefined;
    employees?: Array<PutRemovePeopleFromDepartmentEmployees$Outbound> | undefined;
    contractors?: Array<PutRemovePeopleFromDepartmentContractors$Outbound> | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequestBody$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequestBody$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutRemovePeopleFromDepartmentRequestBody$ {
    /** @deprecated use `PutRemovePeopleFromDepartmentRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutRemovePeopleFromDepartmentRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequestBody$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequestBody>;
    /** @deprecated use `PutRemovePeopleFromDepartmentRequestBody$Outbound` instead. */
    type Outbound = PutRemovePeopleFromDepartmentRequestBody$Outbound;
}
export declare function putRemovePeopleFromDepartmentRequestBodyToJSON(putRemovePeopleFromDepartmentRequestBody: PutRemovePeopleFromDepartmentRequestBody): string;
export declare function putRemovePeopleFromDepartmentRequestBodyFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentRequestBody, SDKValidationError>;
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequest$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutRemovePeopleFromDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutRemovePeopleFromDepartmentRequestBody$Outbound;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentRequest$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequest$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutRemovePeopleFromDepartmentRequest$ {
    /** @deprecated use `PutRemovePeopleFromDepartmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutRemovePeopleFromDepartmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentRequest$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentRequest>;
    /** @deprecated use `PutRemovePeopleFromDepartmentRequest$Outbound` instead. */
    type Outbound = PutRemovePeopleFromDepartmentRequest$Outbound;
}
export declare function putRemovePeopleFromDepartmentRequestToJSON(putRemovePeopleFromDepartmentRequest: PutRemovePeopleFromDepartmentRequest): string;
export declare function putRemovePeopleFromDepartmentRequestFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentRequest, SDKValidationError>;
/** @internal */
export declare const PutRemovePeopleFromDepartmentResponse$inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutRemovePeopleFromDepartmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Department?: components.Department$Outbound | undefined;
};
/** @internal */
export declare const PutRemovePeopleFromDepartmentResponse$outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentResponse$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutRemovePeopleFromDepartmentResponse$ {
    /** @deprecated use `PutRemovePeopleFromDepartmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutRemovePeopleFromDepartmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutRemovePeopleFromDepartmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutRemovePeopleFromDepartmentResponse$Outbound, z.ZodTypeDef, PutRemovePeopleFromDepartmentResponse>;
    /** @deprecated use `PutRemovePeopleFromDepartmentResponse$Outbound` instead. */
    type Outbound = PutRemovePeopleFromDepartmentResponse$Outbound;
}
export declare function putRemovePeopleFromDepartmentResponseToJSON(putRemovePeopleFromDepartmentResponse: PutRemovePeopleFromDepartmentResponse): string;
export declare function putRemovePeopleFromDepartmentResponseFromJSON(jsonString: string): SafeParseResult<PutRemovePeopleFromDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=putremovepeoplefromdepartment.d.ts.map