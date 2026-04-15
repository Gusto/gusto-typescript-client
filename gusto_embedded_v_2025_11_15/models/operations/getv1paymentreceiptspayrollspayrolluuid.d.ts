import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1PaymentReceiptsPayrollsPayrollUuidRequest = {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1PaymentReceiptsPayrollsPayrollUuidResponse = {
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
    payrollReceipt?: components.PayrollReceipt | undefined;
};
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidRequest$inboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidRequest$outboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound, z.ZodTypeDef, GetV1PaymentReceiptsPayrollsPayrollUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1PaymentReceiptsPayrollsPayrollUuidRequest$ {
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound, z.ZodTypeDef, GetV1PaymentReceiptsPayrollsPayrollUuidRequest>;
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound` instead. */
    type Outbound = GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound;
}
export declare function getV1PaymentReceiptsPayrollsPayrollUuidRequestToJSON(getV1PaymentReceiptsPayrollsPayrollUuidRequest: GetV1PaymentReceiptsPayrollsPayrollUuidRequest): string;
export declare function getV1PaymentReceiptsPayrollsPayrollUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1PaymentReceiptsPayrollsPayrollUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidResponse$inboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1PaymentReceiptsPayrollsPayrollUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Receipt"?: components.PayrollReceipt$Outbound | undefined;
};
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidResponse$outboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidResponse$Outbound, z.ZodTypeDef, GetV1PaymentReceiptsPayrollsPayrollUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1PaymentReceiptsPayrollsPayrollUuidResponse$ {
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidResponse$Outbound, z.ZodTypeDef, GetV1PaymentReceiptsPayrollsPayrollUuidResponse>;
    /** @deprecated use `GetV1PaymentReceiptsPayrollsPayrollUuidResponse$Outbound` instead. */
    type Outbound = GetV1PaymentReceiptsPayrollsPayrollUuidResponse$Outbound;
}
export declare function getV1PaymentReceiptsPayrollsPayrollUuidResponseToJSON(getV1PaymentReceiptsPayrollsPayrollUuidResponse: GetV1PaymentReceiptsPayrollsPayrollUuidResponse): string;
export declare function getV1PaymentReceiptsPayrollsPayrollUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1PaymentReceiptsPayrollsPayrollUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1paymentreceiptspayrollspayrolluuid.d.ts.map