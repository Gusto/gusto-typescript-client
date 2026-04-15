import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
 */
export declare const EntityType: {
    readonly Company: "Company";
    readonly Employee: "Employee";
};
/**
 * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
 */
export type EntityType = ClosedEnum<typeof EntityType>;
export type PostV1CompanyFlowsRequestBody = {
    /**
     * flow type
     */
    flowType: string;
    /**
     * UUID of the target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
     */
    entityUuid?: string | undefined;
    /**
     * the type of target entity applicable to the flow. This field is optional for company flows, please refer to the flow_types table above for more details.
     */
    entityType?: EntityType | undefined;
};
export type PostV1CompanyFlowsRequest = {
    /**
     * The UUID of the company
     */
    companyUuid: string;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
    requestBody: PostV1CompanyFlowsRequestBody;
};
export type PostV1CompanyFlowsResponse = {
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
    flow?: components.Flow | undefined;
};
/** @internal */
export declare const EntityType$inboundSchema: z.ZodNativeEnum<typeof EntityType>;
/** @internal */
export declare const EntityType$outboundSchema: z.ZodNativeEnum<typeof EntityType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityType$ {
    /** @deprecated use `EntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
        readonly Employee: "Employee";
    }>;
    /** @deprecated use `EntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Company: "Company";
        readonly Employee: "Employee";
    }>;
}
/** @internal */
export declare const PostV1CompanyFlowsRequestBody$inboundSchema: z.ZodType<PostV1CompanyFlowsRequestBody, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanyFlowsRequestBody$Outbound = {
    flow_type: string;
    entity_uuid?: string | undefined;
    entity_type?: string | undefined;
};
/** @internal */
export declare const PostV1CompanyFlowsRequestBody$outboundSchema: z.ZodType<PostV1CompanyFlowsRequestBody$Outbound, z.ZodTypeDef, PostV1CompanyFlowsRequestBody>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanyFlowsRequestBody$ {
    /** @deprecated use `PostV1CompanyFlowsRequestBody$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanyFlowsRequestBody, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanyFlowsRequestBody$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanyFlowsRequestBody$Outbound, z.ZodTypeDef, PostV1CompanyFlowsRequestBody>;
    /** @deprecated use `PostV1CompanyFlowsRequestBody$Outbound` instead. */
    type Outbound = PostV1CompanyFlowsRequestBody$Outbound;
}
export declare function postV1CompanyFlowsRequestBodyToJSON(postV1CompanyFlowsRequestBody: PostV1CompanyFlowsRequestBody): string;
export declare function postV1CompanyFlowsRequestBodyFromJSON(jsonString: string): SafeParseResult<PostV1CompanyFlowsRequestBody, SDKValidationError>;
/** @internal */
export declare const PostV1CompanyFlowsRequest$inboundSchema: z.ZodType<PostV1CompanyFlowsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanyFlowsRequest$Outbound = {
    company_uuid: string;
    "X-Gusto-API-Version": string;
    RequestBody: PostV1CompanyFlowsRequestBody$Outbound;
};
/** @internal */
export declare const PostV1CompanyFlowsRequest$outboundSchema: z.ZodType<PostV1CompanyFlowsRequest$Outbound, z.ZodTypeDef, PostV1CompanyFlowsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanyFlowsRequest$ {
    /** @deprecated use `PostV1CompanyFlowsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanyFlowsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanyFlowsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanyFlowsRequest$Outbound, z.ZodTypeDef, PostV1CompanyFlowsRequest>;
    /** @deprecated use `PostV1CompanyFlowsRequest$Outbound` instead. */
    type Outbound = PostV1CompanyFlowsRequest$Outbound;
}
export declare function postV1CompanyFlowsRequestToJSON(postV1CompanyFlowsRequest: PostV1CompanyFlowsRequest): string;
export declare function postV1CompanyFlowsRequestFromJSON(jsonString: string): SafeParseResult<PostV1CompanyFlowsRequest, SDKValidationError>;
/** @internal */
export declare const PostV1CompanyFlowsResponse$inboundSchema: z.ZodType<PostV1CompanyFlowsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PostV1CompanyFlowsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Flow?: components.Flow$Outbound | undefined;
};
/** @internal */
export declare const PostV1CompanyFlowsResponse$outboundSchema: z.ZodType<PostV1CompanyFlowsResponse$Outbound, z.ZodTypeDef, PostV1CompanyFlowsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PostV1CompanyFlowsResponse$ {
    /** @deprecated use `PostV1CompanyFlowsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PostV1CompanyFlowsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PostV1CompanyFlowsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PostV1CompanyFlowsResponse$Outbound, z.ZodTypeDef, PostV1CompanyFlowsResponse>;
    /** @deprecated use `PostV1CompanyFlowsResponse$Outbound` instead. */
    type Outbound = PostV1CompanyFlowsResponse$Outbound;
}
export declare function postV1CompanyFlowsResponseToJSON(postV1CompanyFlowsResponse: PostV1CompanyFlowsResponse): string;
export declare function postV1CompanyFlowsResponseFromJSON(jsonString: string): SafeParseResult<PostV1CompanyFlowsResponse, SDKValidationError>;
//# sourceMappingURL=postv1companyflows.d.ts.map