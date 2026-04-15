import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { PayrollReceipt } from "../components/payrollreceipt.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion>;
export type GetV1PaymentReceiptsPayrollsPayrollUuidRequest = {
    /**
     * The UUID of the payroll
     */
    payrollUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion | undefined;
};
export type GetV1PaymentReceiptsPayrollsPayrollUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    payrollReceipt?: PayrollReceipt | undefined;
};
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1PaymentReceiptsPayrollsPayrollUuidHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound = {
    payroll_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidRequest$outboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidRequest$Outbound, z.ZodTypeDef, GetV1PaymentReceiptsPayrollsPayrollUuidRequest>;
export declare function getV1PaymentReceiptsPayrollsPayrollUuidRequestToJSON(getV1PaymentReceiptsPayrollsPayrollUuidRequest: GetV1PaymentReceiptsPayrollsPayrollUuidRequest): string;
/** @internal */
export declare const GetV1PaymentReceiptsPayrollsPayrollUuidResponse$inboundSchema: z.ZodType<GetV1PaymentReceiptsPayrollsPayrollUuidResponse, z.ZodTypeDef, unknown>;
export declare function getV1PaymentReceiptsPayrollsPayrollUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1PaymentReceiptsPayrollsPayrollUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1paymentreceiptspayrollspayrolluuid.d.ts.map