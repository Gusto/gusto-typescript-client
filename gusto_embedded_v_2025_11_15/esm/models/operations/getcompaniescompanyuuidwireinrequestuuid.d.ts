import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { VersionHeader } from "../components/versionheader.js";
import { WireInRequest } from "../components/wireinrequest.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetCompaniesCompanyUuidWireInRequestUuidRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetCompaniesCompanyUuidWireInRequestUuidResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    wireInRequestList?: Array<WireInRequest> | undefined;
};
/** @internal */
export type GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidRequest$outboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidRequest$Outbound, z.ZodTypeDef, GetCompaniesCompanyUuidWireInRequestUuidRequest>;
export declare function getCompaniesCompanyUuidWireInRequestUuidRequestToJSON(getCompaniesCompanyUuidWireInRequestUuidRequest: GetCompaniesCompanyUuidWireInRequestUuidRequest): string;
/** @internal */
export declare const GetCompaniesCompanyUuidWireInRequestUuidResponse$inboundSchema: z.ZodType<GetCompaniesCompanyUuidWireInRequestUuidResponse, z.ZodTypeDef, unknown>;
export declare function getCompaniesCompanyUuidWireInRequestUuidResponseFromJSON(jsonString: string): SafeParseResult<GetCompaniesCompanyUuidWireInRequestUuidResponse, SDKValidationError>;
//# sourceMappingURL=getcompaniescompanyuuidwireinrequestuuid.d.ts.map