import { AfterErrorHook, AfterErrorContext } from "./types";
export declare class CatchUnauthorizedError implements AfterErrorHook {
    afterError(hookCtx: AfterErrorContext, response: Response | null, error: unknown): {
        response: Response | null;
        error: unknown;
    };
}
//# sourceMappingURL=CatchUnauthorizedError.d.ts.map