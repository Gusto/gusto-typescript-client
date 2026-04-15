import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest = {
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
};
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse = {
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
     * A prepared payroll
     */
    payrollPrepared?: components.PayrollPrepared | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Payroll-Prepared"?: components.PayrollPrepared$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponseToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidprepare.d.ts.map