import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress = {
    street1?: string | undefined;
    street2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
};
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody = {
    /**
     * The current version of the object. See the versioning guide for information on how to use this field.
     */
    version?: string | undefined;
    firstName?: string | undefined;
    middleInitial?: string | undefined;
    lastName?: string | undefined;
    title?: string | undefined;
    phone?: string | undefined;
    birthday?: string | undefined;
    ssn?: string | undefined;
    homeAddress?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress | undefined;
};
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the signatory
     */
    signatoryUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody;
};
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse = {
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
    signatory?: components.Signatory | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound = {
    street_1?: string | undefined;
    street_2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound;
}
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddressToJSON(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress): string;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddressFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound = {
    version?: string | undefined;
    first_name?: string | undefined;
    middle_initial?: string | undefined;
    last_name?: string | undefined;
    title?: string | undefined;
    phone?: string | undefined;
    birthday?: string | undefined;
    ssn?: string | undefined;
    home_address?: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidHomeAddress$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyToJSON(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody): string;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound = {
    company_uuid: string;
    signatory_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest$Outbound;
}
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestToJSON(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest): string;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Signatory?: components.Signatory$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse>;
    /** @deprecated use `PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse$Outbound;
}
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseToJSON(putV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse: PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse): string;
export declare function putV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidSignatoriesSignatoryUuidResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyuuidsignatoriessignatoryuuid.d.ts.map