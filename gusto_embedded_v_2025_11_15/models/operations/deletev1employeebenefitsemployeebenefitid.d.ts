import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest = {
    /**
     * The UUID of the employee benefit.
     */
    employeeBenefitId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse = {
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
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound = {
    employee_benefit_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$ {
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound, z.ZodTypeDef, DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest>;
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound` instead. */
    type Outbound = DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest$Outbound;
}
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdRequestToJSON(deleteV1EmployeeBenefitsEmployeeBenefitIdRequest: DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest): string;
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdRequestFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeeBenefitsEmployeeBenefitIdRequest, SDKValidationError>;
/** @internal */
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};
/** @internal */
export declare const DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$ {
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound, z.ZodTypeDef, DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse>;
    /** @deprecated use `DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound` instead. */
    type Outbound = DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse$Outbound;
}
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdResponseToJSON(deleteV1EmployeeBenefitsEmployeeBenefitIdResponse: DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse): string;
export declare function deleteV1EmployeeBenefitsEmployeeBenefitIdResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1EmployeeBenefitsEmployeeBenefitIdResponse, SDKValidationError>;
//# sourceMappingURL=deletev1employeebenefitsemployeebenefitid.d.ts.map