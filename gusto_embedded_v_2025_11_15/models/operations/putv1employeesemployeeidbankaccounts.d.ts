import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody;
};
export type PutV1EmployeesEmployeeIdBankAccountsResponse = {
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
    employeeBankAccount?: components.EmployeeBankAccount | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema: z.ZodNativeEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema: z.ZodNativeEnum<typeof PutV1EmployeesEmployeeIdBankAccountsAccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdBankAccountsAccountType$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdBankAccountsRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdBankAccountsRequestBodyToJSON(putV1EmployeesEmployeeIdBankAccountsRequestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody): string;
export declare function putV1EmployeesEmployeeIdBankAccountsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdBankAccountsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    bank_account_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdBankAccountsRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdBankAccountsRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdBankAccountsRequestToJSON(putV1EmployeesEmployeeIdBankAccountsRequest: PutV1EmployeesEmployeeIdBankAccountsRequest): string;
export declare function putV1EmployeesEmployeeIdBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Bank-Account"?: components.EmployeeBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdBankAccountsResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdBankAccountsResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdBankAccountsResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdBankAccountsResponseToJSON(putV1EmployeesEmployeeIdBankAccountsResponse: PutV1EmployeesEmployeeIdBankAccountsResponse): string;
export declare function putV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidbankaccounts.d.ts.map