/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationsCreate } from "../funcs/locationsCreate.js";
import { locationsGet } from "../funcs/locationsGet.js";
import { locationsGetMinimumWages } from "../funcs/locationsGetMinimumWages.js";
import { locationsList } from "../funcs/locationsList.js";
import { locationsUpdate } from "../funcs/locationsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Locations extends ClientSDK {
  /**
   * Create a company location
   *
   * @remarks
   * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
   *
   * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
   *
   * scope: `companies:write`
   */
  async create(
    request: operations.PostV1CompaniesCompanyIdLocationsRequest,
    options?: RequestOptions,
  ): Promise<components.Location> {
    return unwrapAsync(locationsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get company locations
   *
   * @remarks
   * Company locations represent all addresses associated with a company. These can be filing addresses, mailing addresses, and/or work locations; one address may serve multiple, or all, purposes.
   *
   * Since all company locations are subsets of locations, retrieving or updating an individual record should be done via the locations endpoints.
   *
   * scope: `companies:read`
   */
  async list(
    request: operations.GetV1CompaniesCompanyIdLocationsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Location>> {
    return unwrapAsync(locationsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a location
   *
   * @remarks
   * Get a location.
   *
   * scope: `companies:read`
   */
  async get(
    request: operations.GetV1LocationsLocationIdRequest,
    options?: RequestOptions,
  ): Promise<components.Location> {
    return unwrapAsync(locationsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a location
   *
   * @remarks
   * Update a location.
   *
   * scope: `companies.write`
   */
  async update(
    request: operations.PutV1LocationsLocationIdRequest,
    options?: RequestOptions,
  ): Promise<components.Location> {
    return unwrapAsync(locationsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get minimum wages for a location
   *
   * @remarks
   * Get minimum wages for a location
   *
   * scope: `companies:read`
   */
  async getMinimumWages(
    request: operations.GetV1LocationsLocationUuidMinimumWagesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.MinimumWage>> {
    return unwrapAsync(locationsGetMinimumWages(
      this,
      request,
      options,
    ));
  }
}
