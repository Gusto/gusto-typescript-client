import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostPayrollsGrossUpPayrollUuidRequestBody = {
    /**
     * Employee UUID
     */
    employeeUuid: string;
    /**
     * Employee net earnings
     */
    netPay: string;
};
export type PostPayrollsGrossUpPayrollUuidRequest = {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostPayrollsGrossUpPayrollUuidRequestBody;
};
export type PostPayrollsGrossUpPayrollUuidResponse = {
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
    grossUpPay?: components.GrossUpPay | undefined;
};
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPayrollsGrossUpPayrollUuidRequestBody$Outbound = {
    employee_uuid: string;
    net_pay: string;
};
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequestBody$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPayrollsGrossUpPayrollUuidRequestBody$ {
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequestBody$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidRequestBody>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequestBody$Outbound` instead. */
    type Outbound = PostPayrollsGrossUpPayrollUuidRequestBody$Outbound;
}
export declare function postPayrollsGrossUpPayrollUuidRequestBodyToJSON(postPayrollsGrossUpPayrollUuidRequestBody: PostPayrollsGrossUpPayrollUuidRequestBody): string;
export declare function postPayrollsGrossUpPayrollUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PostPayrollsGrossUpPayrollUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidRequest$inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPayrollsGrossUpPayrollUuidRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostPayrollsGrossUpPayrollUuidRequestBody$Outbound;
};
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidRequest$outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequest$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPayrollsGrossUpPayrollUuidRequest$ {
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidRequest$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidRequest>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidRequest$Outbound` instead. */
    type Outbound = PostPayrollsGrossUpPayrollUuidRequest$Outbound;
}
export declare function postPayrollsGrossUpPayrollUuidRequestToJSON(postPayrollsGrossUpPayrollUuidRequest: PostPayrollsGrossUpPayrollUuidRequest): string;
export declare function postPayrollsGrossUpPayrollUuidRequestFromJSON(jsonString: string): SafeParseResult<PostPayrollsGrossUpPayrollUuidRequest, SDKValidationError>;
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidResponse$inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostPayrollsGrossUpPayrollUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Gross-Up-Pay"?: components.GrossUpPay$Outbound | undefined;
};
/** @internal */
export declare const PostPayrollsGrossUpPayrollUuidResponse$outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponse$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostPayrollsGrossUpPayrollUuidResponse$ {
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostPayrollsGrossUpPayrollUuidResponse$Outbound, z.ZodTypeDef, PostPayrollsGrossUpPayrollUuidResponse>;
    /** @deprecated use `PostPayrollsGrossUpPayrollUuidResponse$Outbound` instead. */
    type Outbound = PostPayrollsGrossUpPayrollUuidResponse$Outbound;
}
export declare function postPayrollsGrossUpPayrollUuidResponseToJSON(postPayrollsGrossUpPayrollUuidResponse: PostPayrollsGrossUpPayrollUuidResponse): string;
export declare function postPayrollsGrossUpPayrollUuidResponseFromJSON(jsonString: string): SafeParseResult<PostPayrollsGrossUpPayrollUuidResponse, SDKValidationError>;
//# sourceMappingURL=postpayrollsgrossuppayrolluuid.d.ts.map