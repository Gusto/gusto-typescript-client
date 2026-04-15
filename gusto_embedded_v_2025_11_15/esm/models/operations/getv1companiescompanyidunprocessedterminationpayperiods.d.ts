import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { UnprocessedTerminationPayPeriod } from "../components/unprocessedterminationpayperiod.js";
import { VersionHeader } from "../components/versionheader.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest = {
    /**
     * The UUID of the company
     */
    companyId: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: VersionHeader | undefined;
};
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse = {
    httpMeta: HTTPMetadata;
    /**
     * Example response
     */
    unprocessedTerminationPayPeriodList?: Array<UnprocessedTerminationPayPeriod> | undefined;
};
/** @internal */
export type GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound = {
    company_id: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$outboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest$Outbound, z.ZodTypeDef, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest>;
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequestToJSON(getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest): string;
/** @internal */
export declare const GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse$inboundSchema: z.ZodType<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, z.ZodTypeDef, unknown>;
export declare function getV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponseFromJSON(jsonString: string): SafeParseResult<GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse, SDKValidationError>;
//# sourceMappingURL=getv1companiescompanyidunprocessedterminationpayperiods.d.ts.map