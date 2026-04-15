import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type GetEventsSecurity = {
    systemAccessAuth: string;
};
export type GetEventsRequest = {
    /**
     * A cursor for pagination. Returns all events occuring after the specified UUID (exclusive). Events are sorted according to the provided sort_order param.
     */
    startingAfterUuid?: string | undefined;
    /**
     * The UUID of the company. If not specified, will return all events for all companies.
     */
    resourceUuid?: string | undefined;
    /**
     * Limits the number of objects returned in a single response, between 1 and 100. The default is 25
     */
    limit?: string | undefined;
    /**
     * A string containing the exact event name (e.g. `employee.created`), or use a wildcard match to filter for a group of events (e.g. `employee.*`, `*.created`, `notification.*.created` etc.)
     */
    eventType?: string | undefined;
    /**
     * A string indicating whether to sort resulting events in ascending (asc) or descending (desc) chronological order. Events are sorted by their `timestamp`. Defaults to asc if left empty.
     */
    sortOrder?: components.SortOrder | undefined;
    /**
     * Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used.
     */
    xGustoAPIVersion?: components.VersionHeader | undefined;
};
export type GetEventsResponse = {
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
    eventList?: Array<components.Event> | undefined;
};
/** @internal */
export declare const GetEventsSecurity$inboundSchema: z.ZodType<GetEventsSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEventsSecurity$Outbound = {
    SystemAccessAuth: string;
};
/** @internal */
export declare const GetEventsSecurity$outboundSchema: z.ZodType<GetEventsSecurity$Outbound, z.ZodTypeDef, GetEventsSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEventsSecurity$ {
    /** @deprecated use `GetEventsSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEventsSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEventsSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEventsSecurity$Outbound, z.ZodTypeDef, GetEventsSecurity>;
    /** @deprecated use `GetEventsSecurity$Outbound` instead. */
    type Outbound = GetEventsSecurity$Outbound;
}
export declare function getEventsSecurityToJSON(getEventsSecurity: GetEventsSecurity): string;
export declare function getEventsSecurityFromJSON(jsonString: string): SafeParseResult<GetEventsSecurity, SDKValidationError>;
/** @internal */
export declare const GetEventsRequest$inboundSchema: z.ZodType<GetEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEventsRequest$Outbound = {
    starting_after_uuid?: string | undefined;
    resource_uuid?: string | undefined;
    limit?: string | undefined;
    event_type?: string | undefined;
    sort_order?: string | undefined;
    "X-Gusto-API-Version": string;
};
/** @internal */
export declare const GetEventsRequest$outboundSchema: z.ZodType<GetEventsRequest$Outbound, z.ZodTypeDef, GetEventsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEventsRequest$ {
    /** @deprecated use `GetEventsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEventsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEventsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEventsRequest$Outbound, z.ZodTypeDef, GetEventsRequest>;
    /** @deprecated use `GetEventsRequest$Outbound` instead. */
    type Outbound = GetEventsRequest$Outbound;
}
export declare function getEventsRequestToJSON(getEventsRequest: GetEventsRequest): string;
export declare function getEventsRequestFromJSON(jsonString: string): SafeParseResult<GetEventsRequest, SDKValidationError>;
/** @internal */
export declare const GetEventsResponse$inboundSchema: z.ZodType<GetEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetEventsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "Event-List"?: Array<components.Event$Outbound> | undefined;
};
/** @internal */
export declare const GetEventsResponse$outboundSchema: z.ZodType<GetEventsResponse$Outbound, z.ZodTypeDef, GetEventsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetEventsResponse$ {
    /** @deprecated use `GetEventsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetEventsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetEventsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetEventsResponse$Outbound, z.ZodTypeDef, GetEventsResponse>;
    /** @deprecated use `GetEventsResponse$Outbound` instead. */
    type Outbound = GetEventsResponse$Outbound;
}
export declare function getEventsResponseToJSON(getEventsResponse: GetEventsResponse): string;
export declare function getEventsResponseFromJSON(jsonString: string): SafeParseResult<GetEventsResponse, SDKValidationError>;
//# sourceMappingURL=getevents.d.ts.map