import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod = ClosedEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod>;
export type ContractorPayments = {
    /**
     * The contractor receiving the payment
     */
    contractorUuid?: string | undefined;
    paymentMethod?: PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod | undefined;
    /**
     * If the contractor is on a fixed wage, this is the fixed wage payment for the contractor, regardless of hours worked
     */
    wage?: number | undefined;
    /**
     * If the contractor is on an hourly wage, this is the number of hours that the contractor worked for the payment
     */
    hours?: number | undefined;
    /**
     * If the contractor is on an hourly wage, this is the bonus the contractor earned
     */
    bonus?: number | undefined;
    /**
     * Reimbursed wages for the contractor
     */
    reimbursement?: number | undefined;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody = {
    /**
     * The payment check date
     */
    checkDate: RFCDate;
    /**
     * Optional token used to make contractor payment group creation idempotent.  If provided, string must be unique for each group you intend to create.
     */
    creationToken?: string | undefined;
    contractorPayments: Array<ContractorPayments>;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
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
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
}
/** @internal */
export declare const ContractorPayments$inboundSchema: z.ZodType<ContractorPayments, z.ZodTypeDef, unknown>;
/** @internal */
export type ContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    payment_method: string;
    wage?: number | undefined;
    hours?: number | undefined;
    bonus?: number | undefined;
    reimbursement?: number | undefined;
};
/** @internal */
export declare const ContractorPayments$outboundSchema: z.ZodType<ContractorPayments$Outbound, z.ZodTypeDef, ContractorPayments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContractorPayments$ {
    /** @deprecated use `ContractorPayments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContractorPayments, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContractorPayments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContractorPayments$Outbound, z.ZodTypeDef, ContractorPayments>;
    /** @deprecated use `ContractorPayments$Outbound` instead. */
    type Outbound = ContractorPayments$Outbound;
}
export declare function contractorPaymentsToJSON(contractorPayments: ContractorPayments): string;
export declare function contractorPaymentsFromJSON(jsonString: string): SafeParseResult<ContractorPayments, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound = {
    check_date: string;
    creation_token?: string | undefined;
    contractor_payments: Array<ContractorPayments$Outbound>;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestBodyToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsRequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsRequest: PostV1CompaniesCompanyIdContractorPaymentGroupsRequest): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Group"?: components.ContractorPaymentGroup$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsResponseToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsResponse: PostV1CompaniesCompanyIdContractorPaymentGroupsResponse): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcontractorpaymentgroups.d.ts.map