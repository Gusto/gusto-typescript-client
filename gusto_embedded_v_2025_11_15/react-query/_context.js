"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GustoEmbeddedProvider = GustoEmbeddedProvider;
exports.useGustoEmbeddedContext = useGustoEmbeddedContext;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const GustoEmbeddedContext = react_1.default.createContext(null);
function GustoEmbeddedProvider(props) {
    return ((0, jsx_runtime_1.jsx)(GustoEmbeddedContext.Provider, { value: props.client, children: props.children }));
}
function useGustoEmbeddedContext() {
    const value = react_1.default.useContext(GustoEmbeddedContext);
    if (value === null) {
        throw new Error("SDK not initialized. Create an instance of GustoEmbeddedCore and pass it to <GustoEmbeddedProvider />.");
    }
    return value;
}
//# sourceMappingURL=_context.js.map