import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPayment } from "../components/contractorpayment.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorPaymentsContractorPaymentUuidFundRequest = {
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorPaymentsContractorPaymentUuidFundResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorPayment?: ContractorPayment | undefined;
};
/** @internal */
export type GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound = {
    contractor_payment_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentsContractorPaymentUuidFundRequest>;
export declare function getV1ContractorPaymentsContractorPaymentUuidFundRequestToJSON(getV1ContractorPaymentsContractorPaymentUuidFundRequest: GetV1ContractorPaymentsContractorPaymentUuidFundRequest): string;
/** @internal */
export declare const GetV1ContractorPaymentsContractorPaymentUuidFundResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentsContractorPaymentUuidFundResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorPaymentsContractorPaymentUuidFundResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentsContractorPaymentUuidFundResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentscontractorpaymentuuidfund.d.ts.map