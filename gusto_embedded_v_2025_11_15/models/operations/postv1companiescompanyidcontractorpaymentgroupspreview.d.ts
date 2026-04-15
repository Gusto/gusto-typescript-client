import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod = ClosedEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod>;
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments = {
    /**
     * The contractor receiving the payment
     */
    contractorUuid?: string | undefined;
    paymentMethod?: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod | undefined;
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
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody = {
    /**
     * The payment check date
     */
    checkDate: RFCDate;
    /**
     * Optional token used to make contractor payment group creation idempotent.  If provided, string must be unique for each group you intend to create.
     */
    creationToken?: string | undefined;
    contractorPayments: Array<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments>;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse = {
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
     * Full contractor payment group object with null uuid
     */
    contractorPaymentGroup?: components.ContractorPaymentGroup | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    payment_method: string;
    wage?: number | undefined;
    hours?: number | undefined;
    bonus?: number | undefined;
    reimbursement?: number | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPaymentsToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPaymentsFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound = {
    check_date: string;
    creation_token?: string | undefined;
    contractor_payments: Array<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound>;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBodyToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Group"?: components.ContractorPaymentGroup$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponseToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse): string;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcontractorpaymentgroupspreview.d.ts.map