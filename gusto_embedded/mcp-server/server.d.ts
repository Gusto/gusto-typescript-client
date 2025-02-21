import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export declare function createMCPServer(deps: {
    logger: ConsoleLogger;
    scopes?: MCPScope[] | undefined;
    serverURL?: string | undefined;
    server?: SDKOptions["server"];
}): McpServer;
//# sourceMappingURL=server.d.ts.map