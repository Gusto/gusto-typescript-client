import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export declare const Type: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
 */
export type Type = ClosedEnum<typeof Type>;
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export declare const SplitBy: {
    readonly Amount: "Amount";
    readonly Percentage: "Percentage";
};
/**
 * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
 */
export type SplitBy = ClosedEnum<typeof SplitBy>;
export type Splits = {
    /**
     * The bank account ID
     *
     * @remarks
     */
    uuid?: string | undefined;
    /**
     * The bank account name
     */
    name?: string | undefined;
    /**
     * The order of priority for each payment split, with priority 1 being the first bank account paid. Priority must be unique and sequential.
     */
    priority?: number | undefined;
    /**
     * The cents amount allocated for each payment split
     */
    splitAmount?: number | null | undefined;
};
export type PutV1EmployeesEmployeeIdPaymentMethodRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    /**
     * The payment method type. If type is Check, then split_by and splits do not need to be populated. If type is Direct Deposit, split_by and splits are required.
     */
    type: Type;
    /**
     * Describes how the payment will be split. If split_by is Percentage, then the split amounts must add up to exactly 100. If split_by is Amount, then the last split amount must be nil to capture the remainder.
     */
    splitBy?: SplitBy | undefined;
    splits?: Array<Splits> | undefined;
};
export type PutV1EmployeesEmployeeIdPaymentMethodRequest = {
    /**
     * The UUID of the employee
     */
    employeeId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody;
};
export type PutV1EmployeesEmployeeIdPaymentMethodResponse = {
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
    employeePaymentMethod?: components.EmployeePaymentMethod | undefined;
};
/** @internal */
export declare const Type$inboundSchema: z.ZodNativeEnum<typeof Type>;
/** @internal */
export declare const Type$outboundSchema: z.ZodNativeEnum<typeof Type>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const SplitBy$inboundSchema: z.ZodNativeEnum<typeof SplitBy>;
/** @internal */
export declare const SplitBy$outboundSchema: z.ZodNativeEnum<typeof SplitBy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SplitBy$ {
    /** @deprecated use `SplitBy$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
    /** @deprecated use `SplitBy$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Amount: "Amount";
        readonly Percentage: "Percentage";
    }>;
}
/** @internal */
export declare const Splits$inboundSchema: z.ZodType<Splits, z.ZodTypeDef, unknown>;
/** @internal */
export type Splits$Outbound = {
    uuid?: string | undefined;
    name?: string | undefined;
    priority?: number | undefined;
    split_amount?: number | null | undefined;
};
/** @internal */
export declare const Splits$outboundSchema: z.ZodType<Splits$Outbound, z.ZodTypeDef, Splits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Splits$ {
    /** @deprecated use `Splits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Splits, z.ZodTypeDef, unknown>;
    /** @deprecated use `Splits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Splits$Outbound, z.ZodTypeDef, Splits>;
    /** @deprecated use `Splits$Outbound` instead. */
    type Outbound = Splits$Outbound;
}
export declare function splitsToJSON(splits: Splits): string;
export declare function splitsFromJSON(jsonString: string): SafeParseResult<Splits, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound = {
    version: string;
    type: string;
    split_by?: string | undefined;
    splits?: Array<Splits$Outbound> | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdPaymentMethodRequestBody$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodRequestBody>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound;
}
export declare function putV1EmployeesEmployeeIdPaymentMethodRequestBodyToJSON(putV1EmployeesEmployeeIdPaymentMethodRequestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody): string;
export declare function putV1EmployeesEmployeeIdPaymentMethodRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdPaymentMethodRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound = {
    employee_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1EmployeesEmployeeIdPaymentMethodRequestBody$Outbound;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdPaymentMethodRequest$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodRequest>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdPaymentMethodRequest$Outbound;
}
export declare function putV1EmployeesEmployeeIdPaymentMethodRequestToJSON(putV1EmployeesEmployeeIdPaymentMethodRequest: PutV1EmployeesEmployeeIdPaymentMethodRequest): string;
export declare function putV1EmployeesEmployeeIdPaymentMethodRequestFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdPaymentMethodRequest, SDKValidationError>;
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Payment-Method"?: components.EmployeePaymentMethod$Outbound | undefined;
};
/** @internal */
export declare const PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1EmployeesEmployeeIdPaymentMethodResponse$ {
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound, z.ZodTypeDef, PutV1EmployeesEmployeeIdPaymentMethodResponse>;
    /** @deprecated use `PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound` instead. */
    type Outbound = PutV1EmployeesEmployeeIdPaymentMethodResponse$Outbound;
}
export declare function putV1EmployeesEmployeeIdPaymentMethodResponseToJSON(putV1EmployeesEmployeeIdPaymentMethodResponse: PutV1EmployeesEmployeeIdPaymentMethodResponse): string;
export declare function putV1EmployeesEmployeeIdPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<PutV1EmployeesEmployeeIdPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=putv1employeesemployeeidpaymentmethod.d.ts.map