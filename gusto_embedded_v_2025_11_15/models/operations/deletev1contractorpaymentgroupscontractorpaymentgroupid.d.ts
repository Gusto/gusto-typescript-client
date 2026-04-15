import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest = {
    /**
     * The UUID of the contractor payment group
     */
    contractorPaymentGroupUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse = {
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
};
/** @internal */
export declare const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound = {
    contractor_payment_group_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound, z.ZodTypeDef, DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$ {
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound, z.ZodTypeDef, DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest>;
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound` instead. */
    type Outbound = DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest$Outbound;
}
export declare function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequestToJSON(deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest: DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest): string;
export declare function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound, z.ZodTypeDef, DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$ {
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound, z.ZodTypeDef, DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse>;
    /** @deprecated use `DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound` instead. */
    type Outbound = DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse$Outbound;
}
export declare function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponseToJSON(deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse: DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse): string;
export declare function deleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1contractorpaymentgroupscontractorpaymentgroupid.d.ts.map