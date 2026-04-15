import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { InformationRequest } from "../components/informationrequest.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetInformationRequestsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetInformationRequestsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    informationRequestList?: Array<InformationRequest> | undefined;
};
/** @internal */
export type GetInformationRequestsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetInformationRequestsRequest$outboundSchema: z.ZodType<GetInformationRequestsRequest$Outbound, z.ZodTypeDef, GetInformationRequestsRequest>;
export declare function getInformationRequestsRequestToJSON(getInformationRequestsRequest: GetInformationRequestsRequest): string;
/** @internal */
export declare const GetInformationRequestsResponse$inboundSchema: z.ZodType<GetInformationRequestsResponse, z.ZodTypeDef, unknown>;
export declare function getInformationRequestsResponseFromJSON(jsonString: string): SafeParseResult<GetInformationRequestsResponse, SDKValidationError>;
//# sourceMappingURL=getinformationrequests.d.ts.map