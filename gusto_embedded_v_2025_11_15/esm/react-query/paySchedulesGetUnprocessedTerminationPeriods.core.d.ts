import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse } from "../models/operations/getv1companiescompanyidunprocessedterminationpayperiods.js";
export type PaySchedulesGetUnprocessedTerminationPeriodsQueryData = GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse;
export declare function prefetchPaySchedulesGetUnprocessedTerminationPeriods(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): Promise<void>;
export declare function buildPaySchedulesGetUnprocessedTerminationPeriodsQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetUnprocessedTerminationPeriodsQueryData>;
};
export declare function queryKeyPaySchedulesGetUnprocessedTerminationPeriods(companyId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetUnprocessedTerminationPeriods.core.d.ts.map