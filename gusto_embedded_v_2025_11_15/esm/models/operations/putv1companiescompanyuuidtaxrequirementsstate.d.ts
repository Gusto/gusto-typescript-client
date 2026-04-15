import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type Requirements = {
    /**
     * An identifier for an individual requirement. Uniqueness is guaranteed within a requirement set.
     */
    key?: string | undefined;
    value?: string | null | undefined;
};
export type RequirementSets = {
    /**
     * An identifier for a set of requirements. A list of requirement sets can contain multiple sets with the same `key` and different `effective_from` values.
     */
    key?: string | undefined;
    /**
     * An ISO 8601 formatted date representing the date values became effective. Some requirement sets are effective dated, while others are not. Multiple requirement sets for the same state/key can/will exist with unique effective dates. If a requirement set is has an `effective_from` value, all requirement sets with the same key will also have an `effective_from` value.
     */
    effectiveFrom?: string | null | undefined;
    /**
     * One of the two-letter state abbreviations for the fifty United States and the District of Columbia (DC)
     */
    state?: string | undefined;
    requirements?: Array<Requirements> | undefined;
};
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody = {
    requirementSets?: Array<RequirementSets> | undefined;
};
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * 2-letter US state abbreviation
     */
    state: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody;
};
export type PutV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type Requirements$Outbound = {
    key?: string | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const Requirements$outboundSchema: z.ZodType<Requirements$Outbound, z.ZodTypeDef, Requirements>;
export declare function requirementsToJSON(requirements: Requirements): string;
/** @internal */
export type RequirementSets$Outbound = {
    key?: string | undefined;
    effective_from?: string | null | undefined;
    state?: string | undefined;
    requirements?: Array<Requirements$Outbound> | undefined;
};
/** @internal */
export declare const RequirementSets$outboundSchema: z.ZodType<RequirementSets$Outbound, z.ZodTypeDef, RequirementSets>;
export declare function requirementSetsToJSON(requirementSets: RequirementSets): string;
/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound = {
    requirement_sets?: Array<RequirementSets$Outbound> | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody>;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyToJSON(putV1CompaniesCompanyUuidTaxRequirementsStateRequestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody): string;
/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound = {
    company_uuid: string;
    state: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestToJSON(putV1CompaniesCompanyUuidTaxRequirementsStateRequest: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest): string;
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyuuidtaxrequirementsstate.d.ts.map