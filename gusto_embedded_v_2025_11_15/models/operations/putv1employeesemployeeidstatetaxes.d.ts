import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Answers = {
    value: string;
    validFrom: string;
    validUpTo?: any | null | undefined;
};
export type Questions = {
    key: string;
    answers?: Array<Answers> | undefined;
};
export type States = {
    state: string;
    questions?: Array<Questions> | undefined;
};
export type PutV1EmployeesEmployeeIdStateTaxesRequestBody = {
    states: Array<States>;
};
export type PutV1EmployeesEmployeeIdStateTaxesRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody;
};
export type PutV1EmployeesEmployeeIdStateTaxesResponse = {
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
    employeeStateTaxesList?: Array<components.EmployeeStateTax> | undefined;
};
/** @internal */
export declare const Answers$inboundSchema: z.ZodType<Answers, z.ZodTypeDef, unknown>;
/** @internal */
export type Answers$Outbound = {
    value: string;
    valid_from: string;
    valid_up_to?: any | null | undefined;
};
/** @internal */
export declare const Answers$outboundSchema: z.ZodType<Answers$Outbound, z.ZodTypeDef, Answers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Answers$ {
    /** @deprecated use `Answers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Answers, z.ZodTypeDef, unknown>;
    /** @deprecated use `Answers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Answers$Outbound, z.ZodTypeDef, Answers>;
    /** @deprecated use `Answers$Outbound` instead. */
    type Outbound = Answers$Outbound;
}
export declare function answersToJSON(answers: Answers): string;
export declare function answersFromJSON(jsonString: string): SafeParseResult<Answers, SDKValidationError>;
/** @internal */
export declare const Questions$inboundSchema: z.ZodType<Questions, z.ZodTypeDef, unknown>;
/** @internal */
export type Questions$Outbound = {
    key: string;
    answers?: Array<Answers$Outbound> | undefined;
};
/** @internal */
export declare const Questions$outboundSchema: z.ZodType<Questions$Outbound, z.ZodTypeDef, Questions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Questions$ {
    /** @deprecated use `Questions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Questions, z.ZodTypeDef, unknown>;
    /** @deprecated use `Questions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Questions$Outbound, z.ZodTypeDef, Questions>;
    /** @deprecated use `Questions$Outbound` instead. */
    type Outbound = Questions$Outbound;
}
export declare function questionsToJSON(questions: Questions): string;
export declare function questionsFromJSON(jsonString: string): SafeParseResult<Questions, SDKValidationError>;
/** @internal */
export declare const States$inboundSchema: z.ZodType<States, z.ZodTypeDef, unknown>;
/** @internal */
export type States$Outbound = {
    state: string;
    questions?: Array<Questions$Outbound> | undefined;
};
/** @internal */
export declare const States$outboundSchema: z.ZodType<States$Outbound, z.ZodTypeDef, States>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace States$ {
    /** @deprecated use `States$inboundSchema` instead. */
    const inboundSchema: z.ZodType<States, z.ZodTypeDef, unknown>;
    /** @deprecated use `States$outboundSchema` instead. */
    const outboundSchema: z.ZodType<States$Outbound, z.ZodTypeDef, States>;
    /** @deprecated use `States$Outbound` instead. */
    type Outbound = States$Outbound;
}
export declare function statesToJSON(states: States): string;
export declare function statesFromJSON(jsonString: string): SafeParseResult<States, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound = {
    states: Array<States$Outbound>;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdStateTaxesRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdStateTaxesRequestBodyToJSON(putV1EmployeesEmployeeIdStateTaxesRequestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody): string;
export declare function putV1EmployeesEmployeeIdStateTaxesRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdStateTaxesRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound = {
    employee_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdStateTaxesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdStateTaxesRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdStateTaxesRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdStateTaxesRequestToJSON(putV1EmployeesEmployeeIdStateTaxesRequest: PutV1EmployeesEmployeeIdStateTaxesRequest): string;
export declare function putV1EmployeesEmployeeIdStateTaxesRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdStateTaxesRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-State-Taxes-List"?: Array<components.EmployeeStateTax$Outbound> | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdStateTaxesResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdStateTaxesResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdStateTaxesResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdStateTaxesResponseToJSON(putV1EmployeesEmployeeIdStateTaxesResponse: PutV1EmployeesEmployeeIdStateTaxesResponse): string;
export declare function putV1EmployeesEmployeeIdStateTaxesResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdStateTaxesResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidstatetaxes.d.ts.map