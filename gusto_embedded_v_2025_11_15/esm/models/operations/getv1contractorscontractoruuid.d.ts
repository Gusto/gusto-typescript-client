import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Contractor } from "../components/contractor.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const GetV1ContractorsContractorUuidHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type GetV1ContractorsContractorUuidHeaderXGustoAPIVersion = ClosedEnum<typeof GetV1ContractorsContractorUuidHeaderXGustoAPIVersion>;
export type GetV1ContractorsContractorUuidRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: GetV1ContractorsContractorUuidHeaderXGustoAPIVersion | undefined;
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
};
export type GetV1ContractorsContractorUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Successful
     */
    contractor?: Contractor | undefined;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof GetV1ContractorsContractorUuidHeaderXGustoAPIVersion>;
/** @internal */
export type GetV1ContractorsContractorUuidRequest$Outbound = {
    "X-Gusto-API-Version": string;
    contractor_uuid: string;
};
/** @internal */
export declare const GetV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<GetV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, GetV1ContractorsContractorUuidRequest>;
export declare function getV1ContractorsContractorUuidRequestToJSON(getV1ContractorsContractorUuidRequest: GetV1ContractorsContractorUuidRequest): string;
/** @internal */
export declare const GetV1ContractorsContractorUuidResponse$inboundSchema: z.ZodType<GetV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
export declare function getV1ContractorsContractorUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1ContractorsContractorUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1contractorscontractoruuid.d.ts.map