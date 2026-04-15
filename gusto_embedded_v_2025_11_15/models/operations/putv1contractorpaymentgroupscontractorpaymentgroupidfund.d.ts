import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest = {
    /**
     * The UUID of the contractor payment group
     */
    contractorPaymentGroupUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse = {
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
     * Full contractor payment group object
     */
    contractorPaymentGroup?: components.ContractorPaymentGroup | undefined;
};
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound = {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound, z.ZodTypeDef, PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$ {
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound, z.ZodTypeDef, PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest>;
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound` instead. */
    type Outbound = PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest$Outbound;
}
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequestToJSON(putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest: PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest): string;
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$inboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Group"?: components.ContractorPaymentGroup$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$outboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$Outbound, z.ZodTypeDef, PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$ {
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$Outbound, z.ZodTypeDef, PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse>;
    /** @deprecated use `PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$Outbound` instead. */
    type Outbound = PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse$Outbound;
}
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponseToJSON(putV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse: PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse): string;
export declare function putV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorpaymentgroupscontractorpaymentgroupidfund.d.ts.map