import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteCompaniesCompanyUuidHolidayPayPolicyRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteCompaniesCompanyUuidHolidayPayPolicyResponse = {
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
export declare const DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, DeleteCompaniesCompanyUuidHolidayPayPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$ {
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound, z.ZodTypeDef, DeleteCompaniesCompanyUuidHolidayPayPolicyRequest>;
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound` instead. */
    type Outbound = DeleteCompaniesCompanyUuidHolidayPayPolicyRequest$Outbound;
}
export declare function deleteCompaniesCompanyUuidHolidayPayPolicyRequestToJSON(deleteCompaniesCompanyUuidHolidayPayPolicyRequest: DeleteCompaniesCompanyUuidHolidayPayPolicyRequest): string;
export declare function deleteCompaniesCompanyUuidHolidayPayPolicyRequestFromJSON(jsonString: string): SafeParseResult<DeleteCompaniesCompanyUuidHolidayPayPolicyRequest, SDKValidationError>;
/** @internal */
export declare const DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, DeleteCompaniesCompanyUuidHolidayPayPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$ {
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound, z.ZodTypeDef, DeleteCompaniesCompanyUuidHolidayPayPolicyResponse>;
    /** @deprecated use `DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound` instead. */
    type Outbound = DeleteCompaniesCompanyUuidHolidayPayPolicyResponse$Outbound;
}
export declare function deleteCompaniesCompanyUuidHolidayPayPolicyResponseToJSON(deleteCompaniesCompanyUuidHolidayPayPolicyResponse: DeleteCompaniesCompanyUuidHolidayPayPolicyResponse): string;
export declare function deleteCompaniesCompanyUuidHolidayPayPolicyResponseFromJSON(jsonString: string): SafeParseResult<DeleteCompaniesCompanyUuidHolidayPayPolicyResponse, SDKValidationError>;
//# sourceMappingURL=deletecompaniescompanyuuidholidaypaypolicy.d.ts.map