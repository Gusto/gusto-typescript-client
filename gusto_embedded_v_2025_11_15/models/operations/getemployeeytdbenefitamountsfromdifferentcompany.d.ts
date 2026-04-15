import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The tax year for which to retrieve YTD benefit amounts. Defaults to current year if not specified.
     */
    taxYear?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse = {
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
     * List of Ytd Benefit Amounts From Different Company List
     */
    ytdBenefitAmountsFromDifferentCompanyList?: Array<components.YtdBenefitAmountsFromDifferentCompany> | undefined;
};
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$inboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound = {
    employee_id: string;
    tax_year?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$ {
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound, z.ZodTypeDef, GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest>;
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound` instead. */
    type Outbound = GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest$Outbound;
}
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyRequestToJSON(getEmployeeYtdBenefitAmountsFromDifferentCompanyRequest: GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): string;
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyRequestFromJSON(jsonString: string): SafeParseResult<GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, SDKValidationError>;
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Ytd-Benefit-Amounts-From-Different-Company-List"?: Array<components.YtdBenefitAmountsFromDifferentCompany$Outbound> | undefined;
};
/** @internal */
export declare const GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$outboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound, z.ZodTypeDef, GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$ {
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound, z.ZodTypeDef, GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse>;
    /** @deprecated use `GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound` instead. */
    type Outbound = GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse$Outbound;
}
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyResponseToJSON(getEmployeeYtdBenefitAmountsFromDifferentCompanyResponse: GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse): string;
export declare function getEmployeeYtdBenefitAmountsFromDifferentCompanyResponseFromJSON(jsonString: string): SafeParseResult<GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse, SDKValidationError>;
//# sourceMappingURL=getemployeeytdbenefitamountsfromdifferentcompany.d.ts.map