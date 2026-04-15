import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type I9VerificationGetDocumentOptionsQueryData = operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse;
/**
 * Get an employee's I-9 verification document options
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint returns the possible document options based on the employee's authorization status. These options can then be used to create the I-9 verification documents.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetDocumentOptions(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest, options?: QueryHookOptions<I9VerificationGetDocumentOptionsQueryData>): UseQueryResult<I9VerificationGetDocumentOptionsQueryData, Error>;
/**
 * Get an employee's I-9 verification document options
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States. This endpoint returns the possible document options based on the employee's authorization status. These options can then be used to create the I-9 verification documents.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetDocumentOptionsSuspense(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest, options?: SuspenseQueryHookOptions<I9VerificationGetDocumentOptionsQueryData>): UseSuspenseQueryResult<I9VerificationGetDocumentOptionsQueryData, Error>;
export declare function prefetchI9VerificationGetDocumentOptions(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest): Promise<void>;
export declare function setI9VerificationGetDocumentOptionsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: I9VerificationGetDocumentOptionsQueryData): I9VerificationGetDocumentOptionsQueryData | undefined;
export declare function invalidateI9VerificationGetDocumentOptions(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllI9VerificationGetDocumentOptions(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildI9VerificationGetDocumentOptionsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<I9VerificationGetDocumentOptionsQueryData>;
};
export declare function queryKeyI9VerificationGetDocumentOptions(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=i9VerificationGetDocumentOptions.d.ts.map