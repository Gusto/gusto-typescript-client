import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1EmployeeFormsRequest, GetV1EmployeeFormsResponse } from "../models/operations/getv1employeeforms.js";
export type EmployeeFormsListQueryData = GetV1EmployeeFormsResponse;
export declare function prefetchEmployeeFormsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeeFormsRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeeFormsListQuery(client$: GustoEmbeddedCore, request: GetV1EmployeeFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsListQueryData>;
};
export declare function queryKeyEmployeeFormsList(employeeId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsList.core.d.ts.map