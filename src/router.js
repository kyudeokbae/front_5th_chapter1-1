import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./containers";
import { ROUTE } from "./shared/route";
import { getStoreValue } from "./utils/local-storage";

const routes = {
  [ROUTE.main]: () => MainPage(),
  [ROUTE.login]: () => {
    if (getStoreValue("isLoggedIn")) {
      window.history.pushState({}, "", ROUTE.main);
      return MainPage();
    }
    return LoginPage();
  },
  [ROUTE.profile]: () => {
    if (!getStoreValue("isLoggedIn")) {
      window.history.pushState({}, "", ROUTE.login);
      return LoginPage();
    }
    return ProfilePage();
  },
  [ROUTE.error]: () => ErrorPage(),
};

const getPath = () => {
  const path = window.location.pathname;
  const hashPath = window.location.hash?.slice(1);

  return hashPath || path;
};

export const getHtmlByPath = () => {
  const path = getPath();
  const router = routes[path] || routes[ROUTE.error];

  return router();
};
