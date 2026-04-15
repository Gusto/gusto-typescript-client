import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { MigrationBlocker } from "./migrationblocker.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { UnprocessableEntityErrorObject1 } from "./unprocessableentityerrorobject1.js";
/**
 * Unprocessable Entity
 */
export type PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody = UnprocessableEntityErrorObject1 | MigrationBlocker;
/** @internal */
export declare const PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody$inboundSchema: z.ZodType<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, z.ZodTypeDef, unknown>;
export declare function putV1PartnerManagedCompaniesCompanyUuidMigrateResponseBodyFromJSON(jsonString: string): SafeParseResult<PutV1PartnerManagedCompaniesCompanyUuidMigrateResponseBody, SDKValidationError>;
//# sourceMappingURL=putv1partnermanagedcompaniescompanyuuidmigrate.d.ts.map