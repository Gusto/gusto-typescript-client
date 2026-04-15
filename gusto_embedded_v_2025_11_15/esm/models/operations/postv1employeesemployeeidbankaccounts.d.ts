import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBankAccount } from "../components/employeebankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const AccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
export type AccountType = ClosedEnum<typeof AccountType>;
export type PostV1EmployeesEmployeeIdBankAccountsRequestBody = {
    name: string;
    routingNumber: string;
    accountNumber: string;
    accountType: AccountType;
};
export type PostV1EmployeesEmployeeIdBankAccountsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody;
};
export type PostV1EmployeesEmployeeIdBankAccountsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBankAccount?: EmployeeBankAccount | undefined;
};
/** @internal */
export declare const AccountType$outboundSchema: z.ZodNativeEnum<typeof AccountType>;
/** @internal */
export type PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequestBody>;
export declare function postV1EmployeesEmployeeIdBankAccountsRequestBodyToJSON(postV1EmployeesEmployeeIdBankAccountsRequestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody): string;
/** @internal */
export type PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequest>;
export declare function postV1EmployeesEmployeeIdBankAccountsRequestToJSON(postV1EmployeesEmployeeIdBankAccountsRequest: PostV1EmployeesEmployeeIdBankAccountsRequest): string;
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
export declare function postV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidbankaccounts.d.ts.map