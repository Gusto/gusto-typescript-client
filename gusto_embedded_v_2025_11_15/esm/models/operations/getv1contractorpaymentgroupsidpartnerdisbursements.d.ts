import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentGroupPartnerDisbursements } from "../components/contractorpaymentgrouppartnerdisbursements.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion>;
export type GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest = {
    /**
     * The UUID of the contractor payment group
     */
    id: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion | undefined;
};
export type GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    contractorPaymentGroupPartnerDisbursements?: ContractorPaymentGroupPartnerDisbursements | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1ContractorPaymentGroupsIdPartnerDisbursementsHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest$Outbound = {
    id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest>;
export declare function getV1ContractorPaymentGroupsIdPartnerDisbursementsRequestToJSON(getV1ContractorPaymentGroupsIdPartnerDisbursementsRequest: GetV1ContractorPaymentGroupsIdPartnerDisbursementsRequest): string;
/** @internal */
export declare const GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorPaymentGroupsIdPartnerDisbursementsResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentGroupsIdPartnerDisbursementsResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentgroupsidpartnerdisbursements.d.ts.map