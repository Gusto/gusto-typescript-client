"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureRefreshedTokenHook = void 0;
class CaptureRefreshedTokenHook {
    beforeRequest(hookCtx, request) {
        console.log("------------ CaptureRefreshedTokenHook ------------");
        console.log(hookCtx);
        console.log(request);
        return request;
    }
}
exports.CaptureRefreshedTokenHook = CaptureRefreshedTokenHook;
//# sourceMappingURL=CaptureRefreshedTokenHook.js.map