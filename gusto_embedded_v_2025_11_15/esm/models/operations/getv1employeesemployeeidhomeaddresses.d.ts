import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeAddress } from "../components/employeeaddress.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion>;
export type GetV1EmployeesEmployeeIdHomeAddressesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion | undefined;
};
export type GetV1EmployeesEmployeeIdHomeAddressesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    employeeAddressList?: Array<EmployeeAddress> | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeIdHomeAddressesRequest>;
export declare function getV1EmployeesEmployeeIdHomeAddressesRequestToJSON(getV1EmployeesEmployeeIdHomeAddressesRequest: GetV1EmployeesEmployeeIdHomeAddressesRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeIdHomeAddressesResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeIdHomeAddressesResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeIdHomeAddressesResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeIdHomeAddressesResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeidhomeaddresses.d.ts.map