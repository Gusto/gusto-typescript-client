import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1WorkAddressesWorkAddressUuidRequest = {
    /**
     * The UUID of the work address
     */
    workAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1WorkAddressesWorkAddressUuidResponse = {
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
export declare const DeleteV1WorkAddressesWorkAddressUuidRequest$inboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound = {
    work_address_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidRequest$outboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WorkAddressesWorkAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1WorkAddressesWorkAddressUuidRequest$ {
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WorkAddressesWorkAddressUuidRequest>;
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound` instead. */
    type Outbound = DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound;
}
export declare function deleteV1WorkAddressesWorkAddressUuidRequestToJSON(deleteV1WorkAddressesWorkAddressUuidRequest: DeleteV1WorkAddressesWorkAddressUuidRequest): string;
export declare function deleteV1WorkAddressesWorkAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1WorkAddressesWorkAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidResponse$inboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1WorkAddressesWorkAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidResponse$outboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, DeleteV1WorkAddressesWorkAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1WorkAddressesWorkAddressUuidResponse$ {
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, DeleteV1WorkAddressesWorkAddressUuidResponse>;
    /** @deprecated use `DeleteV1WorkAddressesWorkAddressUuidResponse$Outbound` instead. */
    type Outbound = DeleteV1WorkAddressesWorkAddressUuidResponse$Outbound;
}
export declare function deleteV1WorkAddressesWorkAddressUuidResponseToJSON(deleteV1WorkAddressesWorkAddressUuidResponse: DeleteV1WorkAddressesWorkAddressUuidResponse): string;
export declare function deleteV1WorkAddressesWorkAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1WorkAddressesWorkAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1workaddressesworkaddressuuid.d.ts.map