import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { TaxLiabilitiesSelections } from "../components/taxliabilitiesselections.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1TaxLiabilitiesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1TaxLiabilitiesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    taxLiabilitiesList?: Array<TaxLiabilitiesSelections> | undefined;
};
/** @internal */
export type GetV1TaxLiabilitiesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1TaxLiabilitiesRequest$outboundSchema: z.ZodType<GetV1TaxLiabilitiesRequest$Outbound, z.ZodTypeDef, GetV1TaxLiabilitiesRequest>;
export declare function getV1TaxLiabilitiesRequestToJSON(getV1TaxLiabilitiesRequest: GetV1TaxLiabilitiesRequest): string;
/** @internal */
export declare const GetV1TaxLiabilitiesResponse$inboundSchema: z.ZodType<GetV1TaxLiabilitiesResponse, z.ZodTypeDef, unknown>;
export declare function getV1TaxLiabilitiesResponseFromJSON(jsonString: string): SafeParseResult<GetV1TaxLiabilitiesResponse, SDKValidationError>;
//# sourceMappingURL=getv1taxliabilities.d.ts.map