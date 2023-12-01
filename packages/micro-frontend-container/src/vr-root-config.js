import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import microfrontendLayoutAdmin from "./microfrontend-layout-admin.html";

const userHasAdminRole = true;

const router = () => {
  if (userHasAdminRole) {
    return microfrontendLayoutAdmin;
  } else {
    return microfrontendLayout;
  }
};

const routes = constructRoutes(router());
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start({
  urlRerouteOnly: true,
});
