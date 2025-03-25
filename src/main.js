import { ErrorPage, MainPage, ProfilePage, LoginPage } from "./containers";
import { ROUTE } from "./shared/route";
import { getStoreValue } from "./utils/local-storage";

const App = () => {
  const path = window.location.pathname;

  switch (path) {
    case ROUTE.main:
      return MainPage();
    case ROUTE.profile:
      return getStoreValue("isLoggedIn") ? ProfilePage() : LoginPage();
    case ROUTE.login:
      return LoginPage();
    default:
      return ErrorPage();
  }
};

const root = document.getElementById("root");

root.innerHTML = App();

window.addEventListener("popstate", () => {
  root.innerHTML = App();
});
