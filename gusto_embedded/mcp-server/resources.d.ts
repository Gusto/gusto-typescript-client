import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { RequestHandlerExtra } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { Variables } from "@modelcontextprotocol/sdk/shared/uriTemplate.js";
import { ReadResourceResult } from "@modelcontextprotocol/sdk/types.js";
import { GustoEmbeddedCore } from "../core.js";
import { Result } from "../types/fp.js";
import { MCPScope } from "./scopes.js";
export type ReadResourceCallback = (client: GustoEmbeddedCore, uri: URL, extra: RequestHandlerExtra) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceDefinition = {
    name: string;
    description: string;
    scopes?: MCPScope[];
    resource: string;
    read: ReadResourceCallback;
};
export type ReadResourceTemplateCallback = (client: GustoEmbeddedCore, uri: URL, vars: Variables, extra: RequestHandlerExtra) => ReadResourceResult | Promise<ReadResourceResult>;
export type ResourceTemplateDefinition = {
    name: string;
    description: string;
    scopes?: MCPScope[];
    resource: ResourceTemplate;
    read: ReadResourceTemplateCallback;
};
export declare function formatResult(result: Result<unknown, Error>, uri: URL, init: {
    response?: Response | undefined;
}): Promise<ReadResourceResult>;
//# sourceMappingURL=resources.d.ts.map