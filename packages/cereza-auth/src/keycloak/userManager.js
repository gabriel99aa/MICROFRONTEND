import { UserManager, WebStorageStateStore } from "oidc-client";

const CLIENT_ID = "web-app-cli";

const getTenant = () => {
  const url = window.location.href;
  if (url.includes("localhost")) return "cereza";
  const tenant = url.split(".")[0].split("//")[1];
  return tenant;
};

const getURL = () => {
  const url = window.location.href;

  if (url.includes("localhost")) {
    return "http://localhost:9000";
  }

  const urlParts = url.split("/");
  if (urlParts.length >= 3) {
    return `${urlParts[0]}//${urlParts[2]}`;
  }

  return url;
};

const config = {
  authority: `https://iam-stage.cereza.dev/realms/${getTenant()}`,
  client_id: CLIENT_ID,
  response_type: "id_token token",
  scope: "openid profile email",
  redirect_uri: `${getURL()}/cereza/auth/callback`,
  post_logout_redirect_uri: `${getURL()}/cereza/auth/sign-in/keycloak`,
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export const userManager = new UserManager({
  ...config,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});
