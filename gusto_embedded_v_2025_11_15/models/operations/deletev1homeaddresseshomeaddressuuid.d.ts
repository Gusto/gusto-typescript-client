import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1HomeAddressesHomeAddressUuidRequest = {
    /**
     * The UUID of the home address
     */
    homeAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1HomeAddressesHomeAddressUuidResponse = {
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
export declare const DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound = {
    home_address_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, DeleteV1HomeAddressesHomeAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1HomeAddressesHomeAddressUuidRequest$ {
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, DeleteV1HomeAddressesHomeAddressUuidRequest>;
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1HomeAddressesHomeAddressUuidRequest$Outbound;
}
export declare function deleteV1HomeAddressesHomeAddressUuidRequestToJSON(deleteV1HomeAddressesHomeAddressUuidRequest: DeleteV1HomeAddressesHomeAddressUuidRequest): string;
export declare function deleteV1HomeAddressesHomeAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1HomeAddressesHomeAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, DeleteV1HomeAddressesHomeAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1HomeAddressesHomeAddressUuidResponse$ {
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, DeleteV1HomeAddressesHomeAddressUuidResponse>;
    /** @deprecated use `DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1HomeAddressesHomeAddressUuidResponse$Outbound;
}
export declare function deleteV1HomeAddressesHomeAddressUuidResponseToJSON(deleteV1HomeAddressesHomeAddressUuidResponse: DeleteV1HomeAddressesHomeAddressUuidResponse): string;
export declare function deleteV1HomeAddressesHomeAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1HomeAddressesHomeAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1homeaddresseshomeaddressuuid.d.ts.map