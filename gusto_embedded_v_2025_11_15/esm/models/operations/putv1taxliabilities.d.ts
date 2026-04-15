import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { TaxLiabilitiesSelections } from "../components/taxliabilitiesselections.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LiabilitySelections = {
    /**
     * The ID of the tax.
     */
    taxId: number;
    /**
     * The UUID of the last unpaid external payroll uuid. It should be null when the full amount of tax liability has been paid.
     */
    lastUnpaidExternalPayrollUuid: string | null;
    /**
     * A selection of unpaid liability amount.
     */
    unpaidLiabilityAmount: number;
};
export type PutV1TaxLiabilitiesRequestBody = {
    liabilitySelections?: Array<LiabilitySelections> | undefined;
};
export type PutV1TaxLiabilitiesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
    requestBody: PutV1TaxLiabilitiesRequestBody;
};
export type PutV1TaxLiabilitiesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    taxLiabilitiesList?: Array<TaxLiabilitiesSelections> | undefined;
};
/** @internal */
export type LiabilitySelections$Outbound = {
    tax_id: number;
    last_unpaid_external_payroll_uuid: string | null;
    unpaid_liability_amount: number;
};
/** @internal */
export declare const LiabilitySelections$outboundSchema: z.ZodType<LiabilitySelections$Outbound, z.ZodTypeDef, LiabilitySelections>;
export declare function liabilitySelectionsToJSON(liabilitySelections: LiabilitySelections): string;
/** @internal */
export type PutV1TaxLiabilitiesRequestBody$Outbound = {
    liability_selections?: Array<LiabilitySelections$Outbound> | undefined;
};
/** @internal */
export declare const PutV1TaxLiabilitiesRequestBody$outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequestBody$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequestBody>;
export declare function putV1TaxLiabilitiesRequestBodyToJSON(putV1TaxLiabilitiesRequestBody: PutV1TaxLiabilitiesRequestBody): string;
/** @internal */
export type PutV1TaxLiabilitiesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PutV1TaxLiabilitiesRequestBody$Outbound;
};
/** @internal */
export declare const PutV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<PutV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesRequest>;
export declare function putV1TaxLiabilitiesRequestToJSON(putV1TaxLiabilitiesRequest: PutV1TaxLiabilitiesRequest): string;
/** @internal */
export declare const PutV1TaxLiabilitiesResponse$inboundSchema: z.ZodType<PutV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
export declare function putV1TaxLiabilitiesResponseFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesResponse, SDKValidationError>;
//# sourceMappingURL=putv1taxliabilities.d.ts.map