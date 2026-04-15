import { AfterErrorContext, AfterErrorHook, BeforeRequestContext, BeforeRequestHook, SDKInitHook, SDKInitOptions } from "./types.js";
export declare class ClientCredentialsHook implements SDKInitHook, BeforeRequestHook, AfterErrorHook {
    private baseURL?;
    private client?;
    private sessions;
    sdkInit(opts: SDKInitOptions): SDKInitOptions;
    beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request>;
    afterError(hookCtx: AfterErrorContext, response: Response | null, error: unknown): Promise<{
        response: Response | null;
        error: unknown;
    }>;
    private doTokenRequest;
    private getCredentials;
    private getSessionKey;
    private hasRequiredScopes;
    private getScopes;
    private hasTokenExpired;
}
//# sourceMappingURL=clientcredentials.d.ts.map