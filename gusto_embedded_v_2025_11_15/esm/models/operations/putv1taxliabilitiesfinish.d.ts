import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type PutV1TaxLiabilitiesFinishRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type PutV1TaxLiabilitiesFinishResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type PutV1TaxLiabilitiesFinishRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const PutV1TaxLiabilitiesFinishRequest$outboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishRequest$Outbound, z.ZodTypeDef, PutV1TaxLiabilitiesFinishRequest>;
export declare function putV1TaxLiabilitiesFinishRequestToJSON(putV1TaxLiabilitiesFinishRequest: PutV1TaxLiabilitiesFinishRequest): string;
/** @internal */
export declare const PutV1TaxLiabilitiesFinishResponse$inboundSchema: z.ZodType<PutV1TaxLiabilitiesFinishResponse, z.ZodTypeDef, unknown>;
export declare function putV1TaxLiabilitiesFinishResponseFromJSON(jsonString: string): SafeParseResult<PutV1TaxLiabilitiesFinishResponse, SDKValidationError>;
//# sourceMappingURL=putv1taxliabilitiesfinish.d.ts.map