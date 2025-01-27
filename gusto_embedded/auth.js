"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTokenStore = void 0;
exports.withAuthorization = withAuthorization;
const z = __importStar(require("zod"));
const config_1 = require("./lib/config");
// TypeScript SDKs use Zod for runtime data validation. We can use Zod
// to describe the shape of the response from the OAuth token endpoint. If the
// response is valid, Speakeasy can safely access the token and its expiration time.
const tokenResponseSchema = z.object({
    access_token: z.string(),
    expires_in: z.number().positive(),
});
// This is a rough value that adjusts when we consider an access token to be
// expired. It accounts for clock drift between the client and server
// and slow or unreliable networks.
const tolerance = 5 * 60 * 1000;
/**
 * A callback function that can be used to obtain an OAuth access token for use
 * with SDKs that require OAuth security. A new token is requested from the
 * OAuth provider when the current token has expired.
 */
function withAuthorization(clientID, clientSecret, options = {}) {
    const { tokenStore = new InMemoryTokenStore(), 
    // Replace this with your default OAuth provider's access token endpoint.
    url = "https://api.gusto-demo.com/oauth/token", } = options;
    return async () => {
        const session = await tokenStore.get();
        // Return the current token if it has not expired yet.
        if (session && session.expires > Date.now()) {
            return session.token;
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    // Include the SDK's user agent in the request so requests can be
                    // tracked using observability infrastructure.
                    "user-agent": config_1.SDK_METADATA.userAgent,
                },
                body: new URLSearchParams({
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: "system_access",
                }),
            });
            if (!response.ok) {
                throw new Error("Unexpected status code: " + response.status);
            }
            const json = await response.json();
            const data = tokenResponseSchema.parse(json);
            await tokenStore.set(data.access_token, Date.now() + data.expires_in * 1000 - tolerance);
            return data.access_token;
        }
        catch (error) {
            throw new Error("Failed to obtain OAuth token: " + error);
        }
    };
}
/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
class InMemoryTokenStore {
    constructor() {
        this.token = "";
        this.expires = Date.now();
    }
    async get() {
        return { token: this.token, expires: this.expires };
    }
    async set(token, expires) {
        this.token = token;
        this.expires = expires;
    }
}
exports.InMemoryTokenStore = InMemoryTokenStore;
//# sourceMappingURL=auth.js.map