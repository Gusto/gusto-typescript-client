import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeesEmployeeIdBankAccountsRequest = {
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
export type GetV1EmployeesEmployeeIdBankAccountsResponse = {
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
    employeeBankAccountList?: Array<components.EmployeeBankAccount> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdBankAccountsRequest$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdBankAccountsRequest>;
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound;
}
export declare function getV1EmployeesEmployeeIdBankAccountsRequestToJSON(getV1EmployeesEmployeeIdBankAccountsRequest: GetV1EmployeesEmployeeIdBankAccountsRequest): string;
export declare function getV1EmployeesEmployeeIdBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeesEmployeeIdBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Bank-Account-List"?: Array<components.EmployeeBankAccount$Outbound> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeesEmployeeIdBankAccountsResponse$ {
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdBankAccountsResponse>;
    /** @deprecated use `GetV1EmployeesEmployeeIdBankAccountsResponse$Outbound` instead. */
    type Outbound = GetV1EmployeesEmployeeIdBankAccountsResponse$Outbound;
}
export declare function getV1EmployeesEmployeeIdBankAccountsResponseToJSON(getV1EmployeesEmployeeIdBankAccountsResponse: GetV1EmployeesEmployeeIdBankAccountsResponse): string;
export declare function getV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidbankaccounts.d.ts.map