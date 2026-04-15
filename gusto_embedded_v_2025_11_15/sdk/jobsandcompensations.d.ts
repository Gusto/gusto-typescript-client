import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class JobsAndCompensations extends ClientSDK {
    /**
     * Create a job
     *
     * @remarks
     * Create a job.
     *
     * scope: `jobs:write`
     */
    createJob(request: operations.PostV1JobsJobIdRequest, options?: RequestOptions): Promise<operations.PostV1JobsJobIdResponse>;
    /**
     * Get jobs for an employee
     *
     * @remarks
     * Get all of the jobs that an employee holds.
     *
     * scope: `jobs:read`
     */
    getJobs(request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: RequestOptions): Promise<operations.GetV1EmployeesEmployeeIdJobsResponse>;
    /**
     * Get a job
     *
     * @remarks
     * Get a job.
     *
     * scope: `jobs:read`
     */
    getJob(request: operations.GetV1JobsJobIdRequest, options?: RequestOptions): Promise<operations.GetV1JobsJobIdResponse>;
    /**
     * Update a job
     *
     * @remarks
     * Update a job.
     *
     * scope: `jobs:write`
     */
    update(request: operations.PutV1JobsJobIdRequest, options?: RequestOptions): Promise<operations.PutV1JobsJobIdResponse>;
    /**
     * Delete an individual job
     *
     * @remarks
     * Deletes a specific job that an employee holds.
     *
     * scope: `jobs:write`
     */
    delete(request: operations.DeleteV1JobsJobIdRequest, options?: RequestOptions): Promise<operations.DeleteV1JobsJobIdResponse>;
    /**
     * Get compensations for a job
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.
     *
     * Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.
     *
     * Use `flsa_status` to determine if an employee is eligible for overtime.
     *
     * scope: `jobs:read`
     */
    getCompensations(request: operations.GetV1JobsJobIdCompensationsRequest, options?: RequestOptions): Promise<operations.GetV1JobsJobIdCompensationsResponse>;
    /**
     * Create a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `jobs:write`
     */
    createCompensation(request: operations.PostV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<operations.PostV1CompensationsCompensationIdResponse>;
    /**
     * Get a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `jobs:read`
     */
    getCompensation(request: operations.GetV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<operations.GetV1CompensationsCompensationIdResponse>;
    /**
     * Update a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `jobs:write`
     */
    updateCompensation(request: operations.PutV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<operations.PutV1CompensationsCompensationIdResponse>;
    /**
     * Delete a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
     *
     * scope: `jobs:write`
     */
    deleteCompensation(request: operations.DeleteV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<operations.DeleteV1CompensationsCompensationIdResponse>;
}
//# sourceMappingURL=jobsandcompensations.d.ts.map