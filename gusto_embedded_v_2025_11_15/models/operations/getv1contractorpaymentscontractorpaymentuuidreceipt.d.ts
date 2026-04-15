import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest = {
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {
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
    contractorPaymentReceipt?: components.ContractorPaymentReceipt | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound = {
    contractor_payment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$ {
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound;
}
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptRequestToJSON(getV1ContractorPaymentsContractorPaymentUuidReceiptRequest: GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest): string;
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Receipt"?: components.ContractorPaymentReceipt$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$ {
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$Outbound;
}
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptResponseToJSON(getV1ContractorPaymentsContractorPaymentUuidReceiptResponse: GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse): string;
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentscontractorpaymentuuidreceipt.d.ts.map