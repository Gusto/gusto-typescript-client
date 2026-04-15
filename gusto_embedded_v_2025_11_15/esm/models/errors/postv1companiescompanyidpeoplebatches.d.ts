import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { GustoEmbeddedError } from "./gustoembeddederror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type PostV1CompaniesCompanyIdPeopleBatchesMetadata = {
    entityUuid?: string | undefined;
    entityType?: string | undefined;
};
export type PostV1CompaniesCompanyIdPeopleBatchesErrors = {
    errorKey?: string | undefined;
    category?: string | undefined;
    message?: string | undefined;
    metadata?: PostV1CompaniesCompanyIdPeopleBatchesMetadata | undefined;
};
/**
 * conflict - idempotency key already used
 */
export type PostV1CompaniesCompanyIdPeopleBatchesResponseBodyData = {
    errors?: Array<PostV1CompaniesCompanyIdPeopleBatchesErrors> | undefined;
    httpMeta: HTTPMetadata;
};
/**
 * conflict - idempotency key already used
 */
export declare class PostV1CompaniesCompanyIdPeopleBatchesResponseBody extends GustoEmbeddedError {
    errors?: Array<PostV1CompaniesCompanyIdPeopleBatchesErrors> | undefined;
    /** The original data that was passed to this error instance. */
    data$: PostV1CompaniesCompanyIdPeopleBatchesResponseBodyData;
    constructor(err: PostV1CompaniesCompanyIdPeopleBatchesResponseBodyData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const PostV1CompaniesCompanyIdPeopleBatchesMetadata$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPeopleBatchesMetadata, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdPeopleBatchesMetadataFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPeopleBatchesMetadata, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPeopleBatchesErrors$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPeopleBatchesErrors, z.ZodTypeDef, unknown>;
export declare function postV1CompaniesCompanyIdPeopleBatchesErrorsFromJSON(jsonString: string): SafeParseResult<PostV1CompaniesCompanyIdPeopleBatchesErrors, SDKValidationError>;
/** @internal */
export declare const PostV1CompaniesCompanyIdPeopleBatchesResponseBody$inboundSchema: z.ZodType<PostV1CompaniesCompanyIdPeopleBatchesResponseBody, z.ZodTypeDef, unknown>;
//# sourceMappingURL=postv1companiescompanyidpeoplebatches.d.ts.map