import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest = {
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
};
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse = {
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
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound = {
    employee_id: string;
    bank_account_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequestToJSON(deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest): string;
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$ {
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse>;
    /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$Outbound;
}
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponseToJSON(deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse): string;
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidbankaccountsbankaccountid.d.ts.map