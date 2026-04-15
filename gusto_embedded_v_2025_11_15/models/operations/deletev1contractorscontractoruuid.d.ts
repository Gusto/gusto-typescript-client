import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1ContractorsContractorUuidRequest = {
    /**
     * The UUID of the contractor
     */
    contractorUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1ContractorsContractorUuidResponse = {
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
};
/** @internal */
export declare const DeleteV1ContractorsContractorUuidRequest$inboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ContractorsContractorUuidRequest$Outbound = {
    contractor_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1ContractorsContractorUuidRequest$outboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, DeleteV1ContractorsContractorUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ContractorsContractorUuidRequest$ {
    /** @deprecated use `DeleteV1ContractorsContractorUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ContractorsContractorUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidRequest$Outbound, z.ZodTypeDef, DeleteV1ContractorsContractorUuidRequest>;
    /** @deprecated use `DeleteV1ContractorsContractorUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1ContractorsContractorUuidRequest$Outbound;
}
export declare function deleteV1ContractorsContractorUuidRequestToJSON(deleteV1ContractorsContractorUuidRequest: DeleteV1ContractorsContractorUuidRequest): string;
export declare function deleteV1ContractorsContractorUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1ContractorsContractorUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1ContractorsContractorUuidResponse$inboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ContractorsContractorUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1ContractorsContractorUuidResponse$outboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, DeleteV1ContractorsContractorUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ContractorsContractorUuidResponse$ {
    /** @deprecated use `DeleteV1ContractorsContractorUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ContractorsContractorUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ContractorsContractorUuidResponse$Outbound, z.ZodTypeDef, DeleteV1ContractorsContractorUuidResponse>;
    /** @deprecated use `DeleteV1ContractorsContractorUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1ContractorsContractorUuidResponse$Outbound;
}
export declare function deleteV1ContractorsContractorUuidResponseToJSON(deleteV1ContractorsContractorUuidResponse: DeleteV1ContractorsContractorUuidResponse): string;
export declare function deleteV1ContractorsContractorUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1ContractorsContractorUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1contractorscontractoruuid.d.ts.map