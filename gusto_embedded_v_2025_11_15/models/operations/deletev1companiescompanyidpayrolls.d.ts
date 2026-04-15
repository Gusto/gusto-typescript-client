import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1CompaniesCompanyIdPayrollsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the payroll
     */
    payrollId: string;
    /**
     * When true, request an asynchronous delete of the payroll.
     */
    async?: boolean | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1CompaniesCompanyIdPayrollsResponse = {
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
export declare const DeleteV1CompaniesCompanyIdPayrollsRequest$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdPayrollsRequest$Outbound = {
    company_id: string;
    payroll_id: string;
    async?: boolean | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdPayrollsRequest$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdPayrollsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdPayrollsRequest$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsRequest$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdPayrollsRequest>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsRequest$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdPayrollsRequest$Outbound;
}
export declare function deleteV1CompaniesCompanyIdPayrollsRequestToJSON(deleteV1CompaniesCompanyIdPayrollsRequest: DeleteV1CompaniesCompanyIdPayrollsRequest): string;
export declare function deleteV1CompaniesCompanyIdPayrollsRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdPayrollsRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1CompaniesCompanyIdPayrollsResponse$inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1CompaniesCompanyIdPayrollsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1CompaniesCompanyIdPayrollsResponse$outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdPayrollsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1CompaniesCompanyIdPayrollsResponse$ {
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1CompaniesCompanyIdPayrollsResponse$Outbound, z.ZodTypeDef, DeleteV1CompaniesCompanyIdPayrollsResponse>;
    /** @deprecated use `DeleteV1CompaniesCompanyIdPayrollsResponse$Outbound` instead. */
    type Outbound = DeleteV1CompaniesCompanyIdPayrollsResponse$Outbound;
}
export declare function deleteV1CompaniesCompanyIdPayrollsResponseToJSON(deleteV1CompaniesCompanyIdPayrollsResponse: DeleteV1CompaniesCompanyIdPayrollsResponse): string;
export declare function deleteV1CompaniesCompanyIdPayrollsResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1CompaniesCompanyIdPayrollsResponse, SDKValidationError>;
//# sourceMappingURL=deletev1companiescompanyidpayrolls.d.ts.map