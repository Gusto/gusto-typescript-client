import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1EmployeeFormRequest } from "../models/operations/getv1employeeform.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildEmployeeFormsGetQuery, EmployeeFormsGetQueryData, prefetchEmployeeFormsGet, queryKeyEmployeeFormsGet } from "./employeeFormsGet.core.js";
export { buildEmployeeFormsGetQuery, type EmployeeFormsGetQueryData, prefetchEmployeeFormsGet, queryKeyEmployeeFormsGet, };
export type EmployeeFormsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGet(request: GetV1EmployeeFormRequest, options?: QueryHookOptions<EmployeeFormsGetQueryData, EmployeeFormsGetQueryError>): UseQueryResult<EmployeeFormsGetQueryData, EmployeeFormsGetQueryError>;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetSuspense(request: GetV1EmployeeFormRequest, options?: SuspenseQueryHookOptions<EmployeeFormsGetQueryData, EmployeeFormsGetQueryError>): UseSuspenseQueryResult<EmployeeFormsGetQueryData, EmployeeFormsGetQueryError>;
export declare function setEmployeeFormsGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: EmployeeFormsGetQueryData): EmployeeFormsGetQueryData | undefined;
export declare function invalidateEmployeeFormsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=employeeFormsGet.d.ts.map