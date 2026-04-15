import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ContractorPaymentMethod } from "../components/contractorpaymentmethod.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ContractorsContractorUuidPaymentMethodRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ContractorsContractorUuidPaymentMethodResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    contractorPaymentMethod?: ContractorPaymentMethod | undefined;
};
/** @internal */
export type GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidPaymentMethodRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidPaymentMethodRequest>;
export declare function getV1ContractorsContractorUuidPaymentMethodRequestToJSON(getV1ContractorsContractorUuidPaymentMethodRequest: GetV1ContractorsContractorUuidPaymentMethodRequest): string;
/** @internal */
export declare const GetV1ContractorsContractorUuidPaymentMethodResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidPaymentMethodResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorsContractorUuidPaymentMethodResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidPaymentMethodResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuidpaymentmethod.d.ts.map