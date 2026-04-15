import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorPaymentsContractorPaymentUuidFundRequest = {
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorPaymentsContractorPaymentUuidFundResponse = {
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
    contractorPayment?: components.ContractorPayment | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundRequest$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound = {
    contractor_payment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidFundRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentsContractorPaymentUuidFundRequest$ {
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidFundRequest>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound;
}
export declare function getV1ContractorPaymentsContractorPaymentUuidFundRequestToJSON(getV1ContractorPaymentsContractorPaymentUuidFundRequest: GetV1ContractorPaymentsContractorPaymentUuidFundRequest): string;
export declare function getV1ContractorPaymentsContractorPaymentUuidFundRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidFundRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidFundResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment"?: components.ContractorPayment$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundResponse$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidFundResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentsContractorPaymentUuidFundResponse$ {
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidFundResponse>;
    /** @deprecated use `GetV1ContractorPaymentsContractorPaymentUuidFundResponse$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentsContractorPaymentUuidFundResponse$Outbound;
}
export declare function getV1ContractorPaymentsContractorPaymentUuidFundResponseToJSON(getV1ContractorPaymentsContractorPaymentUuidFundResponse: GetV1ContractorPaymentsContractorPaymentUuidFundResponse): string;
export declare function getV1ContractorPaymentsContractorPaymentUuidFundResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidFundResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentscontractorpaymentuuidfund.d.ts.map