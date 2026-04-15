import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest = {
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
export type PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse = {
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
    payroll?: components.Payroll | undefined;
};
/** @internal */
export declare const PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$inboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$outboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$Outbound, z.ZodTypeDef, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$ {
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$Outbound, z.ZodTypeDef, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest>;
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$Outbound` instead. */
    type Outbound = PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest$Outbound;
}
export declare function putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequestToJSON(putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest): string;
export declare function putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequestFromJSON(jsonString: string): SafeParseResult<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, SDKValidationError>;
/** @internal */
export declare const PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$inboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Payroll?: components.Payroll$Outbound | undefined;
};
/** @internal */
export declare const PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$outboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$Outbound, z.ZodTypeDef, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$ {
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$Outbound, z.ZodTypeDef, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse>;
    /** @deprecated use `PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$Outbound` instead. */
    type Outbound = PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse$Outbound;
}
export declare function putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponseToJSON(putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse): string;
export declare function putApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponseFromJSON(jsonString: string): SafeParseResult<PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse, SDKValidationError>;
//# sourceMappingURL=putapiv1companiescompanyidpayrollspayrollidcancel.d.ts.map