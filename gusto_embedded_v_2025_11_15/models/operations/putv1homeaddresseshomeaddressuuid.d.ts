import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1HomeAddressesHomeAddressUuidRequestBody = {
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
    street1?: string | undefined;
    street2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    effectiveDate?: RFCDate | undefined;
    courtesyWithholding?: boolean | undefined;
};
export type PutV1HomeAddressesHomeAddressUuidRequest = {
    /**
     * The UUID of the home address
     */
    homeAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1HomeAddressesHomeAddressUuidRequestBody;
};
export type PutV1HomeAddressesHomeAddressUuidResponse = {
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
export declare const PutV1HomeAddressesHomeAddressUuidRequestBody$inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound = {
    version: string;
    street_1?: string | undefined;
    street_2?: string | null | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    effective_date?: string | undefined;
    courtesy_withholding?: boolean | undefined;
};
/** @internal */
export declare const PutV1HomeAddressesHomeAddressUuidRequestBody$outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HomeAddressesHomeAddressUuidRequestBody$ {
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidRequestBody>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound;
}
export declare function putV1HomeAddressesHomeAddressUuidRequestBodyToJSON(putV1HomeAddressesHomeAddressUuidRequestBody: PutV1HomeAddressesHomeAddressUuidRequestBody): string;
export declare function putV1HomeAddressesHomeAddressUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1HomeAddressesHomeAddressUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1HomeAddressesHomeAddressUuidRequest$inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HomeAddressesHomeAddressUuidRequest$Outbound = {
    home_address_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1HomeAddressesHomeAddressUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1HomeAddressesHomeAddressUuidRequest$outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HomeAddressesHomeAddressUuidRequest$ {
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidRequest$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidRequest>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidRequest$Outbound` instead. */
    type Outbound = PutV1HomeAddressesHomeAddressUuidRequest$Outbound;
}
export declare function putV1HomeAddressesHomeAddressUuidRequestToJSON(putV1HomeAddressesHomeAddressUuidRequest: PutV1HomeAddressesHomeAddressUuidRequest): string;
export declare function putV1HomeAddressesHomeAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1HomeAddressesHomeAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1HomeAddressesHomeAddressUuidResponse$inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1HomeAddressesHomeAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Address"?: components.EmployeeAddress$Outbound | undefined;
};
/** @internal */
export declare const PutV1HomeAddressesHomeAddressUuidResponse$outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1HomeAddressesHomeAddressUuidResponse$ {
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1HomeAddressesHomeAddressUuidResponse$Outbound, z.ZodTypeDef, PutV1HomeAddressesHomeAddressUuidResponse>;
    /** @deprecated use `PutV1HomeAddressesHomeAddressUuidResponse$Outbound` instead. */
    type Outbound = PutV1HomeAddressesHomeAddressUuidResponse$Outbound;
}
export declare function putV1HomeAddressesHomeAddressUuidResponseToJSON(putV1HomeAddressesHomeAddressUuidResponse: PutV1HomeAddressesHomeAddressUuidResponse): string;
export declare function putV1HomeAddressesHomeAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1HomeAddressesHomeAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1homeaddresseshomeaddressuuid.d.ts.map