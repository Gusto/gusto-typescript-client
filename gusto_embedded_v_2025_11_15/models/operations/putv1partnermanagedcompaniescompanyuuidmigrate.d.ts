import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody = {
    /**
     * Email of the company signatory who is authorized to accept our [Terms of Service](https://flows.gusto.com/terms) and migration decision. You can retrieve the signatory email from the `GET /v/1/companies/{company_id}/signatories` endpoint.
     */
    email: string;
    /**
     * The IP address of the signatory who viewed and accepted the Terms of Service.
     */
    ipAddress: string;
    /**
     * The signatory's user ID on your platform.
     */
    externalUserId: string;
};
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody;
};
/**
 * The migration status. 'success' is the only valid return value.
 */
export declare const MigrationStatus: {
    readonly Success: "success";
};
/**
 * The migration status. 'success' is the only valid return value.
 */
export type MigrationStatus = ClosedEnum<typeof MigrationStatus>;
/**
 * Example response
 */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody = {
    /**
     * The company UUID
     */
    companyUuid?: string | undefined;
    /**
     * The migration status. 'success' is the only valid return value.
     */
    migrationStatus?: MigrationStatus | undefined;
};
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse = {
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
    object?: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody | undefined;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound = {
    email: string;
    ip_address: string;
    external_user_id: string;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$ {
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound` instead. */
    type Outbound = PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound;
}
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateRequestBodyToJSON(putV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody): string;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequestBody$Outbound;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$ {
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound` instead. */
    type Outbound = PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound;
}
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateRequestToJSON(putV1PartnerManagedCompaniesCompanyUuidMigrateRequest: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest): string;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateRequestFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest, SDKValidationError>;
/** @internal */
export declare const MigrationStatus$inboundSchema: z.ZodNativeEnum<typeof MigrationStatus>;
/** @internal */
export declare const MigrationStatus$outboundSchema: z.ZodNativeEnum<typeof MigrationStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MigrationStatus$ {
    /** @deprecated use `MigrationStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Success: "success";
    }>;
    /** @deprecated use `MigrationStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Success: "success";
    }>;
}
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound = {
    company_uuid?: string | undefined;
    migration_status?: string | undefined;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$ {
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound` instead. */
    type Outbound = PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound;
}
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseBodyToJSON(putV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody): string;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, SDKValidationError>;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$Outbound | undefined;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$ {
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse>;
    /** @deprecated use `PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$Outbound` instead. */
    type Outbound = PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$Outbound;
}
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseToJSON(putV1PartnerManagedCompaniesCompanyUuidMigrateResponse: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse): string;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, SDKValidationError>;
//# sourceMappingURL=putv1partnermanagedcompaniescompanyuuidmigrate.d.ts.map