import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetDepartmentRequest } from "../models/operations/getdepartment.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildDepartmentsGetQuery, DepartmentsGetQueryData, prefetchDepartmentsGet, queryKeyDepartmentsGet } from "./departmentsGet.core.js";
export { buildDepartmentsGetQuery, type DepartmentsGetQueryData, prefetchDepartmentsGet, queryKeyDepartmentsGet, };
export type DepartmentsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a department
 *
 * @remarks
 * Get a department given the UUID
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGet(request: GetDepartmentRequest, options?: QueryHookOptions<DepartmentsGetQueryData, DepartmentsGetQueryError>): UseQueryResult<DepartmentsGetQueryData, DepartmentsGetQueryError>;
/**
 * Get a department
 *
 * @remarks
 * Get a department given the UUID
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGetSuspense(request: GetDepartmentRequest, options?: SuspenseQueryHookOptions<DepartmentsGetQueryData, DepartmentsGetQueryError>): UseSuspenseQueryResult<DepartmentsGetQueryData, DepartmentsGetQueryError>;
export declare function setDepartmentsGetData(client: QueryClient, queryKeyBase: [
    departmentUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: DepartmentsGetQueryData): DepartmentsGetQueryData | undefined;
export declare function invalidateDepartmentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    departmentUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllDepartmentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=departmentsGet.d.ts.map