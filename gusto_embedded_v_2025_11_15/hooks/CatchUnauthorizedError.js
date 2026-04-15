"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchUnauthorizedError = void 0;
class CatchUnauthorizedError {
    afterError(hookCtx, response, error) {
        console.log("------------ CatchUnauthorizedError ------------");
        console.log(hookCtx);
        console.log(response);
        console.log(error);
        return { response, error };
    }
}
exports.CatchUnauthorizedError = CatchUnauthorizedError;
//# sourceMappingURL=CatchUnauthorizedError.js.map