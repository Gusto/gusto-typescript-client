import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeBankAccount } from "../components/employeebankaccount.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PutV1EmployeesEmployeeIdBankAccountsAccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
export type PutV1EmployeesEmployeeIdBankAccountsAccountType = ClosedEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType>;
export type PutV1EmployeesEmployeeIdBankAccountsRequestBody = {
    name: string;
    routingNumber: string;
    accountNumber: string;
    accountType: PutV1EmployeesEmployeeIdBankAccountsAccountType;
};
export type PutV1EmployeesEmployeeIdBankAccountsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * The UUID of the bank account
     */
    bankAccountUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody;
};
export type PutV1EmployeesEmployeeIdBankAccountsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    employeeBankAccount?: EmployeeBankAccount | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType>;
/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequestBody>;
export declare function putV1EmployeesEmployeeIdBankAccountsRequestBodyToJSON(putV1EmployeesEmployeeIdBankAccountsRequestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody): string;
/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    bank_account_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequest>;
export declare function putV1EmployeesEmployeeIdBankAccountsRequestToJSON(putV1EmployeesEmployeeIdBankAccountsRequest: PutV1EmployeesEmployeeIdBankAccountsRequest): string;
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
export declare function putV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidbankaccounts.d.ts.map