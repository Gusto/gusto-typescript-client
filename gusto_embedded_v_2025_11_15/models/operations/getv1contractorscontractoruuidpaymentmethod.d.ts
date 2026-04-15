import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidPaymentMethodRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidPaymentMethodResponse = {
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
export declare const GetV1ContractorsContractorUuidPaymentMethodRequest$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidPaymentMethodRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidPaymentMethodRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidPaymentMethodRequest$ {
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidPaymentMethodRequest>;
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound;
}
export declare function getV1ContractorsContractorUuidPaymentMethodRequestToJSON(getV1ContractorsContractorUuidPaymentMethodRequest: GetV1ContractorsContractorUuidPaymentMethodRequest): string;
export declare function getV1ContractorsContractorUuidPaymentMethodRequestFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidPaymentMethodRequest, SDKValidationError>;
/** @internal */
export declare const GetV1ContractorsContractorUuidPaymentMethodResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1ContractorsContractorUuidPaymentMethodResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Contractor-Payment-Method"?: components.ContractorPaymentMethod$Outbound | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidPaymentMethodResponse$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidPaymentMethodResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1ContractorsContractorUuidPaymentMethodResponse$ {
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodResponse$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidPaymentMethodResponse>;
    /** @deprecated use `GetV1ContractorsContractorUuidPaymentMethodResponse$Outbound` instead. */
    type Outbound = GetV1ContractorsContractorUuidPaymentMethodResponse$Outbound;
}
export declare function getV1ContractorsContractorUuidPaymentMethodResponseToJSON(getV1ContractorsContractorUuidPaymentMethodResponse: GetV1ContractorsContractorUuidPaymentMethodResponse): string;
export declare function getV1ContractorsContractorUuidPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidpaymentmethod.d.ts.map