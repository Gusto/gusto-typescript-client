/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventsGet } from "../funcs/eventsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Events extends ClientSDK {
  /**
   * Get all events
   *
   * @remarks
   * Fetch all events, going back up to 30 days, that your partner application has the required scopes for. Note that a partner does NOT have to have verified webhook subscriptions in order to utilize this endpoint.
   *
   * > 📘 System Access Authentication
   * >
   * > This endpoint uses the [Bearer Auth scheme with the system-level access token in the HTTP Authorization header](https://docs.gusto.com/embedded-payroll/docs/system-access).
   *
   * scope: `events:read`
   */
  async get(
    security: operations.GetEventsSecurity,
    request: operations.GetEventsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Event>> {
    return unwrapAsync(eventsGet(
      this,
      security,
      request,
      options,
    ));
  }
}
