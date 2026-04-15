import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadata = {
    /**
     * A categorization of the migration blocker, e.g. "migrated_company"
     */
    key?: string | undefined;
};
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrors = {
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
    metadata?: GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadata | undefined;
};
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadata = {
    /**
     * A categorization of the migration warning, e.g. "marijuana_related_business"
     */
    key?: string | undefined;
};
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarnings = {
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
    metadata?: GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadata | undefined;
};
/**
 * Example response
 */
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody = {
    /**
     * Indicates if the company is ready to be migrated.
     */
    readyToMigrate?: boolean | undefined;
    /**
     * The company UUID
     */
    companyUuid?: string | undefined;
    errors?: Array<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrors> | undefined;
    warnings?: Array<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarnings> | undefined;
};
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    object?: GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody | undefined;
};
/** @internal */
export type GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest$outboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest$Outbound, z.ZodTypeDef, GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequestToJSON(getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest: GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessRequest): string;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadata$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadata, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadataFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessMetadata, SDKValidationError>;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrors$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrors, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrorsFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessErrors, SDKValidationError>;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadata$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadata, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadataFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessCompaniesMetadata, SDKValidationError>;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarnings$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarnings, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarningsFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessWarnings, SDKValidationError>;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse$inboundSchema: z.ZodType<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse, z.ZodTypeDef, unknown>;
export declare function getV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponseFromJSON(jsonString: string): SafeParseResult<GetV1PartnerManagedCompaniesCompanyUuidMigrationReadinessResponse, SDKValidationError>;
//# sourceMappingURL=getv1partnermanagedcompaniescompanyuuidmigrationreadiness.d.ts.map