import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound = {
    employee_id: string;
    bank_account_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest>;
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequestToJSON(deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest: DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest): string;
/** @internal */
export declare const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse$inboundSchema: z.ZodType<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeesemployeeidbankaccountsbankaccountid.d.ts.map