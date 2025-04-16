import { Hooks, Hook } from "./types.js";
import { ClientCredentialsHook } from "./clientcredentials.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
  // with an instance of a hook that implements that specific Hook interface
  // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
  const presetHooks: Array<Hook> = [new ClientCredentialsHook()];

  for (const hook of presetHooks) {
    if ("sdkInit" in hook) {
      hooks.registerSDKInitHook(hook);
    }
    if ("beforeCreateRequest" in hook) {
      hooks.registerBeforeCreateRequestHook(hook);
    }
    if ("beforeRequest" in hook) {
      hooks.registerBeforeRequestHook(hook);
    }
    if ("afterSuccess" in hook) {
      hooks.registerAfterSuccessHook(hook);
    }
    if ("afterError" in hook) {
      hooks.registerAfterErrorHook(hook);
    }
  }
}
