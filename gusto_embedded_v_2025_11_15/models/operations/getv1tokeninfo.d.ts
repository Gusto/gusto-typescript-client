import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetV1TokenInfoRequest = {
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
/**
 * Information about the token resource.
 */
export type Resource = {
    /**
     * Type of object
     */
    type: string;
    /**
     * UUID of object
     */
    uuid: string;
};
export declare const GetV1TokenInfoType: {
    readonly CompanyAdmin: "CompanyAdmin";
    readonly Employee: "Employee";
    readonly Contractor: "Contractor";
};
export type GetV1TokenInfoType = ClosedEnum<typeof GetV1TokenInfoType>;
/**
 * Information about the token owner
 */
export type ResourceOwner = {
    type: GetV1TokenInfoType;
    /**
     * UUID of resource owner
     */
    uuid: string;
};
/**
 * Example response
 */
export type GetV1TokenInfoResponseBody = {
    /**
     * Space delimited string of accessible scopes.
     */
    scope: string;
    /**
     * Information about the token resource.
     */
    resource: Resource | null;
    /**
     * Information about the token owner
     */
    resourceOwner: ResourceOwner | null;
};
export type GetV1TokenInfoResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Example response
     */
    object?: GetV1TokenInfoResponseBody | undefined;
};
/** @internal */
export declare const GetV1TokenInfoRequest$inboundSchema: z.ZodType<GetV1TokenInfoRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1TokenInfoRequest$Outbound = {
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetV1TokenInfoRequest$outboundSchema: z.ZodType<GetV1TokenInfoRequest$Outbound, z.ZodTypeDef, GetV1TokenInfoRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TokenInfoRequest$ {
    /** @deprecated use `GetV1TokenInfoRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1TokenInfoRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1TokenInfoRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1TokenInfoRequest$Outbound, z.ZodTypeDef, GetV1TokenInfoRequest>;
    /** @deprecated use `GetV1TokenInfoRequest$Outbound` instead. */
    type Outbound = GetV1TokenInfoRequest$Outbound;
}
export declare function getV1TokenInfoRequestToJSON(getV1TokenInfoRequest: GetV1TokenInfoRequest): string;
export declare function getV1TokenInfoRequestFromJSON(jsonString: string): SafeParseResult<GetV1TokenInfoRequest, SDKValidationError>;
/** @internal */
export declare const Resource$inboundSchema: z.ZodType<Resource, z.ZodTypeDef, unknown>;
/** @internal */
export type Resource$Outbound = {
    type: string;
    uuid: string;
};
/** @internal */
export declare const Resource$outboundSchema: z.ZodType<Resource$Outbound, z.ZodTypeDef, Resource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Resource$ {
    /** @deprecated use `Resource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Resource, z.ZodTypeDef, unknown>;
    /** @deprecated use `Resource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Resource$Outbound, z.ZodTypeDef, Resource>;
    /** @deprecated use `Resource$Outbound` instead. */
    type Outbound = Resource$Outbound;
}
export declare function resourceToJSON(resource: Resource): string;
export declare function resourceFromJSON(jsonString: string): SafeParseResult<Resource, SDKValidationError>;
/** @internal */
export declare const GetV1TokenInfoType$inboundSchema: z.ZodNativeEnum<typeof GetV1TokenInfoType>;
/** @internal */
export declare const GetV1TokenInfoType$outboundSchema: z.ZodNativeEnum<typeof GetV1TokenInfoType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TokenInfoType$ {
    /** @deprecated use `GetV1TokenInfoType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly CompanyAdmin: "CompanyAdmin";
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
    /** @deprecated use `GetV1TokenInfoType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly CompanyAdmin: "CompanyAdmin";
        readonly Employee: "Employee";
        readonly Contractor: "Contractor";
    }>;
}
/** @internal */
export declare const ResourceOwner$inboundSchema: z.ZodType<ResourceOwner, z.ZodTypeDef, unknown>;
/** @internal */
export type ResourceOwner$Outbound = {
    type: string;
    uuid: string;
};
/** @internal */
export declare const ResourceOwner$outboundSchema: z.ZodType<ResourceOwner$Outbound, z.ZodTypeDef, ResourceOwner>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResourceOwner$ {
    /** @deprecated use `ResourceOwner$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResourceOwner, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResourceOwner$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResourceOwner$Outbound, z.ZodTypeDef, ResourceOwner>;
    /** @deprecated use `ResourceOwner$Outbound` instead. */
    type Outbound = ResourceOwner$Outbound;
}
export declare function resourceOwnerToJSON(resourceOwner: ResourceOwner): string;
export declare function resourceOwnerFromJSON(jsonString: string): SafeParseResult<ResourceOwner, SDKValidationError>;
/** @internal */
export declare const GetV1TokenInfoResponseBody$inboundSchema: z.ZodType<GetV1TokenInfoResponseBody, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1TokenInfoResponseBody$Outbound = {
    scope: string;
    resource: Resource$Outbound | null;
    resource_owner: ResourceOwner$Outbound | null;
};
/** @internal */
export declare const GetV1TokenInfoResponseBody$outboundSchema: z.ZodType<GetV1TokenInfoResponseBody$Outbound, z.ZodTypeDef, GetV1TokenInfoResponseBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TokenInfoResponseBody$ {
    /** @deprecated use `GetV1TokenInfoResponseBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1TokenInfoResponseBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1TokenInfoResponseBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1TokenInfoResponseBody$Outbound, z.ZodTypeDef, GetV1TokenInfoResponseBody>;
    /** @deprecated use `GetV1TokenInfoResponseBody$Outbound` instead. */
    type Outbound = GetV1TokenInfoResponseBody$Outbound;
}
export declare function getV1TokenInfoResponseBodyToJSON(getV1TokenInfoResponseBody: GetV1TokenInfoResponseBody): string;
export declare function getV1TokenInfoResponseBodyFromJSON(jsonString: string): SafeParseResult<GetV1TokenInfoResponseBody, SDKValidationError>;
/** @internal */
export declare const GetV1TokenInfoResponse$inboundSchema: z.ZodType<GetV1TokenInfoResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetV1TokenInfoResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    object?: GetV1TokenInfoResponseBody$Outbound | undefined;
};
/** @internal */
export declare const GetV1TokenInfoResponse$outboundSchema: z.ZodType<GetV1TokenInfoResponse$Outbound, z.ZodTypeDef, GetV1TokenInfoResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetV1TokenInfoResponse$ {
    /** @deprecated use `GetV1TokenInfoResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetV1TokenInfoResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetV1TokenInfoResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetV1TokenInfoResponse$Outbound, z.ZodTypeDef, GetV1TokenInfoResponse>;
    /** @deprecated use `GetV1TokenInfoResponse$Outbound` instead. */
    type Outbound = GetV1TokenInfoResponse$Outbound;
}
export declare function getV1TokenInfoResponseToJSON(getV1TokenInfoResponse: GetV1TokenInfoResponse): string;
export declare function getV1TokenInfoResponseFromJSON(jsonString: string): SafeParseResult<GetV1TokenInfoResponse, SDKValidationError>;
//# sourceMappingURL=getv1tokeninfo.d.ts.map