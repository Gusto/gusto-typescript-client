import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentGroup } from "../components/contractorpaymentgroup.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion = ClosedEnum<typeof PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion>;
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest = {
    /**
     * The UUID of the contractor payment group
     */
    contractorPaymentGroupUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion | undefined;
};
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Full contractor payment group object
     */
    contractorPaymentGroup?: ContractorPaymentGroup | undefined;
};
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundHeaderXGustoAPIVersion>;
/** @internal */
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound = {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound, z.ZodTypeDef, PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest>;
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequestToJSON(putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest: PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest): string;
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$inboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse, z.ZodTypeDef, unknown>;
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorpaymentgroupscontractorpaymentgroupidfund.d.ts.map