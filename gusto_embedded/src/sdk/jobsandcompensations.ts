/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { jobsAndCompensationsCreateCompensation } from "../funcs/jobsAndCompensationsCreateCompensation.js";
import { jobsAndCompensationsCreateJob } from "../funcs/jobsAndCompensationsCreateJob.js";
import { jobsAndCompensationsDelete } from "../funcs/jobsAndCompensationsDelete.js";
import { jobsAndCompensationsDeleteCompensation } from "../funcs/jobsAndCompensationsDeleteCompensation.js";
import { jobsAndCompensationsGetCompensation } from "../funcs/jobsAndCompensationsGetCompensation.js";
import { jobsAndCompensationsGetCompensations } from "../funcs/jobsAndCompensationsGetCompensations.js";
import { jobsAndCompensationsGetJob } from "../funcs/jobsAndCompensationsGetJob.js";
import { jobsAndCompensationsGetJobs } from "../funcs/jobsAndCompensationsGetJobs.js";
import { jobsAndCompensationsUpdate } from "../funcs/jobsAndCompensationsUpdate.js";
import { jobsAndCompensationsUpdateCompensation } from "../funcs/jobsAndCompensationsUpdateCompensation.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  DeleteV1CompensationsCompensationIdRequest,
  DeleteV1CompensationsCompensationIdResponse,
} from "../models/operations/deletev1compensationscompensationid.js";
import {
  DeleteV1JobsJobIdRequest,
  DeleteV1JobsJobIdResponse,
} from "../models/operations/deletev1jobsjobid.js";
import {
  GetV1CompensationsCompensationIdRequest,
  GetV1CompensationsCompensationIdResponse,
} from "../models/operations/getv1compensationscompensationid.js";
import {
  GetV1EmployeesEmployeeIdJobsRequest,
  GetV1EmployeesEmployeeIdJobsResponse,
} from "../models/operations/getv1employeesemployeeidjobs.js";
import {
  GetV1JobsJobIdRequest,
  GetV1JobsJobIdResponse,
} from "../models/operations/getv1jobsjobid.js";
import {
  GetV1JobsJobIdCompensationsRequest,
  GetV1JobsJobIdCompensationsResponse,
} from "../models/operations/getv1jobsjobidcompensations.js";
import {
  PostV1CompensationsCompensationIdRequest,
  PostV1CompensationsCompensationIdResponse,
} from "../models/operations/postv1compensationscompensationid.js";
import {
  PostV1JobsJobIdRequest,
  PostV1JobsJobIdResponse,
} from "../models/operations/postv1jobsjobid.js";
import {
  PutV1CompensationsCompensationIdRequest,
  PutV1CompensationsCompensationIdResponse,
} from "../models/operations/putv1compensationscompensationid.js";
import {
  PutV1JobsJobIdRequest,
  PutV1JobsJobIdResponse,
} from "../models/operations/putv1jobsjobid.js";
import { unwrapAsync } from "../types/fp.js";

export class JobsAndCompensations extends ClientSDK {
  /**
   * Create a job
   *
   * @remarks
   * Create a job.
   *
   * scope: `jobs:write`
   */
  async createJob(
    request: PostV1JobsJobIdRequest,
    options?: RequestOptions,
  ): Promise<PostV1JobsJobIdResponse> {
    return unwrapAsync(jobsAndCompensationsCreateJob(
      this,
      request,
      options,
    ));
  }

  /**
   * Get jobs for an employee
   *
   * @remarks
   * Get all of the jobs that an employee holds.
   *
   * scope: `jobs:read`
   */
  async getJobs(
    request: GetV1EmployeesEmployeeIdJobsRequest,
    options?: RequestOptions,
  ): Promise<GetV1EmployeesEmployeeIdJobsResponse> {
    return unwrapAsync(jobsAndCompensationsGetJobs(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a job
   *
   * @remarks
   * Get a job.
   *
   * scope: `jobs:read`
   */
  async getJob(
    request: GetV1JobsJobIdRequest,
    options?: RequestOptions,
  ): Promise<GetV1JobsJobIdResponse> {
    return unwrapAsync(jobsAndCompensationsGetJob(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a job
   *
   * @remarks
   * Update a job.
   *
   * scope: `jobs:write`
   */
  async update(
    request: PutV1JobsJobIdRequest,
    options?: RequestOptions,
  ): Promise<PutV1JobsJobIdResponse> {
    return unwrapAsync(jobsAndCompensationsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an individual job
   *
   * @remarks
   * Deletes a specific job that an employee holds.
   *
   * scope: `jobs:write`
   */
  async delete(
    request: DeleteV1JobsJobIdRequest,
    options?: RequestOptions,
  ): Promise<DeleteV1JobsJobIdResponse> {
    return unwrapAsync(jobsAndCompensationsDelete(
      this,
      request,
      options,
    ));
  }

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
  async getCompensations(
    request: GetV1JobsJobIdCompensationsRequest,
    options?: RequestOptions,
  ): Promise<GetV1JobsJobIdCompensationsResponse> {
    return unwrapAsync(jobsAndCompensationsGetCompensations(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a compensation
   *
   * @remarks
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
   *
   * scope: `jobs:write`
   */
  async createCompensation(
    request: PostV1CompensationsCompensationIdRequest,
    options?: RequestOptions,
  ): Promise<PostV1CompensationsCompensationIdResponse> {
    return unwrapAsync(jobsAndCompensationsCreateCompensation(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a compensation
   *
   * @remarks
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
   *
   * scope: `jobs:read`
   */
  async getCompensation(
    request: GetV1CompensationsCompensationIdRequest,
    options?: RequestOptions,
  ): Promise<GetV1CompensationsCompensationIdResponse> {
    return unwrapAsync(jobsAndCompensationsGetCompensation(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a compensation
   *
   * @remarks
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
   *
   * scope: `jobs:write`
   */
  async updateCompensation(
    request: PutV1CompensationsCompensationIdRequest,
    options?: RequestOptions,
  ): Promise<PutV1CompensationsCompensationIdResponse> {
    return unwrapAsync(jobsAndCompensationsUpdateCompensation(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a compensation
   *
   * @remarks
   * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
   *
   * scope: `jobs:write`
   */
  async deleteCompensation(
    request: DeleteV1CompensationsCompensationIdRequest,
    options?: RequestOptions,
  ): Promise<DeleteV1CompensationsCompensationIdResponse> {
    return unwrapAsync(jobsAndCompensationsDeleteCompensation(
      this,
      request,
      options,
    ));
  }
}
