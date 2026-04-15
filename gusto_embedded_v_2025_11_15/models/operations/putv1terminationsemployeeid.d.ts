import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TerminationsEmployeeIdRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The employee's last day of work.
     */
    effectiveDate: string;
    /**
     * If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule.
     */
    runTerminationPayroll?: boolean | undefined;
};
export type PutV1TerminationsEmployeeIdRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1TerminationsEmployeeIdRequestBody;
};
export type PutV1TerminationsEmployeeIdResponse = {
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
     * Example Response
     */
    termination?: components.Termination | undefined;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequestBody$inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TerminationsEmployeeIdRequestBody$Outbound = {
    version: string;
    effective_date: string;
    run_termination_payroll?: boolean | undefined;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequestBody$outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequestBody$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TerminationsEmployeeIdRequestBody$ {
    /** @deprecated use `PutV1TerminationsEmployeeIdRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TerminationsEmployeeIdRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequestBody$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequestBody>;
    /** @deprecated use `PutV1TerminationsEmployeeIdRequestBody$Outbound` instead. */
    type Outbound = PutV1TerminationsEmployeeIdRequestBody$Outbound;
}
export declare function putV1TerminationsEmployeeIdRequestBodyToJSON(putV1TerminationsEmployeeIdRequestBody: PutV1TerminationsEmployeeIdRequestBody): string;
export declare function putV1TerminationsEmployeeIdRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1TerminationsEmployeeIdRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequest$inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TerminationsEmployeeIdRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1TerminationsEmployeeIdRequestBody$Outbound;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdRequest$outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequest$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TerminationsEmployeeIdRequest$ {
    /** @deprecated use `PutV1TerminationsEmployeeIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TerminationsEmployeeIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdRequest$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdRequest>;
    /** @deprecated use `PutV1TerminationsEmployeeIdRequest$Outbound` instead. */
    type Outbound = PutV1TerminationsEmployeeIdRequest$Outbound;
}
export declare function putV1TerminationsEmployeeIdRequestToJSON(putV1TerminationsEmployeeIdRequest: PutV1TerminationsEmployeeIdRequest): string;
export declare function putV1TerminationsEmployeeIdRequestFromJSON(jsonString: string): SafeParseResult<PutV1TerminationsEmployeeIdRequest, SDKValidationError>;
/** @internal */
export declare const PutV1TerminationsEmployeeIdResponse$inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1TerminationsEmployeeIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Termination?: components.Termination$Outbound | undefined;
};
/** @internal */
export declare const PutV1TerminationsEmployeeIdResponse$outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdResponse$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1TerminationsEmployeeIdResponse$ {
    /** @deprecated use `PutV1TerminationsEmployeeIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1TerminationsEmployeeIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1TerminationsEmployeeIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1TerminationsEmployeeIdResponse$Outbound, z.ZodTypeDef, PutV1TerminationsEmployeeIdResponse>;
    /** @deprecated use `PutV1TerminationsEmployeeIdResponse$Outbound` instead. */
    type Outbound = PutV1TerminationsEmployeeIdResponse$Outbound;
}
export declare function putV1TerminationsEmployeeIdResponseToJSON(putV1TerminationsEmployeeIdResponse: PutV1TerminationsEmployeeIdResponse): string;
export declare function putV1TerminationsEmployeeIdResponseFromJSON(jsonString: string): SafeParseResult<PutV1TerminationsEmployeeIdResponse, SDKValidationError>;
//# sourceMappingURL=putv1terminationsemployeeid.d.ts.map