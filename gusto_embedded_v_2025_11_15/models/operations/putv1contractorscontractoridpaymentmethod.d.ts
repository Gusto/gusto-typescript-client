import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The payment method type. If type is Direct Deposit, the contractor is required to have a bank account.
 *
 * @remarks
 * see [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts)
 */
export declare const PutV1ContractorsContractorIdPaymentMethodType: {
    readonly DirectDeposit: "Direct Deposit";
    readonly Check: "Check";
};
/**
 * The payment method type. If type is Direct Deposit, the contractor is required to have a bank account.
 *
 * @remarks
 * see [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts)
 */
export type PutV1ContractorsContractorIdPaymentMethodType = ClosedEnum<typeof PutV1ContractorsContractorIdPaymentMethodType>;
export type PutV1ContractorsContractorIdPaymentMethodRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/idempotency) for information on how to use this field.
     */
    version: string;
    /**
     * The payment method type. If type is Direct Deposit, the contractor is required to have a bank account.
     *
     * @remarks
     * see [Bank account endpoint](./post-v1-contractors-contractor_uuid-bank_accounts)
     */
    type: PutV1ContractorsContractorIdPaymentMethodType;
};
export type PutV1ContractorsContractorIdPaymentMethodRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody;
};
export type PutV1ContractorsContractorIdPaymentMethodResponse = {
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
    contractorPaymentMethod?: components.ContractorPaymentMethod | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodType$inboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorIdPaymentMethodType>;
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodType$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorIdPaymentMethodType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorIdPaymentMethodType$ {
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly DirectDeposit: "Direct Deposit";
        readonly Check: "Check";
    }>;
}
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequestBody$inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound = {
    version: string;
    type: string;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorIdPaymentMethodRequestBody$ {
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequestBody>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound;
}
export declare function putV1ContractorsContractorIdPaymentMethodRequestBodyToJSON(putV1ContractorsContractorIdPaymentMethodRequestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody): string;
export declare function putV1ContractorsContractorIdPaymentMethodRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorIdPaymentMethodRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequest$inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorIdPaymentMethodRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorIdPaymentMethodRequest$ {
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequest>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodRequest$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorIdPaymentMethodRequest$Outbound;
}
export declare function putV1ContractorsContractorIdPaymentMethodRequestToJSON(putV1ContractorsContractorIdPaymentMethodRequest: PutV1ContractorsContractorIdPaymentMethodRequest): string;
export declare function putV1ContractorsContractorIdPaymentMethodRequestFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorIdPaymentMethodRequest, SDKValidationError>;
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1ContractorsContractorIdPaymentMethodResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Method"?: components.ContractorPaymentMethod$Outbound | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodResponse$outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1ContractorsContractorIdPaymentMethodResponse$ {
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodResponse$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodResponse>;
    /** @deprecated use `PutV1ContractorsContractorIdPaymentMethodResponse$Outbound` instead. */
    type Outbound = PutV1ContractorsContractorIdPaymentMethodResponse$Outbound;
}
export declare function putV1ContractorsContractorIdPaymentMethodResponseToJSON(putV1ContractorsContractorIdPaymentMethodResponse: PutV1ContractorsContractorIdPaymentMethodResponse): string;
export declare function putV1ContractorsContractorIdPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorIdPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoridpaymentmethod.d.ts.map