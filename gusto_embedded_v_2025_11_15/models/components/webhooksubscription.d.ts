import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status of the webhook subscription.
 */
export declare const WebhookSubscriptionStatus: {
    readonly Pending: "pending";
    readonly Verified: "verified";
    readonly Removed: "removed";
    readonly Unreachable: "unreachable";
};
/**
 * The status of the webhook subscription.
 */
export type WebhookSubscriptionStatus = ClosedEnum<typeof WebhookSubscriptionStatus>;
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
/**
 * The representation of webhook subscription.
 */
export type WebhookSubscription = {
    /**
     * The UUID of the webhook subscription.
     */
    uuid: string;
    /**
     * The webhook subscriber URL. Updates will be POSTed to this URL.
     */
    url?: string | undefined;
    /**
     * The status of the webhook subscription.
     */
    status?: WebhookSubscriptionStatus | undefined;
    /**
     * Receive updates for these types.
     */
    subscriptionTypes?: Array<SubscriptionTypes> | undefined;
};
/** @internal */
export declare const WebhookSubscriptionStatus$inboundSchema: z.ZodNativeEnum<typeof WebhookSubscriptionStatus>;
/** @internal */
export declare const WebhookSubscriptionStatus$outboundSchema: z.ZodNativeEnum<typeof WebhookSubscriptionStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSubscriptionStatus$ {
    /** @deprecated use `WebhookSubscriptionStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Verified: "verified";
        readonly Removed: "removed";
        readonly Unreachable: "unreachable";
    }>;
    /** @deprecated use `WebhookSubscriptionStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Pending: "pending";
        readonly Verified: "verified";
        readonly Removed: "removed";
        readonly Unreachable: "unreachable";
    }>;
}
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
export declare const WebhookSubscription$inboundSchema: z.ZodType<WebhookSubscription, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSubscription$Outbound = {
    uuid: string;
    url?: string | undefined;
    status?: string | undefined;
    subscription_types?: Array<string> | undefined;
};
/** @internal */
export declare const WebhookSubscription$outboundSchema: z.ZodType<WebhookSubscription$Outbound, z.ZodTypeDef, WebhookSubscription>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSubscription$ {
    /** @deprecated use `WebhookSubscription$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSubscription, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSubscription$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSubscription$Outbound, z.ZodTypeDef, WebhookSubscription>;
    /** @deprecated use `WebhookSubscription$Outbound` instead. */
    type Outbound = WebhookSubscription$Outbound;
}
export declare function webhookSubscriptionToJSON(webhookSubscription: WebhookSubscription): string;
export declare function webhookSubscriptionFromJSON(jsonString: string): SafeParseResult<WebhookSubscription, SDKValidationError>;
//# sourceMappingURL=webhooksubscription.d.ts.map