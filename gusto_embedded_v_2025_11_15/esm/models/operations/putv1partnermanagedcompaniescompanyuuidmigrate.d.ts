import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type Metadata = {
    /**
     * A categorization of the migration blocker, e.g. "migrated_company"
     */
    key?: string | undefined;
};
export type Errors = {
    /**
     * Error key
     */
    errorKey?: string | undefined;
    /**
     * Error category
     */
    category?: string | undefined;
    /**
     * Blocker message
     */
    message?: string | undefined;
    metadata?: Metadata | undefined;
};
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateMetadata = {
    /**
     * A categorization of the migration warning, e.g. "marijuana_related_business"
     */
    key?: string | undefined;
};
export type Warnings = {
    /**
     * Error key
     */
    errorKey?: string | undefined;
    /**
     * Error category
     */
    category?: string | undefined;
    /**
     * Warning message
     */
    message?: string | undefined;
    metadata?: PutV1PartnerManagedCompaniesCompanyUuidMigrateMetadata | undefined;
};
/**
 * Example response
 */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody = {
    /**
     * The migration status.
     */
    migrationStatus?: boolean | undefined;
    /**
     * The company UUID
     */
    companyUuid?: string | undefined;
    errors?: Array<Errors> | undefined;
    warnings?: Array<Warnings> | undefined;
};
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?: PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody | undefined;
};
/** @internal */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$outboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest$Outbound, z.ZodTypeDef, PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest>;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateRequestToJSON(putV1PartnerManagedCompaniesCompanyUuidMigrateRequest: PutV1PartnerManagedCompaniesCompanyUuidMigrateRequest): string;
/** @internal */
export declare const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown>;
export declare function metadataFromJSON(jsonString: string): SafeParseResult<Metadata, SDKValidationError>;
/** @internal */
export declare const Errors$inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown>;
export declare function errorsFromJSON(jsonString: string): SafeParseResult<Errors, SDKValidationError>;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateMetadata$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateMetadata, z.ZodTypeDef, unknown>;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateMetadataFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateMetadata, SDKValidationError>;
/** @internal */
export declare const Warnings$inboundSchema: z.ZodType<Warnings, z.ZodTypeDef, unknown>;
export declare function warningsFromJSON(jsonString: string): SafeParseResult<Warnings, SDKValidationError>;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, z.ZodTypeDef, unknown>;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, SDKValidationError>;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, z.ZodTypeDef, unknown>;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponse, SDKValidationError>;
//# sourceMappingURL=putv1partnermanagedcompaniescompanyuuidmigrate.d.ts.map