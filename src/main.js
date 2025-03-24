import { ErrorPage, MainPage, ProfilePage, LoginPage } from "./containers";
import { getStoreValue } from "./utils/local-storage";

const App = () => {
  const path = window.location.pathname;

  if (path === "/") {
    return MainPage();
  } else if (path === "/profile") {
    return getStoreValue("isLoggedIn") ? ProfilePage() : LoginPage();
  } else if (path === "/login") {
    return LoginPage();
  }

  return ErrorPage();
};

const root = document.getElementById("root");

root.innerHTML = App();

window.addEventListener("popstate", () => {
  root.innerHTML = App();
});
