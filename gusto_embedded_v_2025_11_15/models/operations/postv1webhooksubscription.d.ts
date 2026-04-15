import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PostV1WebhookSubscriptionSecurity = {
    systemAccessAuth: string;
};
export declare const SubscriptionTypes: {
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
export type SubscriptionTypes = ClosedEnum<typeof SubscriptionTypes>;
export type PostV1WebhookSubscriptionRequestBody = {
    url: string;
    subscriptionTypes: Array<SubscriptionTypes>;
};
export type PostV1WebhookSubscriptionRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1WebhookSubscriptionRequestBody;
};
export type PostV1WebhookSubscriptionResponse = {
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
export declare const PostV1WebhookSubscriptionSecurity$inboundSchema: z.ZodType<PostV1WebhookSubscriptionSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1WebhookSubscriptionSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const PostV1WebhookSubscriptionSecurity$outboundSchema: z.ZodType<PostV1WebhookSubscriptionSecurity$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1WebhookSubscriptionSecurity$ {
    /** @deprecated use `PostV1WebhookSubscriptionSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1WebhookSubscriptionSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1WebhookSubscriptionSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1WebhookSubscriptionSecurity$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionSecurity>;
    /** @deprecated use `PostV1WebhookSubscriptionSecurity$Outbound` instead. */
    type Outbound = PostV1WebhookSubscriptionSecurity$Outbound;
}
export declare function postV1WebhookSubscriptionSecurityToJSON(postV1WebhookSubscriptionSecurity: PostV1WebhookSubscriptionSecurity): string;
export declare function postV1WebhookSubscriptionSecurityFromJSON(jsonString: string): SafeParseResult<PostV1WebhookSubscriptionSecurity, SDKValidationError>;
/** @internal */
export declare const SubscriptionTypes$inboundSchema: z.ZodNativeEnum<typeof SubscriptionTypes>;
/** @internal */
export declare const SubscriptionTypes$outboundSchema: z.ZodNativeEnum<typeof SubscriptionTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriptionTypes$ {
    /** @deprecated use `SubscriptionTypes$inboundSchema` instead. */
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
    /** @deprecated use `SubscriptionTypes$outboundSchema` instead. */
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
export declare const PostV1WebhookSubscriptionRequestBody$inboundSchema: z.ZodType<PostV1WebhookSubscriptionRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1WebhookSubscriptionRequestBody$Outbound = {
    url: string;
    subscription_types: Array<string>;
};
/** @internal */
export declare const PostV1WebhookSubscriptionRequestBody$outboundSchema: z.ZodType<PostV1WebhookSubscriptionRequestBody$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1WebhookSubscriptionRequestBody$ {
    /** @deprecated use `PostV1WebhookSubscriptionRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1WebhookSubscriptionRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1WebhookSubscriptionRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1WebhookSubscriptionRequestBody$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionRequestBody>;
    /** @deprecated use `PostV1WebhookSubscriptionRequestBody$Outbound` instead. */
    type Outbound = PostV1WebhookSubscriptionRequestBody$Outbound;
}
export declare function postV1WebhookSubscriptionRequestBodyToJSON(postV1WebhookSubscriptionRequestBody: PostV1WebhookSubscriptionRequestBody): string;
export declare function postV1WebhookSubscriptionRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1WebhookSubscriptionRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1WebhookSubscriptionRequest$inboundSchema: z.ZodType<PostV1WebhookSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1WebhookSubscriptionRequest$Outbound = {
    "X-Gusto-API-Version": string;
    RequestBody: PostV1WebhookSubscriptionRequestBody$Outbound;
};
/** @internal */
export declare const PostV1WebhookSubscriptionRequest$outboundSchema: z.ZodType<PostV1WebhookSubscriptionRequest$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1WebhookSubscriptionRequest$ {
    /** @deprecated use `PostV1WebhookSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1WebhookSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1WebhookSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1WebhookSubscriptionRequest$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionRequest>;
    /** @deprecated use `PostV1WebhookSubscriptionRequest$Outbound` instead. */
    type Outbound = PostV1WebhookSubscriptionRequest$Outbound;
}
export declare function postV1WebhookSubscriptionRequestToJSON(postV1WebhookSubscriptionRequest: PostV1WebhookSubscriptionRequest): string;
export declare function postV1WebhookSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<PostV1WebhookSubscriptionRequest, SDKValidationError>;
/** @internal */
export declare const PostV1WebhookSubscriptionResponse$inboundSchema: z.ZodType<PostV1WebhookSubscriptionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1WebhookSubscriptionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Webhook-Subscription"?: components.WebhookSubscription$Outbound | undefined;
};
/** @internal */
export declare const PostV1WebhookSubscriptionResponse$outboundSchema: z.ZodType<PostV1WebhookSubscriptionResponse$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1WebhookSubscriptionResponse$ {
    /** @deprecated use `PostV1WebhookSubscriptionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1WebhookSubscriptionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1WebhookSubscriptionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1WebhookSubscriptionResponse$Outbound, z.ZodTypeDef, PostV1WebhookSubscriptionResponse>;
    /** @deprecated use `PostV1WebhookSubscriptionResponse$Outbound` instead. */
    type Outbound = PostV1WebhookSubscriptionResponse$Outbound;
}
export declare function postV1WebhookSubscriptionResponseToJSON(postV1WebhookSubscriptionResponse: PostV1WebhookSubscriptionResponse): string;
export declare function postV1WebhookSubscriptionResponseFromJSON(jsonString: string): SafeParseResult<PostV1WebhookSubscriptionResponse, SDKValidationError>;
//# sourceMappingURL=postv1webhooksubscription.d.ts.map