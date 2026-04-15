import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { Department } from "../components/department.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesDepartmentsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetCompaniesDepartmentsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * List of departments
     */
    departmentList?: Array<Department> | undefined;
};
/** @internal */
export type GetCompaniesDepartmentsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesDepartmentsRequest$outboundSchema: z.ZodType<GetCompaniesDepartmentsRequest$Outbound, z.ZodTypeDef, GetCompaniesDepartmentsRequest>;
export declare function getCompaniesDepartmentsRequestToJSON(getCompaniesDepartmentsRequest: GetCompaniesDepartmentsRequest): string;
/** @internal */
export declare const GetCompaniesDepartmentsResponse$inboundSchema: z.ZodType<GetCompaniesDepartmentsResponse, z.ZodTypeDef, unknown>;
export declare function getCompaniesDepartmentsResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesDepartmentsResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniesdepartments.d.ts.map