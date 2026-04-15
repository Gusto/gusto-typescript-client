import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Demo
 */
export declare const ServerDemo = "demo";
/**
 * Prod
 */
export declare const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: {
    readonly demo: "https://api.gusto-demo.com";
    readonly prod: "https://api.gusto.com";
};
export type SDKOptions = {
    companyAccessAuth?: string | (() => Promise<string>) | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList | undefined;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string | undefined;
    /**
     * Allows overriding the default user agent used by the SDK
     */
    userAgent?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "2026-02-01";
    readonly sdkVersion: "0.13.0";
    readonly genVersion: "2.869.10";
    readonly userAgent: "speakeasy-sdk/typescript 0.13.0 2.869.10 2026-02-01 @gusto/embedded-api";
};
//# sourceMappingURL=config.d.ts.map