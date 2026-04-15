import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the contractor payment
     */
    contractorPaymentId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse = {
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
export declare const GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound = {
    company_id: string;
    contractor_payment_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentContractorPaymentRequestToJSON(getV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest: GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest): string;
export declare function getV1CompaniesCompanyIdContractorPaymentContractorPaymentRequestFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, SDKValidationError>;
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment"?: components.ContractorPayment$Outbound | undefined;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$ {
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse>;
    /** @deprecated use `GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound` instead. */
    type Outbound = GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound;
}
export declare function getV1CompaniesCompanyIdContractorPaymentContractorPaymentResponseToJSON(getV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse: GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse): string;
export declare function getV1CompaniesCompanyIdContractorPaymentContractorPaymentResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidcontractorpaymentcontractorpayment.d.ts.map