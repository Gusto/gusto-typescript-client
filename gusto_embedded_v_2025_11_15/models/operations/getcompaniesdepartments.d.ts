import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesDepartmentsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetCompaniesDepartmentsResponse = {
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
     * List of departments
     */
    departmentList?: Array<components.Department> | undefined;
};
/** @internal */
export declare const GetCompaniesDepartmentsRequest$inboundSchema: z.ZodType<GetCompaniesDepartmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesDepartmentsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesDepartmentsRequest$outboundSchema: z.ZodType<GetCompaniesDepartmentsRequest$Outbound, z.ZodTypeDef, GetCompaniesDepartmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesDepartmentsRequest$ {
    /** @deprecated use `GetCompaniesDepartmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesDepartmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesDepartmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesDepartmentsRequest$Outbound, z.ZodTypeDef, GetCompaniesDepartmentsRequest>;
    /** @deprecated use `GetCompaniesDepartmentsRequest$Outbound` instead. */
    type Outbound = GetCompaniesDepartmentsRequest$Outbound;
}
export declare function getCompaniesDepartmentsRequestToJSON(getCompaniesDepartmentsRequest: GetCompaniesDepartmentsRequest): string;
export declare function getCompaniesDepartmentsRequestFromJSON(jsonString: string): SafeParseResult<GetCompaniesDepartmentsRequest, SDKValidationError>;
/** @internal */
export declare const GetCompaniesDepartmentsResponse$inboundSchema: z.ZodType<GetCompaniesDepartmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetCompaniesDepartmentsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Department-List"?: Array<components.Department$Outbound> | undefined;
};
/** @internal */
export declare const GetCompaniesDepartmentsResponse$outboundSchema: z.ZodType<GetCompaniesDepartmentsResponse$Outbound, z.ZodTypeDef, GetCompaniesDepartmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetCompaniesDepartmentsResponse$ {
    /** @deprecated use `GetCompaniesDepartmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetCompaniesDepartmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetCompaniesDepartmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetCompaniesDepartmentsResponse$Outbound, z.ZodTypeDef, GetCompaniesDepartmentsResponse>;
    /** @deprecated use `GetCompaniesDepartmentsResponse$Outbound` instead. */
    type Outbound = GetCompaniesDepartmentsResponse$Outbound;
}
export declare function getCompaniesDepartmentsResponseToJSON(getCompaniesDepartmentsResponse: GetCompaniesDepartmentsResponse): string;
export declare function getCompaniesDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniesdepartments.d.ts.map