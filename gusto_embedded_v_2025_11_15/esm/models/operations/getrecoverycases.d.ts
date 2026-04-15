import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { RecoveryCase } from "../components/recoverycase.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetRecoveryCasesRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetRecoveryCasesResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    recoveryCaseList?: Array<RecoveryCase> | undefined;
};
/** @internal */
export type GetRecoveryCasesRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetRecoveryCasesRequest$outboundSchema: z.ZodType<GetRecoveryCasesRequest$Outbound, z.ZodTypeDef, GetRecoveryCasesRequest>;
export declare function getRecoveryCasesRequestToJSON(getRecoveryCasesRequest: GetRecoveryCasesRequest): string;
/** @internal */
export declare const GetRecoveryCasesResponse$inboundSchema: z.ZodType<GetRecoveryCasesResponse, z.ZodTypeDef, unknown>;
export declare function getRecoveryCasesResponseFromJSON(jsonString: string): SafeParseResult<GetRecoveryCasesResponse, SDKValidationError>;
//# sourceMappingURL=getrecoverycases.d.ts.map