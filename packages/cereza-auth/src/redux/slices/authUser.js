import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  keycloakProfile: {},
  myKeycloakId: "",
};

export const authUser = createSlice({
  name: "authUser",
  initialState: initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.accessToken = action.payload;
    },
    setKeycloakProfile: (state, action) => {
      state.keycloakProfile = action.payload;
    },
    setMyKeycloakId: (state, action) => {
      state.myKeycloakId = action.payload;
    },
  },
});

export const { setAuthUser, setKeycloakProfile, setMyKeycloakId } =
  authUser.actions;

export const authUserSelect = (state) => state.authUser;

export default authUser.reducer;
