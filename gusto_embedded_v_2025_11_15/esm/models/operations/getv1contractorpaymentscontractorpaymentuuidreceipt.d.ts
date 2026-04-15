import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentReceipt } from "../components/contractorpaymentreceipt.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest = {
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorPaymentReceipt?: ContractorPaymentReceipt | undefined;
};
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound = {
    contractor_payment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest>;
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptRequestToJSON(getV1ContractorPaymentsContractorPaymentUuidReceiptRequest: GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest): string;
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorPaymentsContractorPaymentUuidReceiptResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentscontractorpaymentuuidreceipt.d.ts.map