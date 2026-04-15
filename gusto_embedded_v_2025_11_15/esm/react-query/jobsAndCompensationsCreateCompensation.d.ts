import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1CompensationsCompensationIdRequest, PostV1CompensationsCompensationIdResponse } from "../models/operations/postv1compensationscompensationid.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsCreateCompensationMutationVariables = {
    request: PostV1CompensationsCompensationIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsCreateCompensationMutationData = PostV1CompensationsCompensationIdResponse;
export type JobsAndCompensationsCreateCompensationMutationError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Create a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `compensations:write`
 */
export declare function useJobsAndCompensationsCreateCompensationMutation(options?: MutationHookOptions<JobsAndCompensationsCreateCompensationMutationData, JobsAndCompensationsCreateCompensationMutationError, JobsAndCompensationsCreateCompensationMutationVariables>): UseMutationResult<JobsAndCompensationsCreateCompensationMutationData, JobsAndCompensationsCreateCompensationMutationError, JobsAndCompensationsCreateCompensationMutationVariables>;
export declare function mutationKeyJobsAndCompensationsCreateCompensation(): MutationKey;
export declare function buildJobsAndCompensationsCreateCompensationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsCreateCompensationMutationVariables) => Promise<JobsAndCompensationsCreateCompensationMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsCreateCompensation.d.ts.map