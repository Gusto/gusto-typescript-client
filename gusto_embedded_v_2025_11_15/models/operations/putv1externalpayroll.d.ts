import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The earning type for the compensation.
 */
export declare const EarningType: {
    readonly CompanyPayType: "CompanyPayType";
    readonly CompanyEarningType: "CompanyEarningType";
};
/**
 * The earning type for the compensation.
 */
export type EarningType = ClosedEnum<typeof EarningType>;
/**
 * An array of earnings for the employee. Depends on your company selections, earnings includes wages, hours, bonuses, tips, commission and more.
 */
export type Earnings = {
    /**
     * The hour of the compensation for the pay period.
     */
    hours?: string | undefined;
    /**
     * The amount of the earning.
     */
    amount?: string | undefined;
    /**
     * The ID of the earning.
     */
    earningId?: number | undefined;
    /**
     * The earning type for the compensation.
     */
    earningType?: EarningType | undefined;
};
/**
 * An array of benefits for the employee. Depends on your company selections, benefits include 401k, health insurance and more.
 */
export type Benefits = {
    /**
     * Company contribution amount towards the benefit
     */
    companyContributionAmount?: string | undefined;
    /**
     * Employee deduction amount towards the benefit
     */
    employeeDeductionAmount?: string | undefined;
    /**
     * The ID of the benefit.
     */
    benefitId?: number | undefined;
};
export type Taxes = {
    /**
     * The amount of the tax.
     */
    amount?: string | undefined;
    /**
     * The ID of the tax.
     */
    taxId?: number | undefined;
};
/**
 * Submit wages, benefits, taxes for each employee
 */
export type ExternalPayrollItems = {
    /**
     * The UUID of the employee.
     */
    employeeUuid?: string | undefined;
    earnings?: Array<Earnings> | undefined;
    benefits?: Array<Benefits> | undefined;
    /**
     * An array of taxes for the employee. Depends on your company selections, taxes include federal income tax, social security, medicare, and more.
     */
    taxes?: Array<Taxes> | undefined;
};
export type PutV1ExternalPayrollRequestBody = {
    /**
     * Patch update external payroll items when set to true, otherwise it will overwrite the previous changes.
     */
    replaceFields?: boolean | undefined;
    externalPayrollItems?: Array<ExternalPayrollItems> | undefined;
};
export type PutV1ExternalPayrollRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the external payroll
     */
    externalPayrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ExternalPayrollRequestBody;
};
export type PutV1ExternalPayrollResponse = {
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
    externalPayroll?: components.ExternalPayroll | undefined;
};
/** @internal */
export declare const EarningType$inboundSchema: z.ZodNativeEnum<typeof EarningType>;
/** @internal */
export declare const EarningType$outboundSchema: z.ZodNativeEnum<typeof EarningType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EarningType$ {
    /** @deprecated use `EarningType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CompanyPayType: "CompanyPayType";
        readonly CompanyEarningType: "CompanyEarningType";
    }>;
    /** @deprecated use `EarningType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CompanyPayType: "CompanyPayType";
        readonly CompanyEarningType: "CompanyEarningType";
    }>;
}
/** @internal */
export declare const Earnings$inboundSchema: z.ZodType<Earnings, z.ZodTypeDef, unknown>;
/** @internal */
export type Earnings$Outbound = {
    hours?: string | undefined;
    amount?: string | undefined;
    earning_id?: number | undefined;
    earning_type?: string | undefined;
};
/** @internal */
export declare const Earnings$outboundSchema: z.ZodType<Earnings$Outbound, z.ZodTypeDef, Earnings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Earnings$ {
    /** @deprecated use `Earnings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Earnings, z.ZodTypeDef, unknown>;
    /** @deprecated use `Earnings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Earnings$Outbound, z.ZodTypeDef, Earnings>;
    /** @deprecated use `Earnings$Outbound` instead. */
    type Outbound = Earnings$Outbound;
}
export declare function earningsToJSON(earnings: Earnings): string;
export declare function earningsFromJSON(jsonString: string): SafeParseResult<Earnings, SDKValidationError>;
/** @internal */
export declare const Benefits$inboundSchema: z.ZodType<Benefits, z.ZodTypeDef, unknown>;
/** @internal */
export type Benefits$Outbound = {
    company_contribution_amount?: string | undefined;
    employee_deduction_amount?: string | undefined;
    benefit_id?: number | undefined;
};
/** @internal */
export declare const Benefits$outboundSchema: z.ZodType<Benefits$Outbound, z.ZodTypeDef, Benefits>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Benefits$ {
    /** @deprecated use `Benefits$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Benefits, z.ZodTypeDef, unknown>;
    /** @deprecated use `Benefits$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Benefits$Outbound, z.ZodTypeDef, Benefits>;
    /** @deprecated use `Benefits$Outbound` instead. */
    type Outbound = Benefits$Outbound;
}
export declare function benefitsToJSON(benefits: Benefits): string;
export declare function benefitsFromJSON(jsonString: string): SafeParseResult<Benefits, SDKValidationError>;
/** @internal */
export declare const Taxes$inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, unknown>;
/** @internal */
export type Taxes$Outbound = {
    amount?: string | undefined;
    tax_id?: number | undefined;
};
/** @internal */
export declare const Taxes$outboundSchema: z.ZodType<Taxes$Outbound, z.ZodTypeDef, Taxes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Taxes$ {
    /** @deprecated use `Taxes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Taxes, z.ZodTypeDef, unknown>;
    /** @deprecated use `Taxes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Taxes$Outbound, z.ZodTypeDef, Taxes>;
    /** @deprecated use `Taxes$Outbound` instead. */
    type Outbound = Taxes$Outbound;
}
export declare function taxesToJSON(taxes: Taxes): string;
export declare function taxesFromJSON(jsonString: string): SafeParseResult<Taxes, SDKValidationError>;
/** @internal */
export declare const ExternalPayrollItems$inboundSchema: z.ZodType<ExternalPayrollItems, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalPayrollItems$Outbound = {
    employee_uuid?: string | undefined;
    earnings?: Array<Earnings$Outbound> | undefined;
    benefits?: Array<Benefits$Outbound> | undefined;
    taxes?: Array<Taxes$Outbound> | undefined;
};
/** @internal */
export declare const ExternalPayrollItems$outboundSchema: z.ZodType<ExternalPayrollItems$Outbound, z.ZodTypeDef, ExternalPayrollItems>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalPayrollItems$ {
    /** @deprecated use `ExternalPayrollItems$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalPayrollItems, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalPayrollItems$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalPayrollItems$Outbound, z.ZodTypeDef, ExternalPayrollItems>;
    /** @deprecated use `ExternalPayrollItems$Outbound` instead. */
    type Outbound = ExternalPayrollItems$Outbound;
}
export declare function externalPayrollItemsToJSON(externalPayrollItems: ExternalPayrollItems): string;
export declare function externalPayrollItemsFromJSON(jsonString: string): SafeParseResult<ExternalPayrollItems, SDKValidationError>;
/** @internal */
export declare const PutV1ExternalPayrollRequestBody$inboundSchema: z.ZodType<PutV1ExternalPayrollRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ExternalPayrollRequestBody$Outbound = {
    replace_fields?: boolean | undefined;
    external_payroll_items?: Array<ExternalPayrollItems$Outbound> | undefined;
};
/** @internal */
export declare const PutV1ExternalPayrollRequestBody$outboundSchema: z.ZodType<PutV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ExternalPayrollRequestBody$ {
    /** @deprecated use `PutV1ExternalPayrollRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ExternalPayrollRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ExternalPayrollRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ExternalPayrollRequestBody$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequestBody>;
    /** @deprecated use `PutV1ExternalPayrollRequestBody$Outbound` instead. */
    type Outbound = PutV1ExternalPayrollRequestBody$Outbound;
}
export declare function putV1ExternalPayrollRequestBodyToJSON(putV1ExternalPayrollRequestBody: PutV1ExternalPayrollRequestBody): string;
export declare function putV1ExternalPayrollRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ExternalPayrollRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ExternalPayrollRequest$inboundSchema: z.ZodType<PutV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ExternalPayrollRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ExternalPayrollRequest$outboundSchema: z.ZodType<PutV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ExternalPayrollRequest$ {
    /** @deprecated use `PutV1ExternalPayrollRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ExternalPayrollRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, PutV1ExternalPayrollRequest>;
    /** @deprecated use `PutV1ExternalPayrollRequest$Outbound` instead. */
    type Outbound = PutV1ExternalPayrollRequest$Outbound;
}
export declare function putV1ExternalPayrollRequestToJSON(putV1ExternalPayrollRequest: PutV1ExternalPayrollRequest): string;
export declare function putV1ExternalPayrollRequestFromJSON(jsonString: string): SafeParseResult<PutV1ExternalPayrollRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ExternalPayrollResponse$inboundSchema: z.ZodType<PutV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ExternalPayrollResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "External-Payroll"?: components.ExternalPayroll$Outbound | undefined;
};
/** @internal */
export declare const PutV1ExternalPayrollResponse$outboundSchema: z.ZodType<PutV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, PutV1ExternalPayrollResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ExternalPayrollResponse$ {
    /** @deprecated use `PutV1ExternalPayrollResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ExternalPayrollResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, PutV1ExternalPayrollResponse>;
    /** @deprecated use `PutV1ExternalPayrollResponse$Outbound` instead. */
    type Outbound = PutV1ExternalPayrollResponse$Outbound;
}
export declare function putV1ExternalPayrollResponseToJSON(putV1ExternalPayrollResponse: PutV1ExternalPayrollResponse): string;
export declare function putV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<PutV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=putv1externalpayroll.d.ts.map