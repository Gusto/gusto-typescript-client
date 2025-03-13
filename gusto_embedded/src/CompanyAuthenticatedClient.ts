import { TokenRefreshOptions, withTokenRefresh } from "./companyAuth.js";
import { GustoEmbeddedCore } from "./core.js";
import { SDKOptions, ServerDemo, ServerList } from "./lib/config.js";

type ClientArguments = {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  options: TokenRefreshOptions & SDKOptions;
};

export function CompanyAuthenticatedClient({
  clientId,
  clientSecret,
  accessToken,
  refreshToken,
  expiresIn,
  options,
}: ClientArguments) {
  const authUrl = constructAuthUrl(options);

  return new GustoEmbeddedCore({
    ...options,
    companyAccessAuth: withTokenRefresh(
      clientId,
      clientSecret,
      accessToken,
      refreshToken,
      expiresIn,
      {
        ...options,
        url: authUrl,
      }
    ),
  });
}

function constructAuthUrl(
  options: TokenRefreshOptions & Pick<SDKOptions, "server" | "serverURL">
) {
  const { server, serverURL, url } = options;

  if (server) {
    const baseUrl = ServerList[server] || "";
    return `${baseUrl}/oauth/token`;
  }

  if (serverURL) {
    return `${serverURL}/oauth/token`;
  }

  if (url) {
    return url;
  }

  return `${ServerList[ServerDemo]}/oauth/token`;
}
