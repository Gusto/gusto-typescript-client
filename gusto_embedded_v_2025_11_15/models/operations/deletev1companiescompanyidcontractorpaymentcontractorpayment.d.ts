import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest = {
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
export type DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse = {
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
export declare const DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound = {
    company_id: string;
    contractor_payment_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest$Outbound;
}
export declare function deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequestToJSON(deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest: DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest): string;
export declare function deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse$Outbound;
}
export declare function deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponseToJSON(deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse: DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse): string;
export declare function deleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyidcontractorpaymentcontractorpayment.d.ts.map