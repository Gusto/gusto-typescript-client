import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * What type of tax entity the company is
 */
export declare const TaxPayerType: {
    readonly CCorporation: "C-Corporation";
    readonly SCorporation: "S-Corporation";
    readonly SoleProprietor: "Sole proprietor";
    readonly Llc: "LLC";
    readonly Llp: "LLP";
    readonly LimitedPartnership: "Limited partnership";
    readonly CoOwnership: "Co-ownership";
    readonly Association: "Association";
    readonly Trusteeship: "Trusteeship";
    readonly GeneralPartnership: "General partnership";
    readonly JointVenture: "Joint venture";
    readonly NonProfit: "Non-Profit";
};
/**
 * What type of tax entity the company is
 */
export type TaxPayerType = ClosedEnum<typeof TaxPayerType>;
/**
 * The form used by the company for federal tax filing. One of:
 *
 * @remarks
 * - 941 (Quarterly federal tax return)
 * - 944 (Annual federal tax return)
 */
export declare const FilingForm: {
    readonly NineHundredAndFortyOne: "941";
    readonly NineHundredAndFortyFour: "944";
};
/**
 * The form used by the company for federal tax filing. One of:
 *
 * @remarks
 * - 941 (Quarterly federal tax return)
 * - 944 (Annual federal tax return)
 */
export type FilingForm = ClosedEnum<typeof FilingForm>;
/**
 * Attributes related to federal tax details that can be updated via this endpoint include:
 */
export type PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody = {
    /**
     * The legal name of the company
     */
    legalName?: string | undefined;
    /**
     * The EIN of of the company
     */
    ein?: string | undefined;
    /**
     * What type of tax entity the company is
     */
    taxPayerType?: TaxPayerType | undefined;
    /**
     * The form used by the company for federal tax filing. One of:
     *
     * @remarks
     * - 941 (Quarterly federal tax return)
     * - 944 (Annual federal tax return)
     */
    filingForm?: FilingForm | undefined;
    /**
     * Whether this company should be taxed as an S-Corporation
     */
    taxableAsScorp?: boolean | undefined;
    /**
     * The current version of the object. See the [versioning guide](https://docs.gusto.com/embedded-payroll/docs/versioning#object-layer) for information on how to use this field.
     */
    version: string;
};
export type PutV1CompaniesCompanyIdFederalTaxDetailsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    /**
     * Attributes related to federal tax details that can be updated via this endpoint include:
     */
    requestBody: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody;
};
export type PutV1CompaniesCompanyIdFederalTaxDetailsResponse = {
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
    federalTaxDetails?: components.FederalTaxDetails | undefined;
};
/** @internal */
export declare const TaxPayerType$inboundSchema: z.ZodNativeEnum<typeof TaxPayerType>;
/** @internal */
export declare const TaxPayerType$outboundSchema: z.ZodNativeEnum<typeof TaxPayerType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxPayerType$ {
    /** @deprecated use `TaxPayerType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CCorporation: "C-Corporation";
        readonly SCorporation: "S-Corporation";
        readonly SoleProprietor: "Sole proprietor";
        readonly Llc: "LLC";
        readonly Llp: "LLP";
        readonly LimitedPartnership: "Limited partnership";
        readonly CoOwnership: "Co-ownership";
        readonly Association: "Association";
        readonly Trusteeship: "Trusteeship";
        readonly GeneralPartnership: "General partnership";
        readonly JointVenture: "Joint venture";
        readonly NonProfit: "Non-Profit";
    }>;
    /** @deprecated use `TaxPayerType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CCorporation: "C-Corporation";
        readonly SCorporation: "S-Corporation";
        readonly SoleProprietor: "Sole proprietor";
        readonly Llc: "LLC";
        readonly Llp: "LLP";
        readonly LimitedPartnership: "Limited partnership";
        readonly CoOwnership: "Co-ownership";
        readonly Association: "Association";
        readonly Trusteeship: "Trusteeship";
        readonly GeneralPartnership: "General partnership";
        readonly JointVenture: "Joint venture";
        readonly NonProfit: "Non-Profit";
    }>;
}
/** @internal */
export declare const FilingForm$inboundSchema: z.ZodNativeEnum<typeof FilingForm>;
/** @internal */
export declare const FilingForm$outboundSchema: z.ZodNativeEnum<typeof FilingForm>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FilingForm$ {
    /** @deprecated use `FilingForm$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly NineHundredAndFortyOne: "941";
        readonly NineHundredAndFortyFour: "944";
    }>;
    /** @deprecated use `FilingForm$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly NineHundredAndFortyOne: "941";
        readonly NineHundredAndFortyFour: "944";
    }>;
}
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound = {
    legal_name?: string | undefined;
    ein?: string | undefined;
    tax_payer_type?: string | undefined;
    filing_form?: string | undefined;
    taxable_as_scorp?: boolean | undefined;
    version: string;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$ {
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound;
}
export declare function putV1CompaniesCompanyIdFederalTaxDetailsRequestBodyToJSON(putV1CompaniesCompanyIdFederalTaxDetailsRequestBody: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody): string;
export declare function putV1CompaniesCompanyIdFederalTaxDetailsRequestBodyFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1CompaniesCompanyIdFederalTaxDetailsRequestBody$Outbound;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdFederalTaxDetailsRequest$ {
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsRequest>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdFederalTaxDetailsRequest$Outbound;
}
export declare function putV1CompaniesCompanyIdFederalTaxDetailsRequestToJSON(putV1CompaniesCompanyIdFederalTaxDetailsRequest: PutV1CompaniesCompanyIdFederalTaxDetailsRequest): string;
export declare function putV1CompaniesCompanyIdFederalTaxDetailsRequestFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdFederalTaxDetailsRequest, SDKValidationError>;
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PutV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Federal-Tax-Details"?: components.FederalTaxDetails$Outbound | undefined;
};
/** @internal */
export declare const PutV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PutV1CompaniesCompanyIdFederalTaxDetailsResponse$ {
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PutV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound, z.ZodTypeDef, PutV1CompaniesCompanyIdFederalTaxDetailsResponse>;
    /** @deprecated use `PutV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound` instead. */
    type Outbound = PutV1CompaniesCompanyIdFederalTaxDetailsResponse$Outbound;
}
export declare function putV1CompaniesCompanyIdFederalTaxDetailsResponseToJSON(putV1CompaniesCompanyIdFederalTaxDetailsResponse: PutV1CompaniesCompanyIdFederalTaxDetailsResponse): string;
export declare function putV1CompaniesCompanyIdFederalTaxDetailsResponseFromJSON(jsonString: string): SafeParseResult<PutV1CompaniesCompanyIdFederalTaxDetailsResponse, SDKValidationError>;
//# sourceMappingURL=putv1companiescompanyidfederaltaxdetails.d.ts.map