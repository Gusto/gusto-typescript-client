import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1ContractorFormPdfRequest } from "../models/operations/getv1contractorformpdf.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildContractorFormsGetPdfQuery, ContractorFormsGetPdfQueryData, prefetchContractorFormsGetPdf, queryKeyContractorFormsGetPdf } from "./contractorFormsGetPdf.core.js";
export { buildContractorFormsGetPdfQuery, type ContractorFormsGetPdfQueryData, prefetchContractorFormsGetPdf, queryKeyContractorFormsGetPdf, };
export type ContractorFormsGetPdfQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get the contractor form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetPdf(request: GetV1ContractorFormPdfRequest, options?: QueryHookOptions<ContractorFormsGetPdfQueryData, ContractorFormsGetPdfQueryError>): UseQueryResult<ContractorFormsGetPdfQueryData, ContractorFormsGetPdfQueryError>;
/**
 * Get the contractor form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetPdfSuspense(request: GetV1ContractorFormPdfRequest, options?: SuspenseQueryHookOptions<ContractorFormsGetPdfQueryData, ContractorFormsGetPdfQueryError>): UseSuspenseQueryResult<ContractorFormsGetPdfQueryData, ContractorFormsGetPdfQueryError>;
export declare function setContractorFormsGetPdfData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: ContractorFormsGetPdfQueryData): ContractorFormsGetPdfQueryData | undefined;
export declare function invalidateContractorFormsGetPdf(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorFormsGetPdf(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=contractorFormsGetPdf.d.ts.map