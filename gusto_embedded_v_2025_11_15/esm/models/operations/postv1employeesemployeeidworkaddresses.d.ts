import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { EmployeeWorkAddress } from "../components/employeeworkaddress.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion = ClosedEnum<typeof PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion>;
export type PostV1EmployeesEmployeeIdWorkAddressesRequestBody = {
    /**
     * Reference to a company location
     */
    locationUuid?: string | undefined;
    /**
     * Date the employee began working at the company location
     */
    effectiveDate?: RFCDate | undefined;
};
export type PostV1EmployeesEmployeeIdWorkAddressesRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion | undefined;
    requestBody: PostV1EmployeesEmployeeIdWorkAddressesRequestBody;
};
export type PostV1EmployeesEmployeeIdWorkAddressesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * created
     */
    employeeWorkAddress?: EmployeeWorkAddress | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof PostV1EmployeesEmployeeIdWorkAddressesHeaderXGustoAPIVersion>;
/** @internal */
export type PostV1EmployeesEmployeeIdWorkAddressesRequestBody$Outbound = {
    location_uuid?: string | undefined;
    effective_date?: string | undefined;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdWorkAddressesRequestBody$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdWorkAddressesRequestBody$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdWorkAddressesRequestBody>;
export declare function postV1EmployeesEmployeeIdWorkAddressesRequestBodyToJSON(postV1EmployeesEmployeeIdWorkAddressesRequestBody: PostV1EmployeesEmployeeIdWorkAddressesRequestBody): string;
/** @internal */
export type PostV1EmployeesEmployeeIdWorkAddressesRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1EmployeesEmployeeIdWorkAddressesRequestBody$Outbound;
};
/** @internal */
export declare const PostV1EmployeesEmployeeIdWorkAddressesRequest$outboundSchema: z.ZodType<PostV1EmployeesEmployeeIdWorkAddressesRequest$Outbound, z.ZodTypeDef, PostV1EmployeesEmployeeIdWorkAddressesRequest>;
export declare function postV1EmployeesEmployeeIdWorkAddressesRequestToJSON(postV1EmployeesEmployeeIdWorkAddressesRequest: PostV1EmployeesEmployeeIdWorkAddressesRequest): string;
/** @internal */
export declare const PostV1EmployeesEmployeeIdWorkAddressesResponse$inboundSchema: z.ZodType<PostV1EmployeesEmployeeIdWorkAddressesResponse, z.ZodTypeDef, unknown>;
export declare function postV1EmployeesEmployeeIdWorkAddressesResponseFromJSON(jsonString: string): SafeParseResult<PostV1EmployeesEmployeeIdWorkAddressesResponse, SDKValidationError>;
//# sourceMappingURL=postv1employeesemployeeidworkaddresses.d.ts.map