import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { ContractorPaymentGroup } from "../components/contractorpaymentgroup.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion>;
export type Options = {
    /**
     * The type of option
     */
    type?: string | undefined;
    /**
     * Message for the option
     */
    message?: string | undefined;
};
export type SubmissionBlockers = {
    /**
     * The type of blocker that is blocking the payment submission
     */
    blockerType?: string | undefined;
    /**
     * The unblock option selected to resolve the submission blocker
     */
    selectedOption?: string | null | undefined;
    /**
     * Optional message related to the blocker
     */
    message?: string | undefined;
    /**
     * Optional array of additional options for the blocker
     */
    options?: Array<Options> | undefined;
};
export declare const PaymentMethod: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
    readonly HistoricalPayment: "Historical Payment";
};
export type PaymentMethod = ClosedEnum<typeof PaymentMethod>;
export type ContractorPayments = {
    /**
     * The contractor receiving the payment
     */
    contractorUuid?: string | undefined;
    paymentMethod?: PaymentMethod | undefined;
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
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody = {
    /**
     * The payment check date
     */
    checkDate: RFCDate;
    /**
     * Required token used to make contractor payment group creation idempotent. String must be unique for each group you intend to create.
     */
    creationToken: string;
    /**
     * Optional array of submission blockers with selected unblock options. Returned from the preview endpoint and can be submitted with selected_option to resolve blockers.
     */
    submissionBlockers?: Array<SubmissionBlockers> | undefined;
    contractorPayments: Array<ContractorPayments>;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the company
     */
    companyId: string;
    requestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody;
};
export type PostV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Full contractor payment group object
     */
    contractorPaymentGroup?: ContractorPaymentGroup | undefined;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion>;
/** @internal */
export type Options$Outbound = {
    type?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const Options$outboundSchema: z.ZodType<Options$Outbound, z.ZodTypeDef, Options>;
export declare function optionsToJSON(options: Options): string;
/** @internal */
export type SubmissionBlockers$Outbound = {
    blocker_type?: string | undefined;
    selected_option?: string | null | undefined;
    message?: string | undefined;
    options?: Array<Options$Outbound> | undefined;
};
/** @internal */
export declare const SubmissionBlockers$outboundSchema: z.ZodType<SubmissionBlockers$Outbound, z.ZodTypeDef, SubmissionBlockers>;
export declare function submissionBlockersToJSON(submissionBlockers: SubmissionBlockers): string;
/** @internal */
export declare const PaymentMethod$outboundSchema: z.ZodNativeEnum<typeof PaymentMethod>;
/** @internal */
export type ContractorPayments$Outbound = {
    contractor_uuid?: string | undefined;
    payment_method: string;
    wage?: string | undefined;
    hours?: string | undefined;
    bonus?: string | undefined;
    reimbursement?: string | undefined;
};
/** @internal */
export declare const ContractorPayments$outboundSchema: z.ZodType<ContractorPayments$Outbound, z.ZodTypeDef, ContractorPayments>;
export declare function contractorPaymentsToJSON(contractorPayments: ContractorPayments): string;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound = {
    check_date: string;
    creation_token: string;
    submission_blockers?: Array<SubmissionBlockers$Outbound> | undefined;
    contractor_payments: Array<ContractorPayments$Outbound>;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestBodyToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsRequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody): string;
/** @internal */
export type PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound = {
    "X-Gusto-API-Version": string;
    company_id: string;
    RequestBody: PostV1CompaniesCompanyIdContractorPaymentGroupsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$outboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsRequest$Outbound, z.ZodTypeDef, PostV1CompaniesCompanyIdContractorPaymentGroupsRequest>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsRequestToJSON(postV1CompaniesCompanyIdContractorPaymentGroupsRequest: PostV1CompaniesCompanyIdContractorPaymentGroupsRequest): string;
/** @internal */
export declare const PostV1CompaniesCompanyIdContractorPaymentGroupsResponse$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdContractorPaymentGroupsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdContractorPaymentGroupsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companiescompanyidcontractorpaymentgroups.d.ts.map