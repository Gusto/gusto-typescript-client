import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SubmissionBlockers = {
    /**
     * The type of submission_blocker that is blocking the payment.
     */
    blockerType?: string | undefined;
    /**
     * The selected option to unblock the payment's submission_blocker.
     */
    selectedOption?: string | undefined;
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody = {
    /**
     * An array of submission_blockers, each with a selected unblock option.
     */
    submissionBlockers?: Array<SubmissionBlockers> | undefined;
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody;
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse = {
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
export declare const SubmissionBlockers$inboundSchema: z.ZodType<SubmissionBlockers, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmissionBlockers$Outbound = {
    blocker_type?: string | undefined;
    selected_option?: string | undefined;
};
/** @internal */
export declare const SubmissionBlockers$outboundSchema: z.ZodType<SubmissionBlockers$Outbound, z.ZodTypeDef, SubmissionBlockers>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubmissionBlockers$ {
    /** @deprecated use `SubmissionBlockers$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubmissionBlockers, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubmissionBlockers$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubmissionBlockers$Outbound, z.ZodTypeDef, SubmissionBlockers>;
    /** @deprecated use `SubmissionBlockers$Outbound` instead. */
    type Outbound = SubmissionBlockers$Outbound;
}
export declare function submissionBlockersToJSON(submissionBlockers: SubmissionBlockers): string;
export declare function submissionBlockersFromJSON(jsonString: string): SafeParseResult<SubmissionBlockers, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound = {
    submission_blockers?: Array<SubmissionBlockers$Outbound> | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBodyToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse: PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidsubmit.d.ts.map