import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest = {
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
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse = {
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
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequestToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseToJSON(putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse: PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse): string;
export declare function putV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdPayrollsPayrollIdCalculateResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidpayrollspayrollidcalculate.d.ts.map