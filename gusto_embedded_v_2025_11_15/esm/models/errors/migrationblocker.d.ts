import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { GustoEmbeddedError } from "./gustoembeddederror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
export type Metadata = {
    /**
     * A categorization of the migration blocker, e.g. "migrated_company"
     */
    key?: string | undefined;
};
export type MigrationBlockerErrors = {
    /**
     * Error key
     */
    errorKey?: string | undefined;
    /**
     * Error category
     */
    category?: string | undefined;
    /**
     * Blocker message
     */
    message?: string | undefined;
    metadata?: Metadata | undefined;
};
/**
 * Migration blocker that blocks company migration
 */
export type MigrationBlockerData = {
    errors?: Array<MigrationBlockerErrors> | undefined;
    httpMeta: HTTPMetadata;
};
/**
 * Migration blocker that blocks company migration
 */
export declare class MigrationBlocker extends GustoEmbeddedError {
    errors?: Array<MigrationBlockerErrors> | undefined;
    /** The original data that was passed to this error instance. */
    data$: MigrationBlockerData;
    constructor(err: MigrationBlockerData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown>;
export declare function metadataFromJSON(jsonString: string): SafeParseResult<Metadata, SDKValidationError>;
/** @internal */
export declare const MigrationBlockerErrors$inboundSchema: z.ZodType<MigrationBlockerErrors, z.ZodTypeDef, unknown>;
export declare function migrationBlockerErrorsFromJSON(jsonString: string): SafeParseResult<MigrationBlockerErrors, SDKValidationError>;
/** @internal */
export declare const MigrationBlocker$inboundSchema: z.ZodType<MigrationBlocker, z.ZodTypeDef, unknown>;
//# sourceMappingURL=migrationblocker.d.ts.map