import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBankAccount } from "../components/employeebankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1EmployeesEmployeeIdBankAccountsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBankAccountList?: Array<EmployeeBankAccount> | undefined;
};
/** @internal */
export type GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    page?: number | undefined;
    per?: number | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdBankAccountsRequest>;
export declare function getV1EmployeesEmployeeIdBankAccountsRequestToJSON(getV1EmployeesEmployeeIdBankAccountsRequest: GetV1EmployeesEmployeeIdBankAccountsRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidbankaccounts.d.ts.map