import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Employees = {
    uuid?: string | undefined;
};
export type Contractors = {
    uuid?: string | undefined;
};
export type PutAddPeopleToDepartmentRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version?: string | undefined;
    /**
     * Array of employees to add to the department
     */
    employees?: Array<Employees> | undefined;
    /**
     * Array of contractors to add to the department
     */
    contractors?: Array<Contractors> | undefined;
};
export type PutAddPeopleToDepartmentRequest = {
    /**
     * The UUID of the department
     */
    departmentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutAddPeopleToDepartmentRequestBody;
};
export type PutAddPeopleToDepartmentResponse = {
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
export declare const Employees$inboundSchema: z.ZodType<Employees, z.ZodTypeDef, unknown>;
/** @internal */
export type Employees$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const Employees$outboundSchema: z.ZodType<Employees$Outbound, z.ZodTypeDef, Employees>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Employees$ {
    /** @deprecated use `Employees$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Employees, z.ZodTypeDef, unknown>;
    /** @deprecated use `Employees$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Employees$Outbound, z.ZodTypeDef, Employees>;
    /** @deprecated use `Employees$Outbound` instead. */
    type Outbound = Employees$Outbound;
}
export declare function employeesToJSON(employees: Employees): string;
export declare function employeesFromJSON(jsonString: string): SafeParseResult<Employees, SDKValidationError>;
/** @internal */
export declare const Contractors$inboundSchema: z.ZodType<Contractors, z.ZodTypeDef, unknown>;
/** @internal */
export type Contractors$Outbound = {
    uuid?: string | undefined;
};
/** @internal */
export declare const Contractors$outboundSchema: z.ZodType<Contractors$Outbound, z.ZodTypeDef, Contractors>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Contractors$ {
    /** @deprecated use `Contractors$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Contractors, z.ZodTypeDef, unknown>;
    /** @deprecated use `Contractors$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Contractors$Outbound, z.ZodTypeDef, Contractors>;
    /** @deprecated use `Contractors$Outbound` instead. */
    type Outbound = Contractors$Outbound;
}
export declare function contractorsToJSON(contractors: Contractors): string;
export declare function contractorsFromJSON(jsonString: string): SafeParseResult<Contractors, SDKValidationError>;
/** @internal */
export declare const PutAddPeopleToDepartmentRequestBody$inboundSchema: z.ZodType<PutAddPeopleToDepartmentRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutAddPeopleToDepartmentRequestBody$Outbound = {
    version?: string | undefined;
    employees?: Array<Employees$Outbound> | undefined;
    contractors?: Array<Contractors$Outbound> | undefined;
};
/** @internal */
export declare const PutAddPeopleToDepartmentRequestBody$outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequestBody$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutAddPeopleToDepartmentRequestBody$ {
    /** @deprecated use `PutAddPeopleToDepartmentRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutAddPeopleToDepartmentRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutAddPeopleToDepartmentRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequestBody$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequestBody>;
    /** @deprecated use `PutAddPeopleToDepartmentRequestBody$Outbound` instead. */
    type Outbound = PutAddPeopleToDepartmentRequestBody$Outbound;
}
export declare function putAddPeopleToDepartmentRequestBodyToJSON(putAddPeopleToDepartmentRequestBody: PutAddPeopleToDepartmentRequestBody): string;
export declare function putAddPeopleToDepartmentRequestBodyFromJSON(jsonString: string): SafeParseResult<PutAddPeopleToDepartmentRequestBody, SDKValidationError>;
/** @internal */
export declare const PutAddPeopleToDepartmentRequest$inboundSchema: z.ZodType<PutAddPeopleToDepartmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutAddPeopleToDepartmentRequest$Outbound = {
    department_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutAddPeopleToDepartmentRequestBody$Outbound;
};
/** @internal */
export declare const PutAddPeopleToDepartmentRequest$outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequest$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutAddPeopleToDepartmentRequest$ {
    /** @deprecated use `PutAddPeopleToDepartmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutAddPeopleToDepartmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutAddPeopleToDepartmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutAddPeopleToDepartmentRequest$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentRequest>;
    /** @deprecated use `PutAddPeopleToDepartmentRequest$Outbound` instead. */
    type Outbound = PutAddPeopleToDepartmentRequest$Outbound;
}
export declare function putAddPeopleToDepartmentRequestToJSON(putAddPeopleToDepartmentRequest: PutAddPeopleToDepartmentRequest): string;
export declare function putAddPeopleToDepartmentRequestFromJSON(jsonString: string): SafeParseResult<PutAddPeopleToDepartmentRequest, SDKValidationError>;
/** @internal */
export declare const PutAddPeopleToDepartmentResponse$inboundSchema: z.ZodType<PutAddPeopleToDepartmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutAddPeopleToDepartmentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Department?: components.Department$Outbound | undefined;
};
/** @internal */
export declare const PutAddPeopleToDepartmentResponse$outboundSchema: z.ZodType<PutAddPeopleToDepartmentResponse$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutAddPeopleToDepartmentResponse$ {
    /** @deprecated use `PutAddPeopleToDepartmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutAddPeopleToDepartmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutAddPeopleToDepartmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutAddPeopleToDepartmentResponse$Outbound, z.ZodTypeDef, PutAddPeopleToDepartmentResponse>;
    /** @deprecated use `PutAddPeopleToDepartmentResponse$Outbound` instead. */
    type Outbound = PutAddPeopleToDepartmentResponse$Outbound;
}
export declare function putAddPeopleToDepartmentResponseToJSON(putAddPeopleToDepartmentResponse: PutAddPeopleToDepartmentResponse): string;
export declare function putAddPeopleToDepartmentResponseFromJSON(jsonString: string): SafeParseResult<PutAddPeopleToDepartmentResponse, SDKValidationError>;
//# sourceMappingURL=putaddpeopletodepartment.d.ts.map