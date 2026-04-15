import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1WorkAddressesWorkAddressUuidRequestBody = {
    /**
     * Reference to a company location
     */
    locationUuid?: string | undefined;
    effectiveDate?: RFCDate | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
};
export type PutV1WorkAddressesWorkAddressUuidRequest = {
    /**
     * The UUID of the work address
     */
    workAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1WorkAddressesWorkAddressUuidRequestBody;
};
export type PutV1WorkAddressesWorkAddressUuidResponse = {
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
export declare const PutV1WorkAddressesWorkAddressUuidRequestBody$inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound = {
    location_uuid?: string | undefined;
    effective_date?: string | undefined;
    version: string;
};
/** @internal */
export declare const PutV1WorkAddressesWorkAddressUuidRequestBody$outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WorkAddressesWorkAddressUuidRequestBody$ {
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidRequestBody>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound;
}
export declare function putV1WorkAddressesWorkAddressUuidRequestBodyToJSON(putV1WorkAddressesWorkAddressUuidRequestBody: PutV1WorkAddressesWorkAddressUuidRequestBody): string;
export declare function putV1WorkAddressesWorkAddressUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1WorkAddressesWorkAddressUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1WorkAddressesWorkAddressUuidRequest$inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WorkAddressesWorkAddressUuidRequest$Outbound = {
    work_address_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1WorkAddressesWorkAddressUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1WorkAddressesWorkAddressUuidRequest$outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WorkAddressesWorkAddressUuidRequest$ {
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidRequest>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidRequest$Outbound` instead. */
    type Outbound = PutV1WorkAddressesWorkAddressUuidRequest$Outbound;
}
export declare function putV1WorkAddressesWorkAddressUuidRequestToJSON(putV1WorkAddressesWorkAddressUuidRequest: PutV1WorkAddressesWorkAddressUuidRequest): string;
export declare function putV1WorkAddressesWorkAddressUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1WorkAddressesWorkAddressUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1WorkAddressesWorkAddressUuidResponse$inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1WorkAddressesWorkAddressUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Work-Address"?: components.EmployeeWorkAddress$Outbound | undefined;
};
/** @internal */
export declare const PutV1WorkAddressesWorkAddressUuidResponse$outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1WorkAddressesWorkAddressUuidResponse$ {
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1WorkAddressesWorkAddressUuidResponse$Outbound, z.ZodTypeDef, PutV1WorkAddressesWorkAddressUuidResponse>;
    /** @deprecated use `PutV1WorkAddressesWorkAddressUuidResponse$Outbound` instead. */
    type Outbound = PutV1WorkAddressesWorkAddressUuidResponse$Outbound;
}
export declare function putV1WorkAddressesWorkAddressUuidResponseToJSON(putV1WorkAddressesWorkAddressUuidResponse: PutV1WorkAddressesWorkAddressUuidResponse): string;
export declare function putV1WorkAddressesWorkAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1WorkAddressesWorkAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1workaddressesworkaddressuuid.d.ts.map