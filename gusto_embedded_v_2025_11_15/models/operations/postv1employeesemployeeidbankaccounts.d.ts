import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const PostV1EmployeesEmployeeIdBankAccountsAccountType: {
    readonly Checking: "Checking";
    readonly Savings: "Savings";
};
export type PostV1EmployeesEmployeeIdBankAccountsAccountType = ClosedEnum<typeof PostV1EmployeesEmployeeIdBankAccountsAccountType>;
export type PostV1EmployeesEmployeeIdBankAccountsRequestBody = {
    name: string;
    routingNumber: string;
    accountNumber: string;
    accountType: PostV1EmployeesEmployeeIdBankAccountsAccountType;
};
export type PostV1EmployeesEmployeeIdBankAccountsRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody;
};
export type PostV1EmployeesEmployeeIdBankAccountsResponse = {
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
export declare const PostV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdBankAccountsAccountType>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdBankAccountsAccountType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdBankAccountsAccountType$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Checking: "Checking";
        readonly Savings: "Savings";
    }>;
}
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound = {
    name: string;
    routing_number: string;
    account_number: string;
    account_type: string;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdBankAccountsRequestBody$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequestBody>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
}
export declare function postV1EmployeesEmployeeIdBankAccountsRequestBodyToJSON(postV1EmployeesEmployeeIdBankAccountsRequestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody): string;
export declare function postV1EmployeesEmployeeIdBankAccountsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdBankAccountsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdBankAccountsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdBankAccountsRequest$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsRequest>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdBankAccountsRequest$Outbound;
}
export declare function postV1EmployeesEmployeeIdBankAccountsRequestToJSON(postV1EmployeesEmployeeIdBankAccountsRequest: PostV1EmployeesEmployeeIdBankAccountsRequest): string;
export declare function postV1EmployeesEmployeeIdBankAccountsRequestFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdBankAccountsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1EmployeesEmployeeIdBankAccountsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Bank-Account"?: components.EmployeeBankAccount$Outbound | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1EmployeesEmployeeIdBankAccountsResponse$ {
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdBankAccountsResponse$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdBankAccountsResponse>;
    /** @deprecated use `PostV1EmployeesEmployeeIdBankAccountsResponse$Outbound` instead. */
    type Outbound = PostV1EmployeesEmployeeIdBankAccountsResponse$Outbound;
}
export declare function postV1EmployeesEmployeeIdBankAccountsResponseToJSON(postV1EmployeesEmployeeIdBankAccountsResponse: PostV1EmployeesEmployeeIdBankAccountsResponse): string;
export declare function postV1EmployeesEmployeeIdBankAccountsResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdBankAccountsResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidbankaccounts.d.ts.map