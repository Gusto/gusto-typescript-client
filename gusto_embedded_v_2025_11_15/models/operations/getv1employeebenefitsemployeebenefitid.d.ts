import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1EmployeeBenefitsEmployeeBenefitIdRequest = {
    /**
     * The UUID of the employee benefit.
     */
    employeeBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetV1EmployeeBenefitsEmployeeBenefitIdResponse = {
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
    employeeBenefit?: components.EmployeeBenefit | undefined;
};
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1EmployeeBenefitsEmployeeBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeBenefitsEmployeeBenefitIdRequest$ {
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, GetV1EmployeeBenefitsEmployeeBenefitIdRequest>;
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound` instead. */
    type Outbound = GetV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound;
}
export declare function getV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(getV1EmployeeBenefitsEmployeeBenefitIdRequest: GetV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
export declare function getV1EmployeeBenefitsEmployeeBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeBenefitsEmployeeBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Employee-Benefit"?: components.EmployeeBenefit$Outbound | undefined;
};
/** @internal */
export declare const GetV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1EmployeeBenefitsEmployeeBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1EmployeeBenefitsEmployeeBenefitIdResponse$ {
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, GetV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /** @deprecated use `GetV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound` instead. */
    type Outbound = GetV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound;
}
export declare function getV1EmployeeBenefitsEmployeeBenefitIdResponseToJSON(getV1EmployeeBenefitsEmployeeBenefitIdResponse: GetV1EmployeeBenefitsEmployeeBenefitIdResponse): string;
export declare function getV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<GetV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=getv1employeebenefitsemployeebenefitid.d.ts.map