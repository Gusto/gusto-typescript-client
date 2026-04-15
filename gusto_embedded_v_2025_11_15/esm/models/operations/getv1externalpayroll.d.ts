import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ExternalPayroll } from "../components/externalpayroll.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1ExternalPayrollRequest = {
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
export type GetV1ExternalPayrollResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    externalPayroll?: ExternalPayroll | undefined;
};
/** @internal */
export type GetV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1ExternalPayrollRequest$outboundSchema: z.ZodType<GetV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, GetV1ExternalPayrollRequest>;
export declare function getV1ExternalPayrollRequestToJSON(getV1ExternalPayrollRequest: GetV1ExternalPayrollRequest): string;
/** @internal */
export declare const GetV1ExternalPayrollResponse$inboundSchema: z.ZodType<GetV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
export declare function getV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<GetV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=getv1externalpayroll.d.ts.map