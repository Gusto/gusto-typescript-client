import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentGroup } from "../components/contractorpaymentgroup.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion>;
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
    /**
     * The UUID of the contractor payment group
     */
    contractorPaymentGroupUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion | undefined;
};
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful response
     */
    contractorPaymentGroup?: ContractorPaymentGroup | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1ContractorPaymentGroupsContractorPaymentGroupIdHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound = {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest>;
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdRequestToJSON(getV1ContractorPaymentGroupsContractorPaymentGroupIdRequest: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest): string;
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentgroupscontractorpaymentgroupid.d.ts.map