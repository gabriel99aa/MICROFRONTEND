import { userManager } from "./userManager";

export const SignOutKeyCloak = () => {
  userManager
    .signoutRedirect()
    .then(() => {
      sessionStorage.clear();
      localStorage.clear();
    })
    .catch((error) => {
      console.error("Failed to authenticate", error);
    });
};
