import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type I9VerificationGetDocumentsQueryData = operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse;
/**
 * Get an employee's I-9 verification documents
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetDocuments(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, options?: QueryHookOptions<I9VerificationGetDocumentsQueryData>): UseQueryResult<I9VerificationGetDocumentsQueryData, Error>;
/**
 * Get an employee's I-9 verification documents
 *
 * @remarks
 * An employee's I-9 verification documents are the documents an employee has provided the employer to verify their identity and authorization to work in the United States.
 *
 * scope: `i9_authorizations:read`
 */
export declare function useI9VerificationGetDocumentsSuspense(request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, options?: SuspenseQueryHookOptions<I9VerificationGetDocumentsQueryData>): UseSuspenseQueryResult<I9VerificationGetDocumentsQueryData, Error>;
export declare function prefetchI9VerificationGetDocuments(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest): Promise<void>;
export declare function setI9VerificationGetDocumentsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: I9VerificationGetDocumentsQueryData): I9VerificationGetDocumentsQueryData | undefined;
export declare function invalidateI9VerificationGetDocuments(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllI9VerificationGetDocuments(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildI9VerificationGetDocumentsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdI9AuthorizationDocumentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<I9VerificationGetDocumentsQueryData>;
};
export declare function queryKeyI9VerificationGetDocuments(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=i9VerificationGetDocuments.d.ts.map