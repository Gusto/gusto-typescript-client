import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1HomeAddressesHomeAddressUuidRequest = {
    /**
     * The UUID of the home address
     */
    homeAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1HomeAddressesHomeAddressUuidResponse = {
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
    employeeAddress?: components.EmployeeAddress | undefined;
};
/** @internal */
export declare const GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1HomeAddressesHomeAddressUuidRequest$Outbound = {
    home_address_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, GetV1HomeAddressesHomeAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1HomeAddressesHomeAddressUuidRequest$ {
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, GetV1HomeAddressesHomeAddressUuidRequest>;
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidRequest$Outbound` instead. */
    type Outbound = GetV1HomeAddressesHomeAddressUuidRequest$Outbound;
}
export declare function getV1HomeAddressesHomeAddressUuidRequestToJSON(getV1HomeAddressesHomeAddressUuidRequest: GetV1HomeAddressesHomeAddressUuidRequest): string;
export declare function getV1HomeAddressesHomeAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<GetV1HomeAddressesHomeAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1HomeAddressesHomeAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Address"?: components.EmployeeAddress$Outbound | undefined;
};
/** @internal */
export declare const GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, GetV1HomeAddressesHomeAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1HomeAddressesHomeAddressUuidResponse$ {
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, GetV1HomeAddressesHomeAddressUuidResponse>;
    /** @deprecated use `GetV1HomeAddressesHomeAddressUuidResponse$Outbound` instead. */
    type Outbound = GetV1HomeAddressesHomeAddressUuidResponse$Outbound;
}
export declare function getV1HomeAddressesHomeAddressUuidResponseToJSON(getV1HomeAddressesHomeAddressUuidResponse: GetV1HomeAddressesHomeAddressUuidResponse): string;
export declare function getV1HomeAddressesHomeAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<GetV1HomeAddressesHomeAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=getv1homeaddresseshomeaddressuuid.d.ts.map