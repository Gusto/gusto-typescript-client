import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentMethod } from "../components/contractorpaymentmethod.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
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
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody;
};
export type PutV1ContractorsContractorIdPaymentMethodResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorPaymentMethod?: ContractorPaymentMethod | undefined;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodType$outboundSchema: z.ZodNativeEnum<typeof PutV1ContractorsContractorIdPaymentMethodType>;
/** @internal */
export type PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound = {
    version: string;
    type: string;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequestBody$outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequestBody>;
export declare function putV1ContractorsContractorIdPaymentMethodRequestBodyToJSON(putV1ContractorsContractorIdPaymentMethodRequestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody): string;
/** @internal */
export type PutV1ContractorsContractorIdPaymentMethodRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1ContractorsContractorIdPaymentMethodRequestBody$Outbound;
};
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodRequest$outboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodRequest$Outbound, z.ZodTypeDef, PutV1ContractorsContractorIdPaymentMethodRequest>;
export declare function putV1ContractorsContractorIdPaymentMethodRequestToJSON(putV1ContractorsContractorIdPaymentMethodRequest: PutV1ContractorsContractorIdPaymentMethodRequest): string;
/** @internal */
export declare const PutV1ContractorsContractorIdPaymentMethodResponse$inboundSchema: z.ZodType<PutV1ContractorsContractorIdPaymentMethodResponse, z.ZodTypeDef, unknown>;
export declare function putV1ContractorsContractorIdPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<PutV1ContractorsContractorIdPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=putv1contractorscontractoridpaymentmethod.d.ts.map