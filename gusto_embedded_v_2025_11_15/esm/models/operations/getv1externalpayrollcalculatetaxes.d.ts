import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ExternalPayrollTaxSuggestions } from "../components/externalpayrolltaxsuggestions.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ExternalPayrollCalculateTaxesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * The UUID of the external payroll
     */
    externalPayrollId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1ExternalPayrollCalculateTaxesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    externalPayrollTaxSuggestionsList?: Array<ExternalPayrollTaxSuggestions> | undefined;
};
/** @internal */
export type GetV1ExternalPayrollCalculateTaxesRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesRequest$outboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollCalculateTaxesRequest>;
export declare function getV1ExternalPayrollCalculateTaxesRequestToJSON(getV1ExternalPayrollCalculateTaxesRequest: GetV1ExternalPayrollCalculateTaxesRequest): string;
/** @internal */
export declare const GetV1ExternalPayrollCalculateTaxesResponse$inboundSchema: z.ZodType<GetV1ExternalPayrollCalculateTaxesResponse, z.ZodTypeDef, unknown>;
export declare function getV1ExternalPayrollCalculateTaxesResponseFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollCalculateTaxesResponse, SDKValidationError>;
//# sourceMappingURL=getv1externalpayrollcalculatetaxes.d.ts.map