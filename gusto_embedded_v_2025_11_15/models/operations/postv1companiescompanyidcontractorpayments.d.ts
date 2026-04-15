import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
};
export type PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod = ClosedEnum<typeof PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod>;
export type PostV1CompaniesCompanyIdContractorPaymentsRequestBody = {
    /**
     * The contractor receiving the payment
     */
    contractorUuid: string;
    /**
     * Date of contractor payment
     */
    date: RFCDate;
    paymentMethod?: PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod | undefined;
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
export type PostV1CompaniesCompanyIdContractorPaymentsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompaniesCompanyIdContractorPaymentsRequestBody;
};
export type PostV1CompaniesCompanyIdContractorPaymentsResponse = {
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
     * Example response
     */
    contractorPayment?: components.ContractorPayment | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod$inboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsPaymentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
        readonly HistoricalPayment: "Historical Payment";
    }>;
}
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsRequestBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound = {
    contractor_uuid: string;
    date: string;
    payment_method: string;
    wage?: number | undefined;
    hours?: number | undefined;
    bonus?: number | undefined;
    reimbursement?: number | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentsRequestBody$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsRequestBody>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentsRequestBodyToJSON(postV1CompaniesCompanyIdContractorPaymentsRequestBody: PostV1CompaniesCompanyIdContractorPaymentsRequestBody): string;
export declare function postV1CompaniesCompanyIdContractorPaymentsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompaniesCompanyIdContractorPaymentsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentsRequest$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsRequest>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsRequest$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentsRequest$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentsRequestToJSON(postV1CompaniesCompanyIdContractorPaymentsRequest: PostV1CompaniesCompanyIdContractorPaymentsRequest): string;
export declare function postV1CompaniesCompanyIdContractorPaymentsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment"?: components.ContractorPayment$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompaniesCompanyIdContractorPaymentsResponse$ {
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentsResponse$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentsResponse>;
    /** @deprecated use `PostV1CompaniesCompanyIdContractorPaymentsResponse$Outbound` instead. */
    type Outbound = PostV1CompaniesCompanyIdContractorPaymentsResponse$Outbound;
}
export declare function postV1CompaniesCompanyIdContractorPaymentsResponseToJSON(postV1CompaniesCompanyIdContractorPaymentsResponse: PostV1CompaniesCompanyIdContractorPaymentsResponse): string;
export declare function postV1CompaniesCompanyIdContractorPaymentsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcontractorpayments.d.ts.map