import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1WorkAddressesWorkAddressUuidRequest = {
    /**
     * The UUID of the work address
     */
    workAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1WorkAddressesWorkAddressUuidResponse = {
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
    employeeWorkAddress?: components.EmployeeWorkAddress | undefined;
};
/** @internal */
export declare const GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WorkAddressesWorkAddressUuidRequest$Outbound = {
    work_address_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, GetV1WorkAddressesWorkAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WorkAddressesWorkAddressUuidRequest$ {
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, GetV1WorkAddressesWorkAddressUuidRequest>;
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidRequest$Outbound` instead. */
    type Outbound = GetV1WorkAddressesWorkAddressUuidRequest$Outbound;
}
export declare function getV1WorkAddressesWorkAddressUuidRequestToJSON(getV1WorkAddressesWorkAddressUuidRequest: GetV1WorkAddressesWorkAddressUuidRequest): string;
export declare function getV1WorkAddressesWorkAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1WorkAddressesWorkAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1WorkAddressesWorkAddressUuidResponse$inboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1WorkAddressesWorkAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Work-Address"?: components.EmployeeWorkAddress$Outbound | undefined;
};
/** @internal */
export declare const GetV1WorkAddressesWorkAddressUuidResponse$outboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, GetV1WorkAddressesWorkAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1WorkAddressesWorkAddressUuidResponse$ {
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, GetV1WorkAddressesWorkAddressUuidResponse>;
    /** @deprecated use `GetV1WorkAddressesWorkAddressUuidResponse$Outbound` instead. */
    type Outbound = GetV1WorkAddressesWorkAddressUuidResponse$Outbound;
}
export declare function getV1WorkAddressesWorkAddressUuidResponseToJSON(getV1WorkAddressesWorkAddressUuidResponse: GetV1WorkAddressesWorkAddressUuidResponse): string;
export declare function getV1WorkAddressesWorkAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1WorkAddressesWorkAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1workaddressesworkaddressuuid.d.ts.map