import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { ContractorPaymentGroupPreview } from "../components/contractorpaymentgrouppreview.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion>;
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
    wage?: string | undefined;
    /**
     * If the contractor is on an hourly wage, this is the number of hours that the contractor worked for the payment
     */
    hours?: string | undefined;
    /**
     * If the contractor is on an hourly wage, this is the bonus the contractor earned
     */
    bonus?: string | undefined;
    /**
     * Reimbursed wages for the contractor
     */
    reimbursement?: string | undefined;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody = {
    contractorPayments: Array<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments>;
    /**
     * Date when payments should be processed
     */
    checkDate?: RFCDate | undefined;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    requestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Full contractor payment group object with null uuid
     */
    contractorPaymentGroupPreview?: ContractorPaymentGroupPreview | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewHeaderXGustoAPIVersion>;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewPaymentMethod>;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    payment_method: string;
    wage?: string | undefined;
    hours?: string | undefined;
    bonus?: string | undefined;
    reimbursement?: string | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPaymentsToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments): string;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound = {
    contractor_payments: Array<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewContractorPayments$Outbound>;
    check_date?: string | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBodyToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    RequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcontractorpaymentgroupspreview.d.ts.map