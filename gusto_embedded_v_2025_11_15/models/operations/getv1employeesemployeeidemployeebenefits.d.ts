import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdEmployeeBenefitsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The page that is requested. When unspecified, will load all objects unless endpoint forces pagination.
     */
    page?: number | undefined;
    /**
     * Number of objects per page. For majority of endpoints will default to 25
     */
    per?: number | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdEmployeeBenefitsResponse = {
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
    employeeBenefitList?: Array<components.EmployeeBenefit> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmployeeBenefitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmployeeBenefitsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdEmployeeBenefitsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdEmployeeBenefitsRequestToJSON(getV1EmployeesEmployeeIdEmployeeBenefitsRequest: GetV1EmployeesEmployeeIdEmployeeBenefitsRequest): string;
export declare function getV1EmployeesEmployeeIdEmployeeBenefitsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit-List"?: Array<components.EmployeeBenefit$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdEmployeeBenefitsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdEmployeeBenefitsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdEmployeeBenefitsResponseToJSON(getV1EmployeesEmployeeIdEmployeeBenefitsResponse: GetV1EmployeesEmployeeIdEmployeeBenefitsResponse): string;
export declare function getV1EmployeesEmployeeIdEmployeeBenefitsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdEmployeeBenefitsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidemployeebenefits.d.ts.map