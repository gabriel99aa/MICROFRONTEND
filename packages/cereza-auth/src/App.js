import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignInKeyCloak, Callback } from "./keycloak";
import { store } from "./redux/store";

export default function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={null}>
          <Router>
            <Routes>
              <Route
                exact
                path={"/cereza/auth/sign-in/keycloak"}
                element={<SignInKeyCloak />}
                key={"keycloak"}
              />
              <Route
                exact
                path={"/cereza/auth/callback"}
                element={<Callback />}
                key={"callback"}
              />
              <Route path="*" element={<Navigate to="/cereza" />} />
            </Routes>
          </Router>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}
