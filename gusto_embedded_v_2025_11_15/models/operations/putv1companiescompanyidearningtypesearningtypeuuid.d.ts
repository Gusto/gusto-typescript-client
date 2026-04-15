import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody = {
    /**
     * The name of the custom earning type.
     */
    name?: string | undefined;
};
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * The UUID of the earning type
     */
    earningTypeUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody;
};
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse = {
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
    earningType?: components.EarningType | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound = {
    name?: string | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBodyToJSON(putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody): string;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound = {
    company_id: string;
    earning_type_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestToJSON(putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest): string;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Earning-Type"?: components.EarningType$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseToJSON(putV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse: PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse): string;
export declare function putV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdEarningTypesEarningTypeUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidearningtypesearningtypeuuid.d.ts.map