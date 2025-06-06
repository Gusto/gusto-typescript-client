/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { informationRequestsGetInformationRequests } from "../funcs/informationRequestsGetInformationRequests.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  GetInformationRequestsRequest,
  GetInformationRequestsResponse,
} from "../models/operations/getinformationrequests.js";
import { unwrapAsync } from "../types/fp.js";

export class InformationRequests extends ClientSDK {
  /**
   * Get all information requests for a company
   *
   * @remarks
   * Fetch all information requests for a company.
   *
   * scope: `information_requests:read`
   */
  async getInformationRequests(
    request: GetInformationRequestsRequest,
    options?: RequestOptions,
  ): Promise<GetInformationRequestsResponse> {
    return unwrapAsync(informationRequestsGetInformationRequests(
      this,
      request,
      options,
    ));
  }
}
