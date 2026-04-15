import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1ExternalPayrollRequest = {
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
export type DeleteV1ExternalPayrollResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export type DeleteV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1ExternalPayrollRequest$outboundSchema: z.ZodType<DeleteV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, DeleteV1ExternalPayrollRequest>;
export declare function deleteV1ExternalPayrollRequestToJSON(deleteV1ExternalPayrollRequest: DeleteV1ExternalPayrollRequest): string;
/** @internal */
export declare const DeleteV1ExternalPayrollResponse$inboundSchema: z.ZodType<DeleteV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=deletev1externalpayroll.d.ts.map