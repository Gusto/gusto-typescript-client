import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { EmployeeSection603HighEarnerStatus } from "../components/employeesection603highearnerstatus.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion>;
export type GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest = {
    /**
     * The UUID of the employee
     */
    employeeUuid: string;
    /**
     * The effective year for the Section 603 status
     */
    effectiveYear: number;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion | undefined;
};
export type GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse = {
    httpMeta: HTTPMetadata;
    /**
     * successful
     */
    employeeSection603HighEarnerStatus?: EmployeeSection603HighEarnerStatus | undefined;
};
/** @internal */
export declare const GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest$Outbound = {
    employee_uuid: string;
    effective_year: number;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest$outboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest$Outbound, z.ZodTypeDef, GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest>;
export declare function getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequestToJSON(getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest: GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearRequest): string;
/** @internal */
export declare const GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse$inboundSchema: z.ZodType<GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse, z.ZodTypeDef, unknown>;
export declare function getV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeesEmployeeUuidSection603HighEarnerStatusesEffectiveYearResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeesemployeeuuidsection603highearnerstatuseseffectiveyear.d.ts.map