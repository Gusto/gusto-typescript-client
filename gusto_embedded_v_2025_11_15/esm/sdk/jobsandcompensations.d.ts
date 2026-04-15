import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { DeleteV1CompensationsCompensationIdRequest, DeleteV1CompensationsCompensationIdResponse } from "../models/operations/deletev1compensationscompensationid.js";
import { DeleteV1JobsJobIdRequest, DeleteV1JobsJobIdResponse } from "../models/operations/deletev1jobsjobid.js";
import { GetV1CompensationsCompensationIdRequest, GetV1CompensationsCompensationIdResponse } from "../models/operations/getv1compensationscompensationid.js";
import { GetV1EmployeesEmployeeIdJobsRequest, GetV1EmployeesEmployeeIdJobsResponse } from "../models/operations/getv1employeesemployeeidjobs.js";
import { GetV1JobsJobIdRequest, GetV1JobsJobIdResponse } from "../models/operations/getv1jobsjobid.js";
import { GetV1JobsJobIdCompensationsRequest, GetV1JobsJobIdCompensationsResponse } from "../models/operations/getv1jobsjobidcompensations.js";
import { PostV1CompensationsCompensationIdRequest, PostV1CompensationsCompensationIdResponse } from "../models/operations/postv1compensationscompensationid.js";
import { PostV1JobsJobIdRequest, PostV1JobsJobIdResponse } from "../models/operations/postv1jobsjobid.js";
import { PutV1CompensationsCompensationIdRequest, PutV1CompensationsCompensationIdResponse } from "../models/operations/putv1compensationscompensationid.js";
import { PutV1JobsJobIdRequest, PutV1JobsJobIdResponse } from "../models/operations/putv1jobsjobid.js";
export declare class JobsAndCompensations extends ClientSDK {
    /**
     * Create a job
     *
     * @remarks
     * Create a job.
     *
     * scope: `jobs:write`
     */
    createJob(request: PostV1JobsJobIdRequest, options?: RequestOptions): Promise<PostV1JobsJobIdResponse>;
    /**
     * Get jobs for an employee
     *
     * @remarks
     * Get all of the jobs that an employee holds.
     *
     * Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. These fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are returned only when the `compensations:read` scope is included.
     *
     * scope: `jobs:read`
     */
    getJobs(request: GetV1EmployeesEmployeeIdJobsRequest, options?: RequestOptions): Promise<GetV1EmployeesEmployeeIdJobsResponse>;
    /**
     * Get a job
     *
     * @remarks
     * Get a job.
     *
     * Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. These fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are returned only when the `compensations:read` scope is included.
     *
     * scope: `jobs:read`
     */
    getJob(request: GetV1JobsJobIdRequest, options?: RequestOptions): Promise<GetV1JobsJobIdResponse>;
    /**
     * Update a job
     *
     * @remarks
     * Update a job.
     *
     * scope: `jobs:write`
     */
    update(request: PutV1JobsJobIdRequest, options?: RequestOptions): Promise<PutV1JobsJobIdResponse>;
    /**
     * Delete an individual job
     *
     * @remarks
     * Deletes a specific job that an employee holds.
     *
     * scope: `jobs:write`
     */
    delete(request: DeleteV1JobsJobIdRequest, options?: RequestOptions): Promise<DeleteV1JobsJobIdResponse>;
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
     * scope: `compensations:read`
     */
    getCompensations(request: GetV1JobsJobIdCompensationsRequest, options?: RequestOptions): Promise<GetV1JobsJobIdCompensationsResponse>;
    /**
     * Create a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `compensations:write`
     */
    createCompensation(request: PostV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<PostV1CompensationsCompensationIdResponse>;
    /**
     * Get a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `compensations:read`
     */
    getCompensation(request: GetV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<GetV1CompensationsCompensationIdResponse>;
    /**
     * Update a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
     *
     * scope: `compensations:write`
     */
    updateCompensation(request: PutV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<PutV1CompensationsCompensationIdResponse>;
    /**
     * Delete a compensation
     *
     * @remarks
     * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
     *
     * scope: `compensations:write`
     */
    deleteCompensation(request: DeleteV1CompensationsCompensationIdRequest, options?: RequestOptions): Promise<DeleteV1CompensationsCompensationIdResponse>;
}
//# sourceMappingURL=jobsandcompensations.d.ts.map