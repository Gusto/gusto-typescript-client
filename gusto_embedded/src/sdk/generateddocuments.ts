/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { generatedDocumentsGet } from "../funcs/generatedDocumentsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class GeneratedDocuments extends ClientSDK {
  /**
   * Get a generated document
   *
   * @remarks
   * Get a document given the request_uuid. The response will include the generation request's status and urls to the document. A list of urls is returned as certain document types require several urls.
   *
   * scope: `generated_documents:read`
   */
  async get(
    request: operations.GetV1GeneratedDocumentsDocumentTypeRequestUuidRequest,
    options?: RequestOptions,
  ): Promise<components.GeneratedDocument> {
    return unwrapAsync(generatedDocumentsGet(
      this,
      request,
      options,
    ));
  }
}
