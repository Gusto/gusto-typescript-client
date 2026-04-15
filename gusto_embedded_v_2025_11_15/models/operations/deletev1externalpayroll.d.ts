import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
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
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1ExternalPayrollResponse = {
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
export declare const DeleteV1ExternalPayrollRequest$inboundSchema: z.ZodType<DeleteV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ExternalPayrollRequest$Outbound = {
    company_uuid: string;
    external_payroll_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1ExternalPayrollRequest$outboundSchema: z.ZodType<DeleteV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, DeleteV1ExternalPayrollRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ExternalPayrollRequest$ {
    /** @deprecated use `DeleteV1ExternalPayrollRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ExternalPayrollRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ExternalPayrollRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ExternalPayrollRequest$Outbound, z.ZodTypeDef, DeleteV1ExternalPayrollRequest>;
    /** @deprecated use `DeleteV1ExternalPayrollRequest$Outbound` instead. */
    type Outbound = DeleteV1ExternalPayrollRequest$Outbound;
}
export declare function deleteV1ExternalPayrollRequestToJSON(deleteV1ExternalPayrollRequest: DeleteV1ExternalPayrollRequest): string;
export declare function deleteV1ExternalPayrollRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1ExternalPayrollRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1ExternalPayrollResponse$inboundSchema: z.ZodType<DeleteV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1ExternalPayrollResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1ExternalPayrollResponse$outboundSchema: z.ZodType<DeleteV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, DeleteV1ExternalPayrollResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1ExternalPayrollResponse$ {
    /** @deprecated use `DeleteV1ExternalPayrollResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1ExternalPayrollResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1ExternalPayrollResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1ExternalPayrollResponse$Outbound, z.ZodTypeDef, DeleteV1ExternalPayrollResponse>;
    /** @deprecated use `DeleteV1ExternalPayrollResponse$Outbound` instead. */
    type Outbound = DeleteV1ExternalPayrollResponse$Outbound;
}
export declare function deleteV1ExternalPayrollResponseToJSON(deleteV1ExternalPayrollResponse: DeleteV1ExternalPayrollResponse): string;
export declare function deleteV1ExternalPayrollResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1ExternalPayrollResponse, SDKValidationError>;
//# sourceMappingURL=deletev1externalpayroll.d.ts.map