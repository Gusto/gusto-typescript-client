import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody;
};
export type PutV1CompaniesCompanyUuidTaxRequirementsStateResponse = {
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
};
/** @internal */
export declare const Requirements$inboundSchema: z.ZodType<Requirements, z.ZodTypeDef, unknown>;
/** @internal */
export type Requirements$Outbound = {
    key?: string | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const Requirements$outboundSchema: z.ZodType<Requirements$Outbound, z.ZodTypeDef, Requirements>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Requirements$ {
    /** @deprecated use `Requirements$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Requirements, z.ZodTypeDef, unknown>;
    /** @deprecated use `Requirements$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Requirements$Outbound, z.ZodTypeDef, Requirements>;
    /** @deprecated use `Requirements$Outbound` instead. */
    type Outbound = Requirements$Outbound;
}
export declare function requirementsToJSON(requirements: Requirements): string;
export declare function requirementsFromJSON(jsonString: string): SafeParseResult<Requirements, SDKValidationError>;
/** @internal */
export declare const RequirementSets$inboundSchema: z.ZodType<RequirementSets, z.ZodTypeDef, unknown>;
/** @internal */
export type RequirementSets$Outbound = {
    key?: string | undefined;
    effective_from?: string | null | undefined;
    state?: string | undefined;
    requirements?: Array<Requirements$Outbound> | undefined;
};
/** @internal */
export declare const RequirementSets$outboundSchema: z.ZodType<RequirementSets$Outbound, z.ZodTypeDef, RequirementSets>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequirementSets$ {
    /** @deprecated use `RequirementSets$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequirementSets, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequirementSets$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequirementSets$Outbound, z.ZodTypeDef, RequirementSets>;
    /** @deprecated use `RequirementSets$Outbound` instead. */
    type Outbound = RequirementSets$Outbound;
}
export declare function requirementSetsToJSON(requirementSets: RequirementSets): string;
export declare function requirementSetsFromJSON(jsonString: string): SafeParseResult<RequirementSets, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound = {
    requirement_sets?: Array<RequirementSets$Outbound> | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyToJSON(putV1CompaniesCompanyUuidTaxRequirementsStateRequestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody): string;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound = {
    company_uuid: string;
    state: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyUuidTaxRequirementsStateRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateRequest>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidTaxRequirementsStateRequest$Outbound;
}
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestToJSON(putV1CompaniesCompanyUuidTaxRequirementsStateRequest: PutV1CompaniesCompanyUuidTaxRequirementsStateRequest): string;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidTaxRequirementsStateRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyUuidTaxRequirementsStateResponse>;
    /** @deprecated use `PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyUuidTaxRequirementsStateResponse$Outbound;
}
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateResponseToJSON(putV1CompaniesCompanyUuidTaxRequirementsStateResponse: PutV1CompaniesCompanyUuidTaxRequirementsStateResponse): string;
export declare function putV1CompaniesCompanyUuidTaxRequirementsStateResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyUuidTaxRequirementsStateResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyuuidtaxrequirementsstate.d.ts.map