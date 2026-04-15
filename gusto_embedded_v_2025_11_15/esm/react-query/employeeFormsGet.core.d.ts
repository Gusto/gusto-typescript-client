import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1EmployeeFormRequest, GetV1EmployeeFormResponse } from "../models/operations/getv1employeeform.js";
export type EmployeeFormsGetQueryData = GetV1EmployeeFormResponse;
export declare function prefetchEmployeeFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeeFormRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeeFormsGetQuery(client$: GustoEmbeddedCore, request: GetV1EmployeeFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsGetQueryData>;
};
export declare function queryKeyEmployeeFormsGet(employeeId: string, formId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsGet.core.d.ts.map