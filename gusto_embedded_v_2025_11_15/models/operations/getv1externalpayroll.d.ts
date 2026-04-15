import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ExternalPayrollRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the external payroll
     */
    externalPayrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ExternalPayrollResponse = {
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
    externalPayroll?: components.ExternalPayroll | undefined;
};
/** @internal */
export declare const GetV1ExternalPayrollRequest$inboundSchema: z.ZodType<GetV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ExternalPayrollRequest$outboundSchema: z.ZodType<GetV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ExternalPayrollRequest$ {
    /** @deprecated use `GetV1ExternalPayrollRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ExternalPayrollRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollRequest>;
    /** @deprecated use `GetV1ExternalPayrollRequest$Outbound` instead. */
    type Outbound = GetV1ExternalPayrollRequest$Outbound;
}
export declare function getV1ExternalPayrollRequestToJSON(getV1ExternalPayrollRequest: GetV1ExternalPayrollRequest): string;
export declare function getV1ExternalPayrollRequestFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ExternalPayrollResponse$inboundSchema: z.ZodType<GetV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ExternalPayrollResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "External-Payroll"?: components.ExternalPayroll$Outbound | undefined;
};
/** @internal */
export declare const GetV1ExternalPayrollResponse$outboundSchema: z.ZodType<GetV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, GetV1ExternalPayrollResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ExternalPayrollResponse$ {
    /** @deprecated use `GetV1ExternalPayrollResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ExternalPayrollResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, GetV1ExternalPayrollResponse>;
    /** @deprecated use `GetV1ExternalPayrollResponse$Outbound` instead. */
    type Outbound = GetV1ExternalPayrollResponse$Outbound;
}
export declare function getV1ExternalPayrollResponseToJSON(getV1ExternalPayrollResponse: GetV1ExternalPayrollResponse): string;
export declare function getV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=getv1externalpayroll.d.ts.map