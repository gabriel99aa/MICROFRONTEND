import { userManager } from "./userManager";

const refreshToken = async () => {
  try {
    let user = await userManager.getUser();
    if (user && !user.expired) {
      return user.access_token;
    }

    let newUser = await userManager.signinSilent();
    return newUser.access_token;
  } catch (err) {
    return null;
  }
};

export default refreshToken;
