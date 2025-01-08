/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
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

/** @internal */
export const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    employee_id: z.string(),
    bank_account_uuid: z.string(),
    "X-Gusto-API-Version": components.VersionHeader$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "employee_id": "employeeId",
      "bank_account_uuid": "bankAccountUuid",
      "X-Gusto-API-Version": "xGustoAPIVersion",
    });
  });

/** @internal */
export type DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound =
  {
    employee_id: string;
    bank_account_uuid: string;
    "X-Gusto-API-Version"?: string | undefined;
  };

/** @internal */
export const DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema:
  z.ZodType<
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound,
    z.ZodTypeDef,
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest
  > = z.object({
    employeeId: z.string(),
    bankAccountUuid: z.string(),
    xGustoAPIVersion: components.VersionHeader$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      employeeId: "employee_id",
      bankAccountUuid: "bank_account_uuid",
      xGustoAPIVersion: "X-Gusto-API-Version",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$ {
  /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema;
  /** @deprecated use `DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound` instead. */
  export type Outbound =
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$Outbound;
}

export function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequestToJSON(
  deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest:
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
): string {
  return JSON.stringify(
    DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$outboundSchema
      .parse(deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest),
  );
}

export function deleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'DeleteV1EmployeesEmployeeIdBankAccountsBankAccountIdRequest' from JSON`,
  );
}
