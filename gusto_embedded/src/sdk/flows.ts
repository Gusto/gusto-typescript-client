/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { flowsCreate } from "../funcs/flowsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  PostV1CompanyFlowsRequest,
  PostV1CompanyFlowsResponse,
} from "../models/operations/postv1companyflows.js";
import { unwrapAsync } from "../types/fp.js";

export class Flows extends ClientSDK {
  /**
   * Create a flow
   *
   * @remarks
   * Generate a link to access a pre-built workflow in Gusto white-label UI. For security, all generated flows will expire within 1 hour of inactivity or 24 hours from creation time, whichever comes first.
   *
   * scope: `flows:write`
   */
  async create(
    request: PostV1CompanyFlowsRequest,
    options?: RequestOptions,
  ): Promise<PostV1CompanyFlowsResponse> {
    return unwrapAsync(flowsCreate(
      this,
      request,
      options,
    ));
  }
}
