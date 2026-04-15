import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { HTTPMetadata } from "../components/httpmetadata.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export declare const DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion: {
    readonly TwoThousandAndTwentySixMinus02Minus01: "2026-02-01";
};
/**
 * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
 */
export type DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion = ClosedEnum<typeof DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion>;
export type DeleteV1WorkAddressesWorkAddressUuidRequest = {
    /**
     * The UUID of the work address
     */
    workAddressUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion | undefined;
};
export type DeleteV1WorkAddressesWorkAddressUuidResponse = {
    httpMeta: HTTPMetadata;
};
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion$outboundSchema: z.ZodNativeEnum<typeof DeleteV1WorkAddressesWorkAddressUuidHeaderXGustoAPIVersion>;
/** @internal */
export type DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound = {
    work_address_uuid: string;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidRequest$outboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidRequest$Outbound, z.ZodTypeDef, DeleteV1WorkAddressesWorkAddressUuidRequest>;
export declare function deleteV1WorkAddressesWorkAddressUuidRequestToJSON(deleteV1WorkAddressesWorkAddressUuidRequest: DeleteV1WorkAddressesWorkAddressUuidRequest): string;
/** @internal */
export declare const DeleteV1WorkAddressesWorkAddressUuidResponse$inboundSchema: z.ZodType<DeleteV1WorkAddressesWorkAddressUuidResponse, z.ZodTypeDef, unknown>;
export declare function deleteV1WorkAddressesWorkAddressUuidResponseFromJSON(jsonString: string): SafeParseResult<DeleteV1WorkAddressesWorkAddressUuidResponse, SDKValidationError>;
//# sourceMappingURL=deletev1workaddressesworkaddressuuid.d.ts.map