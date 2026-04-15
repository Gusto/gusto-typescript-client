import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1WebhookSubscriptionUuidSecurity = {
    systemAccessAuth: string;
};
export declare const PutV1WebhookSubscriptionUuidSubscriptionTypes: {
    readonly BankAccount: "BankAccount";
    readonly Company: "Company";
    readonly CompanyBenefit: "CompanyBenefit";
    readonly Contractor: "Contractor";
    readonly ContractorPayment: "ContractorPayment";
    readonly Employee: "Employee";
    readonly EmployeeBenefit: "EmployeeBenefit";
    readonly EmployeeJobCompensation: "EmployeeJobCompensation";
    readonly ExternalPayroll: "ExternalPayroll";
    readonly Form: "Form";
    readonly Location: "Location";
    readonly Notification: "Notification";
    readonly Payroll: "Payroll";
    readonly PaySchedule: "PaySchedule";
    readonly Signatory: "Signatory";
};
export type PutV1WebhookSubscriptionUuidSubscriptionTypes = ClosedEnum<typeof PutV1WebhookSubscriptionUuidSubscriptionTypes>;
export type PutV1WebhookSubscriptionUuidRequestBody = {
    subscriptionTypes: Array<PutV1WebhookSubscriptionUuidSubscriptionTypes>;
};
export type PutV1WebhookSubscriptionUuidRequest = {
    /**
     * The webhook subscription UUID.
     */
    webhookSubscriptionUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1WebhookSubscriptionUuidRequestBody;
};
export type PutV1WebhookSubscriptionUuidResponse = {
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
    webhookSubscription?: components.WebhookSubscription | undefined;
};
/** @internal */
export declare const PutV1WebhookSubscriptionUuidSecurity$inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WebhookSubscriptionUuidSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PutV1WebhookSubscriptionUuidSecurity$outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WebhookSubscriptionUuidSecurity$ {
    /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidSecurity$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidSecurity>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidSecurity$Outbound` instead. */
    type Outbound = PutV1WebhookSubscriptionUuidSecurity$Outbound;
}
export declare function putV1WebhookSubscriptionUuidSecurityToJSON(putV1WebhookSubscriptionUuidSecurity: PutV1WebhookSubscriptionUuidSecurity): string;
export declare function putV1WebhookSubscriptionUuidSecurityFromJSON(jsonString: string): SafeParseResult<PutV1WebhookSubscriptionUuidSecurity, SDKValidationError>;
/** @internal */
export declare const PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema: z.ZodNativeEnum<typeof PutV1WebhookSubscriptionUuidSubscriptionTypes>;
/** @internal */
export declare const PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema: z.ZodNativeEnum<typeof PutV1WebhookSubscriptionUuidSubscriptionTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WebhookSubscriptionUuidSubscriptionTypes$ {
    /** @deprecated use `PutV1WebhookSubscriptionUuidSubscriptionTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly BankAccount: "BankAccount";
        readonly Company: "Company";
        readonly CompanyBenefit: "CompanyBenefit";
        readonly Contractor: "Contractor";
        readonly ContractorPayment: "ContractorPayment";
        readonly Employee: "Employee";
        readonly EmployeeBenefit: "EmployeeBenefit";
        readonly EmployeeJobCompensation: "EmployeeJobCompensation";
        readonly ExternalPayroll: "ExternalPayroll";
        readonly Form: "Form";
        readonly Location: "Location";
        readonly Notification: "Notification";
        readonly Payroll: "Payroll";
        readonly PaySchedule: "PaySchedule";
        readonly Signatory: "Signatory";
    }>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidSubscriptionTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly BankAccount: "BankAccount";
        readonly Company: "Company";
        readonly CompanyBenefit: "CompanyBenefit";
        readonly Contractor: "Contractor";
        readonly ContractorPayment: "ContractorPayment";
        readonly Employee: "Employee";
        readonly EmployeeBenefit: "EmployeeBenefit";
        readonly EmployeeJobCompensation: "EmployeeJobCompensation";
        readonly ExternalPayroll: "ExternalPayroll";
        readonly Form: "Form";
        readonly Location: "Location";
        readonly Notification: "Notification";
        readonly Payroll: "Payroll";
        readonly PaySchedule: "PaySchedule";
        readonly Signatory: "Signatory";
    }>;
}
/** @internal */
export declare const PutV1WebhookSubscriptionUuidRequestBody$inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WebhookSubscriptionUuidRequestBody$Outbound = {
    subscription_types: Array<string>;
};
/** @internal */
export declare const PutV1WebhookSubscriptionUuidRequestBody$outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequestBody$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WebhookSubscriptionUuidRequestBody$ {
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequestBody$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidRequestBody>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1WebhookSubscriptionUuidRequestBody$Outbound;
}
export declare function putV1WebhookSubscriptionUuidRequestBodyToJSON(putV1WebhookSubscriptionUuidRequestBody: PutV1WebhookSubscriptionUuidRequestBody): string;
export declare function putV1WebhookSubscriptionUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1WebhookSubscriptionUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1WebhookSubscriptionUuidRequest$inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WebhookSubscriptionUuidRequest$Outbound = {
    webhook_subscription_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1WebhookSubscriptionUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1WebhookSubscriptionUuidRequest$outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WebhookSubscriptionUuidRequest$ {
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidRequest$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidRequest>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidRequest$Outbound` instead. */
    type Outbound = PutV1WebhookSubscriptionUuidRequest$Outbound;
}
export declare function putV1WebhookSubscriptionUuidRequestToJSON(putV1WebhookSubscriptionUuidRequest: PutV1WebhookSubscriptionUuidRequest): string;
export declare function putV1WebhookSubscriptionUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1WebhookSubscriptionUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1WebhookSubscriptionUuidResponse$inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WebhookSubscriptionUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Webhook-Subscription"?: components.WebhookSubscription$Outbound | undefined;
};
/** @internal */
export declare const PutV1WebhookSubscriptionUuidResponse$outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WebhookSubscriptionUuidResponse$ {
    /** @deprecated use `PutV1WebhookSubscriptionUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WebhookSubscriptionUuidResponse$Outbound, z.ZodTypeDef, PutV1WebhookSubscriptionUuidResponse>;
    /** @deprecated use `PutV1WebhookSubscriptionUuidResponse$Outbound` instead. */
    type Outbound = PutV1WebhookSubscriptionUuidResponse$Outbound;
}
export declare function putV1WebhookSubscriptionUuidResponseToJSON(putV1WebhookSubscriptionUuidResponse: PutV1WebhookSubscriptionUuidResponse): string;
export declare function putV1WebhookSubscriptionUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1WebhookSubscriptionUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1webhooksubscriptionuuid.d.ts.map