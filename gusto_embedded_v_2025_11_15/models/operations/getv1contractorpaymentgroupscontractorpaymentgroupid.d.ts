import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
    /**
     * The UUID of the contractor payment group
     */
    contractorPaymentGroupUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse = {
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
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound = {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$ {
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest>;
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound;
}
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdRequestToJSON(getV1ContractorPaymentGroupsContractorPaymentGroupIdRequest: GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest): string;
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Group"?: components.ContractorPaymentGroup$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$ {
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound, z.ZodTypeDef, GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
    /** @deprecated use `GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound` instead. */
    type Outbound = GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound;
}
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdResponseToJSON(getV1ContractorPaymentGroupsContractorPaymentGroupIdResponse: GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse): string;
export declare function getV1ContractorPaymentGroupsContractorPaymentGroupIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorpaymentgroupscontractorpaymentgroupid.d.ts.map