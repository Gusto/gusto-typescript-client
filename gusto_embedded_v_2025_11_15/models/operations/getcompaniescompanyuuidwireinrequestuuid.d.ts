import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesCompanyUuidWireInRequestUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidWireInRequestUuidResponse = {
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
    wireInRequestList?: Array<components.WireInRequest> | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidWireInRequestUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidWireInRequestUuidRequest$ {
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidWireInRequestUuidRequest>;
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound;
}
export declare function getCompaniesCompanyUuidWireInRequestUuidRequestToJSON(getCompaniesCompanyUuidWireInRequestUuidRequest: GetCompaniesCompanyUuidWireInRequestUuidRequest): string;
export declare function getCompaniesCompanyUuidWireInRequestUuidRequestFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidWireInRequestUuidRequest, SDKValidationError>;
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesCompanyUuidWireInRequestUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Wire-In-Request-List"?: Array<components.WireInRequest$Outbound> | undefined;
};
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidResponse$outboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidWireInRequestUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesCompanyUuidWireInRequestUuidResponse$ {
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidResponse$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidWireInRequestUuidResponse>;
    /** @deprecated use `GetCompaniesCompanyUuidWireInRequestUuidResponse$Outbound` instead. */
    type Outbound = GetCompaniesCompanyUuidWireInRequestUuidResponse$Outbound;
}
export declare function getCompaniesCompanyUuidWireInRequestUuidResponseToJSON(getCompaniesCompanyUuidWireInRequestUuidResponse: GetCompaniesCompanyUuidWireInRequestUuidResponse): string;
export declare function getCompaniesCompanyUuidWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidwireinrequestuuid.d.ts.map